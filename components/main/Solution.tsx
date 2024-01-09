import React from "react";
// import SkillDataProvider from "../sub/ServicesDataProvider";
import SolutionText from "../sub/SolutionText";
// import WhyCard from "../sub/WhyCard";
import SolutionsCardProvider from "../sub/SolutionsCardProvider";



const Solutions = () => {

  return (
    <section
      id="Solutions"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 "
      style={{ transform: "scale(0.9" }}
    >
      <SolutionText />

      <SolutionsCardProvider />
     

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Solutions;
