import React from 'react';
import { FaMoneyCheck, FaFolder, FaIdCard, FaStethoscope, FaFileAlt, FaShieldAlt } from 'react-icons/fa';

const Why = () => {
  const roadmap = [
    {
      title: "UK universities are known for the best academic standards. Four out of the world's top ten universities are found there.",
      icon: <FaMoneyCheck className="text-saffron text-3xl" />,
    },
    {
      title: "The Quality Assurance Agency (QAA) checks that all UK universities do very good work on teaching, learning, and research.",
      icon: <FaFolder className="text-saffron text-3xl" />,
    },
    {
      title: "Generally, the length of the degree programs differs between the UK countries whereby undergraduate courses take only three years, while graduate programs may just take one year.",
      icon: <FaIdCard className="text-saffron text-3xl" />,
    },
    {
      title: "International students in the UNITED KINGDOM can work up to 20 hours per week during term time and full-time during holidays.",
      icon: <FaStethoscope className="text-saffron text-3xl" />,
    },
    {
      title: "A degree from UK university adds value to your resume in terms of telling employers that you actually have the skills and experience.",
      icon: <FaFileAlt className="text-saffron text-3xl" />,
    },
    {
      title: "UK Universities also provide various other support facilities specifically to the international students, but some of them include provision of pre-arrival guides about health insurance, housing and budgeting together with orientation events, cultural programs, and workshops.",
      icon: <FaShieldAlt className="text-saffron text-3xl" />,
    },
  ];

  return (
    <>
    <div className='h-[80rem] lg:h-fit'>
      <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-6 text-dark">
        Why to Choose <span className='text-saffron'>UK For Your Future?</span>
      </h2>
      <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-8">
        
        {/* Right Side Image */}
        <div className="lg:w-1/2 w-full mb-10 lg:mb-0 ml-0 md:ml-20 lg:ml-20">
          <img 
            src="/uk student visa processing time.png" 
            alt="UK Study Visa" 
            className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[37rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-24 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
          />
        </div>

        {/* Requirements Content (on Left) */}
        <div className="lg:w-1/2 w-full">
          <ul className="space-y-4">
            {roadmap.map((item, index) => (
              <li key={index} className="flex items-center space-x-4">
                <div className="text-saffron">{item.icon}</div>
                <h3 className="text-base text-justify font-medium text-dark">{item.title}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </>
  );
};

export default Why;
