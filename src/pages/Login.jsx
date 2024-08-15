import React, { useContext, useState, useEffect } from 'react';
import RegisterAnimation from '../animation_component/RegisterAnimation';
import { Link, useNavigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(null);
  const [lockedUntil, setLockedUntil] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);

  useEffect(() => {
    if (lockedUntil) {
      const interval = setInterval(() => {
        const now = new Date();
        const lockTime = new Date(lockedUntil);
        const remainingTime = Math.max(0, lockTime - now);
        setTimeRemaining(remainingTime);

        if (remainingTime <= 0) {
          clearInterval(interval);
          setLockedUntil(null);
          setTimeRemaining(null);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [lockedUntil]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login(formData);

      if (response.success) {
        if (response && response.userData.isAdmin) {
          response("/admin/dashboard");
        } else {
          navigate("/");
        }
      } else {
        let errorMessage = response.message;
        if (response.locked) {
          setLockedUntil(response.lockUntil);
        } else {
          if (response.attemptsLeft !== undefined) {
            setAttemptsLeft(response.attemptsLeft);
            errorMessage += ` ${response.attemptsLeft} attempt${response.attemptsLeft !== 1 ? 's' : ''} remaining. After the next attempt, your account will be locked.`;
          }
        }
        setLoginError(errorMessage);
      }
    } catch (error) {
      console.log(`Error from Login Page ${error}`);
      setLoginError("An unexpected error occurred. Please try again later.");
    }
  };

  const formatTime = (milliseconds) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}m ${seconds}s`;
  };

  return (
    <div className='py-12 px-12 flex justify-center items-center mt-10'>
      <div className='w-5/6 shadow-lg py-10 px-5 flex mt-12'>
        <div className='w-full'>
          <h1 className='text-4xl font-bold text-center mt-5'>Login Page</h1>
          <h2 className='text-center mt-2'>Please fill below form to login</h2>
          
          {/* Error and Countdown Message */}
          {loginError && (
            <div className='text-center text-red-600 mt-4'>
              <p>{loginError}</p>
              {attemptsLeft !== null && (
                <p>You have {attemptsLeft} attempt{attemptsLeft !== 1 ? 's' : ''} left.</p>
              )}
              {lockedUntil && timeRemaining !== null && (
                <p>Your account is locked. Try again in {formatTime(timeRemaining)}.</p>
              )}
            </div>
          )}

          <form className='w-full flex flex-col items-center justify-center gap-5 py-5' onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
              autoComplete="email"
              className="w-2/3 h-19 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter password"
              autoComplete="password"
              className="w-2/3 h-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-black focus:border-black text-gray-700"
            />
            <button className='text-white bg-black px-5 py-3 w-1/2 rounded-full' type='submit'>
              Login
            </button>
            <Link to='/register'>
              <span className='text-center'>Don't have an Account? Register</span>
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
}

export default Login;