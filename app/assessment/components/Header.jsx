import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaPhoneVolume } from "react-icons/fa6";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-saffron py-0 lg:py-0 px-0 sm:px-0 lg:px-16 shadow-lg h-20 bg-orange-400" style={{fontFamily:'Times new Roman'}}>
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
    
        <div className="flex items-center ml-4 sm:ml-10 lg:ml-14 mt-2 w-24">
 
    <img
      src="/Final Logo.png"
      alt="Logo"
      className="h-16 w-12 md:h-12 md:w-14 lg:h-16 lg:w-20" // Adjusted the width for all screen sizes
    />
 


         
        </div>

        
        <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 uppercase text-white font-bold text-sm sm:text-lg lg:text-[2.2rem] tracking-wide z-10 text-center px-4 sm:px-0 hidden lg:block mb-0 lg:mb-0 tablet:mb-20 -mt-3 leading-relaxed">
  Discover Your <br />
  <span className="mt-2 inline-block">Path to Success</span>
</h1>

       

        {/* Instagram and Facebook Icons (Visible Only on Small Devices) */}
        <div className="flex flex-col justify-center items-center space-y-2 sm:hidden ml-4">
  {/* Facebook and Instagram Icons */}
  <div className="flex space-x-2">
    <a
      href="https://www.facebook.com/VJCOVERSEAS/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaFacebook size={20} />
    </a>
    <a
      href="https://www.instagram.com/vjcoverseas_/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaInstagram size={20} />
    </a>
  </div>
  
  {/* Twitter Icon */}
  <div>
    <a
      href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-black"
    >
      <FaTwitter size={20} />
    </a>
  </div>
</div>


        
        {/* Contact Number */}
        <div className="text-white text-[0.70rem] lg:text-[0.90rem] md:text-sm font-semibold text-center sm:text-left ml-0 md:ml-0 lg:ml-0">
      {/* Phone icon */}
      <div className="flex items-center space-x-2">
  <a href="tel:+919160449000" className="text-white hover:text-black flex items-center">
    <FaPhoneVolume className="text-blue-600 animate-ring mr-1" />
    <span>: +91 9160449000</span>
  </a>
</div>

      
      {/* Email icon */}
      <div className="flex items-center space-x-2">
        
        <a href="mailto:info@vjcoverseas.com" className="text-white hover:text-black flex items-center">
        <FaEnvelope  className="text-blue-600 animate-pulse mr-1" />
          <span>info@vjcoverseas.com </span></a>
      </div>
    </div>
      </div>
       {/* Left Half: Image */}
       <div className="flex-1 relative hidden lg:block">
           
          </div>
          <div className="flex-1 relative w-full hidden lg:block">
            {/* <img
              src="/2.webp"
              alt="Contact Page Visual"
              // className="w-full h-full object-cover"
             
            /> */}
          </div>

      
      

    </header>
  );
};

export default Header;
