'use client';
import React, { useState } from 'react';
//= Components
import ModalVideo from '@/components/Common/ModalVideo';

function Video() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  function openVideo(event) {
    event.preventDefault();
    setIsVideoOpen(true);
  }

  return (
    <div className="tc-video-style5">
      <a href="https://youtu.be/pGbIOC83-So?t=21" className="play-btn" onClick={openVideo}> Play </a>
      <img src="/home_5/assets/img/vid_back.jpg" alt="" className="bg-img" data-speed="0.8" />
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </div>
  )
}

export default Video