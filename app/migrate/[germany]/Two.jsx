"use client";

import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Content from "./Content";
import Gworkvisa from "./Gworkvisa";
import Gstudentvisa from "./Gstudentvisa";
import Gtouristvisa from "./Gtouristvisa";
import Gdependentvisa from "./Gdependentvisa";
import Gselfempvisa from "./Gselfempvisa";
import Gfreelance from "./Gfreelance";

const countriesData = {
  "Migrate to Germany": {
    visaTypes: {
      "Germany Opportunity Card": Content,
      "Germany Work Visa": Gworkvisa,
      "Germany Student Visa": Gstudentvisa,
      "Germany Tourist Visa": Gtouristvisa,
      "Germany Dependent Visa": Gdependentvisa,
      "Germany Self Employment Visa": Gselfempvisa,
      "Germany Freelance Visa": Gfreelance,
    },
  },
};

const Migrate = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [selectedVisa, setSelectedVisa] = useState("Germany Opportunity Card");

  // Extract visa type from URL
  useEffect(() => {
    const visaFromPath = pathname.split("/")[2]?.replace(/-/g, " "); // Extract visa slug
    if (visaFromPath) {
      setSelectedVisa(
        Object.keys(countriesData["Migrate to Germany"].visaTypes).find(
          (visa) => visa.toLowerCase() === visaFromPath.toLowerCase()
        ) || "Germany Opportunity Card"
      );
    }
  }, [pathname]);

  const handleVisaClick = (visa) => {
    const visaSlug = visa.replace(/\s+/g, "-").toLowerCase();
    router.push(`/migrate/${visaSlug}`); // Update URL
    setSelectedVisa(visa); // Update state to show new component
  };

  const SelectedVisaComponent =
    countriesData["Migrate to Germany"].visaTypes[selectedVisa] || Content;

  return (
    <section className="py-10 bg-gradient-to-bl from-white to-orange-50">
      <div className="max-w-screen-xl mx-auto px-4">
        {/* Centered Heading */}
        <div className="flex justify-center md:justify-start mb-14 ml-5">
          <h2 className="text-3xl font-bold text-gray-800">
            <span className="block md:text-left text-center mt-6">
              Migrate to Your Dream
            </span>
            <span className="block text-center">Country</span>
          </h2>
        </div>

        {/* Countries List & Content Side by Side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          {/* Visa List */}
          <div className="w-full md:w-1/3">
            {Object.entries(countriesData["Migrate to Germany"].visaTypes).map(
              ([visa]) => (
                <div key={visa} className="mb-2">
                  <button
                    className={`w-full text-lg font-medium px-4 py-2 rounded-md transition duration-300 ${
                      selectedVisa === visa
                        ? "bg-orange-500 text-white"
                        : "bg-white text-black border border-gray-300 hover:bg-orange-500 hover:text-white"
                    }`}
                    onClick={() => handleVisaClick(visa)}
                  >
                    {visa}
                  </button>
                </div>
              )
            )}
          </div>

          {/* Content Section */}
          <div className="w-full md:w-2/3">
            <SelectedVisaComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migrate;
