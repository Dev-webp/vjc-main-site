import React from 'react';
import { FaRocket, FaHandshake, FaTrophy } from 'react-icons/fa';

const Why = () => {
  const roadmap = [
    {
      title: "Continuous Improvement",
      icon: <FaRocket className="text-saffron text-3xl" />,
      description: [
        "We believe in the power of learning and evolving.",
        "This dedication helps us provide our clients with the most current and effective solutions.",
        "Our team is committed to staying updated with the latest trends, policies, and opportunities in the field of international education and immigration."
      ]
    },
    {
      title: "Client Satisfaction",
      icon: <FaHandshake className="text-saffron text-3xl" />,
      description: [
        "We are proud of the positive feedback we receive from our clients.",
        "Over the years, we have built a reputation for delivering exceptional service.",
        "Our focus on client satisfaction has earned us the trust of hundreds of students and professionals who have successfully achieved their goals abroad."
      ]
    },
    {
      title: "Recognised Excellence",
      icon: <FaTrophy className="text-saffron text-3xl" />,
      description: [
        "Our commitment to excellence has been recognised through numerous awards.",
        "These accolades reflect our unwavering dedication to providing the best service to our clients.",
        "In 2022, 2023, and 2024, we were honoured with the title of India’s Most Trusted Brand of the Year, awarded to us consecutively in Delhi and Bengaluru."
      ]
    }
  ];

  const awards = [
    {
      year: "2022",
      title: "India’s Most Trusted Brand of the Year – Delhi",
      image: "/path/to/award-image-2022.png"
    },
    {
      year: "2023",
      title: "India’s Most Trusted Brand of the Year – Delhi",
      image: "/path/to/award-image-2023.png"
    },
    {
      year: "2024",
      title: "India’s Most Trusted Brand of the Year – Bengaluru",
      image: "/path/to/award-image-2024.png"
    }
  ];

  return (
    <>
      <div className='h-[80rem] lg:h-fit mb-0 md:mb-0 lg:mb-0 tablet:mb-20'>
        <h2 className="text-[2.50rem] font-semibold mt-6 uppercase text-center mb-6 text-dark">
          Why To Choose <span className='text-saffron'>Vjc Overseas?</span>
        </h2>
        <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-start gap-8">

          {/* Right Side Image */}
          <div className="lg:w-1/2 w-full mb-10 lg:mb-0 ml-0 md:ml-20 lg:ml-20">
            <img 
              src="/germany opportunity card processing time.png" 
              alt="Germany Opportunity Card Processing Time" 
              className="object-cover w-[20rem] h-[20rem] md:w-[26rem] md:h-[37rem] lg:w-[26rem] lg:h-[37rem] ml-14 md:ml-0 lg:ml-0 tablet:ml-24 rounded-2xl shadow-2xl transition-transform transform hover:scale-105"
            />
          </div>

          {/* Requirements Content (on Left) */}
          <div className="lg:w-1/2 w-full">
            <ul className="space-y-6">
              {roadmap.map((item, index) => (
                <li key={index} className="flex flex-col items-start space-y-2">
                  <div className="flex items-center space-x-4">
                    <div className="text-saffron">{item.icon}</div>
                    <h3 className="text-lg font-medium text-dark">{item.title}</h3>
                  </div>
                  <ul className="ml-8 text-sm text-gray-600 text-justify space-y-1">
                    {item.description.map((point, idx) => (
                      <li key={idx} className="relative pl-4 before:content-['•'] before:absolute before:left-0 before:text-saffron before:font-bold before:text-xl">{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Awards Section */}
        <div className="p-8 bg-white rounded-lg shadow-xl max-w-6xl mx-auto mt-12">
          <h3 className="text-[2rem] font-semibold text-center mb-6 text-dark uppercase text-orange-500">
            Our Recognitions and Awards
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="flex flex-col items-center p-4  bg-gray-50 rounded-lg shadow-md">
                <img 
                  src={award.image} 
                  alt={award.title} 
                  className="w-32 h-32 object-cover rounded-full mb-4"
                />
                <h4 className="text-xl font-semibold text-dark mb-2">{award.year}</h4>
                <p className="text-center text-sm text-gray-600 max-w-xs">{award.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Why;
