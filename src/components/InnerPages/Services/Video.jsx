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
    <section className="tc-services-video-style1">
      <a href="https://youtu.be/pGbIOC83-So?t=21" className="play-btn" onClick={openVideo}> Play </a>
      <ModalVideo videoId="AzwC6umvd1s" channel="youtube" isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} autoplay />
    </section>
  )
}

export default Video