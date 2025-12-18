import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadinSpinner/LoadingSpinner";
import ManagerAddLoanCard from "../../../components/Dashboard/TableRowsCard/ManagerAddLoanCard";

const ManageLoans = () => {
//   const {
//     data: loans = [],
//     isLoading,
//     isError,
//   } = useQuery({
//     queryKey: ["loans"],
//     queryFn: async () => {
//       const result = await axios(`${import.meta.env.VITE_API_URL}/loans`);
//       return result.data;
//     },
//   });
//   const { image, title, interest } = loans;
//   console.log(loans);

const {user} = useAuth();

  const {
    data: managerCreated = [], isLoading,} = useQuery({
    queryKey: ["manageLoans", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/manage-loans/${user?.email}`
      );
      return result.data;
    },
});

if (isLoading) return <LoadingSpinner></LoadingSpinner>

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
            {/* {isAdmin ? 'All Loans (Admin)' : 'Manage My Loans'} */}
          </h1>
          <p className="text-slate-500 dark:text-slate-400">
            {/* {isAdmin ? 'Manage all loans in the system and control homepage visibility.' : 'Update and track your created financial products.'} */}
          </p>
        </div>
        {/* {!isAdmin && ( */}
        <Link
          to="/dashboard/add-loan"
          className="bg-amber-500 text-slate-900 px-5 py-2.5 rounded-lg font-bold hover:bg-amber-600 transition-colors shadow-sm"
        >
          + Add New Loan
        </Link>
        {/* )} */}
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <BsSearch
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={20}
          />
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
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Loan Details
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Interest Rate
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Max Amount
                </th>
                {/* {isAdmin && (
                            <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Show On Home</th>
                        )} */}
                <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
           {managerCreated.length > 0 ? (managerCreated.map(created => (
            <ManagerAddLoanCard key={created._id} created={created}></ManagerAddLoanCard>
           ))) : (
<tr>
                <td className="px-6 py-12 text-center text-slate-500">
                  No loans found matching your search.
                </td>
              </tr>
           )}
           


           
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageLoans;
