import React, { useEffect } from "react";
import data from "../data/projects";
import "./ProjectPage.css"; // Make sure to import the CSS

export default function ProjectPage() {
  useEffect(() => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        card.querySelector(".card-front").style.display = "none";
        card.querySelector(".card-back").style.display = "block";
      });

      card.addEventListener("mouseleave", () => {
        card.querySelector(".card-front").style.display = "block";
        card.querySelector(".card-back").style.display = "none";
      });
    });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {data.map((a, index) => (
          <div
            className={`col-lg-6 col-md-6 col-sm-12 ${
              index === data.length - 1 ? "mx-auto" : ""
            }`}
            key={a.url}
          >
            <div className="card">
              <div className="card-front">
                <img
                  src={process.env.PUBLIC_URL + a.img}
                  className="card-img-top"
                  alt={a.Name}
                  width="100"
                  height="300"
                />
              </div>
              <div className="card-back card-body">
                <h5 className="card-title">{a.Name}</h5>
                <p className="card-text">{a.Description}</p>
                <p className="card-text">
                  <small className="text-muted">{a.Stack}</small>
                </p>
                <a
                  href={a.url}
                  className="btn custom-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
