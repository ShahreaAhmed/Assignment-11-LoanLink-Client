import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router';

const HomeLoanCard = ({loan}) => {

    const {_id, title, image, category, interest, description, maxLoanLimit} = loan || {}

    return (
            
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay:  0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 dark:border-slate-700 group flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {category}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{loan.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4 line-clamp-2">{description}</p>
                  
                  <div className="flex justify-between items-center mb-6 p-3 bg-slate-50 dark:bg-slate-800 rounded-lg mt-auto">
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Max Limit</p>
                      <p className="text-lg font-bold text-slate-900 dark:text-white">${maxLoanLimit.toLocaleString()}</p>
                    </div>
                    <div className="w-px h-8 bg-slate-200 dark:bg-slate-700"></div>
                    <div className="text-center">
                      <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Interest</p>
                      <p className="text-lg font-bold text-amber-600">{interest}%</p>
                    </div>
                  </div>
                  
                  <Link 
                    to={`/loan/${_id}`}
                    className="block w-full py-3 text-center border-2 border-slate-900 dark:border-slate-500 text-slate-900 dark:text-slate-300 font-semibold rounded-lg hover:bg-slate-900 dark:hover:bg-amber-500 hover:text-white dark:hover:text-slate-900 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
    );
};

export default HomeLoanCard;