import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
//= Page Components
import TopNavbar from "@/components/InnerPages/Common/TopNavbar";
import Header from "@/components/InnerPages/AboutUs/Header";
import Vision from "@/components/InnerPages/AboutUs/Vision";
import AboutImg from "@/components/InnerPages/AboutUs/AboutImg";
import Awards from "@/components/InnerPages/AboutUs/Awards";
import Services from "@/components/InnerPages/AboutUs/Services";
import Timeline from "@/components/InnerPages/AboutUs/Timeline";
import Footer from "@/components/InnerPages/Common/Footer";

export const metadata = {
  title: 'Auberon - About Us',
  icons: {
    icon: "/inner_pages/assets/img/fav2.png",
    shortcut: "/inner_pages/assets/img/fav2.png",
    other: generateStylesheetObject([
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap',
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/ionicons.css',
      '/common/assets/css/lib/animate.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/inner_pages/assets/css/inner_pages.css'
    ])
  }
}

export default function PageAboutUs() {
  return (
    <body className="page-about-style1">
      <LoadingScreen />
      {/* Page Components */}
      <div id="scrollsmoother-container">
        <TopNavbar />
        <Header />
        <main>
          <Vision />
          <AboutImg />
          <Awards />
          <Services />
          <Timeline />
        </main>
        <Footer />
      </div>
      <MouseCursor />
      <ScrollToTop />
      {/* Page Scripts */}
      <Script src="/common/assets/js/lib/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/ScrollSmoother.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/ScrollTrigger.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/SplitText.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/common_js.js" strategy="lazyOnload" />
      <Script src="/inner_pages/assets/js/inner_pages.js" strategy="lazyOnload" />
    </body>
  )
}
