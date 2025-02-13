import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <footer className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-900 text-white py-10">
    <div className="max-w-[72rem] mx-auto px-5 text-center md:text-left border-b border-gray-700">
        {/* Grid for Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
            {/* Navigation */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Navigation</h3>
                <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
                    <li><a href="#" className="hover-underline">Home</a></li>
                    <li><a href="#" className="hover-underline">About Us</a></li>
                    <li><a href="#" className="hover-underline">Our Services</a></li>
                    <li><a href="#" className="hover-underline">Contact</a></li>
                </ul>
            </div>
            {/* Services */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Services</h3>
                <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
                    <li><a href="#" className="hover-underline">Study Visa Consultation</a></li>
                    <li><a href="#" className="hover-underline">Visa Application Assistance</a></li>
                    <li><a href="#" className="hover-underline">Immigration Advice</a></li>
                    <li><a href="#" className="hover-underline">Resume Marketing</a></li>
                </ul>
            </div>
            <div>
    <h3 className="text-lg font-bold text-orange-500 mb-1 md:mb-4 lg:mb-2 text-center lg:text-left uppercase">Our Expertise</h3>
    <ul className="space-y-2 text-center lg:text-left mb-6 md:mb-0 lg:mb-0">
        <li><a href="#" className="hover-underline">Immigration Support</a></li>
        <li><a href="#" className="hover-underline">Career Counseling for Students</a></li>
        <li><a href="#" className="hover-underline">Work Permit Guidance</a></li>
        <li><a href="#" className="hover-underline">Skill Assessment Assistance</a></li>
    </ul>
</div>

                
            {/* Social Media */}
            <div>
                <h3 className="text-lg font-bold text-orange-500 mb-4 uppercase text-center mr-0 md:mr-0 lg:mr-12">Follow Us</h3>
                <div className="flex space-x-4 text-center justify-center mr-0 md:mr-0 lg:mr-12">
                    <a href="#" className="group">
                        <FaFacebook className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaTwitter className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaInstagram className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaLinkedin className="text-white group-hover:text-orange-500" />
                    </a>
                    <a href="#" className="group">
                        <FaYoutube className="text-white group-hover:text-orange-500" />
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center md:items-start mb-6 md:mb-0 mt-10 w-full md:w-auto ml-0 tablet:ml-20 md:ml-0 lg:ml-0">
            <p className="text-gray-300 font-semibold">Email : <a href="mailto:info@vjcoverseas.com" className="hover:text-saffron">info@vjcoverseas.com</a></p>
            <p className="mt-2 font-semibold text-gray-300 ml-0 tablet:ml-2 md:ml-0 lg:ml-2">CONTACT : <a href="tel:+919160449000" className="hover:text-saffron">+91 9160449000</a></p>
          </div>
            </div>
        </div>

       
    </div>
</footer>

    </>
  );
};

export default Footer;
