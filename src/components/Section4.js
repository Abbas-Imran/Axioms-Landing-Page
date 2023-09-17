import React from "react";
import "./Styles/section4.css";

function Section4() {
  return (
    <div className="section4">
      <div className="contentContainer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-1 col-1 leftCont">
                <div className="left-container"></div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5 col-6">
                <div className="centerDiv">
                    <h2 className="swiper-heading">Ready to Level Up?</h2>
                    <h2 className="sub-heading">Let our Virtual <br/> Assistants Turbocharge <br/> Your Business!</h2>
                </div>
            </div>
            <div className="col-lg-6 col-6">
                <div className="rightContainer">
                    <img src="/Section4/graph 2.png" className="graph"/>
                    <img src="/Section4/laptop.png" className="laptopImage" width="200px" alt=""/>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section4;
