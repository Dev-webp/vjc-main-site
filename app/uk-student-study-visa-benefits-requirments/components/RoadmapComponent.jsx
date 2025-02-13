import React from 'react';
import { FaBookOpen, FaUserGraduate, FaPassport, FaHeart, FaFileSignature } from 'react-icons/fa';

const EligibilityRequirements = () => {
  const roadmap = [
    {
      title: "English Language Proficiency",
      des:"  -Not Mandatory*",
      text: " Is it possible to study in the UK without IELTS? Yes, it is possible to study in the UK without IELTS if you apply to certain universities that have alternative requirements such as proof of over 60% in English in Class XI and XII, and an undergraduate degree in English.",
      icon: <FaBookOpen className="text-saffron text-3xl" />,
    },
    {
      title: "LOR",
      text: "That is usually from the guidance of someone previous in education or service, as reference.",
      icon: <FaUserGraduate className="text-saffron text-3xl" />,
    },
    {
      title: "Admission requirements",
      text: "In this case, particular academic and language criteria have to be fulfilled to look for the admission in universities in the UK.",
      icon: <FaBookOpen className="text-saffron text-3xl" />,
    },
    {
      title: "Visa",
      text: "You could look up detailed guidelines related to the UK Study Visa However, more so, guidelines related to requirements.",
      icon: <FaPassport className="text-saffron text-3xl" />,
    },
    {
      title: "Healthcare Insurance",
      text: "The first source will come from National Health Service. Otherwise, students may resort to private sources of medical care insurance coverage.",
      icon: <FaHeart className="text-saffron text-3xl" />,
    },
    {
      title: "Statement of Purpose SOP",
      text: "A sort of personal statement detailing aims on academics of your career.",
      icon: <FaFileSignature className="text-saffron text-3xl" />,
    },
  ];

  return (
    <>
    <div className='h-[80rem] lg:h-fit'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-6 text-dark"><span className='text-saffron'>Eligibility Requirements</span> for UK Study Visa</h2>
      {/* <h6 className='text-center text-lg'>Ready to get started</h6> */}
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-[73rem] mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 w-full ml-0 md:ml-14 lg:ml-14">
          {/* Single Box for All Points */}
          <ul className="space-y-2">
            {roadmap.map((item, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="text-saffron">{item.icon}</div>
                <div>
                <h3 className="text-xl font-semibold text-dark inline">{item.title}
                  <p className="text-base font-semibold text-black text-justify inline">{item.des}</p>
                </h3>
                  <p className="text-base text-gray-700 text-justify">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side Image */}
        <div className="lg:w-1/2 w-full mt-2 lg:mt-0 ml-0 md:ml-20 lg:ml-20">
          <img 
            src="/uk student visa.png" 
            alt="UK Study Visa" 
            className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[37rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-36 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>
      </div>
      </div>
    </>
  );
};

export default EligibilityRequirements;
