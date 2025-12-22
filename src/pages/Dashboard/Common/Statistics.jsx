import React from 'react';
import AdminStatistics from '../../../components/Dashboard/Statistics/AdminStatistics';
import useRole from '../../../hooks/useRole';
import LoadingSpinner from '../../../components/Shared/LoadinSpinner/LoadingSpinner';
import ManagerStatistics from '../../../components/Dashboard/Statistics/ManagerStatistics';

const Statistics = () => {
    const [role, isRoleLoading] = useRole();
    console.log("ROLE:", role);
  console.log("LOADING:", isRoleLoading);

    if (isRoleLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div>
            {role === 'manager' && <ManagerStatistics></ManagerStatistics>}
            {role === 'admin' && <AdminStatistics></AdminStatistics>}
        </div>
    );
};

export default Statistics;