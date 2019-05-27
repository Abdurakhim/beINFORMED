import React from "react";
import "../../../../css/shared/SignedInNavBar.css";
import Logo from "../../atm/Logo/logo.js";
import SignedIn from "../../atm/Userlog/SignedIn";
import Navigation from "../../mol/Navigation/Navigation";
import DrawerToggleButton from "../../atm/drawerToggleButton";
import CreateArticle from "../../atm/createArticle";

const SignedInNavBar = props => {
  return (
    <div className="SignedInNavBar">
      <DrawerToggleButton click={props.drawerClick} />
      <div className="navbar-Logo">
        <Logo />
      </div>
      <Navigation />
      <CreateArticle />

      <SignedIn profile={props.profile} />
    </div>
  );
};

export default SignedInNavBar;
