"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";

import Form from "../Form";

const countryVisaData = {
  germany: [
    { name: "Germany Opportunity Card", path: "/migrate/germany/opportunity-card" },
    { name: "Germany Work Visa", path: "/migrate/germany/work-visa" },
    { name: "Germany Student Visa", path: "/migrate/germany/student-visa" },
    { name: "Germany Tourist Visa", path: "/migrate/germany/tourist-visa" },
    { name: "Germany Dependent Visa", path: "/migrate/germany/dependent-visa" },
    { name: "Germany Self Employment Visa", path: "/migrate/germany/self-employment-visa" },
  ],
  canada: [
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Student Visa", path: "/migrate/canada/student-visa" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Family Sponsorship Visa", path: "/migrate/canada/family-sponsorship-visa" },
  ],
  "united-states": [
    { name: "USA Student Visa", path: "/migrate/united-states/student-visa" },
    { name: "USA Tourist Visa", path: "/migrate/united-states/tourist-visa" },
    { name: "USA Business Visa", path: "/migrate/united-states/business-visa" },
    { name: "USA H1B Visa", path: "/migrate/united-states/H1B-visa" },
    { name: "USA Investor Visa", path: "/migrate/united-states/investor-visa" }
  ],
  australia: [
    { name: "Australia Student Visa", path: "/migrate/australia/student-visa" },
    // { name: "Australia Tourist Visa", path: "/migrate/australia/tourist-visa" },
    { name: "Australia Business Visa", path: "/migrate/australia/business-visa" },
    { name: "Australia Work Visa", path: "/migrate/australia/work-visa" },
    { name: "Australia Family Visa", path: "/migrate/australia/family-visa" },
    { name: "Australia Dependent Visa", path: "/migrate/australia/dependent-visa" },
    { name: "Australia Sponsorship Visa", path: "/migrate/australia/sponsorship-visa" },
   
  ],
  "united-kingdom": [
    { name: "UK Work Visa", path: "/migrate/united-kingdom/work-visa" },
    { name: "UK Student Visa", path: "/migrate/united-kingdom/student-visa" },
  ],
  "new-zealand": [
    { name: "New Zealand Work Visa", path: "/migrate/new-zealand/work-visa" },
    { name: "New Zealand Resident Visa", path: "/migrate/new-zealand/resident-visa" },
  ],
  "south-africa": [
    { name: "South Africa Work Visa", path: "/migrate/south-africa/work-visa" },
    { name: "South Africa Business Visa", path: "/migrate/south-africa/business-visa" },
  ],
  "hong-kong": [
    { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },
    { name: "Hong Kong Investment Visa", path: "/migrate/hong-kong/investment-visa" },
  ],
  denmark: [
    { name: "Denmark Work Visa", path: "/migrate/denmark/work-visa" },
    { name: "Denmark Green Card", path: "/migrate/denmark/green-card" },
  ],
  uae: [
    { name: "UAE Work Visa", path: "/migrate/uae/work-visa" },
    { name: "UAE Investor Visa", path: "/migrate/uae/investor-visa" },
  ],
  
};

const visaComponents = {
  "opportunity-card": Goppcardvisa,
  
};

const backgroundImages = {
  germany: "/germanybgimg.jpg",
  canada: "/canadabgimg.jpg",
  "united-states": "/usabgimg.jpg",
  australia:'/australiabgimg.jpg',

};

const MigrateCountry = () => {
  const router = useRouter();
  const { country, visa } = useParams();
  const visas = countryVisaData[country] || [];
  const VisaComponent = visaComponents[visa] || null;
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    setIsImageLoaded(true);
  }, []);

  return (
    <div className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`}
    >
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen" style={{
      backgroundImage: `url(${backgroundImages[country]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
        <div className="w-full lg:w-1/2 lg:ml-16 mt-[-2rem] text-center lg:text-left">
          <h1 className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-12 sm:mt-12" style={{ fontFamily: "Times New Roman, serif" }}>
            Migrate to {country.charAt(0).toUpperCase() + country.slice(1)}
          </h1>
          <p className="flex text-black tracking-tight text-center lg:text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10 items-center lg:items-start">
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country.charAt(0).toUpperCase() + country.slice(1)}
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <button
                key={path}
                className="w-full sm:w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
                onClick={() => router.push(path)}
              >
                {name}
                <ArrowRight className="w-6 h-6 text-black transition duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="w-full lg:flex-1 ml-10 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0">
          {VisaComponent ? <VisaComponent /> : <Goppcardvisa />}
        </div>
      </div>
    </div>
  );
};

export default MigrateCountry;