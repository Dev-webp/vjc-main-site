
"use client"
import React, { useState } from "react";
import Link from "next/link"; 
import { FaEnvelope, FaBars, FaTimes, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Assessment", path: "/assessment" },
    { name: "Migrate To", path: "/" },
    { name: "Study Abroad", path: "/" },
    { name: "PR Visas", path: "/" },
    { name: "Work Abroad", path: "/" },
    { name: "Job Seeker Visas", path: "/" },
    { name: "Visit Visas", path: "/" },
    { name: "Investor Visas", path: "/" },
    { name: "Schengen Visas", path: "/" },
    { name: "Resume Marketing", path: "/" },
    { name: "Coaching/Training", path: "/" },
  ];

  const migrateSubPages = [
    { name: "Germany", path: "/migrate/germany" },
    { name: "Canada", path: "/migrate/canada" },
    { name: "United States", path: "/migrate/united-states" },
    { name: "Australia", path: "/migrate/australia" },
    { name: "United Kingdom", path: "/migrate/uk" },
    { name: "New Zealand", path: "/migrate/new-zealand" },
    { name: "South Africa", path: "/migrate/south-africa" },
    { name: "Hong Kong", path: "/migrate/hong-kong" },
    { name: "Denmark", path: "/migrate/denmark" },
    { name: "UAE", path: "/migrate/uae" },
  ];
  
  
  

  return (
    <header>
      {/* White background section with logo, contact information, and marquee */}
      <div className="bg-white py-0 px-2 shadow-md z-50 fixed top-0 w-screen">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo (Always visible) */}
          <div className="flex items-center space-x-0">
            <Link href="/" className="text-lg font-bold">
              <img src="/logo-1.webp" alt="Logo" className="h-14" /> {/* First logo */}
            </Link>
            <Link href="/" className="text-lg font-bold">
              <img src="/logo-2.webp" alt="Logo" className="h-14" /> {/* Second logo */}
            </Link>
          </div>

          {/* Hidden for md and sm */}
          <div className="hidden md:flex items-center ml-4">
            <img src="/message.gif" alt="News" className="h-8 w-8" /> {/* News Icon */}
          </div>

          {/* Marquee Section */}
          <div className="marquee-container flex-1 mx-4 hidden md:block">
            <p className="whitespace-nowrap animate-marquee uppercase text-sm text-gray-800">
              Your Study and Work Abroad Opportunities Await! Explore the world with us. Learn more about visa programs and opportunities today!
            </p>
          </div>

          {/* Contact Information (Hidden on md and sm devices) */}
          <div className=" flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-2 text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="Bangalore" className="mr-1 w-5 h-5" />
                <p>Bangalore</p>
              </div>
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="Hyderabad" className="mr-1 w-5 h-5" />
                <p>Hyderabad</p>
              </div>
              <div className="flex items-center animate-pulse text-custom-blue">
                <img src="/loc.png" alt="USA" className="mr-1 w-5 h-5" />
                <p>USA</p>
              </div>
            </div>

            {/* Mail Address with Icon */}
            <div className="hidden md:flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
              <div className="flex items-center animate-pulse text-custom-blue">
                <a href="mailto:info@vjcoverseas.com" className="flex items-center">
                  <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
                  <p>info@vjcoverseas.com</p>
                </a>
              </div>
            </div>

            {/* Phone Number with Icon */}
            <div>
              <a
                href="tel:+919160449000"
                className="flex items-center text-white py-1 px-0 rounded-lg text-xs lg:text-sm whitespace-nowrap font-bold uppercase mr-3"
              >
                <img src="/phone.gif" alt="Phone" className="h-6 w-6 mr-1" />
                <span className="text-custom-blue">+91 9160449000</span>
              </a>
            </div>
          </div>
        </div>
      </div>

{/* Orange background section for large screens */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 hidden md:block">
  <nav className="flex justify-between items-center px-2 max-w-7xl py-1.5">
    <div className="flex flex-row -space-x-2 whitespace-nowrap">
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          {item.name === "Migrate To" ? (
            <div className="relative group">
              <Link href="/migrate" className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1">
    Migrate To
  </Link>
              {/* Migrate Submenu */}
              <div className="absolute left-0 hidden group-hover:block bg-gray-50 p-2 space-y-2 rounded-lg shadow-lg ">
                {migrateSubPages.map((subItem) => (
                  <Link
                    href={subItem.path}
                    key={subItem.name}
                    className="text-orange-500 text-sm font-semibold px-4 py-2 rounded-lg hover:bg-orange-200 hover:bg-opacity-30 transition-all ease-in-out block"
                  >
                    {subItem.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              href={item.path}
              className="text-white text-sm lg:text-xs font-semibold px-3.5 hover:bg-white hover:bg-opacity-20 uppercase mt-1"
            >
              {item.name}
            </Link>
          )}
          {index < menuItems.length - 1 && <span className="text-white hidden lg:inline-block">|</span>}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>


{/* Small devices */}
<div className="bg-orange-500 fixed top-12 w-screen z-50 md:hidden">
  <nav className="flex justify-between items-center py-2">
    {/* Mail Address */}
    <div className="flex items-center space-x-2 text-xs lg:text-sm text-black uppercase font-semibold italic">
      <div className="flex items-center animate-pulse text-black">
        <a href="mailto:info@vjcoverseas.com" className="flex items-center">
          <FaEnvelope className="mr-1 w-5 h-5 text-orange-500" />
          <p>info@vjcoverseas.com</p>
        </a>
      </div>
    </div>

    {/* Social Media Icons */}
    <div className="flex items-center space-x-4 ml-6">
      <a href="https://www.facebook.com/VJCOVERSEAS/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaFacebook className="text-white hover:text-black"/>
      </a>
      <a href="https://x.com/VJCOVERSEAS?t=aRM7qjBL9saJzNwyDzuCCg&s=09" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaTwitter className="text-white hover:text-black" />
      </a>
      <a href="https://www.instagram.com/vjcoverseas_/" target="_blank" rel="noopener noreferrer" className="text-xl">
        <FaInstagram className="text-white hover:text-black" />
      </a>
    </div>

    {/* Hamburger/Close Icon for small screens */}
    <div className="flex items-center px-4 ml-4">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="text-white text-xl"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
    </div>

    {/* Navigation links for small screens */}
    <div
      className={`absolute top-9 left-0 w-full h-screen items-center bg-orange-500 flex flex-col space-y-4 ${isMenuOpen ? 'block' : 'hidden'} transition-all ease-in-out duration-300`}
    >
      {menuItems.map((item, index) => (
        <React.Fragment key={item.name}>
          <Link
            href={item.path}
            className="text-white text-sm font-semibold px-4 mt-2 hover:bg-white hover:bg-opacity-20 uppercase"
            onClick={() => setIsMenuOpen(false)} 
          >
            {item.name}
          </Link>
          {index < menuItems.length - 1 && (
            <div className="w-40 h-px bg-white mx-2" />
          )}
        </React.Fragment>
      ))}
    </div>
  </nav>
</div>

      {/* Add margin to ensure content below is not hidden */}
      <div className="mt-0"></div> {/* Adjust the margin if necessary */}
    </header>
  );
};

export default Navbar;










{/* <header className="sticky left-0 top-0 w-full flex items-center h-16 border-b border-b-gray-100 dark:border-b-gray-900 z-40 bg-white dark:bg-gray-950 bg-opacity-80 backdrop-filter backdrop-blur-xl">
            
            </header> */}

{/* <nav className="relative mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5 flex gap-x-5 justify-between items-center">
                <div className="flex items-center min-w-max">
                    <Link href="#" className="text-xl font-semibold flex items-center gap-x-2">
                        <span className="flex">
                            <Image
                                src="/logo-1.webp"
                                alt="Logo 1"
                                width={64}   // Equivalent to 16 * 4 for the desired size
                                height={20} // You can adjust this depending on the aspect ratio
                                className="object-contain"
                            />
                            <Image
                                src="/logo-2.webp"
                                alt="Logo 2"
                                width={100}   // Equivalent to 24 * 4 for the desired size
                                height={20} // Same here for aspect ratio
                                className="object-contain"
                            />
                        </span>
                    </Link>
                </div>
                <div className={`absolute top-full left-0 bg-white dark:bg-gray-950 lg:bg-transparent border-b border-gray-200 dark:border-gray-800 py-8 lg:py-0 px-5 sm:px-10 md:px-12 lg:px-0 lg:border-none w-full lg:top-0 lg:relative lg:flex lg:justify-between duration-300 ease-linear
                    ${navIsOpened ? "translate-y-0 opacity-100 visible" : "translate-y-10 opacity-0 invisible lg:visible lg:translate-y-0 lg:opacity-100"}`}
                >
                    <ul className="flex flex-col lg:flex-row gap-8 lg:items-center text-sm text-gray-700 dark:text-gray-300 lg:w-full lg:justify-center uppercase">
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Home</Link>
                        </li>
                        <li>
                            <Link href="/about" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">About</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Migrate</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Work Abroad</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Services</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Study Abroad</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Work</Link>
                        </li>
                        <li>
                            <Link href="/" className="relative py-2.5 duration-300 ease-linear hover:text-orange-500 after:absolute after:w-full after:left-0 after:bottom-0 after:h-px after:rounded-md after:origin-left after:ease-linear after:duration-300 after:scale-x-0 hover:after:scale-100 after:bg-orange-500">Pricing</Link>
                        </li>
                    </ul>
                    <div className="flex sm:items-center lg:min-w-max mt-10 lg:mt-0">
                        <Link href="/" className="px-6 items-center h-12 rounded-3xl text-orange-500 border border-gray-100 dark:border-gray-800 dark:text-white bg-gray-100 dark:bg-gray-900 duration-300 ease-linear flex justify-center w-full sm:w-auto">
                            Book a call
                        </Link>
                    </div>
                </div>
                <div aria-hidden="true" className="flex items-center lg:hidden">
                    <button onClick={toggleNavbar} aria-label='toggle navbar' className="outline-none border-l border-l-indigo-100 dark:border-l-gray-800 pl-3 relative py-3">
                        <span aria-hidden={true} className={`flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "rotate-45 translate-y-[.324rem]" : ""}`} />
                        <span aria-hidden={true} className={`mt-2 flex h-0.5 w-6 rounded bg-gray-800 dark:bg-gray-300 transition duration-300 ${navIsOpened ? "-rotate-45 -translate-y-[.324rem]" : ""}`} />
                    </button>
                </div>
            </nav> */}

    //         const [navIsOpened, setNavIsOpened] = useState(false);

    // const toggleNavbar = () => {
    //     setNavIsOpened(prevState => !prevState);
    // };
