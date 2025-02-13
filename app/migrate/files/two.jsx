"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Content from "./Content";

const countriesData = {
  "Migrate to Germany": {
    description: "Germany is a key player in Europe and provides many opportunities for workers and students.",
    image: "https://example.com/germany-image.jpg",
    visaTypes: ["Germany Opportunity Card", "Germany Work Visa"],
  },
  "Migrate to Canada": {
    description: "Canada is one of the top destinations for skilled workers, students, and immigrants.",
    image: "https://example.com/canada-image.jpg",
    visaTypes: ["Canada Work Visa", "Canada Student Visa"],
  },
};

const Migrate = () => {
  const router = useRouter();

  return (
    <section className="py-10 bg-gradient-to-bl from-white to-orange-50">
      <div className="max-w-screen-xl mx-auto flex flex-row justify-between">
        <div className="w-1/3">
          {Object.entries(countriesData).map(([country, details]) => {
            const countrySlug = country.replace("Migrate to ", "").toLowerCase().replace(/\s+/g, "-");

            return (
              <div key={country} className="mb-6 p-4 rounded-md">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-md w-full text-left"
                  onClick={() => router.push(`/migrate/${countrySlug}`)}
                >
                  {country}
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-2/3">
          <Content />
        </div>
      </div>
    </section>
  );
};

export default Migrate;
