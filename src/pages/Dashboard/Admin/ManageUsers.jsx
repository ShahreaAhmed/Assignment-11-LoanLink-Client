import React, { useState } from "react";
import { BsChevronLeft, BsChevronRight, BsSearch } from "react-icons/bs";
import ManageUsersCard from "../../../components/Dashboard/TableRowsCard/ManageUsersCard";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Shared/LoadinSpinner/LoadingSpinner";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  //   const [selectedUser, setSelectedUser] = useState(null);
  // const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: manageUsers = [], isLoading, refetch } = useQuery({
    queryKey: ["manage-users", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(`/all-user`);
      return result.data;
    },
  });
  console.log(manageUsers);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Manage Users
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          View and update user roles or account status.
        </p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative max-w-md">
        <BsSearch
          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
          size={20}
        />
        <input
          type="text"
          placeholder="Search by name or email..."
          className="w-full pl-10 pr-4 py-2.5 border border-gray-300 dark:border-slate-600 rounded-xl focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white shadow-sm"
          // value={searchTerm}
          // onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
        />
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
            <thead className="bg-gray-50 dark:bg-slate-800/50">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Email
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
                {manageUsers.map((user) => (
              <ManageUsersCard key={user?._id} user={user} refetch={refetch}></ManageUsersCard>
            ))}
            </tbody>
          </table>
        </div>

        {/* Pagination Controls */}
        <div className="px-6 py-4 flex items-center justify-between border-t border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/30">
          <div className="text-sm text-slate-500 font-medium">
            Showing
            {/* <span className="text-slate-900 dark:text-white">{indexOfFirstItem + 1}-{Math.min(indexOfLastItem, filteredUsers.length)}</span> of <span className="text-slate-900 dark:text-white">{filteredUsers.length}</span> */}
            users
          </div>
          <div className="flex gap-2">
            <button
              // onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              // disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <BsChevronLeft size={18} className="dark:text-white" />
            </button>
            <button
              // onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              // disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-gray-300 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
              <BsChevronRight size={18} className="dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
