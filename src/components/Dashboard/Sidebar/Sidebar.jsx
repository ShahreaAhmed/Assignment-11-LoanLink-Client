import { useState } from 'react'
import { Link } from 'react-router'
import useAuth from '../../../hooks/useAuth'
import logo from '../../../assets/appLogo.png'
// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import MenuItem from './Menu/MenuItem'
import AdminMenu from './Menu/AdminMenu'
import ManagerMenu from './Menu/ManagerMenu'
import BorrowerMenu from './Menu/BorrowerMenu'

// User Menu
// import MenuItem from './Menu/MenuItem'
// import AdminMenu from './Menu/AdminMenu'
// import SellerMenu from './Menu/SellerMenu'
// import CustomerMenu from './Menu/CustomerMenu'

const Sidebar = () => {
  const { logOut } = useAuth()
  const [isActive, setActive] = useState(false)

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <div>
      {/* Small Screen Navbar, only visible till md breakpoint */}
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
        <div>
          <div className='block cursor-pointer p-4 font-bold'>
            <Link to='/'>
              <img src={logo} alt='logo' width='100' height='100' />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
        >
          <AiOutlineBars className='h-5 w-5' />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div className='flex flex-col h-full'>
          {/* Top Content */}
          <div>
            {/* Logo */}
            <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-lime-100 mx-auto'>
              <Link to='/'>
                <img src={logo} alt='logo' width='100' height='100' />
              </Link>
            </div>
          </div>

          {/* Middle Content */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            {/*  Menu Items */}
            <nav>
              {/* Common Menu */}
              <MenuItem
                icon={BsGraphUp}
                label='Statistics'
                address='/dashboard'
              />
              {/* Role-Based Menu */}
              <AdminMenu />
              <ManagerMenu />
              <BorrowerMenu />
            </nav>
          </div>

          {/* Bottom Content */}
          <div>
            <hr />

            <MenuItem
              icon={FcSettings}
              label='Profile'
              address='/dashboard/profile'
            />
            <button
              onClick={logOut}
              className='flex cursor-pointer w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
            >
              <GrLogout className='w-5 h-5' />

              <span className='mx-4 font-medium'>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;


// import React from 'react';
// import { FiLogOut } from 'react-icons/fi';
// import { NavLink } from 'react-router';

// const Sidebar = () => {
//   return (
//      <div className="h-full flex flex-col bg-slate-900 text-white w-64 shadow-2xl">
//       <div className="p-6 border-b border-slate-800">
//         <h2 className="text-xl font-bold flex items-center gap-2">
//            <span className="w-8 h-8 bg-amber-500 rounded flex items-center justify-center text-slate-900">L</span>
//            LoanLink
//         </h2>
//         {/* <p className="text-xs text-slate-500 mt-1 uppercase tracking-wider">{user?.role} Portal</p> */}
//       </div>

//       <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
//         {/* {links.map((link) => ( */}
//           <NavLink
//             // key={link.path}
//             // to={link.path}
//             // end={link.path === '/dashboard'} // Only exact match for root dashboard
//             // onClick={onCloseMobile}
//             className={({ isActive }) =>
//               `flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
//                 isActive
//                   ? 'bg-amber-500 text-slate-900 font-bold shadow-lg shadow-amber-500/20'
//                   : 'text-slate-400 hover:bg-slate-800 hover:text-white'
//               }`
//             }
//           >
//             {/* <link.icon size={20} /> */}
//             {/* {link.name} */}
//           </NavLink>
//         {/* ))} */}
//       </nav>

//       <div className="p-4 border-t border-slate-800">
//         <button
//           // onClick={logout}
//           className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-red-400 hover:bg-slate-800 hover:text-red-300 transition-colors"
//         >
//           <FiLogOut size={20} />
//           Logout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;