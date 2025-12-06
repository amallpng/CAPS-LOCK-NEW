import { supabase } from './supabaseClient';
import { User } from '../types';

const TABLE_NAME = 'users_public';

// Helper to check if Supabase is configured
const isSupabaseConfigured = () => {
    return import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY;
};

export const userService = {
    /**
     * Fetch all users for the leaderboard.
     * Tries Supabase first, falls back to localStorage.
     */
    async getAllUsers(): Promise<User[]> {
        if (isSupabaseConfigured()) {
            const { data, error } = await supabase
                .from(TABLE_NAME)
                .select('*')
                .order('bestWpm', { ascending: false });

            if (error) {
                console.error('Error fetching users from Supabase:', error);
                // Fallback to local on error? Maybe simpler to just return empty or local
                return this.getLocalUsers();
            }
            return (data as unknown as User[]) || [];
        }
        return this.getLocalUsers();
    },



    /**
     * Attempt to login a user by username and password.
     */
    async login(username: string, pin: string): Promise<User | null> {
        // 1. Try Local Storage first (fastest)
        const localUsers = this.getLocalUsers();
        const localUser = localUsers.find(u => u.username === username && u.password === pin);
        if (localUser) return localUser;

        // 2. Try Supabase
        if (isSupabaseConfigured()) {
            const { data, error } = await supabase
                .from(TABLE_NAME)
                .select('*')
                .eq('username', username)
                .eq('password', pin) // Note: In a real app, never query password plain text. This is for the requested simple auth.
                .single();

            if (data) {
                const user = data as unknown as User;
                // Cache it locally so subsequent loads work offline/faster
                this.saveLocalUser(user);
                return user;
            }
        }

        return null;
    },

    /**
     * Register a new user.
     */
    async register(user: User): Promise<{ success: boolean; message?: string }> {
        // Check local duplicates
        const localUsers = this.getLocalUsers();
        if (localUsers.some(u => u.username === user.username)) {
            return { success: false, message: 'Username already taken (locally).' };
        }

        // Check remote duplicates
        if (isSupabaseConfigured()) {
            const { data } = await supabase
                .from(TABLE_NAME)
                .select('id')
                .eq('username', user.username)
                .maybeSingle();

            if (data) {
                return { success: false, message: 'Username already taken (globally).' };
            }
        }

        // Create
        await this.syncUser(user);
        return { success: true };
    },

    // --- Local Storage Helpers ---

    getLocalUsers(): User[] {
        try {
            return JSON.parse(localStorage.getItem('users') || '[]');
        } catch (e) {
            console.error('Error parsing local users:', e);
            return [];
        }
    },

    saveLocalUser(updatedUser: User) {
        const users = this.getLocalUsers();
        const index = users.findIndex(u => u.id === updatedUser.id);
        if (index !== -1) {
            users[index] = updatedUser;
        } else {
            users.push(updatedUser);
        }
        localStorage.setItem('users', JSON.stringify(users));

        // Also update loggedInUserId if it matches
        // (App handles state, this just handles persistence)
    },

    async syncUser(user: User): Promise<void> {
        // 1. Save Local
        this.saveLocalUser(user);

        // 2. Sync to Supabase
        if (isSupabaseConfigured()) {
            const payload = {
                id: user.id,
                username: user.username,
                password: user.password,
                coins: user.coins,
                bestWpm: user.bestWpm,
                profilePic: user.profilePic,
                streak: user.streak
            };

            const { error } = await supabase
                .from(TABLE_NAME)
                .upsert(payload, { onConflict: 'id' });

            if (error) {
                console.error('Error syncing user to Supabase:', error);
            }
        }
    },

    /**
     * Subscribe to real-time updates for the leaderboard.
     * Returns an unsubscribe function.
     */
    subscribeToLeaderboard(onUpdate: () => void): (() => void) | null {
        if (!isSupabaseConfigured()) return null;

        const channel = supabase
            .channel('leaderboard_changes')
            .on(
                'postgres_changes',
                {
                    event: '*',
                    schema: 'public',
                    table: TABLE_NAME
                },
                () => {
                    onUpdate();
                }
            )
            .subscribe();

        return () => {
            supabase.removeChannel(channel);
        };
    }
};
