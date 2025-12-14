import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import LoadingSpinner from '../../../components/Shared/LoadinSpinner/LoadingSpinner';

const AvailableLoans = () => {
   
    const {data: loans= [], isLoading, isError} = useQuery({
        queryKey: ['loans'],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans`)
            return result.data
        }
    })

    console.log(data)

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
       <div className='max-w-7xl mx-auto'>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
              <motion.div
                // key={loan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay:  0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    // src={loan.image} 
                    // alt={loan.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {/* {loan.category} */}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  {/* <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{loan.title}</h3> */}
                  {/* <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{loan.description}</p> */}
                  
                  <div className="flex justify-between items-center mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mt-auto">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Max Limit</p>
                      {/* <p className="text-lg font-bold text-slate-900 dark:text-white">${loan.maxAmount.toLocaleString()}</p> */}
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Interest</p>
                      {/* <p className="text-lg font-bold text-amber-600">{loan.interestRate}%</p> */}
                    </div>
                  </div>
                  
                  <Link 
                    // to={`/loans/${loan.id}`}
                    className="block w-full py-3 text-center border-2 border-slate-900 dark:border-slate-500 text-slate-900 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-900 dark:hover:bg-amber-500 hover:text-white dark:hover:text-slate-900 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
           
          </div>
       </div>
    );
};

export default AvailableLoans;




{/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredLoans.map((loan, index) => (
              <motion.div
                key={loan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={loan.image} 
                    alt={loan.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {loan.category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{loan.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{loan.description}</p>
                  
                  <div className="flex justify-between items-center mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mt-auto">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Max Limit</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">${loan.maxAmount.toLocaleString()}</p>
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Interest</p>
                      <p className="text-lg font-bold text-amber-600">{loan.interestRate}%</p>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/loans/${loan.id}`}
                    className="block w-full py-3 text-center border-2 border-slate-900 dark:border-slate-500 text-slate-900 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-900 dark:hover:bg-amber-500 hover:text-white dark:hover:text-slate-900 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div> */}