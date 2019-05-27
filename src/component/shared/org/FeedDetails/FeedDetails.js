//  lIBRARIES
import React from "react";
// import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";

// CSS
import "../../../../css/shared/feedDetails.css";

import Footer from "../footer";

// H O C's
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const FeedDetails = props => {
  const { feed, auth } = props;

  if (!auth.uid) return <Redirect to="/signin" />;
  if (feed) {
    const image = feed.url ? (
      <img className="image" src={feed.url} />
    ) : (
      <img
        className="image"
        src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fno-image.jpg?alt=media&token=f767a997-e774-4e13-907c-b4430656c34e"
      />
    );

    return (
      <div className="FeedContainer">
        <div className="DetailsContainer">
          <div className="feedDetails">
            <div className="FeedTitle">
              <section className="title">{feed.title}</section>
              <section className="details">
                <span className="fa fa-info-circle" /> {feed.address} <i>|</i>
                <span className="fa fa-phone" /> {feed.phone} <i>|</i>
                <span className="fa fa-globe">
                  <a href={feed.website}>{feed.website}</a>
                </span>
              </section>
            </div>

            <div className="FeedMedia">
              {image}
              {/* <div className="map">Map</div> */}
            </div>

            <div className="secondRow">
              <div className="FeedDescription">
                <section className="profile">
                  {feed.title}
                  <br />
                  <p>{feed.content}</p>
                </section>
              </div>
            </div>

            <div className="FeedComment" />
          </div>
        </div>
        <Footer />
      </div>
    );
  } else {
    return (
      <div className="loading">
        <p>Loading the Content...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  // console.log(state);
  const id = ownProps.match.params.id;
  const feeds = state.firestore.data.feeds;
  const feed = feeds ? feeds[id] : null;

  return {
    feed: feed,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "feeds" }])
)(FeedDetails);

/* <div className="Layout">
        <span className="feedTitle">Feed's Title - {id}</span>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div>Posted by Abdurakhim</div>
        <div>7th March 2019</div>
      </div> */
