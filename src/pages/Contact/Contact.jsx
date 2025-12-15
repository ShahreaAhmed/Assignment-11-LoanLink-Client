import React from 'react';
import { BsMailbox, BsPhone, BsSend } from 'react-icons/bs';
import { FaMapPin } from 'react-icons/fa';
import { FiPhone } from 'react-icons/fi';
import { LuMapPin, LuSend } from 'react-icons/lu';
import { MdMailOutline } from 'react-icons/md';

const Contact = () => {
    return (
        <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-200 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white font-serif mb-4">Get in Touch</h1>
            <p className="text-slate-600 dark:text-slate-400 text-lg">Have questions about a loan? We're here to help.</p>
         </div>

         <div className="grid md:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-6">
               <div className="bg-amber-50 dark:bg-slate-800 p-8 rounded-2xl">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Contact Info</h3>
                  
                  <div className="space-y-6">
                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-slate-700 rounded-lg text-amber-600 shadow-sm">
                          <LuMapPin size={24} />
                        </div>
                        <div>
                           <p className="font-bold text-slate-900 dark:text-white">Headquarters</p>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">123 Finance District,<br/>Innovation Tower, NY</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-slate-700 rounded-lg text-amber-600 shadow-sm">
                           <FiPhone size={24} />
                        </div>
                        <div>
                           <p className="font-bold text-slate-900 dark:text-white">Phone</p>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">+1 (555) 123-4567</p>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">Mon-Fri, 9am - 6pm</p>
                        </div>
                     </div>

                     <div className="flex items-start gap-4">
                        <div className="p-3 bg-white dark:bg-slate-700 rounded-lg text-amber-600 shadow-sm">
                           <MdMailOutline size={24}/>
                        </div>
                        <div>
                           <p className="font-bold text-slate-900 dark:text-white">Email</p>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">support@loanlink.com</p>
                           <p className="text-slate-500 dark:text-slate-400 text-sm">info@loanlink.com</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            {/* Form */}
            <div className="md:col-span-2">
               <form className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-slate-700">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send us a Message</h3>
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                     <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Your Name</label>
                        <input 
                           required 
                           type="text" 
                        //    value={formData.name}
                        //    onChange={e => setFormData({...formData, name: e.target.value})}
                           className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:bg-slate-800 dark:text-white"
                        />
                     </div>
                     <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email Address</label>
                        <input 
                           required 
                           type="email" 
                        //    value={formData.email}
                        //    onChange={e => setFormData({...formData, email: e.target.value})}
                           className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:bg-slate-800 dark:text-white"
                        />
                     </div>
                  </div>
                  <div className="mb-6">
                     <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                     <textarea 
                        required 
                        rows={6}
                        // value={formData.message}
                        // onChange={e => setFormData({...formData, message: e.target.value})}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-slate-600 focus:ring-2 focus:ring-amber-500 dark:bg-slate-800 dark:text-white"
                     ></textarea>
                  </div>
                  <button type="submit" className="w-full md:w-auto px-8 py-3 bg-amber-500 text-white font-bold rounded-lg hover:bg-amber-600 transition-colors flex items-center justify-center gap-2">
                     <LuSend size={18} /> Send Message
                  </button>
               </form>
            </div>
         </div>
      </div>
    </div>
    );
};

export default Contact;