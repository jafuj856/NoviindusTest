import React from "react";

function Subject() {
  return (
    <div>
      {/* <!-- This is the fixed carousel section code --> */}
      <div className="md:px-10 px-6 bg-[#F9F7F4] py-8 ">
        <div className="flex items-center justify-center w-full relative mt-10">
          <h1 className="font-grotesque font-[400] text-[42px] text-[#655945]">
            Subjects We <span className="font-[600]">Teach</span>
          </h1>
          <div className="bg-[#EBC48B] rounded-md  absolute right-5 top-0 md:block hidden">
            <div className="-rotate-[5deg] bg-primary p-2 px-3 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[10px] lg:text-[13px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out ">
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
        <div className="carousel-container flex mt-6 min-h-10 relative justify-center items-center w-full h-[250px] ">
          <div
            id="carousel"
            className="w-full  flex items-center overflow-x-auto scroll-smooth gap-6 min-h-[200px] pb-4  w-[228px]pt-2 px-2 scrollbar-hide"
            style={{ scrollbarWidth: "none" }}
          >
            {/* <!-- Card 1 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
            {/* <!-- Card 2 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
            {/* <!-- Card 3 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
            {/* <!-- Card 4 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
            {/* <!-- 55555 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
            {/* <!-- 66666 --> */}
            <div>
              <div className="carousel-card flex-shrink-0  rounded-md bg-drpColor p-1 pb-4  w-[228px] ">
                <img
                  src="/images/subject/image.png"
                  className="h-[121px] w-[228px] rounded-md"
                  alt=""
                />
                <p className="text-center text-sm font-thin font-sans text-primary mt-2">
                  Maths
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subject;
