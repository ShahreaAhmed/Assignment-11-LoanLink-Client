import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../../components/Shared/LoadinSpinner/LoadingSpinner';
import HomeLoanCard from '../HomeLoanCard/HomeLoanCard';

const AvailableLoans = () => {
   
    const {data: loans= [], isLoading} = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans`)
            return result.data
        }
    })

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
       <div className='mt-20'>
        {loans && loans.length > 0 ? (
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
         {loans.map(loan => <HomeLoanCard key={loan._id} loan={loan}></HomeLoanCard>)}
         </div>
        ) : null}
       </div>
    );
};

export default AvailableLoans;
