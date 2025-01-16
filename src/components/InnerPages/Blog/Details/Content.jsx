import React from 'react';

function Content() {
  return (
    <>
      <div className="btm-info">
        <a href="#"> <i className="fal fa-eye me-1"></i> <span> 100 Views </span> </a>
        <a href="#"> <i className="fal fa-comments me-1"></i> <span> 30 Comments </span> </a>
        <a href="#"> <i className="fal fa-calendar-alt me-1"></i> <span> 100 24th August 2023 </span> </a>
      </div>
      <div className="text fsz-16 color-777 mb-60">
        A great commerce experience cannot be distilled to a single number. It’s not a Lighthouse score, or a set of Core Web Vitals figures, although both are important inputs. A great commerce experience is a trilemma that carefully balances competing needs of delivering great customer experience, dynamic storefront capabilities, and long-term business — conversion, retention, re-engagement — objectives. As developers, we rightfully obsess about the customer experience, relentlessly working to squeeze every millisecond out of the critical rendering path, optimize input latency, and eliminate jank. At the limit, statically generated, edge delivered, and HTML-first pages look like the optimal strategy. That is until you are confronted with the realization that the next step function in improving conversion rates.
      </div>
      <div className="img mb-50 th-400 img-cover">
        <img src="/inner_pages/assets/img/blog/blog_det1.jpg" alt="" className="main-img" />
      </div>
      <h3 className="fsz-30 mb-20"> A cleansing hot shower or bath </h3>
      <div className="text fsz-16 color-777 pb-50 border-bottom">
        The journey, often, starts “simple” with localization. But then, quickly advances to contextual pricing, juggling complexity of large and frequently updated product catalog, managing continuously running multivariate tests and promotion campaigns, and serving customer-tailored dynamic recommend. Eventually, you reach a realization that every page is similar to an open Tetris board where each “slot” can and should be dynamically tailored by dynamic visitor preferences, all powered by an ever.
      </div>
      <h3 className="fsz-30 mb-30 mt-60"> Setting the mood with incense </h3>
      <div className="img-card">
        <div className="row align-items-center">
          <div className="col-lg-4">
            <div className="img th-140 img-cover">
              <img src="/inner_pages/assets/img/blog/blog1.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-8">
            <div className="text fsz-16 color-777 mt-4 mt-lg-0">
              From connecting back-office operations to front-of-the-house A/B testing and dynamic personalization for each customer, the shared foundation is fast server-side rendering powered by fast storefront data access. On top of this foundation, we add layers of caching, prerendering and edge delivery optimizations .
            </div>
          </div>
        </div>
      </div>
      <div className="founder-card mt-60">
        <div className="icon">
          <img src="/inner_pages/assets/img/icons/ico5.png" alt="" />
        </div>
        <h5 className="fsz-28 mt-15 fw-bold"> Choices to take a holiday and travelling  out inthis pandemic situation are limited. Why not take a stay action on quality. </h5>
        <div className="founder-det mt-30">
          <h6 className="fsz-20 fw-bold mb-0"> Damson D. Ronald </h6>
          <p className="fsz-14 color-blue1"> Founder </p>
        </div>
      </div>
      <div className="text fsz-16 color-777 mt-60">
        Surveying the existing landscape of available developer tools and runtimes, we felt that there is a gap. Enabling dynamic commerce requires close integration between server and client, data fetch strategy, and a production platform that operates at scale. These are hard technical problems that Shopify can help solve and this is why we’ve been hard at work on the Hydrogen framework. It’s a React-based framework optimized for commerce and specialized to be powered by Shopify APIs and infrastructure: The future of commerce is dynamic and personalized.
      </div>
    </>
  )
}

export default Content