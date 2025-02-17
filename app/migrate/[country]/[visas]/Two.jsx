"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Goppcardvisa from './Germany-visa/Goppcardvisa';
import Gworkvisa from './Germany-visa/Gworkvisa';
import Gstudentvisa from './Germany-visa/Gstudentvisa';
import Gtouristvisa from './Germany-visa/Gtouristvisa';
import Gdependentvisa from './Germany-visa/Gdependentvisa';
import Gselfempvisa from './Germany-visa/Gselfempvisa';

import Canadastudent from "./Canadapages/Canadastudent";
import Canadatourist from "./Canadapages/Canadatourist";
import Canadapr from "./Canadapages/Canadapr";
import Canadafs from "./Canadapages/Canadafs";
import Form from '../../Form';

import USAstud from "./USA-visa/USA-stud";
import USAbusiness from "./USA-visa/USA-business"
import USAh1b from "./USA-visa/USA-h1b"
import USAinvestor from "./USA-visa/USA-investor"
import USAtourist from "./USA-visa/USA-tourist"

import Ausstud from "./Australia-visa/Aus-stud"
import Ausfamily from "./Australia-visa/Aus-family"
import Ausdependent from "./Australia-visa/Aus-dependent"
import Ausbusiness from "./Australia-visa/Aus-business"
import Aussponser from "./Australia-visa/Aus-sponsor";
import Auswork from "./Australia-visa/Aus-work"
// import Austourist from "./Australia-visa/Aus-tourist";

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
};

const visaComponents = {
  'germany-opportunity-card': Goppcardvisa,
  'germany-work-visa': Gworkvisa,
  'germany-student-visa': Gstudentvisa,
  'germany-tourist-visa': Gtouristvisa,
  'germany-dependent-visa': Gdependentvisa,
  'germany-self-employment-visa': Gselfempvisa,

  'canada-pr-visa': Canadapr,
  'canada-work-permit': Canadapr,
  'canada-student-visa':Canadastudent,
  'canada-tourist-visa': Canadatourist,
  'canada-family-sponsorship-visa': Canadafs,

  'united-states-student-visa':USAstud,
  'united-states-tourist-visa':USAtourist,
  'united-states-business-visa':USAbusiness,
 'united-states-H1B-visa':USAh1b,
 'united-states-investor-visa':USAinvestor,

 'australia-student-visa':Ausstud,
//  'australia-tourist-visa':Austourist,
 'australia-business-visa':Ausbusiness,
 'australia-work-visa':Auswork,
 'australia-family-visa':Ausfamily,
 'australia-dependent-visa':Ausdependent,
 'australia-sponsorship-visa':Aussponser,

};

const backgroundImages = 
{ germany: '/germanyimg.jpg',
  canada: "/canadabgimg.jpg",
  "united-states": "/usabgimg.jpg",
  australia:'/australiabgimg.jpg',

 };

export default function MigrateCountry() {
  const router = useRouter();
  const { country, visas } = useParams();
  const visasList = countryVisaData[country] || [];
  
  const [selectedVisa, setSelectedVisa] = useState(null); // Track selected visa
  const [selectedButton, setSelectedButton] = useState(null); // Track selected button
  
  const VisaComponent = visas ? visaComponents[`${country}-${visas}`] : (country === 'germany' ? Goppcardvisa : null);

  useEffect(() => {
    // Set the selected visa when the `visas` param changes
    if (visas) {
      setSelectedVisa(`/migrate/${country}/${visas}`);
      setSelectedButton(`/migrate/${country}/${visas}`);
    }
  }, [visas, country]);

  const handleButtonClick = (path) => {
    console.log('Button clicked:', path);
    setSelectedVisa(path); // Set the selected visa component
    setSelectedButton(path); // Set the selected button for background change
    router.push(path); // Navigate to the selected visa page
  };

  return (
    <div>
      {/* Background Image with Full Width and 500px Height */}
      <div className="relative flex flex-col lg:flex-row items-center justify-between p-10 gap-10 min-h-screen"
        style={{
          backgroundImage: `url(${backgroundImages[country]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="w-full lg:w-1/2 flex flex-col lg:items-start items-center lg:text-left text-center mt-8 lg:mt-8 lg:ml-16">
          <h1 className="font-semibold uppercase text-teal-950 text-4xl lg:text-6xl lg:mb-4 lg:mt-4">Migrate to {country?.toUpperCase()}</h1>
          <p className="text-black mt-4 lg:mt-2 font-bold">Discover endless opportunities with our expert immigration services.</p>
        </div>
        <div className="w-full lg:w-1/2 lg:mr-16">
          <Form />
        </div>
      </div>
  
      <div className="flex flex-col lg:flex-row bg-gradient-to-bl from-white to-orange-50 px-8 py-10">
        <div className="w-full lg:w-[350px] flex-shrink-0 px-4 flex flex-col items-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-500 to-black bg-clip-text text-transparent mb-8 text-center">Visa Options for {country?.toUpperCase()}</h2>
          <div className="flex flex-col gap-4 items-center w-full">
            {visasList.map(({ name, path }) => (
              <button
                key={path}
                onClick={() => handleButtonClick(path)}
                className={`w-full lg:w-[350px] flex items-center justify-between text-lg font-semibold border border-orange-500 px-6 py-4 rounded-xl shadow-lg transition hover:bg-orange-500 hover:text-white
                  ${selectedButton === path ? 'bg-orange-500 text-white' : 'bg-white text-black'}`}
              >
                {name}
                <ArrowRight className="w-6 h-6" />
              </button>
            ))}
          </div>
        </div>
  
        <div className="w-full lg:flex-1 overflow-y-auto max-h-[800px] px-8 rounded-xl shadow-md border border-gray-200 mt-8 lg:mt-0 lg:ml-9">
          {VisaComponent ? <VisaComponent /> : <p>Select a visa option to view details.</p>}
        </div>
      </div>
    </div>
  );
  
}
