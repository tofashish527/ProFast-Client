import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink } from 'react-router';

const ForgotPass = () => {
      const {
            register,
            handleSubmit,
          } = useForm()
          const onSubmit = (data) => console.log(data)
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-3xl font-bold'>Forgot Password</h2>
                <h3 className='mt-2 text-lg'>Enter your email address and we’ll send you a<br></br> reset link.</h3>
               <fieldset className="fieldset">
                
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input" placeholder="Your Email" />

          <NavLink className="btn btn-neutral mt-4 w-80" to="/encode">Send</NavLink>
          <div><p className='text-sm'>Remember Your Password? <NavLink to='/login' className="text-lime-500">Login</NavLink></p></div>
          
        </fieldset>
            </form>
        </div>
    );
};

export default ForgotPass;