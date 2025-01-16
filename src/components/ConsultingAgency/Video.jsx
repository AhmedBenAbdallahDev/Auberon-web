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
    <div className="tc-video-style7">
      <a href="https://youtu.be/pGbIOC83-So?t=21" className="play-btn sub_font wow zoomIn slow" onClick={openVideo}> Play </a>
      <img src="/home_7/assets/img/vedio.png" alt="" className="bg-img" data-speed="0.9" />
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </div>
  )
}

export default Video