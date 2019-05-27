//  lIBRARIES
import React, { Component } from "react";

// CSS
import "../../../css/pages/feedPage.css";

//  LINKS
import FeedList from "../../shared/org/feeds/feedList";

// H O C
import { connect } from "react-redux";

// Firestore connect as H O C
import { firestoreConnect } from "react-redux-firebase";

// Compose for composing two H O C's
import { compose } from "redux";

class Feeds extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: this.props.feeds
    };
  }
  render() {
    const { feeds } = this.props;

    return (
      <div className="Feed">
        <div className="feed-content">
          <div className="SearchFunction" />
          <div className="feed-container">
            {/* <Categories /> */}
            <FeedList feeds={feeds} />
          </div>
        </div>
      </div>
    );
  }
}

const mapToStateToProps = state => {
  // console.log(statse);
  return {
    // feeds: state.feed.feeds
    feeds: state.firestore.ordered.feeds
  };
};

export default compose(
  connect(mapToStateToProps),
  firestoreConnect([{ collection: "feeds", orderBy: ["createdAt", "desc"] }])
)(Feeds);
