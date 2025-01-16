import React from 'react';
//= Components
import AboutMe from './AboutMe';
import Search from './Search';
import PopularFeed from './PopularFeed';
import Categories from './Categories';
import InstagramFeed from './InstagramFeed';
import SponsorAds from './SponsorAds';

function Widgets() {
  return (
    <div className="col-lg-4 ps-lg-5">
      <div className="widgets mt-5 mt-lg-0">
        <AboutMe />
        <Search />
        <PopularFeed />
        <Categories />
        <InstagramFeed />
        <SponsorAds />
      </div>
    </div>
  )
}

export default Widgets