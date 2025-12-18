import React, { useState } from "react";
import { BsCalendar, BsCheckCircle, BsEye, BsXCircle } from "react-icons/bs";
import { FaDollarSign } from "react-icons/fa6";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "../../../components/Shared/LoadinSpinner/LoadingSpinner";
import PendingApplicationCard from "../../../components/Dashboard/TableRowsCard/PendingApplicationCard";
import PendingApplicationDetailsModal from "../../../components/PendingApplicationDetailsModal/PendingApplicationDetailsModal";

const PendingApplications = () => {
  const { user } = useAuth();

  const [selectedApp, setSelectedApp] = useState(null);

  const {
    data: pendingApplications = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["pending-loans", user?.email],
    queryFn: async () => {
      const result = await axios(
        `${import.meta.env.VITE_API_URL}/pending-applications/${user?.email}`
      );
      return result.data;
    },
  });
  console.log(pendingApplications);

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          Pending Applications
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Review and take action on new loan requests.
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  App ID
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Borrower
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Loan Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
              {pendingApplications.length > 0 ? (
                pendingApplications.map((pendingData) => {
                  return (
                    <PendingApplicationCard
                      key={pendingData._id}
                      pendingData={pendingData}
                      setSelectedApp={setSelectedApp}
                    ></PendingApplicationCard>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-slate-500"
                  >
                    No pending applications.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          {selectedApp && (
            <PendingApplicationDetailsModal
            selectedApp={selectedApp}
            closeModal={() => setSelectedApp(null)}
          ></PendingApplicationDetailsModal>
          )}
        </div>
      </div>
    </div>
  );
};

export default PendingApplications;
