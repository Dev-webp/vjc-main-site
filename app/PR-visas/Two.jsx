"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form";
import Content from "./Content"; // ✅ Import Content component

const visaData = [
  {
    name: "Canada Permanent Residency Visa",
    path: "/PR-visas/canadapr",
    image: "/1.jpg",
  },
  {
    name: "Australia Permanent Residency Visa",
    path: "/PR-visas/australiapr",
    image: "/airplane.png",
  },
  {
    name: "UK Permanent Residency Visa",
    path: "/PR-visas/ukpr",
    image: "/dmbusi.jpg",
  },
  {
    name: "New Zealand Permanent Residency Visa",
    path: "/PR-visas/newzealandpr",
    image: "/images/newzealand.jpg",
  },
  {
    name: "Germany Blue Card Visa",
    path: "/PR-visas/germanybluecard",
    image: "/images/germany.jpg",
  },
  {
    name: "USA Green Card",
    path: "/PR-visas/usagreencard",
    image: "/images/usa.jpg",
  },
];

const defaultVisa = {
  name: "Permanent Residency Visa",
  path: "/PR-visas",
  image: "/pr1.jpg",
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(defaultVisa);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    } else {
      setSelectedVisa(defaultVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="w-full min-h-screen flex flex-col" style={{fontFamily:'Times new romman'}}>
      {/* ===== TOP SECTION ===== */}
      <div
        className="relative w-full min-h-[90vh] bg-cover bg-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-12 py-8">
          <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
            <motion.div
              className="w-full lg:w-1/2 text-white text-center lg:text-left pt-20 sm:pt-32 lg:pt-0 lg:pl-10"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3rem] font-semibold uppercase leading-tight">
                {selectedVisa.name}
              </h1>
              <p className="mt-4 text-base sm:text-lg lg:text-xl max-w-xl">
                Start your migration journey with the right Permanent Residency Visa option. Choose your destination and let us guide you.
              </p>
            </motion.div>
            <div className="w-full lg:w-1/2 mt-8 lg:mt-12">
              <Form />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOTTOM SECTION ===== */}
      <div className="relative z-10 w-full bg-white px-4 sm:px-6 lg:px-12 pt-10 pb-16">
        <div className="flex justify-center md:justify-start mb-8 ml-16">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">Plan Your Move,</span>
            <span className="block text-center">Live Your Dream</span>
          </h2>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-10 items-start">
          {/* Visa Buttons */}
          <div className="w-full md:w-1/3">
            {visaData.map((visa) => (
              <div key={visa.path} className="mb-4 w-full">
                <button
                  className={`w-full flex items-center justify-between text-base sm:text-lg font-semibold px-5 sm:px-6 py-3 sm:py-4 rounded-xl transition duration-300 shadow-lg ${
                    selectedVisa.path === visa.path
                      ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                      : "bg-transparent text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  } transform hover:scale-105`}
                  onClick={() => handleVisaClick(visa)}
                >
                  {visa.name}
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </div>
            ))}
          </div>

          {/* Description Section (Visa Info Content Box) */}
          <div
            className="w-full md:w-2/3 p-4 sm:p-5 rounded-xl border border-gray-300 shadow-md -mt-12 sm:-mt-20 lg:-mt-24"
            style={{ maxHeight: "750px", minHeight: "480px", overflowY: "auto" }}
          >
            {selectedVisa.path === defaultVisa.path ? (
              <div className="text-gray-700 text-base sm:text-lg leading-relaxed">
                <Content selectedVisa={selectedVisa} />
              </div>
            ) : (
              <Content selectedVisa={selectedVisa} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
