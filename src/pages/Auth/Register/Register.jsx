import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Register = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();

    const handleRegistration = (data) => {
        console.log('after register', data)
    }

    return (
        // <div>
            <div className='flex-grow'>
            
        </div>
    );
};

export default Register;