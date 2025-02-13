import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-saffron to-[#ff8614] py-0 lg:py-4 px-0 sm:px-0 lg:px-16 shadow-lg">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        {/* Logo Section */}
        <div className="flex items-center ml-4 sm:ml-10 lg:ml-14">
          <img
            src="/vjcoverseas-1.png" // Replace with your logo image path
            alt="Logo"
            className="h-16 w-16 md:h-12 md:w-12 lg:h-16 lg:w-16" // Adjust the logo size for mobile and larger screens
          />
          <img
            src="/vjcoverseas-2.png" 
            alt="Logo"
            className="h-16 w-28 md:h-12 md:w-12 lg:h-16 lg:w-28" // Adjust the logo size for mobile and larger screens
          />
        </div>

        {/* Heading (Hidden on Small Devices) */}
        <h1 className="absolute top-6 left-1/2 transform -translate-x-1/2 uppercase text-white font-bold text-sm sm:text-lg lg:text-[1.5rem] z-10 text-center px-4 sm:px-0 hidden tablet:block">
  Get FREE Consultation for <br /> UK Study Visa
</h1>


        {/* Instagram and Facebook Icons (Visible Only on Small Devices) */}
        <div className="flex justify-center items-center space-x-4 sm:hidden ml-20">
          <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaFacebook size={24} />
          </a>
          <a href="https://www.instagram.com/vjc_overseas_bangalore/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-black">
            <FaInstagram size={24} />
          </a>
        </div>

        {/* Contact Number */}
        <div className="text-white text-[0.50rem] md:text-sm font-semibold text-center sm:text-left ml-16 md:ml-0 lg:ml-0">
          CALL US: <a href="tel:+919160449000" className="text-white hover:text-black">+91 9160449000</a><br />
          MAIL US: <a href="mailto:info@vjcoverseas.com" className="text-white hover:text-black">info@vjcoverseas.com</a>
        </div>
      </div>

      
      

    </header>
  );
};

export default Header;
