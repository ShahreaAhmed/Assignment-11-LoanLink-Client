import React from 'react';
import { IoArrowForward } from 'react-icons/io5';

const AllLoan = () => {
    return (
        <div className='flex-grow'>
        <div className='min-h-screen bg-gray-50 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='text-center mb-12'>
                <h1 className='text-3xl font-bold text-slate-900 sm:text-4xl font-serif'>
                    Explore Our Loan Packages
                </h1>
                <p className='mt-4 text-lg text-slate-600'>
                    Find the right financial support tailored for your needs.
                </p>
            </div>

            {/* card */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                <div className='bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col opacity: 1; transform: none;'>
                    <div className='relative h-56'>
                        <img src="https://picsum.photos/id/20/800/600" className='w-full h-full object-cover' alt="" />
                        <div className='absolute top-0 right-0 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg'>
                            Business
                        </div>
                        </div>
                        <div className='p-6 flex-1 flex flex-col'>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>
                              Small Business Starter
                            </h3>
                            <p className='text-slate-500 text-sm mb-4 line-clamp-3'>
                                Kickstart your dream business with our low-interest starter package designed for entrepreneurs.
                            </p>
                            <div className='mt-auto'>
                                <div className='grid grid-cols-2 gap-4 mb-6 border-t border-b border-gray-100 py-4'>
                                    <div>
                                        <p className='text-xs text-slate-400 uppercase'>
                                            Interest Rate
                                        </p>
                                        <p className='font-bold text-amber-600 text-lg'>
                                            5.5%
                                        </p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-xs text-slate-400 uppercase'>
                                            Max Amount
                                        </p>
                                        <p className='font-bold text-slate-900 text-lg'>
                                            $5,000
                                        </p>
                                    </div>
                                </div>

                                {/* Button */}
                                <button className='w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors group'>
                                    View Details <IoArrowForward size={24} className='lucide lucide-arrow-right group-hover:translate-x-1 transition-transform' />
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

            </div>
            
        </div>
        </div>
        
    );
};

export default AllLoan;