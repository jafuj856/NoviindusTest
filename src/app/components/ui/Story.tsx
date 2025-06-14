import React from "react";

function Story() {
  return (
    <div>
      <div className="p-4 px-6 mt-6 lg:px-8">
        <h1 className="font-grotesque font-[400] text-[42px] text-[#655945]">
          The Story of <span className="font-[600]">Educare</span>
        </h1>
        <div className="flex md:flex-row flex-col items-start gap-2">
          <div className="flex flex-col gap-6 mt-5 md:max-w-[70%]">
            <p>
              At Educare education center, we believe that every student
              deserves personalized, focused attention to reach their fullest
              potential. Our mission is to empower students through one-on-one
              tutoring, creating customized learning plans tailored to each
              individual's unique needs, strengths, and learning styles.
            </p>
            <p>
              Founded on a passion for education and a commitment to excellence,
              Educare education center was established to offer students a
              supportive and engaging learning environment. Our team of
              experienced tutors is dedicated to helping students excel
              academically while also building confidence, independence, and a
              love for learning.
            </p>
            <p>
              We specialize in a wide range of subjects across all grade levels,
              including math, science, English, and test preparation. Whether
              your child needs help catching up, getting ahead, or preparing for
              a specific exam, we are here to support their journey.
            </p>

            <div className=" bg-[#EBC48B] rounded-md mt-6 lg:mt-10 w-fit">
              <div className="-rotate-[5deg] bg-primary p-2 px-3 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[13px] lg:text-[19px] text-white font-[500] font-sans justify-center transition-all duration-500 ease-in-out w-fit ">
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

          <div className="w-full md:max-w-[30%] mt-5 md:mt-0">
            <img src="images/second/albam.png" className="w-full" alt="" />
          </div>
        </div>
        {/* <!-- 222222 --> */}
        <div className="flex md:flex-row flex-col items-start gap-2 text-primary">
          <div className="flex flex-col md:flex-row items-center gap-6 w-full md:max-w-[75%] mt-10 text-sm font-sans">
            {/* <!-- 1111 --> */}
            <div className="w-full rounded-md bg-drpColor p-4 relative min-h-[149px] ">
              <h1 className="font-bold mb-4">Mission</h1>
              <p className="w-[75%]">
                To help students succeed with personalized, one-to-one tutoring
                that builds confidence, skills, and a love for learning.
              </p>
              <img
                src="images/second/flag.png"
                className="max-w-[129px] absolute right-0 bottom-4"
                alt=""
              />
            </div>
            {/* <!-- 22222 --> */}
            <div className="w-full rounded-md bg-drpColor p-4 relative min-h-[149px] border-r-4 border-b-4 border-primary">
              <h1 className="font-bold mb-4">Mission</h1>
              <p className="w-[75%]">
                To help students succeed with personalized, one-to-one tutoring
                that builds confidence, skills, and a love for learning.
              </p>
              <img
                src="images/second/roket.png"
                className="max-w-[149px] absolute right-0 bottom-0"
                alt=""
              />
            </div>
          </div>
          <svg
            className="lg:block hidden"
            width="218"
            height="170"
            viewBox="0 0 218 170"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.2367 140.592C30.9461 142.951 39.7778 141.61 49.7577 137.111C51.4247 137.07 49.5868 138.893 49.147 139.437C45.0687 144.135 37.2781 145.706 31.0539 146.549C47.6285 152.404 68.0526 156.242 85.004 151.056C104.762 145.439 122.843 127.144 120.903 105.6C107.617 103.529 93.5496 98.2217 84.8744 87.4494C75.02 72.5352 90.2393 61.1761 105.683 68.4291C118.208 74.3138 126.559 86.9212 129.54 100.292C183.756 100.956 209.228 49.1667 189.006 2.04112C188.979 1.98412 188.964 1.92218 188.961 1.85909C188.959 1.79599 188.969 1.73307 188.992 1.67416C189.015 1.61525 189.049 1.5616 189.093 1.51648C189.138 1.47136 189.191 1.43572 189.249 1.41174C189.304 1.38458 189.365 1.36874 189.426 1.36513C189.488 1.36153 189.55 1.37024 189.608 1.39075C189.666 1.41127 189.719 1.44317 189.765 1.48461C189.811 1.52604 189.848 1.57618 189.874 1.63208C213.206 50.1133 186.471 104.919 130.312 106.203C131.498 122.206 122.884 137.709 110.305 147.134C87.9728 164.301 53.9647 161.914 30.0117 149.156C31.0734 151.872 33.1334 154.097 34.2042 156.801C35.4557 159.966 35.3462 166.213 33.502 164.636C32.2474 161.628 30.7638 158.721 29.0643 155.94C27.3955 153.098 25.422 149.941 23.623 147.182L23.2687 146.666L19.7401 141.392C19.6818 141.31 19.6489 141.213 19.6457 141.112C19.6426 141.012 19.6692 140.913 19.7222 140.827C19.7753 140.742 19.8525 140.674 19.944 140.632C20.0355 140.59 20.1374 140.576 20.2367 140.592ZM110.366 82.3771C98.917 67.8226 80.2205 74.1494 94.1447 87.2561C101.563 93.276 110.354 97.37 119.736 99.1741C117.944 92.9302 114.737 87.1828 110.366 82.3771Z"
              fill="#8A1538"
            />
            <path
              d="M195.484 77.5658C195.435 77.5244 195.376 77.4961 195.313 77.4835C195.25 77.4709 195.184 77.4743 195.123 77.4934C195.061 77.5126 195.006 77.5469 194.961 77.5931C194.916 77.6394 194.884 77.6962 194.867 77.7582C191.673 89.0514 181.564 98.6456 171.506 101.339C171.415 101.362 171.337 101.419 171.287 101.498C171.236 101.577 171.218 101.672 171.236 101.764C171.254 101.856 171.303 101.939 171.373 102.001C171.444 102.062 171.533 102.099 171.627 102.104C183.907 102.772 193.725 89.3522 195.714 78.2576C195.737 78.1309 195.726 78.0001 195.682 77.8791C195.638 77.7581 195.561 77.6513 195.461 77.57L195.484 77.5658Z"
              fill="#8A1538"
            />
            <path
              d="M79.0571 64.2505C72.201 64.7755 69.6413 74.0524 73.8704 79.0185C73.8979 79.0528 73.9362 79.0768 73.9791 79.0866C74.022 79.0964 74.067 79.0914 74.1067 79.0724C74.1463 79.0534 74.1785 79.0215 74.1977 78.982C74.217 78.9425 74.2224 78.8976 74.2129 78.8546C73.1773 73.3727 74.2753 67.7562 79.1725 64.6138C79.2112 64.5917 79.2411 64.557 79.2574 64.5155C79.2736 64.4739 79.2751 64.4281 79.2616 64.3856C79.2481 64.3431 79.2204 64.3065 79.1832 64.2819C79.146 64.2573 79.1015 64.2463 79.0571 64.2505Z"
              fill="#8A1538"
            />
            <path
              d="M196.108 73.8826C196.651 73.8281 197.155 73.5728 197.519 73.1667C197.798 72.8737 197.983 72.5034 198.048 72.1041C198.11 71.7176 198.054 71.3213 197.886 70.9677C197.66 70.4873 197.291 70.0883 196.83 69.8252C196.378 70.0455 195.976 70.3557 195.648 70.7369C195.426 70.9922 195.281 71.3045 195.227 71.6384C195.174 71.9723 195.215 72.3144 195.346 72.6262C195.542 73.0775 195.799 73.5001 196.108 73.8826Z"
              fill="#8A1538"
            />
            <path
              d="M75.2936 82.4561C75.2821 82.4253 75.2611 82.3989 75.2337 82.3808C75.2062 82.3628 75.1737 82.3539 75.1408 82.3556C75.108 82.3572 75.0765 82.3693 75.051 82.39C75.0255 82.4108 75.0072 82.4391 74.9989 82.4709C74.9022 82.8072 74.8755 83.1598 74.9203 83.5069C74.9837 83.9759 75.1365 84.4284 75.3705 84.8397C75.6035 85.2494 75.9154 85.609 76.288 85.8976C76.562 86.1154 76.8781 86.2742 77.2164 86.3641C77.2473 86.3708 77.2794 86.3683 77.3089 86.3568C77.3383 86.3453 77.3637 86.3254 77.3819 86.2995C77.4001 86.2736 77.4102 86.243 77.411 86.2114C77.4119 86.1798 77.4033 86.1487 77.3865 86.1219C77.1903 85.8555 77.0266 85.6064 76.8628 85.3572C76.6415 85.0198 76.4428 84.678 76.244 84.3363C76.0452 83.9946 75.8577 83.6507 75.6762 83.2766C75.5462 83.021 75.4208 82.7588 75.2936 82.4561Z"
              fill="#8A1538"
            />
            <path
              d="M89.5979 143.076C81.2736 146.918 68.6159 148.825 59.7819 146.17C59.7625 146.161 59.7404 146.161 59.7205 146.168C59.7006 146.176 59.6845 146.191 59.6758 146.21C59.6671 146.23 59.6664 146.252 59.674 146.272C59.6816 146.292 59.6968 146.308 59.7163 146.316C67.7831 151.089 82.4581 148.987 89.6763 143.213C89.6905 143.2 89.7 143.184 89.7032 143.165C89.7064 143.147 89.7031 143.128 89.6938 143.112C89.6845 143.095 89.6699 143.083 89.6523 143.076C89.6348 143.07 89.6156 143.07 89.5979 143.076Z"
              fill="#8A1538"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Story;
