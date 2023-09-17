import React from "react";
import "./Styles/section3.css";
import SwiperContainer from "./SwiperContainer";
function Section3() {
  return (
    <div className="section3">
      <div className="contentContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="section-header">
                <h2>Our Virtual</h2>
                <h2>Assistant Services</h2>
              </div>
            </div>
            <div className="serviceContainer">
              <div className="row">
                <div className="col-lg-4 col-xxl-3">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="servicesCard">
                        <img src="/Section3/administrative 2.png" />
                        <div className="serviceContent">
                          <h3>Administrative Support</h3>
                          <ul>
                            <li>Email and calendar management</li>
                            <li>Data entry and organization</li>
                            <li>Travel arrangements and booking</li>
                            <li>Document preparation and editing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="servicesCard">
                        <img src="/Section3/PM 2.png" />
                        <div className="serviceContent">
                          <h3>Administrative Support</h3>
                          <ul>
                            <li>Email and calendar management</li>
                            <li>Data entry and organization</li>
                            <li>Travel arrangements and booking</li>
                            <li>Document preparation and editing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-xxl-6 d-flex align-items-center center-container">
                  <div className="servicesCard">
                    <img src="/Section3/contact us 2.png" />
                    <div className="serviceContent">
                      <h3>Administrative Support</h3>
                      <ul>
                        <li>Email and calendar management</li>
                        <li>Data entry and organization</li>
                        <li>Travel arrangements and booking</li>
                        <li>Document preparation and editing</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 right-container">
                  <div className="row">
                    <div className="col-lg-12 col-md-6">
                      <div className="servicesCard">
                        <img src="/Section3/support 2.png" />
                        <div className="serviceContent">
                          <h3>Administrative Support</h3>
                          <ul>
                            <li>Email and calendar management</li>
                            <li>Data entry and organization</li>
                            <li>Travel arrangements and booking</li>
                            <li>Document preparation and editing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-6">
                      <div className="servicesCard">
                        <img src="/Section3/analysis 2.png" />
                        <div className="serviceContent">
                          <h3>Administrative Support</h3>
                          <ul>
                            <li>Email and calendar management</li>
                            <li>Data entry and organization</li>
                            <li>Travel arrangements and booking</li>
                            <li>Document preparation and editing</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12">
                <h2 className="swiper-heading text-center">Clients We Served</h2>
                <SwiperContainer/>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;
