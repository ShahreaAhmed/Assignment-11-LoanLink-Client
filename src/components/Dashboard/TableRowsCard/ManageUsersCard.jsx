import React, { useState } from 'react';
import { FaUserCog } from 'react-icons/fa';
import ManageUpdateUserModal from '../../Modal/ManageUpdateUserModal';

const ManageUsersCard = ({user, refetch}) => {
    let [isOpen, setIsOpen] = useState(false)
    const closeModal = () => setIsOpen(false)

    const {name, image, email, role, status} = user

    return (
        <>
              {/* {currentUsers.map(u => ( */}
                <tr  className="hover:bg-gray-50 dark:hover:bg-slate-800/50 transition-colors">
                {/* key={u.id} */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <img src={image} alt="" className="w-8 h-8 rounded-full border border-gray-200 dark:border-slate-700" />
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400">
                    {email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span 
                    className={`px-2.5 py-1 text-xs font-bold rounded-full capitalize ${
                      role === "admin" ? 'bg-purple-100 text-purple-700' : 
                      role === "manager" ? 'bg-blue-100 text-blue-700' : 
                      'bg-slate-100 text-slate-700'
                    }`}
                    >
                      {role?.toUpperCase()}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2.5 py-1 inline-flex text-xs leading-5 font-bold rounded-full ${
                      status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {status === 'active' ? 'Active' : 'Suspended'}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button 
                    //   onClick={() => openUpdateModal(u)}
                    onClick={() => setIsOpen(true)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 rounded-lg hover:opacity-90 transition-all text-xs font-bold shadow-sm"
                    >
                      <FaUserCog size={14} /> Update
                    </button>

                    {/*Role Update Modal */}
                    {isOpen && (
                        <ManageUpdateUserModal user={user} isOpen={isOpen} closeModal={closeModal} refetch={refetch}></ManageUpdateUserModal>
                    )}
                  </td>
                </tr>
              {/* ))} */}
              {user.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-slate-500">No users found matching "{searchTerm}"</td>
                </tr>
              )}
            </>
    );
};

export default ManageUsersCard;