import React from "react";
import "../../css/pages/errorPage.css";

// import Header from "../org/header";
import Footer from "../shared/org/footer";

const ErrorPage = () => {
  return (
    <div className="ErrorPage">
      {/* <Header /> */}
      <div className="error-content">
        <p>Error 404: Page not found!</p>
      </div>
      <Footer />
    </div>
  );
};

export default ErrorPage;
