import React from 'react';
import { BsList } from 'react-icons/bs';
import { FaDollarSign, FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { NavLink } from 'react-router';

const AdminStatistics = () => {
    return (
        <div className="space-y-8">
                <div>
                   <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Admin Overview</h1>
                   <p className="text-slate-500 dark:text-slate-400">System performance and user management.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-blue-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase">Total Users</h3>
                                {/* <p className="text-3xl font-bold text-slate-900 dark:text-white">{totalUsers}</p> */}
                            </div>
                            <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                                <FaUserSecret size={24} />
                            </div>
                        </div>
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-amber-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase">Total Disbursed</h3>
                                {/* <p className="text-3xl font-bold text-slate-900 dark:text-white">${totalValue.toLocaleString()}</p> */}
                            </div>
                            <div className="p-3 bg-amber-100 dark:bg-amber-900 rounded-full text-amber-600 dark:text-amber-300">
                                <FaDollarSign size={24} />
                            </div>
                        </div>
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border-l-4 border-green-500">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-slate-500 dark:text-slate-400 text-sm font-medium uppercase">Pending Apps</h3>
                                {/* <p className="text-3xl font-bold text-slate-900 dark:text-white">{activeApps}</p> */}
                            </div>
                            <div className="p-3 bg-green-100 dark:bg-green-900 rounded-full text-green-600 dark:text-green-300">
                                <FiFileText size={24} />
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Admin Quick Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <NavLink to="/dashboard/all-loan" className="p-6 bg-indigo-50 dark:bg-slate-800 rounded-xl border border-indigo-100 dark:border-slate-700 hover:shadow-md transition-all flex items-center gap-4 group">
                        <div className="p-4 bg-indigo-500 text-white rounded-lg group-hover:bg-indigo-600 transition-colors">
                            <BsList size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">Manage All Loans</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">View, edit, or delete any loan in the system.</p>
                        </div>
                    </NavLink>
                    <NavLink to="/dashboard/loan-applications" className="p-6 bg-purple-50 dark:bg-slate-800 rounded-xl border border-purple-100 dark:border-slate-700 hover:shadow-md transition-all flex items-center gap-4 group">
                        <div className="p-4 bg-purple-500 text-white rounded-lg group-hover:bg-purple-600 transition-colors">
                            <FiFileText size={24} />
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-slate-900 dark:text-white">All Applications</h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">Review status of all borrower applications.</p>
                        </div>
                    </NavLink>
                </div>

                {/* Admin User Management Table */}
                <div className="pt-4">
                     {/* <AdminDashboard /> */}
                </div>
            </div>
    );
};

export default AdminStatistics;