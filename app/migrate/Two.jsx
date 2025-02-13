"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Content from "./Content";

const countriesData = {
  "Migrate to Germany": {
    visaTypes: [
      "Germany Opportunity Card",
      "Germany Work Visa",
      "Germany Student Visa",
      "Germany Tourist Visa",
      "Germany Dependent Visa",
      "Germany Self Employment Visa",
      "Germany Freelance Visa",
    ],
  },
  "Migrate to Canada": {
    visaTypes: [
      "Canada Work Visa",
      "Canada Student Visa",
      "Canada Tourist Visa",
      "Canada Permanent Residency Visa",
      "Canada Family Sponsorship Visa",
    ],
  },
  "Migrate to United States": {
    visaTypes: [
      "USA Student Visa",
      "USA Tourist Visa",
      "USA Business Visa",
      "USA H1B Visa",
      "USA Investor Visa",
    ],
  },
  "Migrate to Australia": {
    visaTypes: [
      "Australia Student Visa",
      "Australia Tourist Visa",
      "Australia Business Visa",
      "Australia Work Visa",
      "Australia Family Visa",
      "Australia Dependent Visa",
      "Australia Sponsorship Visa",
    ],
  },
  "Migrate to United Kingdom": {
    visaTypes: [
      "UK Student Visa",
      "UK Tourist Visa",
      "UK Business Visa",
      "UK Innovator Visa",
      "UK Sponsorship Visa",
    ],
  },
  "Migrate to New Zealand": {
    visaTypes: [
      "New Zealand Permanent Resident Visa",
      "New Zealand Skilled Work Visa",
      "New Zealand Student Visa",
      "New Zealand Business Visa",
      "New Zealand Tourist Visa",
      "New Zealand Dependent Visa",
      "New Zealand Work Visa",
    ],
  },
};

const Migrate = () => {
  const router = useRouter();

  return (
    <section className="py-10 bg-gradient-to-bl from-white to-orange-50">
      <div className="max-w-screen-xl mx-auto px-4">
        
        {/* Centered Heading */}
        <div className="flex justify-center md:justify-start mb-8 ml-5">
  <h2 className="text-3xl font-bold text-gray-800">
    <span className="block md:text-left text-center">Migrate to Your Dream</span>
    <span className="block text-center">Country</span>
  </h2>
</div>

        {/* Countries List & Content Side by Side */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          
          {/* Countries List */}
          <div className="w-full md:w-1/3">
            {Object.entries(countriesData).map(([country]) => {
              const countrySlug = country
                .replace("Migrate to ", "")
                .toLowerCase()
                .replace(/\s+/g, "-");
  
              return (
                <div key={country} className="mb-4 w-full">
                  <button
                    className="w-full text-lg font-semibold bg-white text-black border border-gray-300 px-4 py-3 rounded-md transition duration-300 hover:bg-orange-500 hover:text-white"
                    onClick={() => router.push(`/migrate/${countrySlug}`)}
                  >
                    {country}
                  </button>
                </div>
              );
            })}
          </div>
  
          {/* Content Section */}
          <div className="w-full -mt-20 md:w-2/3">
            <Content />
          </div>
  
        </div>
      </div>
    </section>
  );
};

export default Migrate;
