"use client";
import React, { useState } from "react";

const faqs = [
  {
    id: 1,
    question: "What subjects do you offer tutoring in?",
    answer:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    id: 2,
    question: "What subjects do you offer tutoring in?",
    answer:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    id: 3,
    question: "What subjects do you offer tutoring in?",
    answer:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
  {
    id: 4,
    question: "What subjects do you offer tutoring in?",
    answer:
      "We offer tutoring in a wide range of subjects including Math, Science, English, Reading, History, and many more. We also provide specialized test preparation for standardized tests such as the SAT, ACT, and AP exams.",
  },
];

const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="w-full mt-10 p-4 sm:px-6 md:px-10 bg-[#F9F7F4]">
      <h1 className="font-grotesque font-[400] text-[42px] text-[#655945] text-center">
        Frequently asked <span className="font-[600]">Questions</span>
      </h1>

      <div className="w-full flex flex-col gap-4 justify-center items-center mt-6">
        {faqs.map(({ id, question, answer }) => {
          const isOpen = openId === id;
          return (
            <div
              key={id}
              className="gap-4 p-4 md:p-6 rounded-md bg-white w-full md:w-[90%]"
            >
              <div
                onClick={() => toggleFaq(id)}
                className="flex items-start justify-between w-full text-md mb-4 cursor-pointer"
              >
                <p>{question}</p>
                <svg
                  className={`transition-transform duration-500 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                  width="26"
                  height="26"
                  viewBox="0 0 26 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21.7003 10.3253L13.5753 18.4503C13.4998 18.5258 13.4102 18.5858 13.3116 18.6267C13.213 18.6675 13.1072 18.6886 13.0005 18.6886C12.8937 18.6886 12.7879 18.6675 12.6893 18.6267C12.5907 18.5858 12.5011 18.5258 12.4256 18.4503L4.30061 10.3253C4.14815 10.1728 4.0625 9.96606 4.0625 9.75045C4.0625 9.53484 4.14815 9.32807 4.30061 9.17561C4.45307 9.02315 4.65984 8.9375 4.87545 8.9375C5.09106 8.9375 5.29784 9.02315 5.4503 9.17561L13.0005 16.7268L20.5506 9.17561C20.6261 9.10012 20.7157 9.04024 20.8144 8.99938C20.913 8.95853 21.0187 8.9375 21.1255 8.9375C21.2322 8.9375 21.3379 8.95853 21.4366 8.99938C21.5352 9.04024 21.6248 9.10012 21.7003 9.17561C21.7758 9.2511 21.8357 9.34072 21.8765 9.43935C21.9174 9.53798 21.9384 9.64369 21.9384 9.75045C21.9384 9.85721 21.9174 9.96292 21.8765 10.0616C21.8357 10.1602 21.7758 10.2498 21.7003 10.3253Z"
                    fill="#655945"
                  />
                </svg>
              </div>

              <div
                className={`text-sm w-[95%] opacity-70 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-[300px]" : "max-h-0"
                }`}
              >
                {answer}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
