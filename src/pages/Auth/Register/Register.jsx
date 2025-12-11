import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import SocialLogin from "../SocilaLogin/SocialLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser } = useAuth();

  const handleRegistration = (data) => {
    console.log("after register", data);
    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    // <div>
    <div className="flex-grow">
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Create Account
            </h2>
            <p className="mt-2 text-sm text-slate-600">Join LoanLink today</p>
          </div>
          {/* Register form */}
          <form
            onSubmit={handleSubmit(handleRegistration)}
            className="mt-8 space-y-6"
          >
            <div className="rounded-md space-y-4">
              {/* Name field */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Full Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                />
                {errors.name?.type === "required" && (
                  <p className="text-red-500">Name is required.</p>
                )}
              </div>

              {/* email field*/}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Email address
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500">Email is required.</p>
                )}
              </div>

              {/* Password field */}
              <div>
                <label className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                  })}
                  type="password"
                  className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
                />
                {errors.password?.type === "required" && (
                  <p className="text-red-500">Password is required.</p>
                )}
                {errors.password?.type === "minLength" && (
                  <p className="text-red-500">
                    Password must be 6 characters or longer.
                  </p>
                )}
                {errors.password?.type === "pattern" && (
                  <p className="text-red-500">
                    Password must contain 1 uppercase, 1 lowercase letter and be
                    at least 6 characters.
                  </p>
                )}
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors shadow-lg"
              >
                Register
              </button>
            </div>
            </form>
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                {/* border */}
                <div className='class="w-full border-t border-gray-300"'></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>
            {/* button */}
            {/* <div>
              <button className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <FcGoogle size={20}/>
                Sign in with Google
              </button>
            </div> */}
            <SocialLogin></SocialLogin>
            <div className="text-center">
              <p>
                Already have an account? <Link to="/login">Sign in</Link>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
