import React from 'react';
import { useForm } from 'react-hook-form';

const ResetPass = () => {
     const {
                register,
                handleSubmit,
              } = useForm()
              const onSubmit = (data) => console.log(data)
    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-3xl font-bold'>Reset Password</h2>
                <h3 className='mt-2 text-lg'>Reset Your Password</h3>
               <fieldset className="fieldset">
                
          <label className="label">New Password</label>
          <input type="email" {...register("password")} className="input" placeholder="" />

          
          <label className="label">Confirm Password</label>
          <input type="email" {...register("password")} className="input" placeholder="" />

     
          <button className="btn btn-neutral mt-4 w-80">Reset Password</button>
          
        </fieldset>
            </form>
        </div>
    );
};

export default ResetPass;