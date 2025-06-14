import React from "react";

function Footer() {
  return (
    <div>
      <footer className="bg-[#7B2431] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* <!-- Logo --> */}
          <div>
            <h1 className="text-xl font-semibold flex items-center gap-2 font-grotesque">
              <span className="border rounded-full p-1 border-white">
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
              </span>
              Educare
            </h1>
          </div>

          {/* <!-- Navigation --> */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Navigation</h2>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Curriculum
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact us
                </a>
              </li>
            </ul>
          </div>

          {/* <!-- Contact Info --> */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact info</h2>
            <ul className="space-y-2">
              <li>
                <a href="mailto:educare@gmail.com" className="hover:underline">
                  educare@gmail.com
                </a>
              </li>
              <li>
                <a href="mailto:info@educare.com" className="hover:underline">
                  info@educare.com
                </a>
              </li>
              <li>
                <a href="tel:+97444123456" className="hover:underline">
                  +974 4412 3456
                </a>
              </li>
              <li>
                <a href="tel:+97455347890" className="hover:underline">
                  +974 5534 7890
                </a>
              </li>
            </ul>
            <div className="flex gap-4 mt-4 text-xl">
              <a href="#" className="hover:text-gray-300">
                <img src="images/footer/insta.svg" alt="" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src="images/footer/fb.svg" alt="" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src="images/footer/link.svg" alt="" />
              </a>
              <a href="#" className="hover:text-gray-300">
                <img src="images/footer/yt.svg" alt="" />
              </a>
            </div>
          </div>

          {/* <!-- Address --> */}
          <div className="flex items-end gap-3">
            <img src="images/footerMap.svg" className="max-w-[100px]" alt="" />
            <div>
              <h2 className="text-lg font-semibold mb-4">Office Address</h2>
              <p>
                EducareEducation Center
                <br />
                Building 45, Al Sadd Street,
                <br />
                Doha, Qatar
              </p>
              <a
                href="https://www.google.com/maps/place/Building+45,+Al+Sadd+Street,+Doha,+Qatar"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white underline block mt-2"
              >
                View on Map
              </a>
            </div>
          </div>
        </div>

        {/* <!-- Bottom bar --> */}
        <div className="border-t border-white border-opacity-20 mt-8 pt-4 text-sm flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-gray-200">
            &copy; 2024{" "}
            <a href="#" className="underline">
              educare
            </a>
          </p>
          <p className="text-gray-300">
            Designed By{" "}
            <span className="text-white">Noviindus Technologies</span>
          </p>
          <div className="flex gap-4 mt-2 md:mt-0 text-gray-300">
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
