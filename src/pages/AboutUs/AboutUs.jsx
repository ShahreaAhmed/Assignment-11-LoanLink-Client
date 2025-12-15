import React from 'react';
import { motion } from 'framer-motion';
import { LuShield, LuUsers } from "react-icons/lu";
import { FiAward, FiTarget } from 'react-icons/fi';

const AboutUs = () => {
    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-200">
      {/* Hero */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-amber-500 rounded-full blur-3xl opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold font-serif mb-6"
          >
            Empowering Financial Dreams
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 max-w-2xl mx-auto"
          >
            We are LoanLink. A dedicated team bridging the gap between ambition and opportunity through accessible microfinance solutions.
          </motion.p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 font-serif">Our Mission</h2>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                At LoanLink, we believe that access to capital shouldn't be a privilege. It should be a right for every aspiring entrepreneur, student, and individual facing a financial hurdle. 
              </p>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                Our platform connects borrowers with verified loan officers to facilitate quick, transparent, and secure microloans. We are committed to reducing the bureaucracy of traditional banking.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               <img src="https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team" className="rounded-2xl shadow-lg mt-8" />
               <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Meeting" className="rounded-2xl shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white font-serif">Core Values</h2>
           </div>
           <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: LuShield, title: "Integrity", desc: "We operate with complete transparency and honesty." },
                { icon: FiTarget, title: "Impact", desc: "We focus on real-world financial empowerment." },
                { icon: LuUsers, title: "Community", desc: "Building a network of trust between lenders and borrowers." },
                { icon: FiAward, title: "Excellence", desc: "Striving for the highest standards in service." }
              ].map((item, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-md text-center hover:-translate-y-2 transition-transform duration-300">
                   <div className="w-14 h-14 bg-amber-100 dark:bg-slate-800 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon size={28} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                   <p className="text-slate-500 dark:text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
           </div>
        </div>
      </section>
    </div>
    );
};

export default AboutUs;