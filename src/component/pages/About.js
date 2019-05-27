import React, { Component } from "react";
import "../../css/pages/about.css";

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="text">
          <h1 className="header">Project Team</h1>
          <p className="home-descriptio">
            We are EDENZ Colleges graduates in Software Development.
          </p>
          <h2>
            Left: Jeshurun Sanchez, Center: Wesley Souza, Right: Abdurakhim
            Ruziev.
          </h2>
          <h3>
            This web application is our final project which is developed with
            React, Readux and Firebase. Abu: "Passion for learning new
            programming technologies and implementing them in real life is
            always my obssesion. I am always keen to learn different new tools
            as they help me to develop faster."
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
