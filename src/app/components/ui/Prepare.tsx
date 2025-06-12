import React from "react";

function Prepare() {
  return (
    <div>
      <div className="mt-6 md:mt-8">
        <h1 className="font-grotesque font-[400] text-[22px] md:text-[32px] xl:text-[42px] text-[#655945] text-center mt-5">
          Prepare Your Child for a{" "}
          <span className="font-[600]">
            World of Opportunities with Educare
          </span>
        </h1>
        <div className="flex items-center justify-center mt-4">
          <img
            src="/images/subject/map.png"
            className="max-w-[85%] w-full"
            alt=""
          />
        </div>
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="p-3 bg-drpColor w-full flex items-center gap-6 text-[26px] font-[100] text-primary font-sans overflow-x-auto whitespace-nowrap"
      >
        <div className="flex gap-4 items-center">
          <p>
            Education is the foundation of greatness; let’s build it together
          </p>
          <img src="/svgIcon.svg" alt="" />
        </div>
        <div className="flex gap-4 items-center">
          <p>Learning today, leading tomorrow – the Educare way</p>
          <img src="/bigSvg.svg" alt="" />
        </div>
        <div className="flex gap-4 items-center">
          <p>Turning dreams into achievements through dedicated guidance</p>
        </div>
      </div>

      {/* <!-- videoDiv --> */}
    </div>
  );
}

export default Prepare;
