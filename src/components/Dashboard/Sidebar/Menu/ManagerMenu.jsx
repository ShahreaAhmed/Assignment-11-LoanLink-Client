import React from 'react';
import MenuItem from './MenuItem';
import { LuFileText, LuSquareCheckBig, LuUsers } from 'react-icons/lu';
import { FiList, FiPlusCircle } from 'react-icons/fi';
import { FaRegClock } from 'react-icons/fa6';

const ManagerMenu = () => {
    return (
        <>
         <MenuItem  icon={FiPlusCircle} label='Add Loans' address='/dashboard/add-loan' >
         </MenuItem>
         <MenuItem  icon={FiList} label='Manage Loans' address='manage-loan' >
         </MenuItem>
         <MenuItem  icon={FaRegClock} label='Pending Applications' address='/dashboard/pending-loans' >
         </MenuItem>
         <MenuItem  icon={LuSquareCheckBig} label='Approved Applications' address='/dashboard/approved-loans' >
         </MenuItem>
         
         
        </>
    );
};

export default ManagerMenu;