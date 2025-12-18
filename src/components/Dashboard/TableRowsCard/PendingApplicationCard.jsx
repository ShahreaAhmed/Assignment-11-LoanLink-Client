import React, { useState } from "react";
import { BsCalendar, BsCheckCircle, BsEye, BsXCircle } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";

const PendingApplicationCard = ({ pendingData, setSelectedApp }) => {
  const { _id, name, borrowerEmail, title, loanAmount, createdAt, phone, address, reason, monthlyIncome, nid } =
    pendingData;
    console.log(pendingData)

    let formattedDate = "";
  if (createdAt) {
    const dateObj = new Date(createdAt);
    formattedDate = dateObj.toISOString().slice(0, 10);
  }

 

  return (
        <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-900 dark:text-white">
            #app{_id}
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm font-bold text-slate-900 dark:text-white">
              {name}
            </div>
            <div className="text-xs text-slate-500 dark:text-slate-400">
              {borrowerEmail}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-slate-900 dark:text-white">
              {title}
            </div>
            <div className="text-sm font-semibold text-amber-600 mt-1 flex items-center gap-1">
              <FaDollarSign size={14} />
              {/* {app.amount.toLocaleString()} */}
              {loanAmount}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">
            <div className="flex items-center gap-1">
              <BsCalendar size={14} />
              {/* {app.appliedDate} */}
              {formattedDate}
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
            <div className="flex items-center gap-2">
              <button
              onClick={() => setSelectedApp(pendingData)}
                // onClick={() => setSelectedApp(selectedApp === app.id ? null : app.id)}
                className="text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 p-1"
                title="View Details"
              >
                <BsEye size={20} />
              </button>
              <div className="h-4 w-px bg-gray-300 dark:bg-slate-600 mx-1"></div>
              <button
                // onClick={() => handleAction(app.id, 'approve')}
                className="text-green-600 hover:text-green-800 p-1"
                title="Approve"
              >
                <BsCheckCircle size={20} />
              </button>
              <button
                // onClick={() => handleAction(app.id, 'reject')}
                className="text-red-500 hover:text-red-700 p-1"
                title="Reject"
              >
                <BsXCircle size={20} />
              </button>
            </div>
          </td>
        </tr>
  );
};

export default PendingApplicationCard;
