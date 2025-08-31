import React from "react";

function Welcom() {
  return (
    <div
      id="card-container"
      className="flex text-center flex-wrap items-center gap-6"
    >
      <div className="flex-1 basis-[70%]">
        <h3 className="font-bold text-[var(--primary)] text-xl mb-3">
          Welcome to SB Admin Pro!
        </h3>
        <p>
          Browse our fully designed UI toolkit! Browse our prebuilt app pages,
          components, and utilites, and be sure to look at our full
          documentation!
        </p>
      </div>
      <div className="flex-1 basis-[30%] md:basis-[25%] xl:basis-[30%]">
        <img src="/at-work.svg" className="h-full" />
      </div>
    </div>
  );
}

export default Welcom;
