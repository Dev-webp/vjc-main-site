import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {

    const locations = [
        { name: "Hyderabad", map: process.env.NEXT_PUBLIC_MAP_HYD },
        { name: "USA", map: process.env.NEXT_PUBLIC_MAP_USA },
        { name: "Bangalore", map: process.env.NEXT_PUBLIC_MAP_BLR },
      ];
      
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-5 text-center md:text-left border-b border-gray-700 mb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-2">
          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase">About Us</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">Our CEO Message</a></li>
              <li><a href="#" className="hover:underline">Our Network</a></li>
              <li><a href="#" className="hover:underline">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase">Our Blogs</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Canada Immigration</a></li>
              <li><a href="#" className="hover:underline">Australia Immigration</a></li>
              <li><a href="#" className="hover:underline">USA Immigration</a></li>
              <li><a href="#" className="hover:underline">Germany Immigration</a></li>
              <li><a href="#" className="hover:underline">Germany Jobs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase">Settle Your Future in Abroad</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Settle in Canada</a></li>
              <li><a href="#" className="hover:underline">Settle in Australia</a></li>
              <li><a href="#" className="hover:underline">Settle in Germany</a></li>
              <li><a href="#" className="hover:underline">Settle in UK</a></li>
              <li><a href="#" className="hover:underline">Settle in USA</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase">Other Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Free Eligibility Check</a></li>
              <li><a href="#" className="hover:underline">Free Counselling</a></li>
              <li><a href="#" className="hover:underline">Free Assessment Online</a></li>
              <li><a href="#" className="hover:underline">Fast and Easy Process</a></li>
              <li><a href="#" className="hover:underline">Professional Job Assistance</a></li>
              <li><a href="#" className="hover:underline">High Quality Resume Marketing</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase">Follow Us</h3>
            <div className="flex space-x-4 justify-center lg:justify-start">
              <a href="https://www.facebook.com/VJCOVERSEAS/" className="group"><FaFacebook className="text-white group-hover:text-orange-500" /></a>
              <a href="https://twitter.com/vjcoverseas" className="group"><FaTwitter className="text-white group-hover:text-orange-500" /></a>
              <a href="https://www.instagram.com/vjc_overseas_bangalore/" className="group"><FaInstagram className="text-white group-hover:text-orange-500" /></a>
              <a href="https://www.linkedin.com/company/vjc-overseas/" className="group"><FaLinkedin className="text-white group-hover:text-orange-500" /></a>
              <a href="https://www.youtube.com/@vjcoverseas9434" className="group"><FaYoutube className="text-white group-hover:text-orange-500" /></a>
            </div>
            <div className="mt-6">
              <p>Email: <a href="mailto:info@vjcoverseas.com" className="hover:text-orange-500">info@vjcoverseas.com</a></p>
              <p>Contact: <a href="tel:+919160449000" className="hover:text-orange-500">+91 9160449000</a></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
  <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left space-y-8 md:space-y-0 md:space-x-8">
    {locations.map((location, index) => (
      <div key={index} className="w-full md:w-1/3">
        <h3 className="text-lg font-bold flex justify-center items-start text-orange-500 mb-4 uppercase">
          VJC Overseas ({location.name})
        </h3>
        <iframe
          src={location.map}
          width="100%"
          height="200"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="rounded-lg border"
        ></iframe>
      </div>
    ))}
  </div>



        <div className="border-t border-gray-700 pt-6 mt-4 text-center">
          <p>&copy; 2024 VJC Overseas. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;