import Image from 'next/image';
import Form from "./ui/Form";
import Link from "next/link";

const Hero = () => {
  return (
    <div
      id="home"
      className="relative flex flex-col lg:flex-row items-center lg:justify-center w-full h-[63rem] md:h-[42rem] lg:h-[40rem] tablet:h-[78rem] bg-cover bg-center bg-blend-overlay transition-all duration-1000 ease-in-out"
    >
      {/* Background Image with next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/germany opportunity card apply.jpg"
          alt="Background Image"
          fill // This will make the image fill the container
          style={{ objectFit: 'cover' }} // Ensures the image covers the area without distorting aspect ratio
          priority // Makes sure the background image is loaded immediately
        />
      </div>

      {/* White Transparent Overlay */}
      <div className="absolute inset-0 bg-gray-900 opacity-90 z-0" />

      {/* Content Container */}
      <div className="relative flex flex-col lg:flex-row w-full h-full items-center justify-center mt-0 lg:mt-0 px-4 sm:px-6 lg:px-12 z-10 mb-12">
        
        {/* Left Side Content */}
        <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 px-4 sm:px-6 lg:px-14 mt-0 lg:mt-0 mb-20 lg:mb-24 tablet:mb-20 relative ml-4">
          

          {/* Image placed above the h1 */}
          <img
            src="/1.gif" // Change to your image path
            alt="Work in Germany"
            className="w-[70rem] h-auto mt-16" // Adjust margin to align with curved text
          />
          <img
            src="/award-vjc.png" // Change to your image path
            alt="Work in Germany"
            className="w-full h-auto mt-4" // Adjust margin to align with curved text
          />

          {/* Heading */}
          <h1 className="font-bold text-3xl sm:text-[2.5rem] lg:text-[3rem] leading-tight mt-0 mb-0 text-center lg:text-center uppercase text-black">
            <span className="text-saffron">
              Work in Germany with <span className="inline-block relative">VJC OVERSEAS</span>
            </span>
          </h1>

          {/* Paragraph and Button */}
          <p className="max-w-xl mb-4 sm:mb-8 lg:mb-4 text-center text-white lg:text-center text-n-4 text-sm sm:text-base hidden sm:block">
            Unlock Your Future with <span className="text-saffron font-semibold block sm:inline">VJC OVERSEAS</span>
            Take your career to new heights and explore opportunities in Germany with our expert guidance.
          </p>

          <div className="justify-center lg:justify-center w-full hidden sm:flex">
            <Link href="#Vjc" passHref>
              <button className="bg-gray-950 text-white text-center py-2 px-4 sm:px-6 rounded-lg hover:bg-saffron transition">
                Explore Now
              </button>
            </Link>
          </div>
        </div>

        {/* Right Side Form */}
        <div id="form" className="w-full lg:w-1/2 flex justify-center lg:justify-start px-0 sm:px-0 lg:px-0">
        
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;
