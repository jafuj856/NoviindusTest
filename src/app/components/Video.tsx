import React from "react";

function Video() {
  return (
    <div>
      <div className="mt-6 flex flex-col items-center justify-center gap-6">
        <h1 className="font-grotesque font-[400] text-[42px] text-[#655945] mb-3">
          Subjects We <span className="font-[600]">Teach</span>
        </h1>
        <iframe
          className="rounded-md"
          width="80%"
          height="615"
          src="https://www.youtube.com/embed/50klx9Q5ls8"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default Video;
