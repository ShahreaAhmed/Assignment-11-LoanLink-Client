import axios from 'axios';
import React from 'react';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import AllApplicationCard from '../../../components/Dashboard/TableRowsCard/AllApplicationCard';
import LoadingSpinner from '../../../components/Shared/LoadinSpinner/LoadingSpinner';

const LoanApplications = () => {
    const {user} = useAuth()

     const {
        data: allApply = [],
        isLoading,
      } = useQuery({
        queryKey: ["all-apply", user?.email],
        queryFn: async () => {
          const result = await axios(
            `${import.meta.env.VITE_API_URL}/apply-loans`
          );
          return result.data;
        },
    });
    console.log(allApply)

    if(isLoading) <LoadingSpinner></LoadingSpinner>

    return (
        <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">All Loan Applications</h1>
        <p className="text-slate-500 dark:text-slate-400">Review all borrower requests across the system.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 mb-6 flex items-center gap-4">
          {/* <Filter className="text-gray-400" /> */}
          <span className="font-medium text-slate-700 dark:text-slate-300">Filter by Status:</span>
          <select 
            className="border-gray-300 dark:border-slate-600 rounded-md shadow-sm focus:border-amber-500 focus:ring-amber-500 dark:bg-slate-800 dark:text-white"
            // value={statusFilter}
            // onChange={(e) => setStatusFilter(e.target.value as ApplicationStatus | 'All')}
          >
              <option value="All">All Applications</option>
              {/* <option value={ApplicationStatus.PENDING}>Pending</option>
              <option value={ApplicationStatus.APPROVED}>Approved</option>
              <option value={ApplicationStatus.REJECTED}>Rejected</option> */}
          </select>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Loan ID</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Borrower</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category / Amount</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
                {allApply.map(apply => (
                    <AllApplicationCard key={apply._id} apply={apply}></AllApplicationCard>
                ))}
            </tbody>
        </table>
      </div>
    </div>
    );
};

export default LoanApplications;