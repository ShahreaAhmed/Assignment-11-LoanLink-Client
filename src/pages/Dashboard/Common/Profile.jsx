import React from 'react';
import { BsCamera, BsShield } from 'react-icons/bs';
import { HiOutlineCamera, HiOutlineMail } from "react-icons/hi";
import { FaUser } from 'react-icons/fa6';
import { LuCamera, LuShield, LuUser } from 'react-icons/lu';
import useAuth from '../../../hooks/useAuth';
import useRole from '../../../hooks/useRole';

const Profile = () => {

    const {user} = useAuth();
    const [role, isRoleLoading] = useRole();
    // const {role, isRoleLoading} = useRole();
    console.log(role, isRoleLoading)
    console.log(user)
    

    return (
        <div className="max-w-3xl mx-auto">
        <div className="mb-8">
            <h1 className="text-2xl font-bold text-slate-900">My Profile</h1>
            <p className="text-slate-500">Manage your account settings and preferences.</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
            <div className="bg-slate-900 h-32 relative">
                <div className="absolute -bottom-12 left-8">
                     <div className="relative">
                        <img 
                            src={ user.photoURL || "https://ui-avatars.com/api/?name=User"} 
                            alt={user.displayName} 
                            className="w-24 h-24 rounded-full border-4 border-white object-cover"
                        />
                        <button className="absolute bottom-0 right-0 p-1.5 bg-amber-500 rounded-full text-white border-2 border-white hover:bg-amber-600 transition-colors">
                            {/* <HiOutlineCamera size={18} /> */}
                            {/* <BsCamera size={18} /> */}
                            <LuCamera size={18} />
                        </button>
                     </div>
                </div>
            </div>
            
            <div className="pt-16 px-8 pb-8">
                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-bold text-slate-900">
                            {user.displayName}
                            </h2>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold uppercase tracking-wide">
                                {role}
                            </span>
                            {/* <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide 
                                ${user.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                                {user.status}
                            </span> */}
                        </div>
                    </div>
                    <button 
                        // onClick={logout}
                        className="px-4 py-2 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 text-sm font-semibold transition-colors"
                    >
                        Sign Out
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-2 text-slate-500">
                            <HiOutlineMail size={24}/>
                            <span className="text-sm font-medium">Email Address</span>
                        </div>
                        <p className="text-slate-900 font-semibold pl-8">
                            {user.email}
                            </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
                        <div className="flex items-center gap-3 mb-2 text-slate-500">
                            <LuUser size={24} />
                            <span className="text-sm font-medium">User ID</span>
                        </div>
                        <p className="text-slate-900 font-semibold pl-8 font-mono">
                            {user.uid}
                            
                        </p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 md:col-span-2">
                        <div className="flex items-center gap-3 mb-2 text-slate-500">
                            <LuShield size={24} />
                            <span className="text-sm font-medium">Account Security</span>
                        </div>
                        <p className="text-slate-600 text-sm pl-8 mb-3">
                            Password last changed 30 days ago. Two-factor authentication is currently disabled.
                        </p>
                        <button className="ml-8 text-amber-600 text-sm font-bold hover:underline">Change Password</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Profile;