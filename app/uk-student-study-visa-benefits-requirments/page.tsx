"use client";
import dynamic from 'next/dynamic';
import Hero from "@/app/uk-student-study-visa-benefits-requirments/components/Hero";
import Footer from "@/app/uk-student-study-visa-benefits-requirments/components/Footer";
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon

// Dynamically import non-critical components with { ssr: false } to ensure they load on the client side
const RoadmapComponent = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/RoadmapComponent"), { ssr: false });
const Steps = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Steps"), { ssr: false });
const Requirements = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Requirements"), { ssr: false });
const Services = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Services"), { ssr: false });
const Why = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Why"), { ssr: false });
const Between = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Between"), { ssr: false });
const Book = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Book"), { ssr: false });
const Vjcinfo = dynamic(() => import("@/app/uk-student-study-visa-benefits-requirments/components/Vjcinfo"), { ssr: false });

import Partneredlogo from "@/app/uk-student-study-visa-benefits-requirments/components/PartneredLogo";

export default function Home() {
  return (
    <>
      {/* Above-the-fold content */}
      <Hero />
      <RoadmapComponent />

      <Partneredlogo />

      {/* Lazy-loaded components for better performance */}
      <Book />
      <Steps />
      <Between />
      <Requirements />
      <Services />
      <Why />
      <Vjcinfo />
      <Footer />

      {/* WhatsApp Icon (floating globally) */}
      <a
        href="https://wa.me/+919160449000" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-icon"
      >
        <FaWhatsapp size={40} color="white" />
      </a>

      <style jsx>{`
        .whatsapp-icon {
          position: fixed;
          bottom: 23px;
          left: 20px;
          background-color: #25D366; /* WhatsApp green */
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
          transition: transform 0.3s ease;
          z-index: 9999; /* Ensure it's on top of all elements */
        }

        .whatsapp-icon:hover {
          transform: scale(1.1);
        }

        .whatsapp-icon a {
          color: white;
        }
      `}</style>
    </>
  );
}
