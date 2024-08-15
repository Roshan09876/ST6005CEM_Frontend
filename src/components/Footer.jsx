import React from 'react'
import logo from '../assets/logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className='bg-primary mt-8'>
            <div className='px-5 py-8'>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center'>
                        <img src={logo} alt="Uranus Tech Nepal" className='h-16 w-16 mr-4' />
                        <h1 className='font-bold uppercase text-secondary text-4xl'>
                            HandMade Crafts Nepal
                        </h1>
                    </div>
                    <div className='flex space-x-4 text-white'>
                        <FaFacebookF className='text-xl cursor-pointer hover:text-secondary' />
                        <FaTwitter className='text-xl cursor-pointer hover:text-secondary' />
                        <FaLinkedinIn className='text-xl cursor-pointer hover:text-secondary' />
                        <FaInstagram className='text-xl cursor-pointer hover:text-secondary' />
                    </div>
                </div>
                <div className='flex justify-evenly mt-8 text-white'>
                    <div>
                        <h2 className='font-bold text-secondary mb-2'>Services</h2>
                        <ul className='space-y-1 font-light text-base'>
                            <li>24Hr Customer Service</li>
                            <li>Handmade Products</li>
                            <li>Good Response</li>
                            <li>Bulk SMS</li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='font-bold text-secondary mb-2'>Contact Us</h2>
                        <ul className='space-y-1 font-light text-base'>
                            <li>Email: craft@uranustech.com</li>
                            <li>Phone: +977-123456789</li>
                            <li>Address: Kathmandu, Nepal</li>
                        </ul>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="text-white text-2xl font-bold">
                                DO YOU HAVE ANY QUERIES?
                            </div>
                            <input
                                type="text"
                                placeholder="Enter your Full Name"
                                className="w-full p-3 rounded-lg text-sm text-black border border-transparent focus:border-white focus:ring-0"
                            />
                            <input
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full p-3 rounded-lg text-sm text-black border border-transparent focus:border-white focus:ring-0"
                            />
                            <textarea
                                placeholder="Enter your message"
                                className="w-full p-3 min-h-[100px] rounded-lg text-sm text-black border border-transparent focus:border-white focus:ring-0"
                            ></textarea>
                            <button
                                type="submit"
                                className="h-10 px-5 text-white bg-green-700 w-full rounded-xl hover:bg-blue-500"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
                <hr className='my-10 border-secondary' />
                <div className='text-center text-white'>
                    <p>© 2024 HomeMade Craft Nepal, All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
