// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import MobileConvenience from "./mobile-convenience";
// import Testimonials from "./testimonials";
//import Faqs from "./faqs";

export default function Campaign() {
  return (
    <>
      <Analytics />
      <SpeedInsights />
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      {/*  <MobileConvenience />
      <Testimonials />
      <Faqs /> */}
      <Footer />
    </>
  );
}
