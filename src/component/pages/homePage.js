import React from "react";
import "../../css/pages/homePage.css";

import Footer from "../shared/org/footer";
import Logo from "../shared/atm/Logo/logo";
import Navigation from "../shared/mol/Navigation/Navigation";
import AnnouncementBar from "../shared/mol/announcebar";

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="home-content">
        <div className="SearchEngineContainer">
          <Logo />
          <p className="home-description">
            This is an informative website about life in New Zealand. Our goal
            is to help Tourists, Students, Residents and others to know and find
            information about this amazing country. The content of this website
            are: Information about transport, culture, ethnic foods,
            restaurants, places to visit, security & safety, laws & regulation
            and important links related to New Zealand life. Anyone can access
            the content of this web application.
          </p>
          <Navigation />
        </div>
        {/* <AnnouncementBar /> */}
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
