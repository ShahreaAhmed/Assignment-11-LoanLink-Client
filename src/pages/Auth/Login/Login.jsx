import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex-grow'>
            <div className='min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8'>
                <div className='max-w-md w-full space-y-8 bg-white p-10 rounded-2xl shadow-xl'>
                    <div className='text-center'>
                        <h2 className='text-3xl font-extrabold text-slate-900'>
                           Welcome Back
                        </h2>
                        <p className='mt-2 text-sm text-slate-600'>
                            Sign in to your account
                        </p>
                    </div>

                    {/* from */}
                    <form className='mt-8 space-y-6'>
                        <div className='rounded-md shadow-sm space-y-4'>
                            <div>
                                <label className='text-sm font-medium text-slate-700' >
                                    Email address
                                </label>
                                <input required type="email" name="" id="" className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm' />
                            </div>
                            <div>
                                <label className='text-sm font-medium text-slate-700'>Password</label>
                                <input required type="password" name="" id="" className='appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-amber-500 focus:border-amber-500 focus:z-10 sm:text-sm' />
                            </div>
                        </div>
                        <div>
                            <button type='submit' className='group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-slate-900 bg-amber-500 hover:bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors shadow-lg'>
                                Sign in
                            </button>
                        </div>
                        <div className='relative'>
                            <div className='absolute inset-0 flex items-center'>

                                {/* border */}
                                <div className='class="w-full border-t border-gray-300"'>
                                </div>
                            </div>
                            <div className='relative flex justify-center text-sm'>
                                <span className='px-2 bg-white text-gray-500'>
                                    Or continue with
                                </span>
                            </div>
                        </div>
                        {/* button */}
                        <div>
                            <button className='w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'>
                               Sign in with Google
                            </button>
                        </div>
                        <div className='text-center'>
                            <p>Don't have an account? <Link>
                            Create one</Link></p>
                        </div>
                    </form>

                </div>

            </div>
            
        </div>
    );
};

export default Login;