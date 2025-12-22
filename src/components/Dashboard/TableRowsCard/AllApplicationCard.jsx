import React from 'react';
import { BsCheckSquare, BsEye, BsSquareFill, BsTrash2 } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';

const AllApplicationCard = ({apply}) => {
    const {_id, name, borrower, loanAmount, status, category} = apply
    return (
        <>
                    <tr className="hover:bg-gray-50 dark:hover:bg-slate-800">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-500 dark:text-slate-400">#{_id}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-slate-900 dark:text-white">{name}</div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">{borrower}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-slate-900 dark:text-white">{category}</div>
                            <div className="text-sm font-bold text-amber-600">${loanAmount.toLocaleString()}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full 
                                ${status === "approved" ? 'bg-green-100 text-green-800' : 
                                status === "rejected" ? 'bg-red-100 text-red-800' : 
                                'bg-yellow-100 text-yellow-800'}`}>
                                {status}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <button 
                                // onClick={() => setSelectedApp(selectedApp === _id ? null : _id)}
                                className="text-blue-600 hover:text-blue-900 dark:hover:text-blue-400 flex items-center gap-1"
                            >
                                <BsEye size={16} /> View
                            </button>
                        </td>
                    </tr>
                    </>
    );
};

export default AllApplicationCard;