import React from 'react';
import bannerBg from '../../../assets/bannerBg.avif'
import banner from '../../../assets/banner.avif'
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuCircleCheckBig } from 'react-icons/lu';

const Banner = () => {
    return (
        <div className='relative bg-slate-900 min-h-[600px] flex items-center'>
            <div className='absolute inset-0 z-0 opacity-20'>
                <img className='w-full h-full object-cover' src={bannerBg} alt="" />
            </div>
            <div className='max-w-7xl mx-auto px-4  relative z-10 w-full py-20'>
                <div className='grid md:grid-cols-2 gap-12 items-center'>
                    <div className='opacity: 1; transform: none;'>
                        <div className='inline-block px-4 py-1.5 bg-amber-500/10 border border-amber-500/30 rounded-full mb-6'>
                        <span className='text-amber-500 font-semibold text-sm tracking-wide'>TRUSTED BY 10,000+ BORROWERS</span>
                        </div>
                        <h1 className='text-4xl md:text-6xl font-bold text-white leading-tight mb-6 font-serif'>Financial Freedom <br />
                        <span className='text-amber-500'>Within Reach</span>
                         </h1>
                         <p className='text-slate-300 text-lg mb-8 leading-relaxed max-w-lg'>Access quick, transparent, and secure microloans tailored to your needs. No hidden fees, just straightforward growth.</p>
                         <div className='flex flex-col sm:flex-row gap-4'>
                            <a className='px-8 py-4 bg-amber-500 text-slate-900 font-bold rounded-xl hover:bg-amber-600 transition-all shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2' href="" data-discover="true">Apply for Loan <FaArrowRightLong /></a>
                            <a className='px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all flex items-center justify-center' href="" data-discover="true">Learn More</a>
                         </div>
                    </div>
       {/* Right side */}
                    <div className='hidden md:block relative opacity: 1; transform: none;'>
                        <div className='relative z-10 rounded-2xl overflow-hidden shadow-2xl border-4 border-slate-800/50'>
                        <img className="w-full h-auto object-cover" src={banner} alt="" />
                        <div className='absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg'>
                        <div className='flex items-center gap-4'>
                            <div className='p-3 bg-green-100 rounded-full text-green-600'>
                                <LuCircleCheckBig size={24} />

                            </div>
                            <div>
                                <p className='font-bold text-slate-900'>Loan Approved</p>
                                <p className='text-sm text-slate-500'>Just now • $5,000.00</p>
                            </div>
                        </div>
                        </div>
                        </div>
                        <div className='absolute -top-10 -right-10 w-32 h-32 bg-amber-500/20 rounded-full blur-2xl'>
                        </div>
                        <div className='absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-2xl'>

                        </div>


                    </div>

                </div>

            </div>
        </div>
    );
};

export default Banner;