import React from "react";
import "./Styles/section1.css";

function TopBanner() {
  return (
    <div className="section1">
      <div className="banner-content">
        <p className="heading-top">Jumpstart your business by hiring</p>
        <h1 className="main-heading">Virtual Assistants</h1>
        <p className="subtitle">
          Get more done in less time by hiring a virtual assistant. Free up your
          schedule and focus on what really matters - growing your business.
        </p>
      </div>
      <div className="mouseScroll">
        <img src="/Section1/scroll-mouse.png" />
      </div>
    </div>
  );
}
export default TopBanner;
