// import React from "react";
// import { useForm } from "react-hook-form";
// import { Link } from "react-router";
// import useAuth from "../../../hooks/useAuth";
// import { FcGoogle } from "react-icons/fc";

// const Login = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const {signInUser} = useAuth();

//   const handleLogin = (data) => {
//     console.log("form data", data);
//     signInUser(data.email, data.password)
//     .then(result => {
//         console.log(result.user)
//     })
//     .catch(error => {
//         console.log(error)
//     })
//   };

//   return (
//     <div className="flex-grow">
//       <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl">
//           <div className="text-center">
//             <h2 className="text-3xl font-extrabold text-slate-900">
//               Welcome Back
//             </h2>
//             <p className="mt-2 text-sm text-slate-600">
//               Sign in to your account
//             </p>
//           </div>

//           {/* from */}
//           <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6">
//             <div className="rounded-md space-y-4">
//               {/* Email field */}
//               <div>
//                 <label className="text-sm font-medium text-slate-700">
//                   Email address
//                 </label>
//                 <input
//                   type="email"
//                   {...register("email", { required: true })}
//                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
//                 />
//                 {errors.email?.type === "required" && (
//                   <p className="text-red-500">Email is required.</p>
//                 )}
//               </div>

//               {/* Password field */}
//               <div>
//                 <label className="text-sm font-medium text-slate-700">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   {...register("password", {
//                     required: true,
//                     minLength: 6,
//                     pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
//                   })}
//                   className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm"
//                 />
//                 {errors.password?.type === "required" && (
//                   <p className="text-red-500">Password is required.</p>
//                 )}
//                 {errors.password?.type === "minLength" && (
//                   <p className="text-red-500">
//                     Password must be 6 characters or longer.
//                   </p>
//                 )}
//                 {errors.password?.type === "pattern" && (
//                   <p className="text-red-500">
//                     Password must contain 1 uppercase, 1 lowercase letter and be
//                     at least 6 characters.
//                   </p>
//                 )}
//               </div>
//             </div>
//             <div>
//               <button
//                 type="submit"
//                 className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors shadow-lg"
//               >
//                 Sign in
//               </button>
//             </div>
//              </form>
//             <div className="relative">
//               <div className="absolute inset-0 flex items-center">
//                 {/* border */}
//                 <div className='class="w-full border-t border-gray-300"'></div>
//               </div>
//               <div className="relative flex justify-center text-sm">
//                 <span className="px-2 bg-white text-gray-500">
//                   Or continue with
//                 </span>
//               </div>
//             </div>
//             {/* button */}
//             <div>
//               <button className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
//                <FcGoogle size={20}/> Sign in with Google
//               </button>
//             </div>
//             <div className="text-center">
//               <p>
//                 Don't have an account? <Link to="/register" className="text-[#ff9900] hover:text-[#e07000]">Create one</Link>
//               </p>
//             </div>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../../hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import authImage from "../../../assets/authImage.png";
import SocialLogin from "../SocilaLogin/SocialLogin";
import toast from "react-hot-toast";
import { saveOrUpdateUser } from "../../../utils";

const Login = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { signInUser, user } = useAuth();

   const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

  const handleLogin = async (data) => {
    

    try {
    const {user} = await  signInUser(data.email, data.password)

    await saveOrUpdateUser({name:user?.displayName, email:user?.email, image: user?.photoURL})

    navigate (from, {replace: true})
    toast.success('Login Successful')

    } catch (error) {
       console.log(error)
       toast.error(error?.message)
    }
  }

  // const handleLogin = (data) => {
  //   console.log("form data", data);
  //   signInUser(data.email, data.password)
  //     .then((result) => {
  //       console.log(result.user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    <div className="flex-grow">
      <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">

        {/* MAIN WRAPPER - FORM + IMAGE */}
        <div className="flex border rounded-2xl shadow-xl bg-white overflow-hidden">

          {/* LEFT SIDE : FORM */}
          <div className="max-w-md w-full space-y-8 p-10">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Sign in to your account
              </p>
            </div>

            {/* FORM */}
            <form onSubmit={handleSubmit(handleLogin)} className="mt-8 space-y-6">
              <div className="rounded-md space-y-4">

                {/* Email */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Email address
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-500">Email is required.</p>
                  )}
                </div>

                {/* Password */}
                <div>
                  <label className="text-sm font-medium text-slate-700">
                    Password
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: true,
                      minLength: 6,
                      pattern: /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/,
                    })}
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 sm:text-sm"
                  />
                  {errors.password?.type === "required" && (
                    <p className="text-red-500">Password is required.</p>
                  )}
                  {errors.password?.type === "minLength" && (
                    <p className="text-red-500">
                      Password must be at least 6 characters.
                    </p>
                  )}
                  {errors.password?.type === "pattern" && (
                    <p className="text-red-500">
                      Password must contain 1 uppercase & 1 lowercase letter.
                    </p>
                  )}
                </div>
              </div>

              {/* SIGN IN BUTTON */}
              <button
                type="submit"
                className="w-full flex justify-center py-3 px-4 text-sm font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-600 focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors shadow-lg"
              >
                Sign in
              </button>
            </form>

            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            {/* GOOGLE BUTTON */}
            {/* <button className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
              <FcGoogle size={20} /> Sign in with Google
            </button> */}
            <SocialLogin></SocialLogin>

            <div className="text-center">
              <p>
                Don't have an account?{" "}
                <Link to="/register" className="text-[#ff9900] hover:text-[#e07000]">
                  Create one
                </Link>
              </p>
            </div>
          </div>

          {/* RIGHT SIDE : IMAGE */}
          <div className="hidden md:flex items-center justify-center bg-gray-50 p-6">
            <img
              src={authImage}
              alt="auth"
              className="w-[520px] h-auto object-contain"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Login;
