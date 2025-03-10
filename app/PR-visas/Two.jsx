"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ArrowRight } from "lucide-react";

const visaData = [
  { name: "Canada Permanent Residency Visa", path: "/PR-visas/canada-PR-visa", image: "/2.webp" },
  { name: "Australia Permanent Residency Visa", path: "/PR-visas/australia-pr", image: "/images/australia.jpg" },
  { name: "UK Permanent Residency Visa", path: "/PR-visas/uk-pr", image: "/images/uk.jpg" },
  { name: "New Zealand Permanent Residency Visa", path: "/PR-visas/new-zealand-pr", image: "/images/newzealand.jpg" },
  { name: "Germany Blue Card Visa", path: "/PR-visas/germany-blue-card", image: "/images/germany.jpg" },
  { name: "USA Green Card", path: "/PR-visas/usa-green-card", image: "/images/usa.jpg" },
];

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [background, setBackground] = useState(visaData[0].image);
  const [selectedVisa, setSelectedVisa] = useState(visaData[0].name);

  useEffect(() => {
    const foundVisa = visaData.find((visa) => visa.path === pathname);
    if (foundVisa) {
      setBackground(foundVisa.image);
      setSelectedVisa(foundVisa.name);
    }
  }, [pathname]);

  const handleVisaClick = (path, image, name) => {
    setBackground(image);
    setSelectedVisa(name);
    router.push(path);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      {/* Top Half Background Image */}
      <div
        className="w-full h-[50vh] bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${background})` }}
      ></div>

      {/* Content Section */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 pt-10 pb-20">
        {/* Title */}
        <div className="flex justify-center md:justify-start mb-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center md:text-left">
            Migrate with the Right Visa Option
          </h2>
        </div>

        {/* White Section for Visa Buttons & Content */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 md:p-10 flex flex-col md:flex-row gap-8">
          {/* Visa Selection Buttons */}
          <div className="w-full md:w-1/3">
            {visaData.map(({ name, path, image }) => (
              <div key={path} className="mb-4 w-full flex justify-center">
                <button
                  className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
                  shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
                  hover:bg-orange-500 hover:text-white transform hover:scale-105"
                  onClick={() => handleVisaClick(path, image, name)}
                >
                  {name}
                  <ArrowRight className="w-6 h-6 text-black transition duration-300 group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>

          {/* Dynamic Content Section */}
          <div className="w-full md:w-2/3 bg-gray-100 p-6 rounded-xl shadow-md border border-gray-300">
            <h3 className="text-2xl font-semibold text-gray-800">{selectedVisa}</h3>
            <p className="mt-4 text-gray-600">Details about {selectedVisa} will be displayed here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migrate;
