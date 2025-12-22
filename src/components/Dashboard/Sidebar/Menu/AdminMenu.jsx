// import React from 'react';

// const AdminMenu = () => {
//     return (
//         <div>
//             <h1>Admin</h1>
//         </div>
//     );
// };

// export default AdminMenu;


import { FaUserCog } from 'react-icons/fa'
import MenuItem from './MenuItem'
import { LuFileText, LuUsers } from 'react-icons/lu'
import { FiList } from 'react-icons/fi'

const AdminMenu = () => {
  return (
    <>
      <MenuItem  icon={LuUsers} label='Manage Users' address='manage-users' >
      </MenuItem>
      <MenuItem  icon={FiList} label='All Loans' address='all-loan' >
      </MenuItem>
      <MenuItem  icon={LuFileText} label='Application' address='loan-applications' >
      </MenuItem>
    </> 
  )
}

export default AdminMenu
