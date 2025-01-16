'use client';
import Script from "next/script";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
//= Page Components
import SideMenu from "@/components/AppsTechnology/SideMenu";
import Header from "@/components/AppsTechnology/Header";
import Features from "@/components/AppsTechnology/Features";
import Partners from "@/components/AppsTechnology/Partners";
import Works from "@/components/AppsTechnology/Works";
import Newsletter from "@/components/AppsTechnology/Newsletter";
import Screens from "@/components/AppsTechnology/Screens";
import Testimonials from "@/components/AppsTechnology/Testimonials";
import Download from "@/components/AppsTechnology/Download";
import Blog from "@/components/AppsTechnology/Blog";
import Footer from "@/components/AppsTechnology/Footer";
import { useEffect } from 'react';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useEffect(() => {
    // Initialize GSAP animations
    const initGSAP = async () => {
      // Initialize scroll animations
      const titles = gsap.utils.toArray(".js-title");
      titles.forEach((title) => {
        gsap.from(title, {
          scrollTrigger: {
            trigger: title,
            start: "top 90%",
            end: "bottom 60%",
            scrub: false,
            markers: false,
            toggleActions: "play none none none"
          },
          duration: 1,
          opacity: 0,
          y: 100,
          ease: "power3.out"
        });
      });

      // Initialize text animations
      const textLines = gsap.utils.toArray(".js-splittext-lines");
      textLines.forEach(line => {
        gsap.from(line, {
          scrollTrigger: {
            trigger: line,
            start: 'top 90%',
            end: 'bottom 60%',
            scrub: false,
            markers: false,
            toggleActions: 'play none none none'
          },
          duration: 1,
          opacity: 0,
          y: 50,
          ease: "power3.out"
        });
      });
    };

    initGSAP();
  }, []);

  return (
    <body className="home-style4">
      <LoadingScreen />
      {/* Page Components */}
      <SideMenu />
      <div>
        <Header />
        <main>
          <Features />
          <Partners />
          <Works />
          <Newsletter />
          <Screens />
          <Testimonials />
          <Download />
          <Blog />
        </main>
        <Footer />
      </div>
      <MouseCursor />
      <ScrollToTop />
      {/* Page Scripts */}
      <Script src="/common/assets/js/lib/bootstrap.bundle.min.js" strategy="beforeInteractive" />
      <Script src="/common/assets/js/common_js.js" strategy="afterInteractive" />
      <Script src="/home/assets/js/home_scripts.js" strategy="afterInteractive" />
    </body>
  )
}
