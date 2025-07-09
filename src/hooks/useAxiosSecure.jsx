import axios from 'axios';
import React from 'react';

const axiosAPI= axios.create({
  baseURL: `http://localhost:3000`,
});

const useAxiosSecure = () => {
    return axiosAPI;
};

export default useAxiosSecure;