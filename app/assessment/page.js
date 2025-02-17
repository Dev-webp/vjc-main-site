"use client";

import { useState } from "react";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection"; 
import WhyChooseUs from "./components/WhyChooseUs";
import ReviewSlider from "./components/ReviewSlider";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import "./components/styles.css"; // Importing the styles.css file

const ContactPage = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <>
      
      <div style={{fontFamily:'Times new roman'}}>
      <HeroSection />  
      
        <FloatingWhatsApp />
       
        <WhyChooseUs /> 
        
        <ReviewSlider />
     
      <Footer />
      </div>
    </>
  );
};

export default ContactPage;
