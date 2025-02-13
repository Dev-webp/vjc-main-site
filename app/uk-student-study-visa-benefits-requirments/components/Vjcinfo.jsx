import React from 'react';
import Image from 'next/image';

const VJCOverseas = () => {
  return (
    <div
      id='Vjc'
      className="flex flex-col lg:flex-row justify-center items-center w-full h-[100rem] md:h-[42rem] lg:h-[42rem] tablet:h-[55rem] relative bg-cover bg-center"
    >
      {/* Background Image with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/ukstudentvisaapply.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>

      {/* Overlay with reduced opacity */}
      <div className="absolute inset-0 bg-white opacity-75 z-10"></div>

      {/* Content Section */}
      <div className="relative z-20 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-[2.75rem] font-semibold text-dark mb-4 uppercase">
              <span className='text-saffron'>VJC Overseas:</span> Your Trusted Partner for a Smooth UK Student Visa Application Journey
            </h2>
            <p className="text-lg text-gray-700">
              VJC Overseas is one of the most trusted immigration consulting services with offices in both Hyderabad and Bangalore. With over 15 years of experience, we have been able to achieve more than a thousand cases of making people&apos;s living, studying, and working abroad possible.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Our Expertise Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-dark mb-4 text-center uppercase">
                Our Expertise
              </h3>
              <p className="text-lg text-gray-700 text-center">
                Our team is familiar with every type of pathway through immigration and will help clients navigate their way through the complexities of the UK Student Visa Application process. We make the process of documentation requirements less complicated, such as what&apos;s required for the document checklist for UK Student Visa.
              </p>
            </div>

            {/* Why Choose Us Section */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-dark mb-4 text-center uppercase">
                Why Choose Us?
              </h3>
              <p className="text-lg text-gray-700 text-center">
                As one of the best UK Study Visa Consultants In Bangalore and Hyderabad, we offer transparent guidance and a straightforward approach so that our clients feel confident at every step. VJC Overseas commits to making immigration a hassle-free journey beyond anything expected. It ensures that you settle comfortably in your new home abroad.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VJCOverseas;
