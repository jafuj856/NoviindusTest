import React from "react";

function Way() {
  return (
    <div>
      <div className="w-full p-4 md:p-6 lg:py-14 bg-[#F9F7F4] flex flex-col justify-center md:flex-row mt-10 gap-6 lg:gap-10 ">
        <div className="w-full md:max-w-[40%]">
          <h1 className="font-grotesque font-[400] text-[42px] text-[#655945]">
            Our way of <span className="font-[600]">Teaching</span>
          </h1>
          <ul className="list-disc pl-5 text-[#655945] space-y-3 font-sans">
            <li>
              At Educare education center, we believe that every student
              deserves personalized, focused attention to reach their fullest
              potential. Our mission is to empower students through one-on-one
              tutoring, creating customized learning plans tailored to each
              individual's unique needs, strengths, and learning styles.
            </li>
            <li>
              Founded on a passion for education and a commitment to excellence,
              Educare education center was established to offer students a
              supportive and engaging learning environment. Our team of
              experienced tutors is dedicated to helping students excel
              academically while also building confidence, independence, and a
              love for learning.
            </li>
            <li>
              We specialize in a wide range of subjects across all grade levels,
              including math, science, English, and test preparation. Whether
              your child needs help catching up, getting ahead, or preparing for
              a specific exam, we are here to support their journey.
            </li>
          </ul>
        </div>
        <img
          src="images/way/way.png"
          className="w-full md:max-w-[50%]"
          alt=""
        />
      </div>
      {/* <!-- offer -->
<!-- This is the fixed carousel section code --> */}
      <div className="md:px-10 px-3 sm:px-6">
        <div className="flex items-center justify-center w-full relative mt-10">
          <h1 className="font-grotesque font-[400] text-[42px] text-[#655945]">
            Programs we offer <span className="font-[600]">for Kids</span>
          </h1>
          <div className="bg-[#EBC48B] rounded-md w-fit absolute right-5 top-0 md:block hidden">
            <div className="-rotate-[5deg] bg-primary p-2 px-3 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[10px] lg:text-[13px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit">
              Read more{" "}
              <svg
                width="22"
                height="29"
                viewBox="0 0 22 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.1949 6.86982L17.2746 16.0742C17.277 16.3559 17.1762 16.6518 16.9944 16.8969C16.8126 17.142 16.5646 17.3162 16.305 17.3812C16.0454 17.4462 15.7955 17.3966 15.6102 17.2433C15.4249 17.0901 15.3194 16.8458 15.317 16.5641L15.2595 9.92632L6.57271 21.6341C6.39056 21.8797 6.14214 22.0542 5.88209 22.1193C5.62205 22.1843 5.37169 22.1347 5.18608 21.9812C5.00048 21.8277 4.89484 21.5829 4.89239 21.3008C4.88995 21.0186 4.99091 20.7221 5.17306 20.4766L13.8599 8.76878L7.74243 10.2997C7.48284 10.3647 7.23291 10.3151 7.04763 10.1619C6.86235 10.0086 6.75689 9.76431 6.75445 9.48264C6.75201 9.20097 6.8528 8.90503 7.03463 8.65992C7.21647 8.41481 7.46446 8.24061 7.72405 8.17565L16.2069 6.05272C16.4665 5.98776 16.7164 6.03735 16.9017 6.19058C17.087 6.34382 17.1925 6.58814 17.1949 6.86982Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="carousel-container flex mt-6 min-h-10 relative justify-center w-full h-[250px] ">
          <button
            id="prev-btn"
            className="carousel-nav-btn absolute top-1/2 left-4 z-20 md:block hidden"
          >
            <i className="fas fa-chevron-left text-drpColor text-xl"></i>
          </button>
          <button
            id="next-btn"
            className="carousel-nav-btn absolute top-1/2 right-4 z-20 md:block hidden"
          >
            <i className="fas fa-chevron-right text-drpColor text-xl"></i>
          </button>
          <div
            id="carousel"
            style={{ scrollbarWidth: "none" }}
            className="w-full  flex items-center overflow-x-auto scroll-smooth gap-6 min-h-[200px] pb-4 pt-2 px-2 scrollbar-hide md:max-w-[90%] !importent"
          >
            {/* <!-- Card 1 --> */}
            <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-4 relative min-h-[149px] w-[400px]">
              <h1 className="font-bold mb-4">English Grammar</h1>
              <p className="w-[75%]">
                Master the building blocks of writing and communication.
              </p>
              <div className="bg-[#EBC48B] rounded-md w-fit mt-3">
                <div className="-rotate-[5deg] bg-primary p-1 px-2 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[7px] lg:text-[10px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit">
                  Read more{" "}
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 22 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1949 6.86982L17.2746 16.0742C17.277 16.3559 17.1762 16.6518 16.9944 16.8969C16.8126 17.142 16.5646 17.3162 16.305 17.3812C16.0454 17.4462 15.7955 17.3966 15.6102 17.2433C15.4249 17.0901 15.3194 16.8458 15.317 16.5641L15.2595 9.92632L6.57271 21.6341C6.39056 21.8797 6.14214 22.0542 5.88209 22.1193C5.62205 22.1843 5.37169 22.1347 5.18608 21.9812C5.00048 21.8277 4.89484 21.5829 4.89239 21.3008C4.88995 21.0186 4.99091 20.7221 5.17306 20.4766L13.8599 8.76878L7.74243 10.2997C7.48284 10.3647 7.23291 10.3151 7.04763 10.1619C6.86235 10.0086 6.75689 9.76431 6.75445 9.48264C6.75201 9.20097 6.8528 8.90503 7.03463 8.65992C7.21647 8.41481 7.46446 8.24061 7.72405 8.17565L16.2069 6.05272C16.4665 5.98776 16.7164 6.03735 16.9017 6.19058C17.087 6.34382 17.1925 6.58814 17.1949 6.86982Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <img
                src="images/way/first.png"
                className="max-w-[157px] absolute right-0 bottom-0"
                alt="English Grammar"
              />
            </div>
            {/* <!-- Card 2 --> */}
            <div className="carousel-card flex-shrink-0 w-64 rounded-md bg-drpColor p-4 relative min-h-[149px] w-[400px]">
              <h1 className="font-bold mb-4">Creative Writing</h1>
              <p className="w-[75%]">
                Unleash creativity through storytelling and expressive writing.
              </p>
              <div className="bg-[#EBC48B] rounded-md w-fit mt-3">
                <div className="-rotate-[5deg] bg-primary p-1 px-2 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[7px] lg:text-[10px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit">
                  Read more{" "}
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 22 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1949 6.86982L17.2746 16.0742C17.277 16.3559 17.1762 16.6518 16.9944 16.8969C16.8126 17.142 16.5646 17.3162 16.305 17.3812C16.0454 17.4462 15.7955 17.3966 15.6102 17.2433C15.4249 17.0901 15.3194 16.8458 15.317 16.5641L15.2595 9.92632L6.57271 21.6341C6.39056 21.8797 6.14214 22.0542 5.88209 22.1193C5.62205 22.1843 5.37169 22.1347 5.18608 21.9812C5.00048 21.8277 4.89484 21.5829 4.89239 21.3008C4.88995 21.0186 4.99091 20.7221 5.17306 20.4766L13.8599 8.76878L7.74243 10.2997C7.48284 10.3647 7.23291 10.3151 7.04763 10.1619C6.86235 10.0086 6.75689 9.76431 6.75445 9.48264C6.75201 9.20097 6.8528 8.90503 7.03463 8.65992C7.21647 8.41481 7.46446 8.24061 7.72405 8.17565L16.2069 6.05272C16.4665 5.98776 16.7164 6.03735 16.9017 6.19058C17.087 6.34382 17.1925 6.58814 17.1949 6.86982Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <img
                src="images/way/second.png"
                className="max-w-[157px] absolute right-0 bottom-0"
                alt="Creative Writing"
              />
            </div>
            {/* <!-- Card 3 --> */}
            <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-4 relative min-h-[149px] w-[400px]">
              <h1 className="font-bold mb-4">Math Skills</h1>
              <p className="w-[75%]">
                Build problem-solving abilities through engaging math
                activities.
              </p>
              <div className="bg-[#EBC48B] rounded-md w-fit mt-3">
                <div className="-rotate-[5deg] bg-primary p-1 px-2 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[7px] lg:text-[10px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit">
                  Read more{" "}
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 22 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1949 6.86982L17.2746 16.0742C17.277 16.3559 17.1762 16.6518 16.9944 16.8969C16.8126 17.142 16.5646 17.3162 16.305 17.3812C16.0454 17.4462 15.7955 17.3966 15.6102 17.2433C15.4249 17.0901 15.3194 16.8458 15.317 16.5641L15.2595 9.92632L6.57271 21.6341C6.39056 21.8797 6.14214 22.0542 5.88209 22.1193C5.62205 22.1843 5.37169 22.1347 5.18608 21.9812C5.00048 21.8277 4.89484 21.5829 4.89239 21.3008C4.88995 21.0186 4.99091 20.7221 5.17306 20.4766L13.8599 8.76878L7.74243 10.2997C7.48284 10.3647 7.23291 10.3151 7.04763 10.1619C6.86235 10.0086 6.75689 9.76431 6.75445 9.48264C6.75201 9.20097 6.8528 8.90503 7.03463 8.65992C7.21647 8.41481 7.46446 8.24061 7.72405 8.17565L16.2069 6.05272C16.4665 5.98776 16.7164 6.03735 16.9017 6.19058C17.087 6.34382 17.1925 6.58814 17.1949 6.86982Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <img
                src="images/way/third.png"
                className="max-w-[157px] absolute right-0 bottom-0"
                alt="Math Skills"
              />
            </div>
            {/* <!-- Card 4 --> */}
            <div className="carousel-card flex-shrink-0 w-64 rounded-md bg-drpColor p-4 relative min-h-[149px]">
              <h1 className="font-bold mb-4">Science Discovery</h1>
              <p className="w-[75%]">
                Explore the natural world through hands-on experiments.
              </p>
              <div className="bg-[#EBC48B] rounded-md w-fit mt-3">
                <div className="-rotate-[5deg] bg-primary p-1 px-2 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[7px] lg:text-[10px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit">
                  Read more{" "}
                  <svg
                    width="12"
                    height="19"
                    viewBox="0 0 22 29"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.1949 6.86982L17.2746 16.0742C17.277 16.3559 17.1762 16.6518 16.9944 16.8969C16.8126 17.142 16.5646 17.3162 16.305 17.3812C16.0454 17.4462 15.7955 17.3966 15.6102 17.2433C15.4249 17.0901 15.3194 16.8458 15.317 16.5641L15.2595 9.92632L6.57271 21.6341C6.39056 21.8797 6.14214 22.0542 5.88209 22.1193C5.62205 22.1843 5.37169 22.1347 5.18608 21.9812C5.00048 21.8277 4.89484 21.5829 4.89239 21.3008C4.88995 21.0186 4.99091 20.7221 5.17306 20.4766L13.8599 8.76878L7.74243 10.2997C7.48284 10.3647 7.23291 10.3151 7.04763 10.1619C6.86235 10.0086 6.75689 9.76431 6.75445 9.48264C6.75201 9.20097 6.8528 8.90503 7.03463 8.65992C7.21647 8.41481 7.46446 8.24061 7.72405 8.17565L16.2069 6.05272C16.4665 5.98776 16.7164 6.03735 16.9017 6.19058C17.087 6.34382 17.1925 6.58814 17.1949 6.86982Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex w-full">
                <img
                  src="images/way/third.png"
                  className="max-w-[157px] absolute right-0 bottom-0"
                  alt="Science Discovery"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Way;
