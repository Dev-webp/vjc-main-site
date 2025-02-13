import React from 'react'
import Hero from "@/app/about/files/hero";
import Two from "@/app/about/files/two";
import CTA from "@/app/about/files/cta";
import Three from "@/app/about/files/three";
import Four from "@/app/about/files/four";
import Price from "@/app/components/Price";
import Footer from "@/app/about/files/Footer";
// import HeroNext from "./files/heroNext";
// import Reviews from "@/app/about/files/reviews";
import Why from "./files/Why";

const page = () => {
  return (
    <>
    <Hero/>
    {/* <HeroNext/> */}
    <Why/>
    <Two/>
    <CTA/>
    <Four/>
    <Price/>
    <Three/>
    {/* <Reviews/> */}
    <Footer />
    </>
  )
}

export default page