//  lIBRARIES
import React, { Component } from "react";
//  LINKS
import { Link } from "react-router-dom";
// CSS
import FeedsSummary from "../../mol/FeedsSummary";
import "../../../../css/shared/feedList.css";

class FeedList extends Component {
  static defaultProps = {
    // <-- DEFAULT PROPS
    feeds: [] // undefined gets converted to array,render won't trigger error
  };
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      categoryValue: ""
    };
  }

  handleChange(e) {
    const target = e.target;

    this.setState({
      [target.name]: target.checked
    });

    if (target.checked === true) {
      this.setState({
        categoryValue: target.value
      });
    } else {
      this.setState({
        categoryValue: ""
      });
    }

    if (target.name === "checked1") {
      this.setState({
        checked2: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false
      });
    }
    if (target.name === "checked2") {
      this.setState({
        checked1: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked6: false
      });
    }
    if (target.name === "checked3") {
      this.setState({
        checked1: false,
        checked2: false,
        checked4: false,
        checked5: false,
        checked6: false
      });
    }
    if (target.name === "checked4") {
      this.setState({
        checked1: false,
        checked3: false,
        checked2: false,
        checked5: false,
        checked6: false
      });
    }
    if (target.name === "checked5") {
      this.setState({
        checked1: false,
        checked3: false,
        checked4: false,
        checked2: false,
        checked6: false
      });
    }
    if (target.name === "checked6") {
      this.setState({
        checked1: false,
        checked3: false,
        checked4: false,
        checked5: false,
        checked2: false
      });
    }
  }

  render() {
    let feeds = this.props.feeds;

    let filteredFeeds = this.props.feeds.filter(feed => {
      return (
        feed.category
          .toString()
          .toLowerCase()
          .indexOf(this.state.categoryValue.toLowerCase()) !== -1
      );
    });

    const checked =
      this.state.categoryValue !== "" ? (
        <div className="FeedBox">
          {filteredFeeds &&
            filteredFeeds.map(feed => {
              return (
                <Link to={"/feed/" + feed.id} key={feed.id}>
                  <FeedsSummary feed={feed} />
                </Link>
              );
            })}
        </div>
      ) : (
        <div className="FeedBox">
          {feeds &&
            feeds.map(feed => {
              return (
                <Link to={"/feed/" + feed.id} key={feed.id}>
                  <FeedsSummary feed={feed} />
                </Link>
              );
            })}
        </div>
      );

    return (
      <div className="wrapper">
        <div className="Categories">
          <p>Categories</p>
          <form>
            <label>
              <input
                type="checkbox"
                name="checked1"
                checked={this.state.checked1 === true}
                onChange={this.handleChange.bind(this)}
                value="Destinations"
              />
              Destinations
            </label>
            <label>
              <input
                type="checkbox"
                name="checked2"
                checked={this.state.checked2 === true}
                onChange={this.handleChange.bind(this)}
                value="Activities"
              />
              Activities
            </label>

            <label>
              <input
                type="checkbox"
                name="checked3"
                checked={this.state.checked3 === true}
                onChange={this.handleChange.bind(this)}
                value="Culture"
              />
              Culture
            </label>
            <label>
              <input
                type="checkbox"
                name="checked4"
                checked={this.state.checked4 === true}
                onChange={this.handleChange.bind(this)}
                value="Rules and Regulation"
              />
              Rules and Regulation
            </label>
            <label>
              <input
                type="checkbox"
                name="checked5"
                checked={this.state.checked5 === true}
                onChange={this.handleChange.bind(this)}
                value="Immigration"
              />
              Immigration
            </label>
            <label>
              <input
                type="checkbox"
                name="checked6"
                checked={this.state.checked6 === true}
                onChange={this.handleChange.bind(this)}
                value="Traffic Rules"
              />
              Traffic Rules
            </label>
          </form>
        </div>
        <div className="FeedBox">
          {checked}
          {/* {feeds &&
            feeds.map(feed => {
              return (
                <Link to={"/feed/" + feed.id} key={feed.id}>
                  <FeedsSummary className="FeedList" feed={feed} />
                </Link>
              );
            })} */}
        </div>
      </div>
    );
  }
}

export default FeedList;
