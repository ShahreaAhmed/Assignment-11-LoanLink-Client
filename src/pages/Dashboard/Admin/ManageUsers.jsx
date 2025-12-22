import React from 'react';
import { BsChevronLeft, BsChevronRight, BsSearch } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';

const ManageUsers = () => {
    return (
        <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Manage Users</h1>
        <p className="text-slate-500 dark:text-slate-400">View and update user roles or account status.</p>
      </div>

      {/* Search Bar */}
      <div className="mb-6 relative max-w-md">
          <BsSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
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
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Name</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Email</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Role</th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-right text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
              {/* {currentUsers.map(u => ( */}
                <tr  className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                {/* key={u.id} */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      {/* <img src={u.photoUrl} alt="" className="w-8 h-8 rounded-full border border-gray-200 dark:border-slate-700" /> */}
                      {/* <span className="text-sm font-semibold text-slate-900 dark:text-white">{u.name}</span> */}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">
                    {/* {u.email} */} email
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* <span className={`px-2.5 py-1 text-xs font-bold rounded-full capitalize ${
                      u.role === UserRole.ADMIN ? 'bg-purple-100 text-purple-700' : 
                      u.role === UserRole.MANAGER ? 'bg-blue-100 text-blue-700' : 
                      'bg-slate-100 text-slate-700'
                    }`}>
                      {u.role}
                    </span> */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {/* <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      u.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {u.status === 'active' ? 'Active' : 'Suspended'}
                    </span> */}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                    //   onClick={() => openUpdateModal(u)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-all text-xs font-bold shadow-sm"
                    >
                      <FaUserCog size={14} /> Update
                    </button>
                  </td>
                </tr>
              {/* ))}
              {currentUsers.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">No users found matching "{searchTerm}"</td>
                </tr>
              )} */}
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