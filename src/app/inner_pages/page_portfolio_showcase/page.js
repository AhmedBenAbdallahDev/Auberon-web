import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
//= Page Components
import TopNavbar from "@/components/InnerPages/Common/TopNavbar";
import Header from "@/components/InnerPages/Portfolio/Header";
import Showcase from "@/components/InnerPages/Portfolio/Showcase";
import Footer from "@/components/InnerPages/Common/Footer";

export const metadata = {
  title: 'Auberon - Portfolio Showcase',
  icons: {
    icon: "/inner_pages/assets/img/fav2.png",
    shortcut: "/inner_pages/assets/img/fav2.png",
    other: generateStylesheetObject([
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/lib/all.min.css',
      '/common/assets/css/lib/themify-icons.css',
      '/common/assets/css/lib/ionicons.css',
      '/common/assets/css/lib/line-awesome.css',
      '/common/assets/css/lib/swiper8.min.css',
      '/common/assets/css/common_style.css',
      '/inner_pages/assets/css/inner_pages.css'
    ])
  }
}

export default function PagePortfolioShowcase() {
  return (
    <body className="page-portfolio-showcase-style1">
      <LoadingScreen />
      {/* Page Components */}
      <div id="scrollsmoother-container">
        <TopNavbar />
        <Header type="Showcase" />
        <main>
          <Showcase />
        </main>
        <Footer />
      </div>
      <MouseCursor />
      <ScrollToTop />
      {/* Page Scripts */}
      <Script src="/common/assets/js/lib/bootstrap.bundle.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/common_js.js" strategy="lazyOnload" />
    </body>
  )
}
