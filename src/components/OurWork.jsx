import React from "react";
import Title from "./Title";
import assets from "../assets/assets";

const OurWork = () => {
  const workData = [
    {
      title: "Sez Website",
      description: "Website Development",
      image: assets.work_mobile_app,
    },
    {
      title: "Overseas Education Website",
      description: "Website Development",
      image: assets.work_mobile_app,
    },
    {
      title: "SEZ Admin Dashboard",
      description: "Software Development",
      image: assets.work_mobile_app,
    },
    {
      title: "Real Estate Software",
      description: "Software Development",
      image: assets.work_mobile_app,
    },
    {
      title: "Industrial Website",
      description: "Website Development",
      image: assets.work_mobile_app,
    },
    {
      title: "Product Logo",
      description: "Logo Design",
      image: assets.work_mobile_app,
    },
  ];

  return (
    <div
      id="our-work"
      className="flex flex-col items-center gap-10 px-4
  sm:px-12 lg:px-24 xl:px-40 pt-20 text-gray-700 dark:text-white"
    >
      <Title
        title="Our latest Works"
        desc="From Strategy to execution, we craft Digital Solution that move your business forward"
      />

      <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-5xl">
        {workData.map((work, index) => (
          <div
            key={index}
            className="hover:scale-102 duration-500
                transition-all cursor-pointer"
          >
            <img src={work.image} className="w-full rounded-xl" alt="" />
            <h3 className="mt-2 mb-1 text-lg font-semibold">{work.title}</h3>
            <p className="text-sm opacity-60 w-5/6 mb-4">{work.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurWork;
