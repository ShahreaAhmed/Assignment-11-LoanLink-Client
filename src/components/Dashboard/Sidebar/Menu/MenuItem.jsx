import React from 'react';
import { NavLink } from 'react-router';

const MenuItem = ({ label, address, icon: Icon }) => {
    return (
         <nav className="flex-1 px-4 py-2 space-y-2 overflow-y-auto">
            <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
          isActive ? 'bg-amber-500 text-slate-900 font-bold shadow-lg shadow-amber-500/20' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
        }`
      }
    >
      <Icon className='w-5 h-5' />

      <span className='mx-4 font-medium'>{label}</span>
    </NavLink>
         </nav>
    );
};

export default MenuItem;