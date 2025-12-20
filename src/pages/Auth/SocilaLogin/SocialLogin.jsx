import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import useAuth from '../../../hooks/useAuth';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router';
import { saveOrUpdateUser } from '../../../utils';

const SocialLogin = () => {

      const navigate = useNavigate()
  const location = useLocation()
  const from = location.state || '/'

    
    const {signInGoogle} = useAuth();
    const handleGoogleSignIn =  async () => {
        try{
            const {user} = await signInGoogle()

            await saveOrUpdateUser({name: user?.displayName, email: user?.email, image:  user.photoURL})

            navigate(from, { replace: true })
            toast.success('Signup Successful')

        } catch (error){
            console.log(error)
            toast.error(error?.message)

        }

        // .then(result => {
        //     console.log(result.user)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    }

    return (
        <div>
             <button 
             onClick={handleGoogleSignIn}
             className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-600 hover:bg-gray-50 cursor-pointer">
                          <FcGoogle size={20} /> Sign in with Google
                        </button>
        </div>
    );
};

export default SocialLogin;