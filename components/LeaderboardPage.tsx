import React, { useEffect, useState } from 'react';
import { User } from '../types';
import Avatar from './Avatar';
import CoinIcon from './icons/CoinIcon';
import { userService } from '../services/userService';

interface LeaderboardPageProps {
    currentUser: User | null;
    onBack?: () => void;
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ currentUser, onBack }) => {
    const [sortedUsers, setSortedUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            setIsLoading(true);
            const users = await userService.getAllUsers();
            const sorted = [...users]
                .filter(u => !u.isGuest)
                .sort((a, b) => (b.bestWpm || 0) - (a.bestWpm || 0));
            setSortedUsers(sorted);
            setIsLoading(false);
        };
        fetchLeaderboard();
    }, []);

    return (
        <div className="w-full max-w-4xl flex flex-col items-center gap-8 relative">
            {onBack && (
                <button
                    onClick={onBack}
                    className="self-start md:absolute md:left-0 md:top-2 text-[var(--color-primary)] hover:underline font-semibold flex items-center gap-1 mb-4 md:mb-0"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                    </svg>
                    Back to Login
                </button>
            )}
            <h1 className="text-4xl font-bold text-[var(--color-primary)]">Leaderboard</h1>
            <div className="w-full bg-[var(--color-secondary)]/50 p-6 rounded-sm border-2 border-[var(--color-border)] space-y-4 min-h-[300px]">
                <div className="flex items-center justify-between px-4 pb-2 border-b-2 border-[var(--color-border)] text-[var(--color-text-muted)] font-bold text-sm uppercase tracking-wider">
                    <div className="flex items-center gap-4">
                        <span className="w-10 text-center">Rank</span>
                        <span>User</span>
                    </div>
                    <div className="flex items-center gap-6 mr-4">
                        <span className="w-20 text-center hidden sm:block">Coins</span>
                        <span className="w-20 text-right">Best WPM</span>
                    </div>
                </div>

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center p-12 gap-4">
                        <div className="w-12 h-12 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin"></div>
                        <p className="text-[var(--color-text-muted)] animate-pulse">Loading global scores...</p>
                    </div>
                ) : sortedUsers.length > 0 ? (
                    sortedUsers.map((user, index) => {
                        const isCurrentUser = currentUser && user.id === currentUser.id;
                        const rank = index + 1;
                        let rankColor = '';
                        if (rank === 1) rankColor = 'text-yellow-500';
                        else if (rank === 2) rankColor = 'text-gray-500';
                        else if (rank === 3) rankColor = 'text-yellow-700';

                        return (
                            <div key={user.id} className={`flex items-center justify-between p-4 rounded-sm transition-colors ${isCurrentUser ? 'bg-[var(--color-primary)]/30 border-2 border-[var(--color-primary)]' : 'bg-[var(--color-bg)] border border-transparent hover:bg-[var(--color-bg)]/80'}`}>
                                <div className="flex items-center gap-4 min-w-0">
                                    <span className={`text-2xl font-bold w-10 flex-shrink-0 text-center ${rankColor}`}>{rank}</span>
                                    <Avatar avatarKey={user.profilePic} className="w-12 h-12 rounded-full flex-shrink-0" />
                                    <div className="flex flex-col min-w-0">
                                        <span className="text-lg font-semibold text-[var(--color-text)] truncate">{user.username}</span>
                                        {isCurrentUser && <span className="text-xs text-[var(--color-primary)] font-bold uppercase tracking-wider">You</span>}
                                    </div>
                                </div>
                                <div className="flex items-center gap-6 ml-4">
                                    <div className="hidden sm:flex items-center gap-2 w-20 justify-center" title="Coins">
                                        <CoinIcon className="w-5 h-5" />
                                        <span className="text-xl font-bold text-[var(--color-text)]">{user.coins || 0}</span>
                                    </div>
                                    <div className="text-right w-20 flex-shrink-0">
                                        <p className="text-2xl font-bold text-[var(--color-text)]">{user.bestWpm || 0}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-center text-[var(--color-text-muted)] py-8">No users on the leaderboard yet. Start typing to get ranked!</p>
                )}
            </div>
        </div>
    );
};

export default LeaderboardPage;