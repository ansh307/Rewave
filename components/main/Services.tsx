import React from "react";
// import SkillDataProvider from "../sub/ServicesDataProvider";
import ServicesText from "../sub/ServicesText";
// import WhyCard from "../sub/WhyCard";
import WhyCardProvider from "../sub/WhyCardProvider";



const Skills = () => {

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-20 "
      style={{ transform: "scale(0.9" }}
    >
      <ServicesText />

      <WhyCardProvider />
     

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

export default Skills;
