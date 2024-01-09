import React from "react";
import ServicesCard from "../sub/ServicesCard";

const Services = () => {
  return (
    <div
      className="flex flex-col items-center justify-center pb-20"
      id="Services"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-20 pb-10">
        Services
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ServicesCard
          src="/Services.png"
          title="Workflow Optimization"
          description="Streamline your processes for maximum efficiency. We analyze your workflow, identify bottlenecks, and implement solutions to optimize every step."
        />
        <ServicesCard
          src="/Services.png"
          title="Task Management Solutions"
          description="Revolutionize the way you manage tasks. Our comprehensive task management services ensure that you stay organized, prioritize effectively, and meet your goals."
        />
        <ServicesCard
          src="/Services.png"
          title="Collaborative Workspace Integration"
          description="Foster teamwork and boost collaboration with our collaborative workspace solutions. Create a centralized hub for your team to share ideas, assign tasks, and track progress."
        />
      </div>
    </div>
  );
};

export default Services;
