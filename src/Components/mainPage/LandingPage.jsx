// ?> Landing section  //

import React from "react";

export default function LandingPage({ img, onClickHandler }) {
  return (
    <>
      <div className="row mb-5 flex-column-reverse flex-lg-row">
        <div className="col-md-5 col-sm-12 d-flex align-items-lg-center ">
          <div>
            <h1 className="text-break fw-bolder fst-italic">
              Hi, <br /> I’m{" "}
              <span style={{ color: "#e95b93" }}>Chamberlain,</span> Ezigbo
            </h1>
            <div className="my-1">
              <p className="fw-lighter">
                Your Next JavaScript Developer, Ready to Make an Impact
                &#128540;
              </p>
            </div>
            <button
              type="button"
              className="btn custom-btn"
              onClick={onClickHandler}
            >
              Meet Me
            </button>
          </div>
        </div>
        <div className="col-md-7 col-sm-12 mb-5">
          <img src={img} className="rounded w-100" alt={img} />
        </div>
      </div>
    </>
  );
}
