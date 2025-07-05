import React from 'react';
import error from "../assets/img/error.png"
import { NavLink } from 'react-router';
const Error = () => {
    return (
       <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
		<img src={error}></img>
		<p className="text-3xl">Looks like our services are currently offline</p>
		<NavLink to="/" className="btn bg-lime-400 text-cyan-800">Back to homepage</NavLink>
	</div>
</section>
    );
};

export default Error;