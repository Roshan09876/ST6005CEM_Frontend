import React, { useContext, useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logo from "../assets/logo.png";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link, useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  const toggleButton = () => {
    setMenuOpen(!menuOpen);
  };
  const handleLogOut = async () => {
    localStorage.clear();
    window.location.reload();
    navigate("/")
  }

  return (
    <div className="bg-primary w-full mb-4">
      <div className="flex items-center justify-between">
        <div className="text-white px-5 py-2 flex gap-5">
          <div className="sm:text-xs md:text-base">
            <LocalPhoneIcon />
            <span className="ml-1">1234567890</span>
          </div>
          <div className="gap-2">
            <EmailIcon />
            <span className="ml-1">crafts@gmail.com</span>
          </div>
        </div>
        <div className="text-white px-5 hidden md:block">
          <FacebookIcon className="mr-3" />
          <InstagramIcon />
          <YouTubeIcon className="ml-3" />
        </div>
      </div>
      <nav className="shadow-md bg-white">
        <div className="flex justify-between items-center px-5">
          <div className="flex items-center sm:px-5">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-[80px]" alt=" Logo" />
            </a>
            <h1 className="uppercase font-bold text-primary sm:text-xl md:text-1xl lg:text-2xl ml-4">
              HandMade Crafts
            </h1>
          </div>
          <div className="hidden lg:flex md:flex sm:flex sm:text-xs md:text-sm lg:text-base">
            {
              user != null && user.isAdmin ? (
                <Link
                  to="/admin/dashboard"
                  className="font-bold hover:cursor-pointer text-primary mr-5"
                >
                  Home
                </Link>
              ) : (
                <Link
                  to="/"
                  className="font-bold hover:cursor-pointer text-primary mr-5"
                >
                  Home
                </Link>
              )
            }

            {
              user != null && user.isAdmin ? (
                <>
                 <Link
                  to="/admin/user"
                  className="font-bold hover:cursor-pointer text-primary mr-5"
                >
                  Users
                </Link>
                </>
              ) : (
                <Link
                  to="/products"
                  className="font-bold hover:cursor-pointer text-primary mr-5"
                >
                  Products
                </Link>

              )
            }
            {user != null && user.isAdmin ? (
              <>
                <Link
                  to="/admin/products"
                  className="font-bold hover:cursor-pointer text-primary mr-5"
                >
                  Product List
                </Link>
              </>
            ) : null}
            <Link
              to="/profile"
              className="font-bold hover:cursor-pointer text-primary mr-5"
            >
              Profile
            </Link>
            <Link
              to="/about"
              className="font-bold hover:cursor-pointer text-primary mr-5"
            >
              About Us
            </Link>

            {
              user != null && user.isAdmin ? (
                <>
                </>
              ) : (
                <>
                  <Link
                    to="/cart"
                    className="font-bold hover:cursor-pointer text-primary mr-5"
                  >
                    Cart
                  </Link>
                </>

              )
            }
          </div>

          <div className="px-5 flex">
            {user == null ? (
              <>
                <div className="text-black mt-4 mr-5 font-bold">
                  👋  Hey! Guest
                </div>
                <div className="hidden md:block h-1/2 px-5 py-2 gap-2 text-white">

                  <Link to="/register">
                    <button className="lg:w-32 md:w-13 mr-5 px-3 py-2 bg-primary transform transition-transform duration-300 hover:scale-110">
                      Register
                    </button>

                  </Link>
                  <Link to="/login">
                    <button className="lg:w-32 md:w-13 ml-3 px-3 py-2 bg-primary transform transition-transform duration-300 hover:scale-110">
                      Login
                    </button>
                  </Link>

                </div>
              </>
            ) : (
              <div className="flex items-center">
                <h1 className="font-medium text-2xl mr-2">
                  👋 Hey! {user.firstName}
                </h1>
                <button
                  className="lg:w-32 md:w-13 ml-3 px-3 py-2 text-white bg-red-600 transform transition-transform duration-300 hover:scale-110"
                  onClick={handleLogOut}
                >
                  Log Out
                </button>
              </div>
            )}
          </div>
          <i
            className={`fa ${menuOpen ? "fa-times" : "fa-bars"} text-2xl sm:hidden cursor-pointer`}
            onClick={toggleButton}
            aria-hidden="true"
          ></i>
        </div>
      </nav>
      {menuOpen && (
        <div className={`bg-white px-5 py-2 shadow-lg sm:hidden sidebar-enter`}>
          <ul className="px-5">
            <Link to="/" className="block font-semibold">
              <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                Home
              </li>
            </Link>
            <Link to="/products" className="block font-semibold">
              <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                Products
              </li>
            </Link>
            {user != null && user.isAdmin ? (
              <>
                <Link to="/admin/users" className="block font-semibold">
                  <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                    Users
                  </li>
                </Link>
                <Link to="/admin/products" className="block font-semibold">
                  <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                    Product List
                  </li>
                </Link>
              </>
            ) : user != null ? (
              <Link to="/profile" className="block font-semibold">
                <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                  Profile
                </li>
              </Link>
            ) : null}
            <Link to="/about" className="block font-semibold">
              <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                About us
              </li>
            </Link>
            <Link to="/cart" className="block font-semibold">
              <li className="py-2 px-5 hover:bg-primary hover:text-white hover:rounded-xl hover:cursor-pointer">
                Cart
              </li>
            </Link>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
