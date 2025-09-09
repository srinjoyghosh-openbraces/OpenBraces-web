import React from "react";
import assets from "../assets/assets";
import Title from "./Title";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const servicesData = [
    {
      title: "Website Design",
      description:
        "Static and dynamic, responsive and mobile ready websites made to showcase your product or business.",
      icon: assets.ads_icon,
    },
    {
      title: "Software Services",
      description:
        "Accounting, Consulting, Admin Dashboards and any customized software solution as per your requirement.",
      icon: assets.marketing_icon,
    },
    {
      title: "Logo & Graphics design",
      description:
        "Showcase your products with that extra shine! Our graphic designers will go the extra mile for you!",
      icon: assets.content_icon,
    },
    {
      title: "SEO & Marketing",
      description:
        "All hard work but not getting enough view? Our SEO & SMM experts will do the hard work for you only!.",
      icon: assets.social_icon,
    },
  ];
  return (
    <div
      id="services"
      className="relative flex flex-col items-center gap-7 px-4
    sm:px-12 lg:px-24 xl:px-40 pt-30 text-gray-700 dark:text-white"
    >
      <img
        src={assets.bgImage2}
        className="absolute -top-110 -left-70
      -z-1 dark:hidden"
        alt=""
      />

      <Title
        title="  How can we Help?"
        desc="From strategy to execution, we craft digital solutions that move your business forward."
      />

      <div className="flex flex-col md:grid grid-cols-2">
        {servicesData.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
