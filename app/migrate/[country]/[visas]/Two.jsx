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

import UKBvisa from "./UK-visa/UKBvisa";
import UKTvisa from "./UK-visa/UKTvisa";
import UKinnovatorvisa from "./UK-visa/UKinnovatorvisa";
import UKsponvisa from "./UK-visa/UKsponvisa";
import UKstudvisa from "./UK-visa/UKstudvisa";

import HKtourist from "./HongKongpages/HKtourist";
import HKemployee from "./HongKongpages/HKemployee";
import HKstudentvisa from "./HongKongpages/HKstudentvisa";
import HKbusiness from "./HongKongpages/HKbusiness";
import HKdependent from "./HongKongpages/HKdependent";
import HKwork from "./HongKongpages/HKwork";

import Denbusiness from "./Denmark-visa/Den-business"
import Denstud from "./Denmark-visa/Den-stud"
import Denwork from "./Denmark-visa/Den-work"
import Dentourist from "./Denmark-visa/Den-tourist"

import Newzepr from "./Newzealand-visa/Newze-pr"
import Newzedepen from "./Newzealand-visa/Newze-Depen"
import Newzeskillwork from "./Newzealand-visa/Newze-skillwork"
import Newzestud from "./Newzealand-visa/Newze-stud"
import Newzetourist from "./Newzealand-visa/Newze-tourist"
import Newzebusiness from "./Newzealand-visa/Newze-business"
import Newzework from "./Newzealand-visa/Newze-work"

import UAEstud from "./UAE-visa/UAE-stud";
import UAEgolden from "./UAE-visa/UAE-golden";
import UAEwork from "./UAE-visa/UAE-work";
import UAEgreen from "./UAE-visa/UAE-green";
import UAEtourist from "./UAE-visa/UAE-tourist";



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
    { name: "UK Student Visa", path: "/migrate/united-kingdom/student-visa" },
    { name: "UK Tourist Visa", path: "/migrate/united-kingdom/tourist-visa" },
    { name: "UK business Visa", path: "/migrate/united-kingdom/business-visa" },
    { name: "UK Innovator Visa", path: "/migrate/united-kingdom/innovator-visa" },
    { name: "UK Sponsorship Visa", path: "/migrate/united-kingdom/sponsorship-visa" }
  ],
  "new-zealand": [
    { name: "New Zealand Permanent Resident Visa", path: "/migrate/new-zealand/permanent-resident-visa" },
    { name: "New Zealand Work Visa", path: "/migrate/new-zealand/work-visa" },
    { name: "New Zealand Student Visa", path: "/migrate/new-zealand/student-work-visa" },
    { name: "New Zealand Skilled Work Visa", path: "/migrate/new-zealand/skilled-work-visa" },
    { name: "New Zealand Business Visa", path: "/migrate/new-zealand/business-visa" },
    { name: "New Zealand Tourist Visa", path: "/migrate/new-zealand/tourist-visa" },
    { name: "New Zealand Dependent Visa", path: "/migrate/new-zealand/dependent-visa" },
  ],
  "south-africa": [
    { name: "South Africa Critical Skills Visa", path: "/migrate/south-africa/critical-skills-visa" },
    { name: "South Africa General Work Visa", path: "/migrate/south-africa/general-work-visa" },
    { name: "South Africa Business Visa", path: "/migrate/south-africa/business-visa" },
    { name: "South Africa Tourist Visa", path: "/migrate/south-africa/tourist-visa" },
  ],
  "hong-kong": [
    { name: "Hong Kong Student Visa", path: "/migrate/hong-kong/student-visa" },
    { name: "Hong Kong Employment Visa", path: "/migrate/hong-kong/employment-visa" },
    { name: "Hong Kong Business Visa", path: "/migrate/hong-kong/business-visa" },
    { name: "Hong Kong Tourist Visa", path: "/migrate/hong-kong/tourist-visa" },
    { name: "Hong Kong Dependent Visa", path: "/migrate/hong-kong/dependent-visa" },
    { name: "Hong Kong Work Visa", path: "/migrate/hong-kong/work-visa" },
  ],
  denmark: [
    { name: "Denmark Student Visa", path: "/migrate/denmark/student-visa" },
    { name: "Denmark Work Permit Visa", path: "/migrate/denmark/work-permit-visa" },
    { name: "Denmark Tourist Visa", path: "/migrate/denmark/tourist-visa" },
    { name: "Denmark Business Visa", path: "/migrate/denmark/business-visa" },
  ],
  uae: [
    { name: "UAE Student Visa", path: "/migrate/uae/student-visa" },
    { name: "UAE Golden Visa", path: "/migrate/uae/golden-visa" },
  { name: "UAE Work Visa", path: "/migrate/uae/work-visa" },
  { name: "UAE Green Visa", path: "/migrate/uae/green-visa" },
  { name: "UAE Tourist Visa", path: "/migrate/uae/tourist-visa" },
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

 'united-kingdom-student-visa':UKstudvisa,
 'united-kingdom-tourist-visa':UKTvisa,
 'united-kingdom-business-visa':UKBvisa,
 'united-kingdom-innovator-visa':UKinnovatorvisa,
 'united-kingdom-sponsorship-visa':UKsponvisa,

 'new-zealand-permanent-resident-visa':Newzepr,
 'new-zealand-work-visa':Newzework,
 'new-zealand-student-work-visa':Newzestud,
 'new-zealand-skilled-work-visa':Newzeskillwork,
 'new-zealand-business-visa':Newzebusiness,
 'new-zealand-tourist-visa':Newzetourist,
 'new-zealand-dependent-visa':Newzedepen,

 'hong-kong-student-visa':HKstudentvisa,
 'hong-kong-employment-visa':HKemployee,
 'hong-kong-business-visa':HKbusiness,
 'hong-kong-tourist-visa':HKtourist,
 'hong-kong-dependent-visa':HKdependent,
 'hong-kong-work-visa':HKwork,

 'denmark-student-visa':Denstud,
 'denmark-work-permit-visa':Denwork,
 'denmark-tourist-visa':Dentourist,
 'denmark-business-visa':Denbusiness,

 'uae-student-visa':UAEstud,
 'uae-golden-visa':UAEgolden,
 'uae-work-visa':UAEwork,
 'uae-green-visa':UAEgreen,
 'uae-tourist-visa':UAEtourist,

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
  const paths = visasList.map(v => v.path);
  const duplicates = paths.filter((path, index) => paths.indexOf(path) !== index);
  console.log("Duplicate paths:", duplicates);
  
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
