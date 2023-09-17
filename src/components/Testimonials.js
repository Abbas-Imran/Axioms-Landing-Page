import React from "react";
import "./Styles/section5.css";
import TestinomialSwiper from "./TestimonialSwiper";
import { useSwiper } from 'swiper/react';

function Testimonials() {
    const swiper = useSwiper();
  return (
    <div className="section5">
      <div className="contentContainer">
        <div className="container-fluid">
          <div className="row mb-5">
            <div className="col-lg-5 offset-lg-1">
              <p className="test-head">Testimonials</p>
              <h2 className="section-heading">
                Clients Spill the Beans on Our Epic Support!
              </h2>
            </div>
            <div className="col-lg-5 d-flex align-items-center">
              <p className="subSubtitle">
                "Unleash the happy dance! Our clients can't help but sing
                praises about the exceptional support and results they've
                experienced with our virtual assistants."
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-11 col-md-11 offset-md-1 offset-lg-1">
              <div className="testonomialMainContainer">
                <h2 className="testHeading-blur">Testimonials</h2>
                <img
                  src="/Section5/quotes.png"
                  className="quotesImage"
                  alt=""
                />
                <img
                  src="/Section5/userRating.png"
                  className="userRating"
                  alt=""
                />
                <div className="row" style={{ height: "100%" }}>
                  <div className="col-lg-4 col-md-4 col-sm-7 offset-md-4 offset-sm-3 offset-lg-4">
                    <TestinomialSwiper/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
