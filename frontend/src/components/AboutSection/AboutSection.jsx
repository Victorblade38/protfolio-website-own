import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <div className="about-section">
      <div className="about">
        <h1>About me -- </h1>
        <p>
          I'm Pratham Mhavale , web Developer from Mumbai , India, with a
          Bachelor's degree in Computer Science. I focus on creating visually
          appealing and user-friendly web interfaces. Aside from coding , I’m
          either playing cricket or drawing. I’m eager to learn and explore new
          opportunities in web development and design. <br />
          ---
        </p>
        <p>
          Checkout my artwork at{" "}
          <a href="https://www.instagram.com/victorblade07/">@victorblade07</a>{" "}
          on instagram.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
