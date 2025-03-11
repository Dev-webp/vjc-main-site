"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { ArrowRight } from "lucide-react";

import Canadastudent from "./Canadapages/Canadastudent";

import Form from "./Form";

const australiaVisas = [
 
    { name: "Canada Work Permit", path: "/migrate/canada/work-permit" },
    { name: "Canada Student Visa", path: "/migrate/canada/student-visa" },
    { name: "Canada Tourist Visa", path: "/migrate/canada/tourist-visa" },
    { name: "Canada PR Visa", path: "/migrate/canada/pr-visa" },
    { name: "Canada Family Sponsorship Visa", path: "/migrate/canada/family-sponsorship-visa" },
  
];

const visaComponents = {
  "student-visa": Canadastudent,
  "business-visa": Canadastudent,
  "work-visa": Canadastudent,
  "family-visa": Canadastudent,
  "dependent-visa": Canadastudent,
  "sponsorship-visa": Canadastudent,
};

const AustraliaVisaSection = () => {
  const router = useRouter();
  const { visa } = useParams();
  const selectedVisa = australiaVisas.find((v) => v.path.endsWith(visa));
  const backgroundImage = selectedVisa?.bg || "/australiabgimg.jpg";
  const VisaComponent = visaComponents[visa] || Canadastudent;

  return (
    <div className="relative bg-cover bg-center min-h-screen">
      {/* Background Image + Form Section */}
      <div
        className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Heading and Description */}
        <div className="w-full lg:w-1/2 lg:ml-16 text-center lg:text-left">
          <h1
            className="font-semibold uppercase leading-tight text-teal-950 text-3xl sm:text-4xl md:text-5xl lg:text-[3.50rem] mt-12 sm:mt-12"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Migrate to Australia
          </h1>
          <p
            className="text-black tracking-tight text-center lg:text-left md:font-medium max-w-xl lg:max-w-lg mt-6 font-bold"
            style={{ fontFamily: "Times New Roman, serif" }}
          >
            Discover endless opportunities with our expert immigration services. Whether you’re looking to study or work abroad, we help make your dreams a reality.
          </p>
        </div>

        {/* Form on the Right Side */}
        <div className="w-full lg:w-1/2 lg:mr-16 lg:mt-14">
          <Form />
        </div>
      </div>

      {/* Visa Buttons + Visa Content Section */}
      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10 items-center lg:items-start">
        {/* Visa Buttons */}
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 mb-8 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">
            Visa Options for Australia
          </h2>
          <div className="flex flex-col gap-4 items-center">
            {australiaVisas.map(({ name, path }) => (
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

        {/* Visa Content Section */}
        <div className="w-full lg:flex-1 ml-10 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
};

export default AustraliaVisaSection;
