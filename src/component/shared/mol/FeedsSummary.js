import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import "../../../css/shared/mol/FeedsSummary.css";

const FeedsSummary = ({ feed }) => {
  const image = feed.url ? (
    <img className="smc-media" src={feed.url} />
  ) : (
    <img
      className="smc-media"
      src="https://firebasestorage.googleapis.com/v0/b/be-informed-nz.appspot.com/o/images%2Fno-image.jpg?alt=media&token=f767a997-e774-4e13-907c-b4430656c34e"
    />
  );

  return (
    <div className="social-card">
      <div className="smc-header">
        <div className="smc-title">{feed.title}</div>
        <div className="smc-author">
          Posted by {feed.authorFirstName} {feed.authorLastName} at{" "}
          {moment(feed.createdAt.toDate().toString()).format("LL")}
        </div>
      </div>
      <div className="smc-image">{image}</div>
      <div className="smc-footnote">
        <Link to="/share">Share</Link>
        <i>|</i>
        <Link to="/comment">Comment</Link>
      </div>
    </div>
  );
};

export default FeedsSummary;
