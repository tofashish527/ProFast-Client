import React from 'react';
import { useForm } from 'react-hook-form';
import { NavLink, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../Component/SocialLogin';
import useAuth from '../hooks/useAuth';
import useAxios from '../hooks/useAxios';

const Login = () => {

     const { register, handleSubmit, formState: { errors } } = useForm();
    const { logUser } = useAuth();
    const axiosInstance=useAxios();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

    const onSubmit = data => {
        logUser(data.email, data.password)
            .then(async(result) => {
                console.log(result.user);
                
          const userInfo={
             displayName:data.name,
             role:"user", //
             created_at: new Date().toISOString(),
             last_log_in:new Date().toISOString()
          }

          const userRes= await axiosInstance.post('/users',userInfo)
          console.log(userRes.data)
                navigate(from);
            })
            .catch(error => console.log(error))
          }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-bold'>Welcome Back</h2>
                <h3 className='mt-2 text-lg'>Login With ProFast</h3>
               <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input type="password" {...register("password" ,{minLength:6})} className="input" placeholder="Password" />
            {errors.password?.type === "required" && (
        <p role="alert" className='text-red-700'>Password is required</p>
      )}
         {errors.password?.type === "minLength" && (
        <p role="alert " className='text-red-700'>Password must be 6 character</p>
      )}

          <div><p className="text-lime-700 text-sm"><NavLink to="/Fpass">Forgot password?</NavLink></p></div>
            <button className="btn btn-neutral mt-4">Login</button>
          <div><p className='text-sm'>New To ProFast? <NavLink to='/register' className="text-lime-500">Register</NavLink></p></div>
          {/* <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Login with Google
</button> */}
        </fieldset>
            </form>
            
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;