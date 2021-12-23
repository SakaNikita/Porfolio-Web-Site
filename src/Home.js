import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home" id="Home">
      <div className="home__bg">
        {/* HOME CONTENT */}
        <div className="container">
          <div className="home__content">
            <div className="home__meta">
              <h1 className="home__text pz__10">WELCOME TO MY WORLD</h1>
              <h2 className="home__text pz__10">Hi, I’m Nikita Saka</h2>
              <h3 className="home__text sweet pz__10" id="home-title">
                Web Developer.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
