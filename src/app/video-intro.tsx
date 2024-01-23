"use client";

import React from "react";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

export function VideoIntro() {
  return (
    <div className="p-8">
      <div className="mt-10 lg:mx-10">
        <LiteYouTubeEmbed id="-UCRipi97Fw" title="Medpaideia Intro" />
      </div>
    </div>
  );
}

export default VideoIntro;
