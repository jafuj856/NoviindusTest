// components/Banner.tsx
"use client";

import React, { useEffect, useRef, useState } from "react";

const textOptions = [
  {
    title: "Personalized One-to-One",
    subtitle: "Tutoring at Our Center",
  },
  { title: "Expert Guidance", subtitle: "for Every Student" },
  { title: "Achieve More", subtitle: "With Focused Learning" },
];

const Banner = () => {
  const [textIndex, setTextIndex] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollX = useRef(0);
  const isPaused = useRef(false);
  const lastCenteredImg = useRef<HTMLImageElement | null>(null);

  // Add image scroll on mount
  useEffect(() => {
    const images = [
      "/images/banner/icon1.svg",
      "/images/banner/icon2.svg",
      "/images/banner/icon3.svg",
    ];
    const scroller = scrollerRef.current;
    const container = containerRef.current;

    if (!scroller || !container) return;

    images.concat(images).forEach((src) => {
      const img = document.createElement("img");
      img.src = src;
      img.className = "scroll-image";
      scroller.appendChild(img);
    });

    function updateScroll() {
      if (!isPaused.current && scroller) {
        scrollX.current -= 1;
        scroller.style.transform = `translateX(${scrollX.current}px)`;
        if (Math.abs(scrollX.current) >= scroller.scrollWidth / 2) {
          scrollX.current = 0;
        }
      }

      centerImageHighlight();
      requestAnimationFrame(updateScroll);
    }

    function centerImageHighlight() {
      if (!scroller || !container) return;

      const containerCenter = container.offsetWidth / 2;
      const imgs = scroller.querySelectorAll<HTMLImageElement>(".scroll-image");

      let closestImg: HTMLImageElement | null = null;
      let closestDistance = Infinity;

      imgs.forEach((img) => {
        const imgCenter =
          img.offsetLeft + img.offsetWidth / 2 - scrollX.current;
        const distance = Math.abs(containerCenter - imgCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestImg = img;
        }
      });

      imgs.forEach((img) => {
        img.style.opacity = img === closestImg ? "1" : "0.6";
      });
    }

    updateScroll();
  }, []);

  // Text cycle effect
  const [isFading, setIsFading] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % textOptions.length);
        setIsFading(false);
      }, 500); // match this with your CSS transition duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden w-screen">
      <img
        src="/images/bannerBg.png"
        className="h-full absolute z-0 w-full"
        alt=""
      />
      <div className="relative z-10 min-h-screen">
        <div
          id="changeText"
          className="h-60 flex items-center justify-center flex-col gap-4 mt-4"
        >
          <div className="absolute right-4 top-16 md:top-14">
            <img
              src="/images/banner/watsap.png"
              className=" max-w-[63px] md:max-w-[93px]"
              alt=""
            />
          </div>

          <h1
            ref={headingRef}
            className={`${
              isFading ? "opacity-0 fade-out" : "opacity-100 fade"
            }   font-grotesque text-center text-primary font-[800] text-[30px] md:text-[37px] lg:text-[47px] xl:text-[67px] w-full transition-all duration-100 ease-in-out`}
          >
            {textOptions[textIndex].title}
            <br />
            <span id="bannerSub" className="font-thin">
              {textOptions[textIndex].subtitle}
            </span>
          </h1>

          <div
            className="flex items-center justify-center gap-2"
            id="dotContainer"
          >
            {textOptions.map((_, i) => (
              <div
                key={i}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                className={`dot w-2 h-2 rounded-full ${
                  i === textIndex ? "bg-primary" : "bg-drpColor"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Scroller section */}
        <div className="w-full p-5 flex flex-col md:flex-row gap-4 justify-between items-center">
          <img
            src="/images/bannerLeft.png"
            className="md:max-w-[247px] lg:max-w-[307px] xl:max-w-[507px] w-full animate-slow-bounce"
            alt=""
          />
          <div className="flex flex-col items-center lg:gap-20">
            <div className="bg-[#EBC48B] rounded-md">
              <div className="-rotate-[5deg] bg-primary p-2 px-3 flex items-center gap-2 rounded-md hover:rotate-[0deg] text-[13px] lg:text-[19px] text-white font-[500] justify-center transition-all duration-500 ease-in-out min-w-[200px] lg:min-w-[299px] max-w-[299px] w-full">
                Book a Free Demo Class
                <svg
                  width="22"
                  height="29"
                  viewBox="0 0 22 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.1949 6.86982L17.2746 16.0742..." fill="white" />
                </svg>
              </div>
            </div>

            <div className="w-full mt-20">
              <h1 className="w-full text-center text-[16px] md:text-[23px] font-[700] font-grotesque text-primary">
                Curriculums we offer:
              </h1>
              <div ref={containerRef} className="w-full overflow-hidden">
                <div ref={scrollerRef} id="scroller" className="flex gap-4" />
              </div>
            </div>
          </div>
          <img
            src="/images/bannerrigth.png"
            className="md:max-w-[247px] lg:max-w-[307px] xl:max-w-[507px] w-full animate-slow-bounce1"
            alt=""
          />
        </div>
      </div>

      {/* Bottom info section */}
      <div className="flex flex-wrap justify-center  bg-drpColor text-[20px] md:text-[20px] font-[400] font-sans text-primary gap-4">
        {[
          { img: "bottom2.svg", label: "Personal Attention" },
          { img: "Growth Mindset.png", label: "Growth Mindset" },
          { img: "bottomsvg3.svg", label: "Skill Development" },
          { img: "bottom4.svg", label: "Passionate Teaching" },
        ].map((item, idx) => (
          <div
            key={idx}
            className="w-full md:w-1/2 lg:w-1/5 flex items-center gap-4 justify-center border-r border-primary last:border-none"
          >
            <img
              src={`/images/banner/${item.img}`}
              className="w-full max-w-10"
              alt=""
            />
            <div>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
