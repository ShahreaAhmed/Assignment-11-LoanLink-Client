import React, { useState } from "react";
import { BsBriefcase, BsCheckCircle, BsCheckCircleFill, BsX, BsXCircle } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaDollarSign, FaMapPin } from "react-icons/fa6";
import { FiFileText } from "react-icons/fi";

const PendingApplicationDetailsModal = ({selectedApp, closeModal}) => {
    
    const {name, borrowerEmail, nid, phone, interest, monthlyIncome,incomeSource, createdAt, reason, address, category, title, loanAmount, emiPlans} = selectedApp;

    let formattedDate = "";
  if (createdAt) {
    const dateObj = new Date(createdAt);
    formattedDate = dateObj.toISOString().slice(0, 10);
  }

if (!selectedApp) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"

      ></div>
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-3xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Header */}
        <div className="bg-slate-900 p-6 flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FiFileText className="text-amber-500" /> Application Details
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Review complete applicant information
            </p>
          </div>
          <button
            onClick={closeModal}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <BsX size={24} />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-8 overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Borrower Info Column */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-700 pb-2 mb-4">
                Borrower Information
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <FaUser className="text-amber-500 mt-1" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Full Name
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {/* {selectedApp.borrowerName} */}
                      {name}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">
                      {/* {selectedApp.borrowerEmail} */}
                      {borrowerEmail}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-500 text-xs font-bold border border-amber-500 rounded px-1">
                    ID
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      National ID / Passport
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {/* {selectedApp.nid || "N/A"} */}
                      {nid}
                      nid
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <FaMapPin className="text-amber-500 mt-1" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Address
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {address}
                      address
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="mt-1 text-amber-500 font-bold">📞</div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Phone
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {phone}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-slate-700/50 p-4 rounded-lg mt-4">
                <div className="flex items-start gap-3 mb-2">
                  <BsBriefcase className="text-amber-500 mt-1" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Income Source
                    </p>
                    <p className="text-slate-900 dark:text-white font-medium">
                      {incomeSource || "N/A"}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaDollarSign className="text-amber-500 mt-1" size={18} />
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Monthly Income
                    </p>
                    <p className="text-slate-900 dark:text-white font-bold">
                      ${monthlyIncome}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Loan Info Column */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white border-b border-gray-200 dark:border-slate-700 pb-2 mb-4">
                Loan Request Details
              </h4>

              <div className="bg-amber-50 dark:bg-slate-700/30 border border-amber-100 dark:border-slate-600 rounded-lg p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Loan Title
                    </p>
                    <h5 className="text-lg font-bold text-slate-900 dark:text-white">
                      {title}
                    </h5>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">
                      Amount
                    </p>
                    <h5 className="text-xl font-bold text-amber-600">
                      ${loanAmount}
                    </h5>
                  </div>
                </div>

                
                  
                    <div className="grid grid-cols-2 gap-4 text-sm border-t border-amber-100 dark:border-slate-600 pt-4">
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Category
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {/* {loanInfo?.category || "N/A"} */}
                          {category}
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Interest Rate
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {/* {loanInfo?.interestRate} */}
                          {interest}%
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Term
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {emiPlans}
                            Months
                        </p>
                      </div>
                      <div>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">
                          Applied Date
                        </p>
                        <p className="font-semibold text-slate-900 dark:text-white">
                          {formattedDate}
                        </p>
                      </div>
                    </div>
                 
               
              </div>

              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold mb-2">
                  Reason for Loan
                </p>
                <div className="bg-gray-50 dark:bg-slate-800 p-4 rounded-lg border border-gray-200 dark:border-slate-700 text-sm italic text-slate-600 dark:text-slate-300">
                  "{reason}"
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer (Actions) */}
        <div className="bg-gray-50 dark:bg-slate-800 p-6 border-t border-gray-200 dark:border-slate-700 flex justify-end gap-4">
          <button
            // onClick={() => handleAction(selectedApp.id, "reject")}
            className="flex items-center gap-2 px-6 py-3 border border-red-200 text-red-600 rounded-lg hover:bg-red-50 dark:border-red-900/30 dark:hover:bg-red-900/20 font-bold transition-colors"
          >
            <BsXCircle size={18} /> Reject
          </button>
          <button
            // onClick={() => handleAction(selectedApp.id, "approve")}
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 shadow-lg font-bold transition-colors"
          >
            <BsCheckCircleFill size={18} /> Approve Application
          </button>
        </div>
      </div>
    </div>
  );
};

export default PendingApplicationDetailsModal;
