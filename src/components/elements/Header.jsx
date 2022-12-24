import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import { images } from '../../assets/assets';

export default function Header() {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 bg-gray-200">
    <div className="w-auto lg:order-2 lg:w-1/5 lg:text-center">
        <Link className="text-xl font-semibold text-gray-800 font-heading" to="/">
            <img src={images.logo} alt="Prompt Me Logo" width={150} height={55} />
        </Link>
    </div>
    <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 text-indigo-500 border border-indigo-500 rounded navbar-burger">
            <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>
                    Menu
                </title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z">
                </path>
            </svg>
        </button>
    </div>
    <div className="hidden w-full navbar-menu lg:order-1 lg:block lg:w-2/5">
    <Link to="/Login"><button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-primary rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                            Login
     </button></Link>

    </div>
    <div className="hidden w-full navbar-menu text-2xl lg:order-3 lg:block lg:w-2/5 lg:text-right">

        <Link to="/FAQs"><a className="block mt-4 mr-10 text-primary lg:inline-block lg:mt-0">
            FAQs
        </a></Link>
        <Link to="/About">
           <a className="block mt-4 text-primary lg:inline-block lg:mt-0">
            About
           </a>
        </Link>
    </div>
</nav>
  )
}
