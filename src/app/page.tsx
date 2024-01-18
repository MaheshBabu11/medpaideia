// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import VideoIntro from "./video-intro";
import Feature from "./feature";

export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <VideoIntro />
      <Feature />
      <Footer />
    </>
  );
}
