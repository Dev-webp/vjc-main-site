"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

const ScrollChangeImage = () => {
  const points = [
    { id: 1, title: "1. Counselling & Consultation", description: "Let our consultation process guide you through your best choice of visa.", image: "/slide-1.jpg" },
    { id: 2, title: "2. Eligibility Check", description: "We evaluate your profile and qualifications to check if it meets the requirement for the visa.", image: "/slide-2.jpg" },
    { id: 3, title: "3. Documents Preparation", description: "We assist you in collecting, authenticating, and preparing all documents for an error-free application.", image: "/slide-3.jpg" },
    { id: 4, title: "4. Submission of Visa Application", description: "We ensure that your application is submitted with every bit of detail required to be processed as soon as possible.", image: "/slide-4.jpg" },
    { id: 5, title: "5. Interview Preparation", description: "We guide you in all possible visa interview preparations so you are best prepared for the visa interview process.", image: "/slide-5.jpg" },
    { id: 6, title: "6. Visa Approval & Travel Services", description: "Once the visa is approved, we provide services for you to travel without stress and make your move abroad very smooth.", image: "/slide-1.jpg" },
  ];

  const [activeImage, setActiveImage] = useState(points[0].image);
  const [progress, setProgress] = useState(0); // For status bar progress
  const contentRefs = useRef([]);

  const handleScroll = () => {
    const totalPoints = points.length;
    let newProgress = 0;

    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        const { top, bottom } = ref.getBoundingClientRect();
        // Check if the current section is in view
        if (top < window.innerHeight / 2 && bottom > window.innerHeight / 2) {
          setActiveImage(points[index].image);
          newProgress = ((index + 1) / totalPoints) * 100; // Calculate progress percentage
        }
      }
    });

    setProgress(newProgress);
  };

  // Smooth scroll effect
  useEffect(() => {
    // Smooth scroll styling
    document.body.style.scrollBehavior = "smooth";

    return () => {
      document.body.style.scrollBehavior = "auto"; // Reset scroll behavior on component unmount
    };
  }, []);

  return (
    <div
      className="flex h-screen bg-cover bg-center relative overflow-y-scroll"
      onScroll={handleScroll} // Enable scrolling in the entire component
      style={{
        backgroundImage: `url('/comp-1.webp')`, // Path to the background image
      }}
    >
      {/* Left Side - Fixed Frame */}
      <div className="absolute top-0 left-0 w-[40%] h-full flex items-center justify-center">
        <div className="relative w-full h-full">
          {/* Dynamic Content Image */}
          <motion.div
            className="absolute w-[45%] h-[75%] object-cover rounded-[10%] z-10 ml-44 mt-16"
            key={activeImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
              backgroundImage: `url(${activeImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Frame Image */}
          <img
            src="/COUNTRY.png" // Path to your frame image
            alt="Frame"
            className="absolute w-full h-[65rem] object-contain z-20 -bottom-60"
          />
        </div>
      </div>

      {/* Center - Status Bar */}
      {/* Status Bar Background */}
      {/* Progress Indicator */}
      <div className="w-2 flex items-center relative h-screen">
        <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gray-300 rounded-full"></div>

        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 w-2 bg-orange-500 rounded-full"
          style={{
            height: `${progress}%`,
            top: "auto",
            bottom: 0,
          }}
          initial={{ height: 0 }}
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.2 }}
        />
      </div>

      {/* Right Side - Scrollable Content */}
      <div className="flex-1 px-10 py-4 ml-[43%] scrollbar-hide">
        {points.map((point, index) => (
          <div
            key={point.id}
            ref={(el) => (contentRefs.current[index] = el)}
            className="h-screen flex flex-col items-center justify-center p-4 border-b border-gray-300 text-lg font-medium max-w-[26rem] ml-16"
          >
            {/* Title */}
            <h2 className="text-3xl font-bold mb-4 uppercase text-center">{point.title}</h2>
            {/* Description */}
            <p className="text-lg text-gray-700 mb-4 text-center">{point.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollChangeImage;
