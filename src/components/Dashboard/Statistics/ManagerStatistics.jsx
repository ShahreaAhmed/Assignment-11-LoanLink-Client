import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { BsCheckSquare, BsClock, BsList, BsPlusCircle } from 'react-icons/bs';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router';

const ManagerStatistics = () => {

    const {user} = useAuth();

    return (
       <div className="space-y-8">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 p-8 rounded-2xl text-white">
                   <h1 className="text-3xl font-bold mb-2">Welcome Back, {user.displayName}!</h1>
                   <p className="text-slate-300">Here is your daily overview. You have 
                    {/* <span className="text-amber-500 font-bold">{pendingApps} pending</span>  */}
                    applications to review.</p>
                </div>

                {/* Quick Action Cards - As requested */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Link to="/dashboard/add-loan" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-amber-500 dark:hover:border-amber-500 transition-all group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg text-amber-600 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                                <BsPlusCircle size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Add Loan</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Create new loan packages with custom EMI plans and interest rates.</p>
                    </Link>

                    <Link to="/dashboard/manage-loans" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-amber-500 dark:hover:border-amber-500 transition-all group">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                <BsList size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Manage Loans</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Update existing loans, change interest rates, or remove packages.</p>
                    </Link>

                    <Link to="/dashboard/pending-loans" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-amber-500 dark:hover:border-amber-500 transition-all group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white transition-colors">
                                <BsClock size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Pending Apps</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Review borrower applications. Approve or reject based on criteria.</p>
                    </Link>

                    <Link to="/dashboard/approved-loans" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-amber-500 dark:hover:border-amber-500 transition-all group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                                <BsCheckSquare size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">Approved Apps</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">View history of all sanctioned loans and disbursement details.</p>
                    </Link>

                    <Link to="/dashboard/profile" className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 hover:shadow-md hover:border-amber-500 dark:hover:border-amber-500 transition-all group">
                         <div className="flex items-center gap-4 mb-4">
                            <div className="p-3 bg-purple-100 dark:bg-purple-900/30 rounded-lg text-purple-600 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                                <FaUser size={28} />
                            </div>
                            <h3 className="font-bold text-xl text-slate-900 dark:text-white">My Profile</h3>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-sm">Update your account information and security settings.</p>
                    </Link>
                </div>

                {/* Stats Summary */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-4">
                    <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-slate-500 text-xs uppercase font-bold">Total Products</p>
                        {/* <p className="text-2xl font-bold text-slate-900 dark:text-white">{myLoans.length}</p> */}
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-slate-500 text-xs uppercase font-bold">Pending Review</p>
                        {/* <p className="text-2xl font-bold text-amber-600">{pendingApps}</p> */}
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-slate-500 text-xs uppercase font-bold">Approved Loans</p>
                        {/* <p className="text-2xl font-bold text-green-600">{approvedApps}</p> */}
                    </div>
                     <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-gray-200 dark:border-slate-700 text-center">
                        <p className="text-slate-500 text-xs uppercase font-bold">Value Disbursed</p>
                        {/* <p className="text-2xl font-bold text-slate-900 dark:text-white">${totalValue.toLocaleString()}</p> */}
                    </div>
                </div>
            </div>
    );
};

export default ManagerStatistics;