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

const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu
