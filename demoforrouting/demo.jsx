migrate:"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Content from "./Content";

const countriesData = [
  { name: "Migrate to Germany", path: "/migrate/germany" },
  { name: "Migrate to Canada", path: "/migrate/canada" },
  { name: "Migrate to UnitedStates", path: "/migrate/united-states" },
  { name: "Migrate to Australia", path: "/migrate/australia", },
  { name: "Migrate to United Kingdom", path: "/migrate/united-kingdom",  },
  { name: "Migrate to New Zealand", path: "/migrate/new-zealand",  },
  { name: "Migrate to South Africa", path: "/migrate/south-africa", },
  { name: "Migrate to Hong Kong", path: "/migrate/hong-kong",  },
  { name: "Migrate to Denmark", path: "/migrate/denmark", },
  { name: "Migrate to UAE", path: "/migrate/uae",  },
];

const Migrate = () => {
  const router = useRouter();
  const [background, setBackground] = useState(countriesData[0].image);

  const handleCountryClick = (path, image) => {
    setBackground(image);
    router.push(path);
  };

  return (
    <section className="py-10 bg-cover bg-center transition-all duration-500 min-h-screen" style={{ backgroundImage: `url(${background})` }}>
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-center md:justify-start mb-8 ml-5">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent">
            <span className="block md:text-left text-center">Migrate to Your Dream</span>
            <span className="block text-center">Country</span>
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
          <div className="w-full md:w-1/3">
            {countriesData.map(({ name, path, image }) => (
              <div key={path} className="mb-4 w-full flex justify-center">
                <button
                  className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 
                  shadow-lg shadow-orange-200 hover:shadow-2xl hover:shadow-orange-400 
                  hover:bg-orange-500 hover:text-white transform hover:scale-105"
                  onClick={() => handleCountryClick(path, image)}
                >
                  {name}
                  <ArrowRight className="w-6 h-6 text-black transition duration-300 group-hover:text-white" />
                </button>
              </div>
            ))}
          </div>

          <div className="w-full md:w-2/3">
            <Content />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Migrate;


country: "use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Gworkvisa from "./Germany-visa/Gworkvisa";
import Form from "./Form";

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
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada Permanent Residency Visa", path: "/migrate/canada/permanent-residency-visa" },
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
    { name: "Australia Work Visa", path: "/migrate/australia/work-visa" },
    { name: "Australia Student Visa", path: "/migrate/australia/student-visa" },
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
  "work-visa": Gworkvisa,
};

const backgroundImages = {
  germany: "/germanybgimg.jpg",
  canada: "/canadabgimg.jpg",
  "united-states": "/usaimg.webp",

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
    <div className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`} style={{ backgroundImage: `url(${backgroundImages[country] || '/images/default-bg.jpg'})` }}>
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen">
        <div className="w-full lg:w-1/2 lg:ml-16 mt-[-2rem]">
          <h1 className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-12 sm:mt-12" style={{ fontFamily: "Times New Roman, serif" }}>
            Migrate to {country.charAt(0).toUpperCase() + country.slice(1)}
          </h1>
          <p className="flex text-black tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold" style={{ fontFamily: "Times New Roman, serif" }}>
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      <div className="flex bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
        <div className="w-[350px] flex-shrink-0 px-4">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country.charAt(0).toUpperCase() + country.slice(1)}
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <button
                key={path}
                className="w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl shadow-lg hover:shadow-2xl hover:bg-orange-500 hover:text-white transform hover:scale-105 transition duration-300"
                onClick={() => router.push(path)}
              >
                {name}
                <ArrowRight className="w-6 h-6 text-black transition duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 px-8">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default MigrateCountry;


visas:"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Goppcardvisa from "./Germany-visa/Goppcardvisa";
import Gworkvisa from "./Germany-visa/Gworkvisa";
import Form from "./Form";

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
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada Permanent Residency Visa", path: "/migrate/canada/permanent-residency-visa" },
    { name: "Canada Family Sponsorship Visa", path: "/migrate/canada/family-sponsorship-visa" },
  ],
};

const visaComponents = {
  "germany-opportunity-card": Goppcardvisa,
  "germany-work-visa": Gworkvisa,
  "germany-student-visa": () => <p>Germany Student Visa Component</p>,
  "germany-tourist-visa": () => <p>Germany Tourist Visa Component</p>,
  "germany-dependent-visa": () => <p>Germany Dependent Visa Component</p>,
  "germany-self-employment-visa": () => <p>Germany Self Employment Visa Component</p>,
  "canada-pr-visa": () => <p>Canada PR Visa Component</p>,
  "canada-work-permit": () => <p>Canada Work Permit Component</p>,
  "canada-permanent-residency-visa": () => <p>Canada Permanent Residency Visa Component</p>,
  "canada-family-sponsorship-visa": () => <p>Canada Family Sponsorship Visa Component</p>,
  "canada-tourist-visa": () => <p>Canada Tourist Visa Component</p>,
};

const backgroundImages = {
  germany: "/germanybgimg.jpg",
  canada: "/canadabgimg.jpg",
};

const MigrateCountry = () => {
  const router = useRouter();
  const { country, visa } = useParams();
  const visas = countryVisaData[country] || [];
  const VisaComponent = visa ? visaComponents[`${country}-${visa}`] : (country === 'germany' ? Goppcardvisa : null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => setIsImageLoaded(true), []);


  return (
    <div className={`relative bg-cover bg-center min-h-screen ${isImageLoaded ? "bg-loaded" : "bg-loading"}`} style={{ backgroundImage: `url(${backgroundImages[country] || '/images/default-bg.jpg'})` }}>
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen">
        <div className="w-full lg:w-1/2 lg:ml-16 mt-[-2rem]">
          <h1 className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-12 sm:mt-12">
            Migrate to {country?.charAt(0).toUpperCase() + country?.slice(1)}
          </h1>
          <p className="flex text-black tracking-tight text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold">
            Discover endless opportunities with our expert immigration services.
          </p>
        </div>

        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      <div className="flex bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
        <div className="w-[350px] flex-shrink-0 px-4">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for {country?.charAt(0).toUpperCase() + country?.slice(1)}
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {visas.map(({ name, path }) => (
              <button
                key={path}
                className={`w-[350px] flex items-center justify-between text-lg font-semibold bg-white text-black border border-orange-500 px-6 py-4 rounded-xl transition duration-300 shadow-lg hover:shadow-2xl hover:bg-orange-500 hover:text-white transform hover:scale-105 ${visa === path.split("/").pop() ? "bg-orange-500 text-black" : ""}`}
                onClick={() => router.push(path)}
              >
                {name}
                <ArrowRight className="w-6 h-6 transition duration-300" />
              </button>
            ))}
          </div>
        </div>

        <div className="flex-1 px-8">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default MigrateCountry;
