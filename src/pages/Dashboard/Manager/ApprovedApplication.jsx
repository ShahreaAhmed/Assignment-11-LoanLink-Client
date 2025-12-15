import React from "react";
import { BsCalendar, BsCheckCircle } from "react-icons/bs";

const ApprovedApplication = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Approved Applications
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          History of all successfully sanctioned loans.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Loan ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Borrower
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount Sanctioned
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Approval Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
              {/* {approvedApps.length > 0 ? (
                approvedApps.map((app) => ( */}
                  <tr
                    // key={app.id}
                    className="hover:bg-gray-50 dark:hover:bg-slate-800"
                  >
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-500 dark:text-slate-400">
                      {/* #{app.id} */}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-600 dark:text-slate-300">
                          {/* {app.borrowerName.charAt(0)} */}
                        </div>
                        <div className="ml-3">
                          <div className="text-sm font-medium text-slate-900 dark:text-white">
                            {/* {app.borrowerName} */}
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-400">
                            {/* {app.borrowerEmail} */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-sm font-bold text-slate-900 dark:text-white">
                        {/* ${app.amount.toLocaleString()} */}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 block">
                        {/* Term: {app.termMonths} Months */}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center gap-1">
                        <BsCalendar size={14} />
                        {/* {app.approvedDate || "Recently"} */}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 flex items-center gap-1 w-max">
                        <BsCheckCircle size={12} /> Approved
                      </span>
                    </td>
                  </tr>
                {/* ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-slate-500"
                  >
                    No approved loans yet.
                  </td>
                </tr>
              )} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ApprovedApplication;
