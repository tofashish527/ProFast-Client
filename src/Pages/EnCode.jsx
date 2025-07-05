import React from 'react';
import { NavLink } from 'react-router';

const EnCode = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold'>Enter Code</h2>
            <h3 className='mt-2 text-lg'>Enter 6 digit code that we sent in your email address</h3>
         <NavLink to='/Rpass' className="btn btn-neutral mt-4 w-80">Verify Code</NavLink>
        </div>
    );
};

export default EnCode;