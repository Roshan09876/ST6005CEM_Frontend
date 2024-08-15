import React, { useContext, useState } from 'react';
import RegisterAnimation from '../animation_component/RegisterAnimation';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import AuthContext from '../context/AuthContext';

const Register = () => {
  const { register } = useContext(AuthContext);
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      toast.error("Password and Confirm Password do not Match");
      return; 
    }
    try {
      await register({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      console.log(`Error from Register Page: ${error}`);
    }
  };

  return (
    <div className='py-12 px-12 flex justify-center items-center mt-10'>
      <div className='w-5/6 shadow-lg py-5 px-5 flex flex-col md:flex-row mt-12'>
        <div className='w-full'>
          <h1 className='text-4xl font-bold text-center mt-5'>Create Your Account</h1>
          <h2 className='text-center mt-2'>Please fill the form below to Register</h2>
          <form className='w-full flex flex-col items-center justify-center gap-5 py-5' onSubmit={handleSubmit}>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              autoComplete="given-name"
              className="w-2/3 h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              autoComplete="family-name"
              className="w-2/3 h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              autoComplete="email"
              className="w-2/3 h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              autoComplete="new-password"
              className="w-2/3 h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              autoComplete="new-password"
              className="w-2/3 h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <button className='text-white bg-black px-5 py-3 w-1/2 rounded-full' type='submit'>
              Register
            </button>
            <Link to='/login'>
              <span>Already have an account? Login</span>
            </Link>
          </form>
        </div>
        <div className='bg-black w-full shadow-lg'>
          <h1 className='text-4xl mt-5 font-bold text-center text-white'>Welcome to HandMade Crafts</h1>
          <RegisterAnimation />
        </div>
      </div>
    </div>
  );
};

export default Register;
