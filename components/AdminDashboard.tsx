import React, { useState, useEffect } from 'react';
import { User, PrizeClaim } from '../types';
import { userService } from '../services/userService';

const AdminDashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [claims, setClaims] = useState<PrizeClaim[]>([]);
    const [activeTab, setActiveTab] = useState<'users' | 'claims'>('users');
    const [isLoading, setIsLoading] = useState(true);

    // Edit User State
    const [editingUserId, setEditingUserId] = useState<string | null>(null);
    const [newPassword, setNewPassword] = useState('');

    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        setIsLoading(true);
        const [fetchedUsers, fetchedClaims] = await Promise.all([
            userService.getAllUsers(),
            userService.getAllPrizeClaims()
        ]);
        setUsers(fetchedUsers);
        setClaims(fetchedClaims);
        setIsLoading(false);
    };

    const handleBlockUser = async (user: User) => {
        const updatedUser = { ...user, isBlocked: !user.isBlocked };
        await userService.updateUser(updatedUser);
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
    };

    const handleDeleteUser = async (userId: string) => {
        if (confirm('Are you sure you want to delete this user? This action cannot be undone.')) {
            await userService.deleteUser(userId);
            setUsers(users.filter(u => u.id !== userId));
        }
    };

    const handleUpdatePassword = async (user: User) => {
        if (!newPassword.trim()) return;
        const updatedUser = { ...user, password: newPassword };
        await userService.updateUser(updatedUser);
        setUsers(users.map(u => u.id === user.id ? updatedUser : u));
        setEditingUserId(null);
        setNewPassword('');
        alert(`Password for ${user.username} updated.`);
    };

    if (isLoading) {
        return <div className="text-center p-8 text-[var(--color-text)]">Loading Dashboard...</div>;
    }

    return (
        <div className="w-full max-w-6xl mx-auto p-6 bg-[var(--color-bg)] text-[var(--color-text)] min-h-screen">
            <div className="flex justify-between items-center mb-8 border-b-2 border-[var(--color-primary)] pb-4">
                <h1 className="text-3xl font-bold font-serif text-[var(--color-primary)]">Admin Dashboard</h1>
                <div className="space-x-4">
                    <button
                        onClick={() => setActiveTab('users')}
                        className={`px-4 py-2 font-bold transition-colors ${activeTab === 'users' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                    >
                        Users Management
                    </button>
                    <button
                        onClick={() => setActiveTab('claims')}
                        className={`px-4 py-2 font-bold transition-colors ${activeTab === 'claims' ? 'bg-[var(--color-primary)] text-[var(--color-bg)]' : 'text-[var(--color-text-muted)] hover:text-[var(--color-text)]'}`}
                    >
                        Prize Claims
                    </button>
                </div>
            </div>

            {activeTab === 'users' && (
                <div className="overflow-x-auto bg-[var(--color-secondary)] rounded-sm shadow-md">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-bg)]">
                                <th className="p-4">Username</th>
                                <th className="p-4">Email</th>
                                <th className="p-4">Provider</th>
                                <th className="p-4">Coins</th>
                                <th className="p-4">Status</th>
                                <th className="p-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg)]/50">
                                    <td className="p-4 font-mono">{user.username} {user.id.startsWith('admin') && '👑'}</td>
                                    <td className="p-4 text-sm text-[var(--color-text-muted)]">{user.email || '-'}</td>
                                    <td className="p-4 text-xs uppercase">{user.provider || 'local'}</td>
                                    <td className="p-4 font-bold text-[var(--color-primary)]">{user.coins}</td>
                                    <td className="p-4">
                                        {user.isBlocked ? (
                                            <span className="px-2 py-1 bg-red-500/20 text-red-700 text-xs font-bold rounded-full">BLOCKED</span>
                                        ) : (
                                            <span className="px-2 py-1 bg-green-500/20 text-green-700 text-xs font-bold rounded-full">ACTIVE</span>
                                        )}
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-wrap gap-2">
                                            <button
                                                onClick={() => handleBlockUser(user)}
                                                className={`text-xs px-3 py-1 border border-[var(--color-border)] rounded-sm transition-colors ${user.isBlocked ? 'bg-green-100 hover:bg-green-200 text-green-800' : 'bg-yellow-100 hover:bg-yellow-200 text-yellow-800'}`}
                                            >
                                                {user.isBlocked ? 'Unblock' : 'Block'}
                                            </button>
                                            <button
                                                onClick={() => handleDeleteUser(user.id)}
                                                className="text-xs px-3 py-1 bg-red-100 hover:bg-red-200 text-red-800 border border-red-200 rounded-sm"
                                            >
                                                Delete
                                            </button>

                                            {editingUserId === user.id ? (
                                                <div className="flex items-center gap-2 mt-2 w-full">
                                                    <input
                                                        type="text"
                                                        placeholder="New Pass"
                                                        value={newPassword}
                                                        onChange={(e) => setNewPassword(e.target.value)}
                                                        className="w-24 px-2 py-1 text-xs border rounded bg-white text-black"
                                                    />
                                                    <button onClick={() => handleUpdatePassword(user)} className="text-xs bg-blue-500 text-white px-2 py-1 rounded">Save</button>
                                                    <button onClick={() => setEditingUserId(null)} className="text-xs text-gray-500 underline">Cancel</button>
                                                </div>
                                            ) : (
                                                <button
                                                    onClick={() => { setEditingUserId(user.id); setNewPassword(''); }}
                                                    className="text-xs px-3 py-1 bg-blue-100 hover:bg-blue-200 text-blue-800 border border-blue-200 rounded-sm"
                                                >
                                                    Edit Pass
                                                </button>
                                            )}
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'claims' && (
                <div className="overflow-x-auto bg-[var(--color-secondary)] rounded-sm shadow-md">
                    {claims.length === 0 ? (
                        <div className="p-8 text-center text-[var(--color-text-muted)] italic">No prize claims found.</div>
                    ) : (
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-bg)]">
                                    <th className="p-4">Date</th>
                                    <th className="p-4">Username</th>
                                    <th className="p-4">Prize</th>
                                    <th className="p-4">Amount</th>
                                    <th className="p-4">UPI ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {claims.map((claim) => (
                                    <tr key={claim.id} className="border-b border-[var(--color-border)] hover:bg-[var(--color-bg)]/50">
                                        <td className="p-4 text-sm font-mono">{new Date(claim.date).toLocaleDateString()}</td>
                                        <td className="p-4 font-bold">{claim.username}</td>
                                        <td className="p-4">{claim.prizeName}</td>
                                        <td className="p-4 font-bold text-green-700">₹{claim.prizeAmount}</td>
                                        <td className="p-4 font-mono bg-white/50">{claim.upiId}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            )}
        </div>
    );
};

export default AdminDashboard;
