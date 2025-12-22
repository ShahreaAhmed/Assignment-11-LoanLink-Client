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

  // const handleRoleUpdate = async () => {
  //   try {
  //     await axiosSecure.patch('/update-role', {
  //       email: user?.email,
  //       role: 'seller',
  //     })
  //     toast.success('Role Updated!')
  //     refetch()
  //   } catch (err) {
  //     console.log(err)
  //     toast.error(err?.response?.data?.message)
  //   }
  // }


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
        // <Dialog open={isOpen} onClose={closeModal}
        //  className="fixed inset-0 z-50 flex items-center justify-center p-4">
        //    <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"

        //    >
        //    </div>
        //    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        //       <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
        //           <h3 className="text-lg font-bold text-white flex items-center gap-2">
        //             <FaUserCog size={20} className="text-amber-500" /> Update User Account
        //           </h3>
        //           <button 
        //         //   onClick={() => setIsUpdateModalOpen(false)} className="text-slate-400 hover:text-white transition-colors"
        //           >
        //               <BsX size={20} />
        //           </button>
        //       </div>
              
        //       <form 
        //     //   onSubmit={handleUpdateSubmit} 
        //       className="p-6 space-y-6">
        //           {/* User Info Header */}
        //           <div className="flex items-center gap-4 p-4 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-700">
        //               <img 
        //               src={user.image} 
        //               alt="" className="w-14 h-14 rounded-full border-2 border-amber-500" />
        //               <div>
        //                   <p className="font-bold text-slate-900 dark:text-white text-lg">
        //                     {user.name}
        //                     </p>
        //                   <p className="text-slate-500 dark:text-slate-400 text-sm flex items-center gap-1">
        //                      <BsMailbox size={12} /> 
        //                      {user.email}
        //                   </p>
        //               </div>
        //           </div>

        //           {/* Role Selection */}
        //           <div>
        //             <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
        //                <FaUserCircle size={14} className="text-amber-500" /> Assign Role
        //             </label>
        //             <div className="grid grid-cols-3 gap-2">
        //                 {/* {Object.values(UserRole).map((role) => ( */}
        //                     <button
        //                         // key={role}
        //                         type="button"
        //                         onClick={() => setUpdatedRole(updatedRole)}
        //                         // className={`py-2 px-1 rounded-lg text-xs font-bold border transition-all
        //                         //      ${
        //                         //     editRole === role 
        //                         //     ? 'bg-amber-500 border-amber-500 text-slate-900 shadow-md' 
        //                         //     : 'border-gray-200 dark:border-slate-700 text-slate-500 dark:text-slate-400 hover:border-amber-500'
        //                         // }`}
        //                     >
        //                         {/* {role.toUpperCase()} */}
        //                     </button>
        //                 {/* ))} */}
        //             </div>
        //           </div>

        //           {/* Status Selection */}
        //           <div>
        //             <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2">
        //                <BsShieldCheck size={14} className="text-amber-500" /> Account Status
        //             </label>
        //             <div className="flex gap-4">
        //                 {/* <button
        //                     type="button"
        //                     onClick={() => setEditStatus('active')}
        //                     className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all border ${
        //                         editStatus === 'active'
        //                         ? 'bg-green-50 border-green-500 text-green-700'
        //                         : 'border-gray-200 dark:border-slate-700 text-slate-400'
        //                     }`}
        //                 >
        //                     <ShieldCheck size={18} /> Approve / Active
        //                 </button> */}
        //                 <button
        //                     type="button"
        //                     // onClick={() => setEditStatus('suspended')}
        //                     // className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all border ${
        //                     //     editStatus === 'suspended'
        //                     //     ? 'bg-red-50 border-red-500 text-red-700'
        //                     //     : 'border-gray-200 dark:border-slate-700 text-slate-400'
        //                     // }`}
        //                 >
        //                     <FiUserX size={18} /> Suspend
        //                 </button>
        //             </div>
        //           </div>

        //           {/* Actions */}
        //           <div className="flex gap-3 pt-2">
        //              <button 
        //                type="button"
        //                onClick={closeModal}
        //             //    onClick={() => setIsUpdateModalOpen(false)}
        //                className="flex-1 py-3 border border-gray-300 dark:border-slate-600 rounded-xl text-slate-700 dark:text-slate-300 font-bold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
        //              >
        //                Cancel
        //              </button>
        //              <button 
        //               onClick={handleRoleUpdate}
        //                type="submit"
        //                className="flex-1 py-3 bg-slate-900 dark:bg-amber-500 text-white dark:text-slate-900 rounded-xl font-bold hover:opacity-90 shadow-lg shadow-amber-500/20 transition-all"
        //              >
        //                Save Changes
        //              </button>
        //           </div>
        //       </form>
        //    </div>
        // </Dialog>



      //   <Dialog
      //   open={isOpen}
      //   as='div'
      //   className='relative z-10 focus:outline-none'
      //   onClose={closeModal}
      // >
      //   <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
      //     <div className='flex min-h-full items-center justify-center p-4'>
      //       <DialogPanel
      //         transition
      //         className='w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0 shadow-xl'
      //       >
      //         <DialogTitle
      //           as='h3'
      //           className='text-base/7 font-medium text-black'
      //         >
      //           Update User Role
      //         </DialogTitle>
      //         <form>
      //           <div>
      //             <select
      //               value={updatedRole}
      //               onChange={e => setUpdatedRole(e.target.value)}
      //               className='w-full my-3 border border-gray-200 rounded-xl px-2 py-3'
      //               name='role'
      //               id=''
      //             >
      //               <option value='borrower'>Borrower</option>
      //               <option value='manager'>Manager</option>
      //               <option value='admin'>Admin</option>
      //             </select>
      //           </div>
      //           <div className='flex mt-2 justify-around'>
      //             <button
      //               onClick={handleRoleUpdate}
      //               type='button'
      //               className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
      //             >
      //               Update
      //             </button>
      //             <button
      //               type='button'
      //               className='cursor-pointer inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
      //               onClick={closeModal}
      //             >
      //               Cancel
      //             </button>
      //           </div>
      //         </form>
      //       </DialogPanel>
      //     </div>
      //   </div>
      // </Dialog>




        <Dialog open={isOpen} onClose={closeModal} className="relative z-50">
    
    {/* 🔴 CHANGE: Overlay */}
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" />

    <div className="fixed inset-0 flex items-center justify-center p-4">
      
      {/* 🔴 CHANGE: DialogPanel = modal box */}
      <DialogPanel className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-md relative z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-slate-900 px-6 py-4 flex justify-between items-center">
          
          {/* 🔴 CHANGE: DialogTitle */}
          <DialogTitle className="text-lg font-bold text-white flex items-center gap-2">
            <FaUserCog size={20} className="text-amber-500" /> Update User Account
          </DialogTitle>

          <button onClick={closeModal} className="text-slate-400 hover:text-white">
            <BsX size={20} />
          </button>
        </div>

        {/* 🔴 নিচের সব কিছু unchanged */}
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

          {/* Role Selection (unchanged logic) */}
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