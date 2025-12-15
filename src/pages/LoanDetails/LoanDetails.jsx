import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { FaCheck } from 'react-icons/fa';
import { FaDollarSign } from 'react-icons/fa6';
import { FiDollarSign, FiPercent } from 'react-icons/fi';
import { LuCalendar } from 'react-icons/lu';
import { Link, useParams } from 'react-router';
import LoadingSpinner from '../../components/Shared/LoadinSpinner/LoadingSpinner';

const LoanDetails = () => {

    const {id} = useParams();
    const {data: loan={}, isLoading, refetch} = useQuery({
        queryKey: ['loan', id],
        queryFn: async () => {
            const result = await axios(`${import.meta.env.VITE_API_URL}/loans/${id}`)
            return result.data
        }
    })

    const {image, title, description, category, interest, maxLoanLimit, emiPlans} = loan;

    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-slate-800 py-12 transition-colors duration-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
          <div className="relative h-80">
            <img src={image} alt={title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end">
              <div className="p-8">
                <span className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full uppercase mb-3 inline-block">
                  {category}
                </span>
                <h1 className="text-4xl font-bold text-white font-serif">{title}</h1>
              </div>
            </div>
          </div>
          
          <div className="p-8 md:p-12 grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">About this Loan</h2>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                  {description}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Features & Benefits</h3>
                <ul className="space-y-3">
                  {['Quick processing within 24 hours', 'Minimal documentation required', 'Flexible repayment options', 'No hidden charges'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 shrink-0">
                        <FaCheck size={14} />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">Available EMI Plans</h3>
                 <div className="flex gap-4">
                  {emiPlans.map(plan => (
                    <div key={plan} className="px-6 py-3 border border-gray-200 dark:border-slate-600 rounded-xl text-center hover:border-amber-500 hover:bg-amber-50 dark:hover:bg-slate-800 cursor-default transition-colors">
                      <span className="block text-2xl font-bold text-slate-800 dark:text-white">{plan}</span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 uppercase">Months</span>
                    </div>
                  ))}
                 </div>
              </div>
            </div>

            <div className="md:col-span-1">
              <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl border border-gray-100 dark:border-slate-700 sticky top-24">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 border-b dark:border-slate-700 pb-4">Loan Overview</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-amber-600">
                      <FiDollarSign size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Max Amount</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">${maxLoanLimit?.toLocaleString()}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                     <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-amber-600">
                      <FiPercent size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Interest Rate</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">{interest}% <span className="text-xs font-normal text-slate-400">/ year</span></p>
                    </div>
                  </div>

                   <div className="flex items-start gap-4">
                     <div className="p-2 bg-white dark:bg-slate-700 rounded-lg shadow-sm text-amber-600">
                      <LuCalendar size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">Processing Time</p>
                      <p className="text-xl font-bold text-slate-900 dark:text-white">24 Hours</p>
                    </div>
                  </div>
                </div>

                {/* {!canApply && (
                  <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                    Admins/Managers cannot apply for loans.
                  </div>
                )} */}

                <Link
                to={'/loan-application-form'}
                state={loan}
                //   onClick={handleApply}
                //   disabled={!canApply || loading}
                  className='inline-block text-center w-full py-4 rounded-xl font-bold text-lg shadow-lg transition-all transform active:scale-95 bg-amber-500 text-slate-900 hover:bg-amber-600 hover:shadow-amber-500/30' 
                      
                >
                  {isLoading ? 'Processing...' : 'Apply Now'}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default LoanDetails;