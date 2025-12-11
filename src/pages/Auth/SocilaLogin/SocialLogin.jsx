import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';

const SocialLogin = () => {

    const {signInGoogle} = useAuth();

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
             <button 
             onSubmit={handleGoogleSignIn}
             className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50">
                          <FcGoogle size={20} /> Sign in with Google
                        </button>
        </div>
    );
};

export default SocialLogin;