import Script from "next/script";
//= Scripts
import generateStylesheetObject from '@/common/generateStylesheetsObject';
//= Common Components
import LoadingScreen from "@/components/Common/Loader";
import MouseCursor from "@/components/Common/MouseCursor";
import ScrollToTop from "@/components/Common/ScrollToTop";
//= Page Components
import Soon from "@/components/InnerPages/Soon";

export const metadata = {
  title: 'Swak - Coming Soon',
  icons: {
    icon: "/inner_pages/assets/img/fav2.png",
    shortcut: "/inner_pages/assets/img/fav2.png",
    other: generateStylesheetObject([
      '/common/assets/css/lib/bootstrap.min.css',
      '/common/assets/css/common_style.css',
      '/inner_pages/assets/css/inner_pages.css'
    ])
  }
}

export default function PageSoon() {
  return (
    <body className="page-soon-style1">
      <LoadingScreen />
      {/* Page Components */}
      <div id="scrollsmoother-container">
        <Soon />
      </div>
      <MouseCursor />
      <ScrollToTop />
      {/* Page Scripts */}
      <Script src="/common/assets/js/gsap_lib/gsap.min.js" strategy="lazyOnload" />
      <Script src="/common/assets/js/common_js.js" strategy="lazyOnload" />
    </body>
  )
}
