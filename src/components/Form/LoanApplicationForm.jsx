import React from "react";
import { useForm } from "react-hook-form";
// import { imageUpload } from "../../utils";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadinSpinner/LoadingSpinner";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useLocation, useNavigate } from "react-router";
import toast from "react-hot-toast";

const LoanApplicationForm = () => {

  const navigate = useNavigate();

  const location = useLocation();
  const loan = location.state || {};

  const {_id, title, category, createdBy, interest, maxLoanLimit} = loan;

  const {user} = useAuth();

  const {data, isPending, isError, mutateAsync, reset:mutationReset} = useMutation({
    mutationFn: async (payLoad) => await axios.post(`${import.meta.env.VITE_API_URL}/borrowerLoansApply`, payLoad),
    onSuccess: data => {
      console.log(data)

      //show toast
      toast.success('Loan Request Successfully.')
        mutationReset()
    },
    onError: error => {
      console.log(error)
    },
    onMutate: payLoad => {
      console.log('I will post this data---->', payLoad)
    },
    onSettled: (data, error) => {
      if (data) console.log(data)
        if(error) console.log(error)
    },
  retry: 3
  })
 

  //React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm(
    {
      defaultValues:{
        email: user?.email,
        interest: interest
      }
    }
  );

  const onSubmit = async (data) => {
    console.log("loan form data", data);

    const {
      firstName,
        lastName,
        phone, 
        nid,
        incomeSource,
        monthlyIncome,
        loanAmount,
        address,
        reason,
    } = data;
    // const imageFile = photo[0];

    try {
    //   const imageURL = await imageUpload(imageFile);

      const borrowerLoanData = {
        // image: imageURL,
        name: `${firstName} ${lastName}`,
        borrowerEmail: user?.email,
        title,
        category,
        interest: Number(interest),
        phone, 
        nid, 
        incomeSource,
        monthlyIncome: Number(monthlyIncome),
        loanAmount: Number(loanAmount),
        address,
        reason,
        // maxLoanLimit: Number(maxLoanLimit),
        // emiPlans,
        manager: {
          image: createdBy?.image,
          name: createdBy?.name,
          email: createdBy?.email,
        },
      };

      await mutateAsync(borrowerLoanData)
      reset()
    } catch (err) {
      console.log(err);
    }
  };

  if (isPending) return <LoadingSpinner></LoadingSpinner>

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-800 py-12 transition-colors">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-slate-700">
          <div className="bg-slate-900 p-6 text-white flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold">Loan Application</h2>
              <p className="text-slate-400 text-sm">
                Fill in the details accurately
              </p>
            </div>
            <div className="text-right">
              <p className="text-amber-500 font-bold">{title}</p>
              <p className="text-xs">Interest: {interest}%</p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
            {/* Auto Filled */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  // value={user?.email}
                  disabled
                  {...register("email", { required: true })}
                  className="mt-1 block w-full bg-gray-100 dark:bg-slate-800 border-gray-300 dark:border-slate-700 rounded-md shadow-sm p-2 text-slate-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                  Loan Interest Rate
                </label>
                <input
                  type="number"
                  // defaultValues={interest}
                  disabled
                  {...register("interest", { required: true })}
                  className="mt-1 block w-full bg-gray-100 dark:bg-slate-800 border-gray-300 dark:border-slate-700 rounded-md shadow-sm p-2 text-slate-500"
                />
              </div>
            </div>

            {/* Personal Info */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    First Name
                  </label>
                  <input
                    // onChange={handleChange}
                    type="text"
                    {...register("firstName", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Last Name
                  </label>
                  <input
                    // onChange={handleChange}
                    type="text"
                    {...register("lastName", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Contact Number
                  </label>
                  <input
                    // onChange={handleChange}
                    type="tel"
                    {...register("phone", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    National ID / Passport
                  </label>
                  <input
                    // onChange={handleChange}
                    type="text"
                    {...register("nid", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Financial Info */}
            <div className="border-t border-gray-200 dark:border-slate-700 pt-4">
              <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-4">
                Financial Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Income Source
                  </label>
                  <select
                    // onChange={handleChange}
                    {...register("incomeSource", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  >
                    <option value="">Select...</option>
                    <option value="Business">Business</option>
                    <option value="Employment">Employment</option>
                    <option value="Freelance">Freelance</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Monthly Income ($)
                  </label>
                  <input
                    // onChange={handleChange}
                    type="number"
                    {...register("monthlyIncome", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Requested Amount (Max: {maxLoanLimit})
                  </label>
                  <input
                    max={maxLoanLimit}
                    // onChange={handleChange}
                    type="number"
                    {...register("loanAmount", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Address
                  </label>
                  <textarea
                    // onChange={handleChange}
                    rows={2}
                    {...register("address", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                    Reason for Loan
                  </label>
                  <textarea
                    // onChange={handleChange}
                    rows={3}
                    {...register("reason", { required: true })}
                    className="mt-1 block w-full border border-gray-300 dark:border-slate-600 rounded-md shadow-sm p-2 focus:ring-amber-500 focus:border-amber-500 dark:bg-slate-800 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="pt-4 flex justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 border border-gray-300 dark:border-slate-600 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-gray-50 dark:hover:bg-slate-800"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-8 py-3 bg-amber-500 text-white font-bold rounded-lg shadow hover:bg-amber-600 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoanApplicationForm;
