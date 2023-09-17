import React from "react";
import "./Styles/section2.css";

function Section2() {
  return (
    <div className="section2">
      <div className="contentContainer">
        <div className="container-fluid">
            <div className="headsetImg"><img src="/Section2/center.png"/></div>
            <div className="chatImg"><img src="/Section2/chat.png"/></div>
          <div className="row">
            <div className="col-12 d-flex justify-content-center">
              <div className="section-top">
                <p>Behind the Magic</p>
                <div className="heading-shadow-container">
                  <h2 className="section-heading shadows">
                    Unveiling the Wizards of Virtual Assistance
                  </h2>
                  <h2 className="section-heading">
                    Unveiling the Wizards of Virtual Assistance
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-xl-4 col-md-6">
              <div className="row">
                <div className="col-12">
                  <div className="perksCard perkCard1">
                    <div className="perksHeader mx-2">
                      <h6>Transparency</h6>
                    </div>
                    <div className="perksBottom">
                      <p>
                        Because we believe in being communicative and
                        transparent for great results on all projects, you will
                        be kept up to date throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="perksCard perkCard2">
                    <div className="perksHeader mx-2">
                      <h6>Transparency</h6>
                    </div>
                    <div className="perksBottom">
                      <p>
                        Because we believe in being communicative and
                        transparent for great results on all projects, you will
                        be kept up to date throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-xl-4 imageWrapper">
              <img
                src="/Section2/main-Image.png"
                className="Section2-centerImage"
                alt=""
                width="100%"
              />
            </div>
            <div className="col-lg-3 col-xl-4 col-md-6">
              <div className="row">
                <div className="col-12">
                  <div className="perksCard">
                    <div className="perksHeader mx-2">
                      <h6>Transparency</h6>
                    </div>
                    <div className="perksBottom">
                      <p>
                        Because we believe in being communicative and
                        transparent for great results on all projects, you will
                        be kept up to date throughout the process.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-12">
                  <div className="perksCard perkCard4">
                    <div className="perksHeader mx-2">
                      <h6>Transparency</h6>
                    </div>
                    <div className="perksBottom">
                      <p>
                        Because we believe in being communicative and
                        transparent for great results on all projects, you will
                        be kept up to date throughout the process.
                      </p>
                    </div>
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

export default Section2;
