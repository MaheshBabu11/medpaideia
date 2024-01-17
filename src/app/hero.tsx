"use client";

import Image from "next/image";
import { Button, Typography } from "@material-tailwind/react";
import YoutubeIcon from "@/components/icons";

function Hero() {
  return (
    <div className="relative min-h-screen w-full">
      <header
        className="grid !min-h-[49rem] bg-gray-900 px-8 bg-center bg-cover px-8 "
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url('/image/bg.jpg')",
        }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-20"></div> */}
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-3 lg:grid-cols-2">
          <div className="col-span-1">
            <Typography
              variant="h1"
              color="white"
              className="mb-4  backdrop-blur-sm "
              placeholder="YourPlaceholderValue"
            >
              Your One Stop <br /> Medical Education Platform
            </Typography>
            <Typography
              variant="lead"
              className="mb-7 !text-white md:pr-16 xl:pr-28 backdrop-blur-sm"
              placeholder="YourPlaceholderValue"
            >
              The ultimate companion for medical students designed with
              cutting-edge technology and curated by experts in the field
              offering a comprehensive solution tailored to your learning needs.
             
            </Typography>
            
            <a href="https://www.youtube.com/@MedPaideia" target="_blank">
              <YoutubeIcon className="h-20 w-20 text-red-700 ml-10 mt-5 mb-20 "  />
            </a>
          </div>
          {/* <Image
            width={470}
            height={576}
            src="/image/iphones.png"
            alt="team work"
            className="col-span-1 my-20 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          /> */}
        </div>
      </header>
      <div className="mx-8 lg:mx-16 -mt-5 lg:-mt-32 rounded-xl bg-white p-5 md:p-14 shadow-md">
        <div>
          <Typography variant="h3" color="blue-gray" className="mb-3" placeholder="YourPlaceholderValue">
            Our Mission
          </Typography>
          <Typography
            variant="paragraph"
            className="font-normal !text-gray-500"
            placeholder="YourPlaceholderValue"
          >
            <strong>Medpedia</strong> stands at the forefront of revolutionizing
            medical education. Seamlessly blending technological innovation and
            curated expertise, we provide a transformative learning environment
            tailored for aspiring medical professionals. Our platform transcends
            traditional boundaries, offering interactive and engaging
            experiences that empower learners to grasp intricate medical
            concepts with ease. Through our dedication to cutting-edge
            technology and the guidance of seasoned professionals, Medpedia
            creates an immersive academic journey. We empower students to
            navigate the dynamic landscape of healthcare with confidence,
            equipping them with the skills and knowledge essential for success.
          </Typography>
        </div>
      </div>
    </div>
  );
}
export default Hero;
