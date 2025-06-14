import React from "react";

function Review() {
  return (
    <div>
      <div className="w-full mt-10 p-4 sm:px-6 md:px-10">
        <h1 className="font-grotesque font-[400] text-[42px] text-[#655945] text-center">
          Hear from our Valuable <span className="font-[600]">Parents</span>
        </h1>
        <div className="flex items-center justify-center w-full mt-6 relative">
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
            className="flex gap-10 overflow-x-auto py-5 w-full"
            style={{ scrollbarWidth: "none" }}
          >
            {/* <!-- card11111 --> 
             <!-- card22222   --> */}
            <div className="break-words">
              <div className="min-h-[270px]  w-screen sm:w-[400px] rounded-md border border-black/20 p-6 relative">
                {/* <!-- header --> */}
                <div className="absolute -top-[15%] w-[90%] p-4 flex justify-between">
                  <img
                    src="/images/master/rounded.png"
                    className="w-[94px]"
                    alt=""
                  />
                  <svg
                    width="41"
                    height="69"
                    viewBox="0 0 41 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2462 0.0801687C26.714 0.0801687 33.1819 0.0919781 39.6497 0.0683594C40.2669 0.0683594 40.4093 0.269118 40.4093 0.847777C40.3974 10.496 40.3618 20.1325 40.4211 29.7807C40.433 32.3787 40.3974 34.965 39.982 37.5394C38.997 43.7039 36.493 49.1953 32.4817 53.9899C27.4261 60.0363 21.0176 64.0278 13.5172 66.3779C9.36356 67.6769 5.09121 68.3028 0.735793 68.3382C0.166147 68.3382 0 68.1847 0 67.6061C0.0237353 62.9414 0.0118676 58.2767 0 53.612C0 53.1514 0.118676 52.9506 0.593381 52.8798C3.09745 52.4901 5.54218 51.8878 7.90384 50.9312C12.9001 48.9 15.8195 45.1329 17.03 40.0076C17.3742 38.5432 17.4691 37.0198 17.6234 35.52C17.7065 34.7052 17.6709 34.7052 16.8639 34.7052C11.4997 34.7052 6.14743 34.7052 0.783263 34.7052C0 34.7052 0 34.7052 0 33.9258C0 22.9195 0 11.925 0 0.918633C0 0.0801687 0 0.0801687 0.842601 0.0801687C7.31046 0.0801687 13.7783 0.0801687 20.2462 0.0801687Z"
                      fill="#EBC48B"
                    />
                    <path
                      d="M38.9072 1.56934C38.8962 9.76623 38.8715 17.9647 38.9033 26.1699L38.9209 29.79C38.932 32.219 38.8999 34.5485 38.5713 36.8418L38.501 37.3008V37.3027C37.5882 43.0152 35.3169 48.1121 31.6865 52.5957L31.3311 53.0273C26.6319 58.6474 20.7105 62.43 13.7461 64.7285L13.0684 64.9463C9.31229 66.1209 5.44906 66.7267 1.50195 66.8252C1.51979 62.6307 1.51157 58.4373 1.50098 54.249C3.69768 53.8721 5.8724 53.3253 7.99902 52.5068L8.4668 52.3213H8.46875C13.787 50.1592 16.9755 46.1621 18.3613 40.8691L18.4902 40.3525V40.3506C18.77 39.16 18.8999 37.9208 19.0088 36.7783L19.1152 35.6738V35.6719C19.1335 35.4924 19.1612 35.2314 19.1523 34.9932C19.144 34.768 19.0987 34.2184 18.6514 33.7598C18.2211 33.3189 17.6922 33.2478 17.499 33.2266C17.282 33.2026 17.0301 33.2051 16.8643 33.2051H1.5L1.5 1.58008L20.2461 1.58008C26.4613 1.58008 32.6849 1.5895 38.9072 1.56934Z"
                      stroke="url(#paint0_linear_145_3877)"
                      strokeOpacity="0.7"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_145_3877"
                        x1="21.1505"
                        y1="1.76831"
                        x2="21.0822"
                        y2="60.2901"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8A1538" />
                        <stop offset="1" stopColor="#8A1538" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* <!-- header -->
                <!-- content --> */}

                <p className="text-sm text-[#4E4E4E] mt-20">
                  Best decision for English tutoring! Educare improved our
                  daughter's skills and instilled confidence. Recent high scores
                  speak volumes. Thank you, Educare!
                </p>
                <div className="absolute bottom-0 p-5 w-[90%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-primary">Sarah H</h1>
                      <p className="text-xs opacity-50"> - Accountant</p>
                    </div>
                    <svg
                      width="148"
                      height="21"
                      viewBox="0 0 148 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1902 0.0683594L12.4781 7.10964H19.8817L13.8921 11.4614L16.1799 18.5027L10.1902 14.1509L4.20057 18.5027L6.48842 11.4614L0.498746 7.10964H7.90239L10.1902 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M42.0974 0.0683594L44.4942 7.10964H52.2503L45.9755 11.4614L48.3723 18.5027L42.0974 14.1509L35.8225 18.5027L38.2193 11.4614L31.9444 7.10964H39.7006L42.0974 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M73.9988 0.0683594L76.2867 7.10964H83.6903L77.7007 11.4614L79.9885 18.5027L73.9988 14.1509L68.0092 18.5027L70.297 11.4614L64.3073 7.10964H71.711L73.9988 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M105.906 0.0683594L108.303 7.10964H116.059L109.784 11.4614L112.181 18.5027L105.906 14.1509L99.6311 18.5027L102.028 11.4614L95.753 7.10964H103.509L105.906 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M137.811 0.0683594L140.099 7.10964H147.503L141.513 11.4614L143.801 18.5027L137.811 14.1509L131.822 18.5027L134.11 11.4614L128.12 7.10964H135.523L137.811 0.0683594Z"
                        fill="#FBBC04"
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- content --> */}
              </div>
            </div>
            {/* <!-- card33333 --> */}
            <div className="break-words">
              <div className="min-h-[270px]  w-screen sm:w-[400px] rounded-md border border-black/20 p-6 relative">
                {/* <!-- header --> */}
                <div className="absolute -top-[15%] w-[90%] p-4 flex justify-between">
                  <img
                    src="/images/master/rounded.png"
                    className="w-[94px]"
                    alt=""
                  />
                  <svg
                    width="41"
                    height="69"
                    viewBox="0 0 41 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2462 0.0801687C26.714 0.0801687 33.1819 0.0919781 39.6497 0.0683594C40.2669 0.0683594 40.4093 0.269118 40.4093 0.847777C40.3974 10.496 40.3618 20.1325 40.4211 29.7807C40.433 32.3787 40.3974 34.965 39.982 37.5394C38.997 43.7039 36.493 49.1953 32.4817 53.9899C27.4261 60.0363 21.0176 64.0278 13.5172 66.3779C9.36356 67.6769 5.09121 68.3028 0.735793 68.3382C0.166147 68.3382 0 68.1847 0 67.6061C0.0237353 62.9414 0.0118676 58.2767 0 53.612C0 53.1514 0.118676 52.9506 0.593381 52.8798C3.09745 52.4901 5.54218 51.8878 7.90384 50.9312C12.9001 48.9 15.8195 45.1329 17.03 40.0076C17.3742 38.5432 17.4691 37.0198 17.6234 35.52C17.7065 34.7052 17.6709 34.7052 16.8639 34.7052C11.4997 34.7052 6.14743 34.7052 0.783263 34.7052C0 34.7052 0 34.7052 0 33.9258C0 22.9195 0 11.925 0 0.918633C0 0.0801687 0 0.0801687 0.842601 0.0801687C7.31046 0.0801687 13.7783 0.0801687 20.2462 0.0801687Z"
                      fill="#EBC48B"
                    />
                    <path
                      d="M38.9072 1.56934C38.8962 9.76623 38.8715 17.9647 38.9033 26.1699L38.9209 29.79C38.932 32.219 38.8999 34.5485 38.5713 36.8418L38.501 37.3008V37.3027C37.5882 43.0152 35.3169 48.1121 31.6865 52.5957L31.3311 53.0273C26.6319 58.6474 20.7105 62.43 13.7461 64.7285L13.0684 64.9463C9.31229 66.1209 5.44906 66.7267 1.50195 66.8252C1.51979 62.6307 1.51157 58.4373 1.50098 54.249C3.69768 53.8721 5.8724 53.3253 7.99902 52.5068L8.4668 52.3213H8.46875C13.787 50.1592 16.9755 46.1621 18.3613 40.8691L18.4902 40.3525V40.3506C18.77 39.16 18.8999 37.9208 19.0088 36.7783L19.1152 35.6738V35.6719C19.1335 35.4924 19.1612 35.2314 19.1523 34.9932C19.144 34.768 19.0987 34.2184 18.6514 33.7598C18.2211 33.3189 17.6922 33.2478 17.499 33.2266C17.282 33.2026 17.0301 33.2051 16.8643 33.2051H1.5L1.5 1.58008L20.2461 1.58008C26.4613 1.58008 32.6849 1.5895 38.9072 1.56934Z"
                      stroke="url(#paint0_linear_145_3877)"
                      strokeOpacity="0.7"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_145_3877"
                        x1="21.1505"
                        y1="1.76831"
                        x2="21.0822"
                        y2="60.2901"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8A1538" />
                        <stop offset="1" stopColor="#8A1538" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* <!-- header -->
                <!-- content --> */}

                <p className="text-sm text-[#4E4E4E] mt-20">
                  Best decision for English tutoring! Educare improved our
                  daughter's skills and instilled confidence. Recent high scores
                  speak volumes. Thank you, Educare!
                </p>
                <div className="absolute bottom-0 p-5 w-[90%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-primary">Sarah H</h1>
                      <p className="text-xs opacity-50"> - Accountant</p>
                    </div>
                    <svg
                      width="148"
                      height="21"
                      viewBox="0 0 148 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1902 0.0683594L12.4781 7.10964H19.8817L13.8921 11.4614L16.1799 18.5027L10.1902 14.1509L4.20057 18.5027L6.48842 11.4614L0.498746 7.10964H7.90239L10.1902 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M42.0974 0.0683594L44.4942 7.10964H52.2503L45.9755 11.4614L48.3723 18.5027L42.0974 14.1509L35.8225 18.5027L38.2193 11.4614L31.9444 7.10964H39.7006L42.0974 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M73.9988 0.0683594L76.2867 7.10964H83.6903L77.7007 11.4614L79.9885 18.5027L73.9988 14.1509L68.0092 18.5027L70.297 11.4614L64.3073 7.10964H71.711L73.9988 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M105.906 0.0683594L108.303 7.10964H116.059L109.784 11.4614L112.181 18.5027L105.906 14.1509L99.6311 18.5027L102.028 11.4614L95.753 7.10964H103.509L105.906 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M137.811 0.0683594L140.099 7.10964H147.503L141.513 11.4614L143.801 18.5027L137.811 14.1509L131.822 18.5027L134.11 11.4614L128.12 7.10964H135.523L137.811 0.0683594Z"
                        fill="#FBBC04"
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- content --> */}
              </div>
            </div>
            {/* <!-- card4444 --> */}
            <div className="break-words">
              <div className="min-h-[270px]  w-screen sm:w-[400px] rounded-md border border-black/20 p-6 relative">
                {/* <!-- header --> */}
                <div className="absolute -top-[15%] w-[90%] p-4 flex justify-between">
                  <img
                    src="/images/master/rounded.png"
                    className="w-[94px]"
                    alt=""
                  />
                  <svg
                    width="41"
                    height="69"
                    viewBox="0 0 41 69"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.2462 0.0801687C26.714 0.0801687 33.1819 0.0919781 39.6497 0.0683594C40.2669 0.0683594 40.4093 0.269118 40.4093 0.847777C40.3974 10.496 40.3618 20.1325 40.4211 29.7807C40.433 32.3787 40.3974 34.965 39.982 37.5394C38.997 43.7039 36.493 49.1953 32.4817 53.9899C27.4261 60.0363 21.0176 64.0278 13.5172 66.3779C9.36356 67.6769 5.09121 68.3028 0.735793 68.3382C0.166147 68.3382 0 68.1847 0 67.6061C0.0237353 62.9414 0.0118676 58.2767 0 53.612C0 53.1514 0.118676 52.9506 0.593381 52.8798C3.09745 52.4901 5.54218 51.8878 7.90384 50.9312C12.9001 48.9 15.8195 45.1329 17.03 40.0076C17.3742 38.5432 17.4691 37.0198 17.6234 35.52C17.7065 34.7052 17.6709 34.7052 16.8639 34.7052C11.4997 34.7052 6.14743 34.7052 0.783263 34.7052C0 34.7052 0 34.7052 0 33.9258C0 22.9195 0 11.925 0 0.918633C0 0.0801687 0 0.0801687 0.842601 0.0801687C7.31046 0.0801687 13.7783 0.0801687 20.2462 0.0801687Z"
                      fill="#EBC48B"
                    />
                    <path
                      d="M38.9072 1.56934C38.8962 9.76623 38.8715 17.9647 38.9033 26.1699L38.9209 29.79C38.932 32.219 38.8999 34.5485 38.5713 36.8418L38.501 37.3008V37.3027C37.5882 43.0152 35.3169 48.1121 31.6865 52.5957L31.3311 53.0273C26.6319 58.6474 20.7105 62.43 13.7461 64.7285L13.0684 64.9463C9.31229 66.1209 5.44906 66.7267 1.50195 66.8252C1.51979 62.6307 1.51157 58.4373 1.50098 54.249C3.69768 53.8721 5.8724 53.3253 7.99902 52.5068L8.4668 52.3213H8.46875C13.787 50.1592 16.9755 46.1621 18.3613 40.8691L18.4902 40.3525V40.3506C18.77 39.16 18.8999 37.9208 19.0088 36.7783L19.1152 35.6738V35.6719C19.1335 35.4924 19.1612 35.2314 19.1523 34.9932C19.144 34.768 19.0987 34.2184 18.6514 33.7598C18.2211 33.3189 17.6922 33.2478 17.499 33.2266C17.282 33.2026 17.0301 33.2051 16.8643 33.2051H1.5L1.5 1.58008L20.2461 1.58008C26.4613 1.58008 32.6849 1.5895 38.9072 1.56934Z"
                      stroke="url(#paint0_linear_145_3877)"
                      strokeOpacity="0.7"
                      strokeWidth="3"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_145_3877"
                        x1="21.1505"
                        y1="1.76831"
                        x2="21.0822"
                        y2="60.2901"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#8A1538" />
                        <stop offset="1" stopColor="#8A1538" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                {/* <!-- header -->
                <!-- content --> */}

                <p className="text-sm text-[#4E4E4E] mt-20">
                  Best decision for English tutoring! Educare improved our
                  daughter's skills and instilled confidence. Recent high scores
                  speak volumes. Thank you, Educare!
                </p>
                <div className="absolute bottom-0 p-5 w-[90%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-primary">Sarah H</h1>
                      <p className="text-xs opacity-50"> - Accountant</p>
                    </div>
                    <svg
                      width="148"
                      height="21"
                      viewBox="0 0 148 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1902 0.0683594L12.4781 7.10964H19.8817L13.8921 11.4614L16.1799 18.5027L10.1902 14.1509L4.20057 18.5027L6.48842 11.4614L0.498746 7.10964H7.90239L10.1902 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M42.0974 0.0683594L44.4942 7.10964H52.2503L45.9755 11.4614L48.3723 18.5027L42.0974 14.1509L35.8225 18.5027L38.2193 11.4614L31.9444 7.10964H39.7006L42.0974 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M73.9988 0.0683594L76.2867 7.10964H83.6903L77.7007 11.4614L79.9885 18.5027L73.9988 14.1509L68.0092 18.5027L70.297 11.4614L64.3073 7.10964H71.711L73.9988 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M105.906 0.0683594L108.303 7.10964H116.059L109.784 11.4614L112.181 18.5027L105.906 14.1509L99.6311 18.5027L102.028 11.4614L95.753 7.10964H103.509L105.906 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M137.811 0.0683594L140.099 7.10964H147.503L141.513 11.4614L143.801 18.5027L137.811 14.1509L131.822 18.5027L134.11 11.4614L128.12 7.10964H135.523L137.811 0.0683594Z"
                        fill="#FBBC04"
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- content --> */}
              </div>
            </div>
            {/* <!-- card --> */}
            <div className="break-words">
              <div className="min-h-[270px]  w-screen sm:w-[400px] rounded-md border border-black/20 p-6 relative">
                {/* <!-- header -->
              
                <!-- header -->
                <!-- content --> */}

                <p className="text-sm text-[#4E4E4E] mt-20">
                  Best decision for English tutoring! Educare improved our
                  daughter's skills and instilled confidence. Recent high scores
                  speak volumes. Thank you, Educare!
                </p>
                <div className="absolute bottom-0 p-5 w-[90%]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h1 className="font-bold text-primary">Sarah H</h1>
                      <p className="text-xs opacity-50"> - Accountant</p>
                    </div>
                    <svg
                      width="148"
                      height="21"
                      viewBox="0 0 148 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.1902 0.0683594L12.4781 7.10964H19.8817L13.8921 11.4614L16.1799 18.5027L10.1902 14.1509L4.20057 18.5027L6.48842 11.4614L0.498746 7.10964H7.90239L10.1902 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M42.0974 0.0683594L44.4942 7.10964H52.2503L45.9755 11.4614L48.3723 18.5027L42.0974 14.1509L35.8225 18.5027L38.2193 11.4614L31.9444 7.10964H39.7006L42.0974 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M73.9988 0.0683594L76.2867 7.10964H83.6903L77.7007 11.4614L79.9885 18.5027L73.9988 14.1509L68.0092 18.5027L70.297 11.4614L64.3073 7.10964H71.711L73.9988 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M105.906 0.0683594L108.303 7.10964H116.059L109.784 11.4614L112.181 18.5027L105.906 14.1509L99.6311 18.5027L102.028 11.4614L95.753 7.10964H103.509L105.906 0.0683594Z"
                        fill="#FBBC04"
                      />
                      <path
                        d="M137.811 0.0683594L140.099 7.10964H147.503L141.513 11.4614L143.801 18.5027L137.811 14.1509L131.822 18.5027L134.11 11.4614L128.12 7.10964H135.523L137.811 0.0683594Z"
                        fill="#FBBC04"
                      />
                    </svg>
                  </div>
                </div>
                {/* <!-- content --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
