import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { BsMailbox, BsShieldCheck, BsX } from 'react-icons/bs';
import { FaUserCircle, FaUserCog } from 'react-icons/fa';
import { FiUserX } from 'react-icons/fi';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ManageUpdateUserModal = ({isOpen, closeModal, user, refetch}) => {
 
  const [updatedRole, setUpdatedRole] = useState(user?.role)

    const axiosSecure = useAxiosSecure()

  const handleRoleUpdate = async () => {
    try {
      await axiosSecure.patch('/update-role', {
        email: user?.email,
        role: updatedRole,
      })
      toast.success('Role Updated!')
      refetch()
    } catch (err) {
      console.log(err)
      toast.error(err?.response?.data?.message)
    } finally {
      closeModal()
    }
  }


  //  if(!isOpen) return null
    return (

    <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
    
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />

    <div className="fixed inset-0 flex items-center justify-center p-4">
      
      <DialogPanel className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          
          <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
            <FaUserCog size={20} className="text-amber-500" /> Update User Account
          </DialogTitle>

          <button onClick={closeModal} className="text-slate-400 hover:text-white">
            <BsX size={20} />
          </button>
        </div>

        <form className="p-6 space-y-6">

          {/* User Info */}
          <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border">
            <img
              src={user?.image}
              alt=""
              className="w-14 h-14 rounded-full border-2 border-amber-500"
            />
            <div>
              <p className="font-bold text-slate-900 dark:text-white text-lg">
                {user?.name}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
                <BsMailbox size={12} /> {user?.email}
              </p>
            </div>
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-bold mb-2 flex items-center gap-2">
              <FaUserCircle size={14} className="text-amber-500" /> Assign Role
            </label>

            <div className="grid grid-cols-3 gap-2">
              {["admin", "manager", "borrower"].map((role) => (
                <button
                  key={role}
                  type="button"
                  onClick={() => setUpdatedRole(role)}
                  className={`py-2 rounded-lg text-xs font-bold border ${
                    updatedRole === role
                      ? "bg-amber-500 text-slate-900 border-amber-500"
                      : "border-gray-200 dark:border-slate-700 text-slate-500"
                  }`}
                >
                  {role.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={closeModal}
              className="flex-1 py-3 border rounded-xl font-bold"
            >
              Cancel
            </button>

            <button
              onClick={handleRoleUpdate}
              type="button"
              className="flex-1 py-3 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 rounded-xl font-bold"
            >
              Save Changes
            </button>
          </div>

        </form>
      </DialogPanel>
    </div>
  </Dialog>
    );
};

export default ManageUpdateUserModal;