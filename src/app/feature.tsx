"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

import {
  CursorArrowRaysIcon,
  HeartIcon,
  LightBulbIcon,
  LockClosedIcon,
} from "@heroicons/react/24/solid";

import FeatureCard from "../components/feature-card";

const FEATURES = [
  {
    icon: CursorArrowRaysIcon,
    title: "Expert Content Creators",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: HeartIcon,
    title: "Highly effective and engaging classes",
    children:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    icon: LockClosedIcon,
    title: "Events and Contests",
    children:
      "Participate in our events and contests to win prizes and get a chance to be featured on our social media platforms.",
  },
  {
    icon: LightBulbIcon,
    title: "Perfect Study Materials",
    children:
      "Our study materials are designed to help you learn and retain information more effectively.",
  },
];

export function Features() {
  return (
    <section className="py-28 px-4">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue-gray" className="mb-2 font-bold uppercase" placeholder="Your placefolder">
          Your Learning Platform
        </Typography>
        <Typography variant="h1" color="blue-gray" className="mb-4" placeholder="Your placefolder">
          Diverse Learning Resources
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 !text-gray-500 lg:w-11/12 lg:px-8 "
          placeholder="Your placefolder"
        >
          Access your learning materials in one place. We offer a wide range of
          lectures, videos, and quizzes to help you learn and retain information
          more effectively. Our top class instructors are here to help you attain
          your goals.
        </Typography>
      </div>
      <div className="container mx-auto grid max-w-6xl grid-cols-1 gap-4 gap-y-12 md:grid-cols-2">
        {FEATURES.map((props, idx) => (
          <FeatureCard key={idx} {...props}/>
        ))}
      </div>
    </section>
  );
}
export default Features;
