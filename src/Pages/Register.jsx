import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import icon from "../assets/img/image-upload-icon.png"
import { NavLink } from 'react-router';
import useAuth from '../hooks/useAuth';
import SocialLogin from '../Component/SocialLogin';
import axios from 'axios';
import useAxios from '../hooks/useAxios';

const Register = () => {
    const {
        register,
        handleSubmit,
         formState: { errors },
      } = useForm()
      const {createuser,updateProfileInfo}=useAuth()
      const [profilepic,setProfilepic]=useState('');
      const axiosInstance=useAxios();
      const handleImageUpload=async(e)=>{
      const image=e.target.files[0];
      console.log(image);

       const formData = new FormData();
    formData.append('image', image);
    
    const imageURL=`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_Key}`;
       const res = await axios.post(imageURL,formData);
       setProfilepic(res.data.data.url);

  
    } 
      const onSubmit = (data) => {
        console.log(data)
         createuser(data.email, data.password)
        .then(async (result) => {
          console.log(result.user);
          

          const userInfo={
             displayName:data.name,
             role:"user", //
             created_at: new Date().toISOString(),
             last_log_in:new Date().toISOString()
          }

          const userRes= await axiosInstance.post('/users',userInfo)
          console.log(userRes.data)
          const userProfile={
            displayName: data.name,
            photoURL: profilepic,
          }
          updateProfileInfo(userProfile)
          .then(() => {
    console.log("Profile Updated")
}).catch((error) => {
  console.log(error.message)
});
        })
        .catch((error) => {
          console.log(error.message);
        });

      }
      
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2 className='text-2xl font-bold'>Create An Account</h2>
                <h3 className='mt-2 text-lg'>Register With ProFast</h3>
                <img src={icon} className='h-10 w-10 mt-5 mb-3'></img>
               <fieldset className="fieldset">

          
          <label className="label">Profile Pic</label>
          <input type="file" onChange={handleImageUpload} placeholder="Choose Your File" />      
                
          <label className="label">Name</label>
          <input type="text" {...register("name")} className="input" placeholder="Your Name" />

          <label className="label">Email</label>
          <input type="email" {...register("email")} className="input" placeholder="Your Email" />

          <label className="label">Password</label>
          <input type="password" {...register("password" ,{minLength:6})} className="input" placeholder="Password" />
            {errors.password?.type === "required" && (
        <p role="alert" className='text-red-700'>Password is required</p>
      )}
         {errors.password?.type === "minLength" && (
        <p role="alert " className='text-red-700'>Password must be 6 character</p>
      )}
          <button className="btn btn-neutral mt-4">Register</button>
          <div><p className='text-sm'>Already Have an Account? <NavLink to='/login' className="text-lime-500">Login</NavLink></p></div>
          <p className='text-center text-sm my-2'>OR</p>
          {/* <button className="btn bg-white text-black border-[#e5e5e5]">
  <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
  Register with Google
</button> */}
<SocialLogin></SocialLogin>
        </fieldset>
            </form>
        </div>
    );
};

export default Register;