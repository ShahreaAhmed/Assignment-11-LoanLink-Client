import React, { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BsCheckCircle, BsCreditCard, BsEye, BsXCircle } from "react-icons/bs";
import MyLoansCard from "../../../components/Dashboard/TableRowsCard/MyLoansCard";
import useAuth from "../../../hooks/useAuth";
import { Link, useSearchParams } from "react-router";
import LoadingSpinner from "../../../components/Shared/LoadinSpinner/LoadingSpinner";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const MyLoans = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure()

  
    const [searchParams] = useSearchParams();
  
    const sessionId = searchParams.get('session_id')
    console.log(sessionId)
  
    useEffect(() => {
      if(sessionId) {
          axios.post(`${import.meta.env.VITE_API_URL}/payment-paid`, {sessionId}
      );
      }
    }, [sessionId])


  const {
    data: loans = [],
    isLoading
  } = useQuery({
    queryKey: ["my-loans", user?.email],
    queryFn: async () => {
      const result = await axiosSecure(
        `/my-loans`
      );
      return result.data;
    },
});

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
          My Loan Applications
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Track status and manage your payments
        </p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-slate-700">
            <thead className="bg-gray-50 dark:bg-slate-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Loan Info
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Applied Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
              {loans.length > 0 ? (
                loans.map((loan) => (
                  <MyLoansCard key={loan._id} loan={loan}></MyLoansCard>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="px-6 py-12 text-center text-slate-500"
                  >
                    No loan applications found.{" "}
                    <Link
                      to="/all-loans"
                      className="text-amber-600 hover:underline"
                    >
                      Apply now
                    </Link>
                    .
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyLoans;
