import React from 'react';

const LogoSlider = () => {
  const logos = [
    '/Cardiff Metropolitan University logo.png',
    '/Coventry University logo.png',
    '/De Montfort university logo.png',
    '/Edinburgh Napier University logo.png',
    '/Herriot watt university logo.png',
    '/logo-birmingham-city-university5078.jpg',
    '/Northumbria University, New castle logo.png',
    '/Teesside-black-logo.png',
    '/University of Central Lancashire logo.png',
    '/University of East London logo.jpg',
    '/University of Greenwich logo.jpg',
    '/University of Portsmouth logo.png',
    '/Roehampton.jpg',
    '/University of Sunderland logo.png',
    '/University of Surrey logo.png',
    '/University of West London logo.png',
    '/University of Wolverhampton logo.jpeg',
    '/University_of_Hertfordshire_Logo.svg.png',
    '/Middlesex_University_Logo_London.png',
  ];

  return (
    <div className="p-8 bg-gray-50 rounded-lg shadow-xl max-w-[73rem] mx-auto flex flex-col lg:flex-row items-center">
      <div className="overflow-hidden relative w-full">
        <div className="flex animate-slide">
          {/* Wrapping logos twice to create a seamless loop */}
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="flex-shrink-0 mx-8 flex justify-center">
              <img src={logo} alt={`logo-${index}`} className="w-32 h-auto object-contain" /> {/* Increased logo width for better visibility */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSlider;
