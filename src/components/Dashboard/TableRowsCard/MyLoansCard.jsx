import React, { useEffect } from "react";
// import { BsCheckCircle, BsCreditCard, BsEye, BsXCircle } from "react-icons/bs";
import { FaRegTimesCircle } from "react-icons/fa";
import { FaRegCreditCard } from "react-icons/fa6";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import useAuth from "../../../hooks/useAuth";
import axios from "axios";

const MyLoansCard = ({ loan }) => {
  const { user } = useAuth();
//   const [searchParams] = useSearchParams();

//   const sessionId = searchParams.get('session_id')
//   console.log(sessionId)

//   useEffect(() => {
//     if(sessionId) {
//         axios.post(`${import.meta.env.VITE_API_URL}/payment-paid`, {sessionId}
//     );
//     }
//   }, [sessionId])

  const {
    _id,
    title,
    loanAmount,
    category,
    phone,
    nid,
    address,
    interest,
    createdAt,
  } = loan || {};

  // const date = new Date(createdAt)
  let formattedDate = "";
  if (createdAt) {
    const dateObj = new Date(createdAt);
    formattedDate = dateObj.toISOString().slice(0, 10);
  }

  const handlePayment = async () => {
    const paymentInfo = {
      loanId: _id,
      title,
      category,
      loanAmount,
      phone,
      nid,
      address,
      interest,
      createdAt,
      borrower: {
        name: user?.displayName,
        email: user?.email,
        image: user?.photoURL,
      },
    };

    const {data} = await axios.post(
      `${import.meta.env.VITE_API_URL}/create-checkout-session`,
      paymentInfo
    );
    window.location.href = data.url
  };

  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
      {/* Loan Info */}
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-slate-900 dark:text-white">
          {title}
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400">
          ID: {_id}
        </div>
      </td>

      {/* Amount */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
        ${loanAmount}
      </td>

      {/* Applied Data */}
      <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-300">
        {formattedDate}
      </td>

      {/* Status */}
      <td className="px-6 py-4 whitespace-nowrap">
        <span
          className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                        bg-yellow-100 text-yellow-800"
        >
          Pending
        </span>
      </td>

      {/* Action */}
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium flex items-center gap-3">
        <button
          className="text-blue-600 hover:text-blue-900 dark:text-blue-400 dark:hover:text-blue-300"
          title="View Details"
        >
          <MdOutlineRemoveRedEye size={20} />
        </button>
        <button className="text-red-600 hover:text-red-900 dark:text-red-400">
          <FaRegTimesCircle size={20} />
        </button>
        <button
          onClick={handlePayment}
          className="flex items-center gap-1 bg-amber-500 text-white px-3 py-1 rounded hover:bg-amber-600 transition-colors shadow-sm"
        >
          <FaRegCreditCard size={20} /> Pay Fee
        </button>
      </td>
    </tr>
  );
};

export default MyLoansCard;
