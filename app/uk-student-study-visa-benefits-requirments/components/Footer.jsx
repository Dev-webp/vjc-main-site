import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-6 md:px-12">
        {/* Address and Contact Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
          {/* Hyderabad Address */}
          <div className="mb-8 md:mb-0 text-center">
            <h3 className="text-lg font-bold uppercase mb-2 text-saffron">VJC Overseas (Hyderabad)</h3>
            <p>62/A, Ground Floor,</p>
            <p>Sundari Reddy Bhavan, Fresh Mart,</p>
            <p>Vengalrao Nagar, Sanjeeva Reddy Nagar,</p>
            <p>Hyderabad, Telangana, 500038</p>
          </div>

          {/* Centered Button and Email */}
          <div className="flex flex-col items-center md:w-1/3">
  <h3 className="text-lg font-bold uppercase mb-2 text-saffron">VJC Overseas (USA)</h3>
  <p>7200 Preston Rd, Plano,</p>
  <p>TX 75024, USA</p>
  <p className="mt-2 font-semibold">
    <a href="tel:+13322012159" className="flex items-center space-x-2 hover:text-saffron">
      <FaWhatsapp size={25} /> 
      <span>:  +1 3322012159</span>
    </a>
  </p>
</div>

          {/* Bangalore Address */}
          <div className="mb-8 md:mb-0 text-center">
            <h3 className="text-lg font-bold uppercase mb-2 text-saffron">VJC Overseas (Bangalore)</h3>
            <p>16 & 17, Ground Floor,</p>
            <p>Raheja Arcade,</p>
            <p>5th Block, Koramangala,</p>
            <p>Bangalore, India, 560095</p>
          </div>
        </div>

        {/* Call to Action & Email Section */}
        <div className="flex flex-col md:flex-row justify-between mt-8 space-x-6 items-center md:items-start ml-0 lg:ml-10">
          {/* Email and Contact Number on Left */}
          <div className="flex flex-col items-center md:items-start mb-6 md:mb-0 w-full md:w-auto">
            <p className="text-gray-300">Email: <a href="mailto:info@vjcoverseas.com" className="hover:text-saffron">info@vjcoverseas.com</a></p>
            <p className="mt-2 font-semibold text-gray-300">CONTACT: <a href="tel:+919160449000" className="hover:text-saffron">+91 9160449000</a></p>
          </div>

          {/* Centered Book Free Consultation Button */}
          <Link href="#form" passHref>
            <button className="bg-saffron text-black font-semibold py-2 px-6 mr-4 lg:mr-0 ml-0 lg:ml-0 rounded-lg hover:bg-black hover:text-white transition uppercase mb-6 md:mb-0">
              Book Free Consultation
            </button>
          </Link>

          {/* Social Media Icons on Right */}
          <div className="flex space-x-6 justify-center md:justify-start w-full md:w-auto">
            <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaFacebook size={24} />
            </a>
            <a href="https://twitter.com/vjcoverseas" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.instagram.com/vjc_overseas_bangalore/?utm_source=qr&igsh=MXZzNXY3dGV1YXg1bw%3D%3D" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaInstagram size={24} />
            </a>
            <a href="https://www.linkedin.com/company/vjc-overseas/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.youtube.com/@vjcoverseas9434" target="_blank" rel="noopener noreferrer" className="text-white hover:text-saffron">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
