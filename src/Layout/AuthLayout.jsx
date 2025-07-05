import React from 'react';
import { Outlet } from 'react-router';
import auth from "../assets/img/authImage.png"
import Logo from '../Shared/Logo';
const AuthLayout = () => {
    return (
        <div className=" bg-white">
            <Logo></Logo>
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src={auth}
      className="max-w-sm rounded-lg"
    />
    <Outlet></Outlet>
  </div>
</div>
    );
};

export default AuthLayout;