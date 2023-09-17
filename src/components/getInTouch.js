import React from "react";
import "./Styles/section6.css";

function GetInTouch() {
  return (
    <div className="section6">
      <div className="contentContainer">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12">
              <div className="getInTouch">
                <div className="row">
                  <div className="col-lg-6">
                    <h2 className="section-heading mb-5">Get In Touch</h2>
                    <p className="mb-3">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <form>
                    <input type="text" className="textField" placeholder="Name"/>
                    <input type="number" className="textField" placeholder="Phone"/>
                    <input type="Email" className="textField" placeholder="Email"/>
                    <button type="submit" className="formSubmit">Contact Us</button>
                    </form>
                    <img className="real-laptop" src="/Section6/real-laptop.png"/>
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

export default GetInTouch;
