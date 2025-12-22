import React from 'react';

const OurCommunity = () => {
    return (
        <section className="py-20 bg-amber-500 text-slate-900">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
               <div>
                  <div className="text-4xl font-bold mb-2">15k+</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Loans Disbursed</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">$40M</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Capital Lent</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">98%</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Satisfaction Rate</div>
               </div>
               <div>
                  <div className="text-4xl font-bold mb-2">24h</div>
                  <div className="text-sm font-semibold uppercase tracking-wider opacity-80">Avg. Approval Time</div>
               </div>
            </div>
         </div>
      </section>
    );
};

export default OurCommunity;