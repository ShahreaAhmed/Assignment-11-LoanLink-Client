// import React from "react";
// import appLogo from "../../../assets/appLogo.png";
// import { FiMoon, FiUser } from "react-icons/fi";
// import { Link, NavLink } from "react-router";
// import useAuth from "../../../hooks/useAuth";

// const NavBar = () => {
//   const { user, logOut } = useAuth();

//   const handleLogOut = () => {
//     logOut()
//     .then()
//     .catch(error => {
//       console.log(error)
//     })
//   }

//   const links = (
//     <>
//       <li className="relative group">
//         <NavLink
//           to=""
//           className="text-base font-medium text-gray-700 dark:text-gray-200
//           hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors
//           hover:bg-transparent focus:bg-transparent"
//         >
//           Home
//           <span
//             className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35]
//             transition-all duration-300 group-hover:w-full"
//           ></span>
//         </NavLink>
//       </li>

//       <li className="relative group">
//         <NavLink
//           to="/all-loans"
//           className="text-base font-medium text-gray-700 dark:text-gray-200
//           hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors
//           hover:bg-transparent focus:bg-transparent"
//         >
//           All-Loans
//           <span
//             className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35]
//             transition-all duration-300 group-hover:w-full"
//           ></span>
//         </NavLink>
//       </li>

//       <li className="relative group">
//         <NavLink
//           to=""
//           className="text-base font-medium text-gray-700 dark:text-gray-200
//           hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors
//           hover:bg-transparent focus:bg-transparent"
//         >
//           About Us
//           <span
//             className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35]
//             transition-all duration-300 group-hover:w-full"
//           ></span>
//         </NavLink>
//       </li>

//       <li className="relative group">
//         <NavLink
//           to=""
//           className="text-base font-medium text-gray-700 dark:text-gray-200
//           hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors
//           hover:bg-transparent focus:bg-transparent"
//         >
//           Contact
//           <span
//             className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35]
//             transition-all duration-300 group-hover:w-full"
//           ></span>
//         </NavLink>
//       </li>
//     </>
//   );

//   return (
//     <div className="bg-base-100 dark:bg-slate-800 sticky top-0 z-50 shadow-sm">
//       <div className="navbar max-w-7xl mx-auto justify-between ">
//         {/* LEFT SECTION */}
//         <div className="navbar-start">
//           {/* Mobile Dropdown */}
//           <div className="dropdown">
//             <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h8m-8 6h16"
//                 />
//               </svg>
//             </div>

//             <ul
//               tabIndex={-1}
//               className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow z-50"
//             >
//               {links}
//             </ul>
//           </div>

//           {/* Logo */}
//           <Link to="/">
//             <img src={appLogo} className="w-36 md:w-44" alt="LoneLink Logo" />
//           </Link>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="navbar-end flex items-center">
//           {/* Desktop Menu */}
//           <div className="navbar-center hidden lg:flex">
//             <ul className="menu menu-horizontal px-1">{links}</ul>
//             <div className="h-6 mx-5 w-px bg-gray-300 dark:bg-gray-200 hidden lg:block"></div>
//           </div>

//           {/* Divider */}

//           {/* Mode Toggle */}
//           <button
//             className="p-2 rounded-full text-gray-600 dark:text-gray-300
//           hover:bg-gray-100 dark:hover:bg-white transition-colors dark:hover:text-gray-600"
//           >
//             <FiMoon size={20} />
//           </button>

//           {/* Login button*/}
//           {user ? (
//           //   <a
//           //     onClick={handleLogOut}
//           //     className="cursor-pointer py-2 text-[14px] md:text-base font-medium md:px-5 md:py-1.5 px-3 mr-2 rounded-md border-2 text-gray-700 dark:text-gray-200
//           // hover:text-[#F5AF35] transition-colors"
//           //   >
//           //     Logout
//           //   </a>

//             <div className="dropdown dropdown-end z-50">
//               <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//                 <div className="w-9 border-2 border-gray-300 rounded-full">
//                   <img
//                     alt="User Avatar"
//                     referrerPolicy="no-referrer"
//                     src={
//                       user.photoURL ||
//                       "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
//                     }
//                   />
//                 </div>
//               </div>
//               <ul
//                 tabIndex="-1"
//                 className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
//               >
//                 <div className="pb-3 border-b border-b-gray-200">
//                   <li className="text-sm font-bold">{user.displayName || "User"}</li>
//                   <li className="text-xs">{user.email}</li>
//                 </div>

//                 {/* <li className="mt-3">
//                   <Link href="/addProduct">Add Product</Link>
//                 </li>

//                 <li>
//                   <Link href="/manageProduct">Manage Products</Link>
//                 </li> */}

//                 <li>
//                   <button
//                     onClick={handleLogOut}
//                     className="justify-center cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600
//           text-white md:px-5 md:py-1 px-3 py-2 text-[14px] md:text-base rounded-md font-semibold shadow-lg
//           shadow-amber-500/30 hover:shadow-amber-500/50
//           transform hover:-translate-y-0.5 transition-all active:scale-95"
//                   >
//                     Logout
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ) : (
//             <>
//             <Link
//               to="/login"
//               className="cursor-pointer py-2 text-[14px] md:text-base font-medium md:px-5 md:py-1.5 px-3 mr-2 rounded-md border-2 text-gray-700 dark:text-gray-200
//           hover:text-[#F5AF35] transition-colors"
//             >
//               Login
//             </Link>
//             <Link
//               to="/register"
//               className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600
//           text-white md:px-5 md:py-2 px-3 py-2 text-[14px] md:text-base rounded-md font-semibold shadow-lg
//           shadow-amber-500/30 hover:shadow-amber-500/50
//           transform hover:-translate-y-0.5 transition-all active:scale-95 gap-2 flex items-center"
//             >
//               <FiUser size={16} strokeWidth={2.5} /> Register
//             </Link>
//             </>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NavBar;



import React from "react";
import appLogo from "../../../assets/appLogo.png";
import { FiMoon, FiUser } from "react-icons/fi";
import { Link, NavLink } from "react-router";
import useAuth from "../../../hooks/useAuth";

const NavBar = () => {
  const { user, logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch(error => console.log(error));
  };

  // Links that everyone sees
  const publicLinks = (
    <>
      <li className="relative group">
        <NavLink
          to="/"
          className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors hover:bg-transparent focus:bg-transparent"
        >
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/all-loans"
          className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors hover:bg-transparent focus:bg-transparent"
        >
          All-Loans
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
    </>
  );

  // Links only visible before login
  const guestLinks = (
    <>
      <li className="relative group">
        <NavLink
          to="/aboutUs"
          className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors hover:bg-transparent focus:bg-transparent"
        >
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="relative group">
        <NavLink
          to="/contact"
          className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors hover:bg-transparent focus:bg-transparent"
        >
          Contact
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li>
        <Link
          to="/login"
          className="cursor-pointer py-2 text-[14px] md:text-base font-medium md:px-5 md:py-1.5 px-3 mr-2 rounded-md border-2 text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] transition-colors"
        >
          Login
        </Link>
      </li>
      <li>
        <Link
          to="/register"
          className="cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white md:px-5 md:py-2 px-3 py-2 text-[14px] md:text-base rounded-md font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 transition-all active:scale-95 flex items-center gap-2"
        >
          <FiUser size={16} strokeWidth={2.5} /> Register
        </Link>
      </li>
    </>
  );

  // Links only visible after login
  const userLinks = (
    <>
      <li className="relative group">
        <NavLink
          to="/dashboard"
          className="text-base font-medium text-gray-700 dark:text-gray-200 hover:text-[#F5AF35] dark:hover:text-[#edbe6d] transition-colors hover:bg-transparent focus:bg-transparent"
        >
          Dashboard
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#F5AF35] transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="bg-base-100 dark:bg-slate-800 sticky top-0 z-50 shadow-sm">
      <div className="navbar max-w-7xl mx-auto justify-between">
        {/* LEFT SECTION */}
        <div className="navbar-start">
          <Link to="/">
            <img src={appLogo} className="w-36 md:w-44" alt="LoanLink Logo" />
          </Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="navbar-end flex items-center">
          {/* Desktop Menu */}
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {publicLinks}
              {user ? userLinks : guestLinks}
            </ul>
          </div>

          {/* Mode Toggle */}
          <button className="p-2 rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white transition-colors dark:hover:text-gray-600 ml-3">
            <FiMoon size={20} />
          </button>

          {/* User Avatar / Login & Logout */}
          {user ? (
            <div className="dropdown dropdown-end z-50 ml-3">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-9 border-2 border-gray-300 rounded-full">
                  <img
                    alt="User Avatar"
                    referrerPolicy="no-referrer"
                    src={user.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow"
              >
                <div className="pb-3 border-b border-b-gray-200">
                  <li className="text-sm font-bold">{user.displayName || "User"}</li>
                  <li className="text-xs">{user.email}</li>
                </div>
                <li>
                  <button
                    onClick={handleLogOut}
                    className="justify-center cursor-pointer bg-gradient-to-r from-amber-500 to-amber-600 text-white md:px-5 md:py-1 px-3 py-2 text-[14px] md:text-base rounded-md font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 transition-all active:scale-95"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default NavBar;




// import React, { useState } from 'react';
// import { Menu, X, Sun, Moon, User, LogOut, LayoutDashboard, ChevronDown } from 'lucide-react';

// const Navbar = () => {
//   // State simulation
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Change this to true to see logged-in state
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [isProfileOpen, setIsProfileOpen] = useState(false);

//   // Toggle functions
//   const toggleTheme = () => setIsDarkMode(!isDarkMode);
//   const toggleAuth = () => {
//     setIsLoggedIn(!isLoggedIn);
//     setIsProfileOpen(false);
//   };

//   // Brand Colors (Based on your image)
//   const colors = {
//     primary: "bg-slate-900", // Navy Blue
//     accent: "text-amber-500", // Golden/Yellow
//     accentBg: "bg-amber-500",
//     textMain: "text-slate-800",
//   };

//   return (
//     <nav className={`fixed w-full z-50 transition-all duration-300 shadow-md ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-800'}`}>
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">

//           {/* --- LEFT SIDE: LOGO --- */}
//           <div className="flex-shrink-0 flex items-center cursor-pointer">
//             {/* Logo Simulation based on Image */}
//             <div className="flex flex-col leading-none">
//               <div className="flex items-center text-3xl font-bold tracking-tighter">
//                 <span className={isDarkMode ? 'text-white' : 'text-slate-800'}>one</span>
//                 <span className="text-amber-500">Link</span>
//               </div>
//               <div className="bg-slate-800 text-amber-500 text-[10px] px-1 py-0.5 tracking-[0.2em] font-bold uppercase rounded-sm text-center mt-[-2px]">
//                 Microloan
//               </div>
//             </div>
//           </div>

//           {/* --- CENTER/RIGHT: DESKTOP MENU --- */}
//           <div className="hidden md:flex items-center space-x-8">

//             {/* Navigation Links */}
//             <div className="flex space-x-6 font-medium">
//               <NavLink text="Home" isActive />
//               <NavLink text="All-Loans" />
//               {!isLoggedIn && (
//                 <>
//                   <NavLink text="About Us" />
//                   <NavLink text="Contact" />
//                 </>
//               )}
//               {isLoggedIn && (
//                 <NavLink text="Dashboard" icon={<LayoutDashboard size={18} />} />
//               )}
//             </div>

//             {/* Separator */}
//             <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>

//             {/* Actions (Login/Register OR User Profile) */}
//             <div className="flex items-center space-x-4">

//               {/* Theme Toggle */}
//               <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition">
//                 {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-600" />}
//               </button>

//               {/* BEFORE LOGIN STATE */}
//               {!isLoggedIn ? (
//                 <>
//                   <button onClick={toggleAuth} className="font-semibold hover:text-amber-600 transition">
//                     Login
//                   </button>
//                   <button className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg shadow-amber-500/30 hover:shadow-amber-500/50 transform hover:-translate-y-0.5 transition-all duration-300">
//                     Register
//                   </button>
//                 </>
//               ) : (
//                 /* AFTER LOGIN STATE (User Avatar) */
//                 <div className="relative">
//                   <button
//                     onClick={() => setIsProfileOpen(!isProfileOpen)}
//                     className="flex items-center space-x-3 focus:outline-none"
//                   >
//                     <div className="flex flex-col items-end hidden lg:block">
//                       <span className="text-sm font-bold">John Doe</span>
//                       <span className="text-xs text-amber-500">Borrower</span>
//                     </div>
//                     <div className="h-10 w-10 rounded-full bg-slate-200 border-2 border-amber-500 flex items-center justify-center overflow-hidden">
//                       <img src="https://i.pravatar.cc/150?img=11" alt="User" className="h-full w-full object-cover" />
//                     </div>
//                     <ChevronDown size={16} className={`transition-transform ${isProfileOpen ? 'rotate-180' : ''}`} />
//                   </button>

//                   {/* Dropdown Menu */}
//                   {isProfileOpen && (
//                     <div className={`absolute right-0 mt-3 w-48 rounded-xl shadow-2xl py-2 ring-1 ring-black ring-opacity-5 ${isDarkMode ? 'bg-slate-800 text-white' : 'bg-white text-slate-800'}`}>
//                       <a href="#" className="flex items-center px-4 py-2 hover:bg-amber-50 dark:hover:bg-slate-700 transition">
//                         <User size={16} className="mr-2 text-amber-500" /> Profile
//                       </a>
//                       <a href="#" className="flex items-center px-4 py-2 hover:bg-amber-50 dark:hover:bg-slate-700 transition">
//                         <LayoutDashboard size={16} className="mr-2 text-amber-500" /> Dashboard
//                       </a>
//                       <div className="border-t border-gray-100 dark:border-gray-700 my-1"></div>
//                       <button onClick={toggleAuth} className="w-full text-left flex items-center px-4 py-2 text-red-500 hover:bg-red-50 dark:hover:bg-slate-700 transition">
//                         <LogOut size={16} className="mr-2" /> Logout
//                       </button>
//                     </div>
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>

//           {/* --- MOBILE HAMBURGER --- */}
//           <div className="md:hidden flex items-center space-x-4">
//              <button onClick={toggleTheme}>
//                 {isDarkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-slate-600" />}
//               </button>
//             <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 dark:text-white">
//               {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* --- MOBILE MENU DROPDOWN --- */}
//       {isMobileMenuOpen && (
//         <div className={`md:hidden px-4 pt-2 pb-6 space-y-2 shadow-inner ${isDarkMode ? 'bg-slate-900' : 'bg-white'}`}>
//           <MobileLink text="Home" />
//           <MobileLink text="All-Loans" />
//           {!isLoggedIn ? (
//             <>
//               <MobileLink text="About Us" />
//               <MobileLink text="Contact" />
//               <div className="pt-4 flex flex-col space-y-3">
//                  <button onClick={toggleAuth} className="w-full py-2 border border-slate-300 rounded-lg font-semibold">Login</button>
//                  <button className="w-full py-2 bg-amber-500 text-white rounded-lg font-semibold">Register</button>
//               </div>
//             </>
//           ) : (
//             <>
//                <MobileLink text="Dashboard" />
//                <MobileLink text="Profile" />
//                <button onClick={toggleAuth} className="w-full text-left py-2 text-red-500 font-medium flex items-center">
//                  <LogOut size={18} className="mr-2" /> Logout
//                </button>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// };

// // Sub-components for cleaner code
// const NavLink = ({ text, isActive, icon }) => (
//   <a href="#" className={`group relative flex items-center hover:text-amber-500 transition-colors duration-300 ${isActive ? 'text-amber-500 font-bold' : ''}`}>
//     {icon && <span className="mr-1.5">{icon}</span>}
//     {text}
//     <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-500 transition-all duration-300 group-hover:w-full ${isActive ? 'w-full' : ''}`}></span>
//   </a>
// );

// const MobileLink = ({ text }) => (
//   <a href="#" className="block py-2 text-lg font-medium hover:text-amber-500 transition">
//     {text}
//   </a>
// );

// export default Navbar;
