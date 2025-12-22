import React from 'react';
import { BsBarChart, BsGlobe, BsShield } from 'react-icons/bs';

const WhyChooseLoanLink = () => {
    return (
         <section className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-200">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 font-serif">Why Choose LoanLink?</h2>
               <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">We combine technology with empathy to provide the best financial services.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
               {[
                  { icon: BsGlobe, title: "Accessible Anywhere", desc: "Apply from the comfort of your home, anywhere in the country." },
                  { icon: BsBarChart, title: "Transparent Rates", desc: "What you see is what you pay. No hidden charges or fees." },
                  { icon: BsShield, title: "Bank-Grade Security", desc: "Your data is encrypted and protected by enterprise-grade security." }
               ].map((item, i) => (
                  <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md border border-gray-100 dark:border-slate-700 text-center">
                     <div className="w-16 h-16 bg-amber-50 dark:bg-slate-800 rounded-full flex items-center justify-center text-amber-600 mx-auto mb-6">
                        <item.icon size={32} />
                     </div>
                     <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{item.title}</h3>
                     <p className="text-slate-500 dark:text-slate-400">{item.desc}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    );
};

export default WhyChooseLoanLink;