"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Form from "./Form"; // Ensure your Form component is properly imported

const visaData = [
  { 
    name: "Canada Permanent Residency Visa", 
    path: "/PR-visas/canada-PR-visa", 
    image: "/images/canada.jpg", 
    description: "Start your journey to Canada with a PR visa. Experience a high quality of life and endless opportunities." 
  },
  { 
    name: "Australia Permanent Residency Visa", 
    path: "/PR-visas/australia-pr", 
    image: "/images/australia.jpg", 
    description: "Live and work in Australia permanently. Enjoy a world-class lifestyle and career growth." 
  },
  { 
    name: "UK Permanent Residency Visa", 
    path: "/PR-visas/uk-pr", 
    image: "/images/uk.jpg", 
    description: "Secure your future in the UK with a PR visa. Access top-tier education and job prospects." 
  },
  { 
    name: "New Zealand Permanent Residency Visa", 
    path: "/PR-visas/new-zealand-pr", 
    image: "/images/newzealand.jpg", 
    description: "Move to New Zealand with a PR visa and enjoy a peaceful and prosperous life." 
  },
  { 
    name: "Germany Blue Card Visa", 
    path: "/PR-visas/germany-blue-card", 
    image: "/images/germany.jpg", 
    description: "Work and settle in Germany with the EU Blue Card, your gateway to Europe." 
  },
  { 
    name: "USA Green Card", 
    path: "/PR-visas/usa-green-card", 
    image: "/images/usa.jpg", 
    description: "Achieve your American dream with a Green Card, offering a lifetime of opportunities." 
  },
];

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState(visaData[0]);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setSelectedVisa(foundVisa);
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    setSelectedVisa(visa);
    router.push(visa.path);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Top Half: Dynamic Background Image, Text & Form */}
      <div
        className="w-full h-[50vh] bg-cover bg-center transition-all duration-500 flex items-center justify-center"
        style={{ backgroundImage: `url(${selectedVisa.image})` }}
      >
        <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 w-full max-w-screen-xl">
          {/* Text Section */}
          <motion.div
            className="w-full lg:w-1/2 text-white text-center lg:text-left"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h1
              className="font-semibold uppercase leading-tight text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem]"
              style={{ fontFamily: "Times New Roman, serif" }}
            >
              {selectedVisa.name}
            </motion.h1>
            <motion.p
              className="mt-4 text-lg font-medium"
              style={{ fontWeight: "bolder", fontFamily: "Times New Roman, serif" }}
            >
              {selectedVisa.description}
            </motion.p>
          </motion.div>

          {/* Form Section (Stays Constant) */}
          <div className="w-full lg:w-1/2">
            <Form />
          </div>
        </div>
      </div>

      {/* Bottom Half: Visa Buttons & Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-10 pb-20">
        {/* Title */}
        <div className="flex justify-center md:justify-start mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            Select Your Visa Option
          </h2>
        </div>

        {/* White Section for Visa Buttons & Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Visa Selection Buttons */}
          <div className="w-full md:w-1/3">
            {visaData.map((visa) => (
              <div key={visa.path} className="mb-4 w-full flex justify-center">
                <button
                  className={`w-[350px] flex items-center justify-between text-lg font-semibold px-6 py-4 rounded-xl transition duration-300 shadow-lg ${
                    selectedVisa.path === visa.path
                      ? "bg-orange-500 text-white border-orange-500 shadow-orange-400"
                      : "bg-white text-black border border-orange-500 hover:bg-orange-500 hover:text-white"
                  } transform hover:scale-105`}
                  onClick={() => handleVisaClick(visa)}
                >
                  {visa.name}
                  <ArrowRight className="w-6 h-6 transition duration-300" />
                </button>
              </div>
            ))}
          </div>

          {/* Dynamic Content Section */}
          <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-xl shadow-md border border-gray-300">
            <h3 className="text-2xl font-semibold text-gray-800">{selectedVisa.name}</h3>
            <p className="mt-4 text-gray-600">{selectedVisa.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
