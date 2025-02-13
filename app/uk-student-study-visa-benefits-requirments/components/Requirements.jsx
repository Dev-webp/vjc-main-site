import React from 'react';
import { FaMoneyCheck, FaFolder, FaIdCard, FaStethoscope, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

const Requirements = () => {
  const roadmap = [
    {
      title: "Proof of available and sufficient funds for maintenance throughout your stay during the course",
      icon: <FaMoneyCheck className="text-saffron text-3xl" />,
    },
    {
      title: "CAS reference number and supporting documents",
      icon: <FaFolder className="text-saffron text-3xl" />,
    },
    {
      title: "Colour photographs required to be passport-size",
      icon: <FaIdCard className="text-saffron text-3xl" />,
    },
    {
      title: "Screening for Tuberculosis if Applicant's country of origin is South Asian",
      icon: <FaStethoscope className="text-saffron text-3xl" />,
    },
    {
      title: "Assessment documentation",
      icon: <FaFileAlt className="text-saffron text-3xl" />,
    },
    {
      title: "ATAS clearance which will be required in case you are asked to provide it.",
      icon: <FaShieldAlt className="text-saffron text-3xl" />,
    },
  ];

  return (
    <>
     <div className='h-[70rem] lg:h-fit'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-4 text-dark">
        UK Student Visa <span className='text-saffron'>Requirement</span>
      </h2>
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row items-start gap-8">
        
        {/* Left Side Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0">
          <img 
            src="/uk student visa requirements.png" 
            alt="UK Study Visa" 
            className="object-cover w-[100%] h-[24rem] rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Requirements Content */}
        <div className="lg:w-1/2 w-full">
          <ul className="space-y-6">
            {roadmap.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="text-saffron">{item.icon}</div>
                <h3 className="text-lg font-medium text-dark">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Requirements;
