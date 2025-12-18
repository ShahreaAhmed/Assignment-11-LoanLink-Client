import React from 'react';
import { BsCheckSquare, BsSearch, BsSquare, BsTrash2 } from "react-icons/bs";
import { FiEdit2 } from "react-icons/fi";

const ManagerAddLoanCard = ({created}) => {
    const {image, title, category, interest, maxLoanLimit} = created
    return (
         <tbody className="bg-white dark:bg-slate-900 divide-y divide-gray-200 dark:divide-slate-700">
              <tr className="hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="h-12 w-12 flex-shrink-0">
                      <img
                        className="h-12 w-12 rounded-lg object-cover"
                        src={image}
                        alt=""
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-bold text-slate-900 dark:text-white">
                        {title}
                      </div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-full inline-block mt-1">
                        {category}
                      </div>
                      {/* <div className="text-[10px] text-gray-400 mt-1">
                        Created By:
                        {created.createdBy.name}
                      </div> */}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="text-sm font-semibold text-amber-600 bg-amber-50 dark:bg-slate-800 px-3 py-1 rounded-lg">
                    {interest}%
                  </span>
                </td>
                {/* <td className="text-xs text-slate-500 dark:text-slate-400 bg-gray-100 dark:bg-slate-700 px-2 py-0.5 rounded-full inline-block mt-1"> */}
                <td className='px-6 py-4 whitespace-nowrap'>
                        {category}
                        </td>
                      {/* </td> */}
                <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-700 dark:text-slate-300 font-medium">
                  ${maxLoanLimit}
                </td>
                {/* {isAdmin && ( */}
                {/* <td className="px-6 py-4 whitespace-nowrap">
                                        <button 
                                            onClick={() => toggleShowOnHome(loan)}
                                            className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold transition-colors ${loan.showOnHome ? 'bg-green-100 text-green-700 hover:bg-green-200' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                                        >
                                            {loan.showOnHome ? <BsCheckSquare size={14} /> : <BsSquare size={14} />}
                                            {loan.showOnHome ? 'Visible' : 'Hidden'}
                                        </button>
                                    </td> */}
                {/* )} */}
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    // onClick={(e) => handleEditClick(e, loan)}
                    className="text-slate-400 hover:text-amber-600 mr-4 transition-colors inline-flex"
                    title="Edit"
                  >
                    <FiEdit2 size={18} />
                  </button>
                  <button
                    // onClick={(e) => handleDelete(e, loan.id)}
                    className="text-slate-400 hover:text-red-600 transition-colors inline-flex"
                    title="Delete"
                  >
                    <BsTrash2 size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
    );
};

export default ManagerAddLoanCard;