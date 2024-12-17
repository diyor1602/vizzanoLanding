import React from "react";
import workVideo from "./assets/ish.mp4";

const VideoSection = () => {
  return (
    <div className="relative min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-white/10">
          <video
            className="w-full h-full object-cover"
            src={workVideo}
            controls
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
