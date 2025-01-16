'use client';
import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
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

export const metadata = {
  title: 'Auberon - Development Studio',
  icons: {
    icon: "/home/assets/img/fav2.png",
    shortcut: "/home/assets/img/fav2.png",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap',
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/ionicons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/home/assets/css/home_style.css'
    ])
  }
}

export default function Home() {
  useEffect(() => {
    // Initialize GSAP and ScrollSmoother
    const initGSAP = async () => {
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      const ScrollSmoother = window.ScrollSmoother;
      const SplitText = window.SplitText;

      if (gsap && ScrollTrigger && ScrollSmoother && SplitText) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

        const smoother = ScrollSmoother.create({
          content: "#scrollsmoother-container",
          smooth: 2,
          normalizeScroll: true,
          ignoreMobileResize: true,
          effects: true
        });

        // Initialize split text animations
        let headings = gsap.utils.toArray(".js-title").reverse();
        headings.forEach((heading, i) => {
          let headingIndex = i + 1;
          let mySplitText = new SplitText(heading, { type: "chars" });
          let chars = mySplitText.chars;

          chars.forEach((char, i) => {
            smoother.effects(char, { lag: (i + headingIndex) * 0.1, speed: 1 });
          });
        });

        // Initialize parallax effects
        let splitTextLines = gsap.utils.toArray(".js-splittext-lines");
        splitTextLines.forEach(splitTextLine => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: splitTextLine,
              start: 'top 90%',
              duration: 1,
              end: 'bottom 60%',
              scrub: false,
              markers: false,
              toggleActions: 'play none none none'
            }
          });

          const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
          gsap.set(splitTextLine, { perspective: 400 });
          itemSplitted.split({ type: "lines" })
          tl.from(itemSplitted.lines, { 
            duration: 1, 
            delay: 0, 
            opacity: 0, 
            rotationX: -80, 
            force3D: true, 
            transformOrigin: "top center -50", 
            stagger: 0.1 
          });
        });
      }
    };

    initGSAP();
  }, []);

  return (
    <body className="home-style4">
      <LoadingScreen />
      {/* Page Components */}
      <SideMenu />
      <div id="scrollsmoother-container">
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
      <Script src="/common/assets/js/gsap_lib/gsap.min.js" strategy="beforeInteractive" />
      <Script src="/common/assets/js/gsap_lib/ScrollSmoother.min.js" strategy="beforeInteractive" />
      <Script src="/common/assets/js/gsap_lib/ScrollTrigger.min.js" strategy="beforeInteractive" />
      <Script src="/common/assets/js/gsap_lib/SplitText.min.js" strategy="beforeInteractive" />
      <Script src="/common/assets/js/common_js.js" strategy="afterInteractive" />
      <Script src="/home/assets/js/home_scripts.js" strategy="afterInteractive" />
    </body>
  )
}
