import React from 'react';
import { FaRegClock } from 'react-icons/fa6';
import { FiUsers } from 'react-icons/fi';
import { LuCircleCheckBig, LuShield } from 'react-icons/lu';

const HowItWorks = () => {
    return (
        <section className='py-24 bg-white'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid md:grid-cols-2 gap-16 items-center'>
                    <div className='order-2 md:order-1'>
                        <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" className='rounded-2xl shadow-2xl' alt="" />
                    </div>
                    {/* right side */}
                    <div className='order-1 md:order-2'>
                        <h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-6 font-serif'>
                            Simple Steps to Your Loan
                        </h2>
                        <div className='space-y-8'>
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600'>
                                    <FiUsers size={24}/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-900 mb-1'>
                                        Register Account
                                    </h3>
                                    <p className='text-slate-500'>
                                        Create your account in less than 2 minutes with basic details.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600'>
                                    <LuShield size={24}/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-900 mb-1'>
                                        Apply Securely
                                    </h3>
                                    <p className='text-slate-500'>
                                        Choose a loan package and fill out the secure application form.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600'>
                                    <FaRegClock size={24}/>
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-900 mb-1'>
                                        Quick Approval
                                    </h3>
                                    <p className='text-slate-500'>
                                        Our managers review applications within 24 hours.
                                    </p>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <div className='flex-shrink-0 w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center text-amber-600'>
                                    <LuCircleCheckBig size={24} />
                                </div>
                                <div>
                                    <h3 className='text-xl font-bold text-slate-900 mb-1'>
                                        Get Funds
                                    </h3>
                                    <p className='text-slate-500'>
                                        Once approved, funds are disbursed directly to your account.
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HowItWorks;