import React from "react";
import { useForm } from "react-hook-form";
import { FiUpload } from "react-icons/fi";
import { imageUpload } from "../../utils";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import LoadingSpinner from "../Shared/LoadinSpinner/LoadingSpinner";
import { LuChartPie } from "react-icons/lu";
import toast from "react-hot-toast";

const AddLoanForm = () => {
  
    const {user} = useAuth();
  
    // useMutation hook useCase Tanstack query
    const {isPending, isError, mutateAsync, reset:mutationReset} = useMutation({
      mutationFn: async (payLoad) => await axios.post(`${import.meta.env.VITE_API_URL}/loans`, payLoad),
      onSuccess: data => {
        console.log(data)
  
        // show toast
        toast.success('Loan Added Successfully.')
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
    } = useForm();
  
    const onSubmit = async (data) => {
      console.log("loan form data", data);
  
      const { title, category, description, interest, maxLoanLimit, emiPlans, photo } =
        data;
      const imageFile = photo[0];
  
  
      try{
            const imageURL = await imageUpload(imageFile);
  
      const loanData = {
        image: imageURL,
        title,
        category,
        description,
        interest: Number(interest),
        maxLoanLimit: Number(maxLoanLimit),
        emiPlans,
        createdBy: {
          image: user?.photoURL,
          name: user?.displayName,
          email: user?.email
        },
      };
  
      await mutateAsync(loanData)
      reset()
  
      }catch(err){
        console.log(err)
      }
    };
  
    if (isPending) return <LoadingSpinner></LoadingSpinner>
  
    return (
      <div className="flex-1 overflow-y-auto p-4 md:p-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                Add New Loan Package
              </h1>
              <p className="text-slate-500 dark:text-slate-400">
                Create a new financial product for borrowers.
              </p>
            </div>
            <div className="bg-white dark:bg-slate-900 rounded-xl shadow-sm border border-gray-200 dark:border-slate-700 overflow-hidden">
              <div className="border-b border-gray-100 dark:border-slate-800 bg-gray-50 dark:bg-slate-800 px-6 py-4">
                <h3 className="text-slate-800 dark:text-white font-semibold flex items-center gap-2">
                  <LuChartPie />
                  Loan Details
                </h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)} className="p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Loan Title
                    </label>
                    <input
                      type="text"
                      {...register("title", { required: true })}
                      className="w-full border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2.5 border dark:bg-slate-700 dark:text-white"
                      placeholder="e.g. Small Business Starter"
                    />
                    {errors.title?.type === "required" && (
                      <p className="text-red-500">Title is required.</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Category
                    </label>
                    <select
                      name=""
                      {...register("category", { required: true })}
                      className="w-full border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2.5 border dark:bg-slate-700 dark:text-white"
                    >
                      <option value="business">Business</option>
                      <option value="personal">Personal</option>
                      <option value="education">Education</option>
                      <option value="agriculture">Agriculture</option>
                      <option value="technology">Technology</option>
                      <option value="health">Health</option>
                    </select>
                    {errors.category?.type === "required" && (
                      <p className="text-red-500">Category is required.</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    {...register("description", { required: true })}
                    className="w-full border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2.5 border dark:bg-slate-700 dark:text-white"
                    placeholder="Describe the loan purpose and benefits..."
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <p className="text-red-500">Description is required.</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Interest Rate (%)
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        id="interest"
                        {...register("interest", { required: true })}
                        className="w-full border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2.5 border pl-4 dark:bg-slate-700 dark:text-white"
                        placeholder="5.0"
                      />
                      {errors.interest?.type === "required" && (
                        <p className="text-red-500">
                          Interest percentage is required.
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Max Loan Limit
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <span className="text-gray-500">$</span>
                      </div>
                      <input
                        type="number"
                        id="maxLoanLimit"
                        {...register("maxLoanLimit", { required: true, min: 0 })}
                        className="w-full border-gray-300 dark:border-slate-600 rounded-lg shadow-sm focus:ring-amber-500 focus:border-amber-500 p-2.5 border pl-8 dark:bg-slate-700 dark:text-white"
                        placeholder="10000"
                      />
                      {errors.maxLoanLimit?.type === "required" && (
                        <p className="text-red-500">
                          Max Loan Limit is required.
                        </p>
                      )}
                      {errors.maxLoanLimit?.type === "min" && (
                        <p className="text-red-500">
                          Loan amount cannot be negative.
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Cover Image URL
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    type="file"
                    className="appearance-none relative block w-full  border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm file-input file:text-[#ff9900] "
                  />
                  {errors.photo?.type === "required" && (
                    <p className="text-red-500">Photo is required.</p>
                  )}
                  <p className="text-xs text-gray-500 mt-1">
                    Leave blank to use a default placeholder.
                  </p>
                </div>
  
                {/* EMI plan */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
                    Available EMI Plans (Months)
                  </label>
  
                  <div className="flex flex-wrap gap-4">
                    {/* 3 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={3}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        3 Months
                      </span>
                    </label>
  
                    {/* 6 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={6}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        6 Months
                      </span>
                    </label>
  
                    {/* 12 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={12}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        12 Months
                      </span>
                    </label>
  
                    {/* 18 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={18}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        18 Months
                      </span>
                    </label>
  
                    {/* 24 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={24}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        24 Months
                      </span>
                    </label>
  
                    {/* 36 months plan */}
                    <label className="flex items-center space-x-2 p-3 border dark:border-slate-600 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("emiPlans")}
                        value={36}
                        className="h-4 w-4 text-amber-500 focus:ring-amber-500 border-gray-300 rounded"
                      />
                      <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                        36 Months
                      </span>
                    </label>
                  </div>
                </div>
  
                {/* show home page checkbox */}
                <div className="flex items-center gap-3 pt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name=""
                      className="focus:ring-amber-500 h-5 w-5 text-amber-500 border-gray-300 rounded"
                    />
                  </div>
  
                  <div className="ml-2 text-sm">
                    <label className="font-medium text-slate-700 dark:text-slate-300">
                      Show on Homepage
                    </label>
                    <p className="text-slate-500 dark:text-slate-400">
                      Make this loan visible in the 'Available Loans' section
                      immediately.
                    </p>
                  </div>
                </div>
  
                {/* border and button */}
                <div className="pt-6 border-t border-gray-100 dark:border-slate-700 flex justify-end gap-3">
                  <button
                    type="button"
                    className="px-6 py-2.5 border border-gray-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-amber-500 text-slate-900 font-bold rounded-lg shadow hover:bg-amber-600 transition-colors flex items-center gap-2 disabled:opacity-50"
                  >
                    <FiUpload size={18} /> 
  
                    {
                      isPending ? (
                        <ImSpinner9 className="animate-spin m-auto" />
                      ) : (
                        "Publish Loan"
                      )
                    }
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default AddLoanForm;
