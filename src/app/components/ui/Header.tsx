"use client";
import React, { useState } from "react";

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };
  return (
    <header className="w-full mt-[80px] ">
      <div className="bg-[#7B2431] flex items-center justify-between px-4 md:px-10 h-[74px] text-white font-sans w-full transition-all duration-1000 fixed top-0 z-50">
        <h1 className="logo flex items-center gap-2 font-grotesque text-xl">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 0C14.4399 0 10.9598 1.05568 7.99974 3.03355C5.03966 5.01141 2.73255 7.82263 1.37018 11.1117C0.00779906 14.4008 -0.348661 18.02 0.345873 21.5116C1.04041 25.0033 2.75474 28.2106 5.27209 30.7279C7.78943 33.2453 10.9967 34.9596 14.4884 35.6541C17.98 36.3487 21.5992 35.9922 24.8883 34.6298C28.1774 33.2675 30.9886 30.9604 32.9665 28.0003C34.9443 25.0402 36 21.5601 36 18C35.9949 13.2277 34.0969 8.65225 30.7223 5.2777C27.3478 1.90315 22.7723 0.00509205 18 0ZM13.386 34.5408L14.04 24.2986H16.7194L18.5826 26.1261H21.9188L22.5618 34.5545C19.5605 35.3918 16.3873 35.3918 13.386 34.5545V34.5408ZM14.9386 10.2724H20.7096L21.8583 25.3017H18.9206L17.0574 23.4742H14.0922L14.9386 10.2724ZM15.3344 9.44794L17.8076 5.8287L20.2809 9.44794H15.3344ZM23.3588 34.3099L21.4901 9.71725L17.8214 4.37221L14.1472 9.72L12.5753 34.2934C8.70179 33.0049 5.41375 30.3792 3.30038 26.8866C1.18702 23.3941 0.386464 19.2631 1.04218 15.2339C1.6979 11.2048 3.76704 7.5408 6.87879 4.89862C9.99054 2.25644 13.9415 0.80875 18.0237 0.814986C22.1058 0.821221 26.0524 2.28097 29.156 4.93265C32.2597 7.58432 34.3176 11.2546 34.961 15.2857C35.6045 19.3169 34.7913 23.4454 32.6673 26.9315C30.5432 30.4175 27.2472 33.0333 23.3698 34.3099H23.3588Z"
              fill="white"
            />
          </svg>
          Educare
        </h1>
        {/* <!-- Desktop Nav --> */}
        <nav className="md:flex hidden">
          <ul className="flex gap-6 text-[18px]">
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
        {/* <!-- Contact Info Desktop --> */}
        <div className="md:flex hidden items-center gap-6 text-sm">
          <div>
            <div className="flex items-center gap-2">
              <i className="bi bi-telephone-fill"></i> +974 55555 3456
            </div>
            <div className="flex items-center gap-2">
              <i className="bi bi-envelope-fill"></i> info@educare.qa
            </div>
          </div>
          <button className="bg-white p-1.5 px-4 rounded-md text-[16px] text-[#7B2431]">
            Contact Us
          </button>
        </div>
        {/* <!-- Hamburger Icon --> */}
        <button
          onClick={() => toggleMenu()}
          id="menuBtn"
          className="w-10 h-10 border border-white rounded-md p-1 flex flex-col gap-1.5 items-center justify-center cursor-pointer md:hidden"
        >
          <div className="w-full h-1 rounded-full bg-white"></div>
          <div className="w-full h-1 rounded-full bg-white"></div>
          <div className="w-full h-1 rounded-full bg-white"></div>
        </button>
      </div>

      {/* <!-- Mobile Menu --> */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[74px] left-0 w-full bg-[#7B2431] text-white text-center p-6 space-y-4 z-40">
          <a href="#" className="block text-lg">
            About us
          </a>
          <a href="#" className="block text-lg">
            Courses
          </a>
          <a href="#" className="block text-lg">
            About
          </a>
          <a href="#" className="block text-lg">
            Contact
          </a>
          <hr className="border-white opacity-30 my-2" />
          <div className="text-sm">
            <div className="flex justify-center gap-2">
              <i className="bi bi-telephone-fill"></i> +974 55555 3456
            </div>
            <div className="flex justify-center gap-2">
              <i className="bi bi-envelope-fill"></i> info@educare.qa
            </div>
          </div>
          <button className="bg-white text-[#7B2431] mt-4 px-6 py-2 rounded-md text-base">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
