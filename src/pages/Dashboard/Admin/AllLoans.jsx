import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import LoadingSpinner from '../../../components/Shared/LoadinSpinner/LoadingSpinner';
import AllApplicationCard from '../../../components/Dashboard/TableRowsCard/AllApplicationCard';
import CreatedAllLoanCard from '../../../components/Dashboard/TableRowsCard/CreatedAllLoanCard';

const AllLoans = () => {

    const {data: allLoan= [], isLoading} = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans`)
            return result.data
        }
    })
    console.log(allLoan)

     if (isLoading) <LoadingSpinner></LoadingSpinner>
    return (
        <div>
       <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
           <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
               {/* {isAdmin ? 'All Loans (Admin)' : 'Manage My Loans'} */}
           </h1>
           <p className="text-slate-500 dark:text-slate-400">
               {/* {isAdmin ? 'Manage all loans in the system and control homepage visibility.' : 'Update and track your created financial products.'} */}
           </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 mb-6 flex flex-col md:flex-row gap-4">
         <div className="relative flex-1">
            <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input 
                type="text" 
                placeholder="Search by title or category..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-slate-600 rounded-lg focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                // value={searchTerm}
                // onChange={e => setSearchTerm(e.target.value)}
            />
         </div>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
                <thead className="bg-gray-50 dark:bg-slate-800">
                    <tr>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Loan Details</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Interest Rate</th>
                        <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Max Amount</th>
                        
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Show On Home</th>
 
                        <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
                    {allLoan.length > 0 ? (
                        allLoan.map((loan) => (
                            <CreatedAllLoanCard key={loan._id} loan={loan}></CreatedAllLoanCard>
                        ))
                    ) : ( 
                        <tr>
                            <td 
                            // colSpan={isAdmin ? 5 : 4} className="px-6 py-12 text-center text-slate-500"
                            >
                                No loans found matching your search.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
      </div>
    );
};

export default AllLoans;