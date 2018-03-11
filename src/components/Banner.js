import React from 'react';
import Header from './Header';
import Serach from './Search';

const Banner = () => (
  <div className="site-banner">
    <div className="container">
      <Header />
      <div className="banner-content">
           <h1>Every asset you need for modern video </h1>
           <p>A.i & transcoding services so good you wont even know they are there.</p>
      </div>
      <Serach />
      <div className="banner-line"><img src="/images/Slice1.png" /></div>
    </div>
  </div>
)

export default Banner;
