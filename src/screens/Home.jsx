import React from "react";
import "../assets/css/home.css";
import image from "../assets/images/vector.jpg";
import SEO from "../components/Helmet";

export default function Home() {
  return (
    <>
      <SEO title="Abdelfatah Ashour | Frontend developer" />
      <main>
        <div className="container">
          <div className="home">
            <div className="row h-100 d-flex justify-content-center align-items-center">
              <div className="wrapper-image col-md-6 col-12 d-md-flex d-none">
                <img src={image} alt="Abdelfatah Ashour" />
              </div>
              <div className="col-md-6 col-12 px-5">
                <h1>
                  I&apos;M <br />
                  <span className="name">ABDELFATAH ASHOUR.</span> <br />{" "}
                  Frontend developer
                </h1>
                <p>
                  focused on crafting clean & user‑friendly experiences, I am
                  passionate about building excellent software that improves the
                  lives of those around me.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
