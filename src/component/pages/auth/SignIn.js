import React, { Component } from "react";

import "../../../css/pages/auth.css";

// Route Guard
import { Redirect, Link } from "react-router-dom";

// Redux Connect H O C
import { connect } from "react-redux";

// Auth Action
import { signIn } from "../../../store/actions/authActions";

import Header from "../../shared/org/header/header";

class SignIn extends Component {
  state = {
    title: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.signIn(this.state);
  };

  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/feed" />;
    return (
      <div className="container1">
        <div className="AuthWrap">
          <div className="Auth">
            <h1>Sign In</h1>
            <form onSubmit={this.handleSubmit} className="Auth-form">
              <div className="input-field">
                <input type="email" id="email" onChange={this.handleChange} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  id="password"
                  onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="btn">
                <button className="Login">Login</button>
                Don't have account:
                <Link to="/signup">
                  <button>Register</button>{" "}
                </Link>
                <div className="AuthError">
                  {authError ? <p>{authError}</p> : null}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);

// В Новой Зеландии 28 марта в Хагли-Парке прошла национальная
//  служба памяти жертв нападений на мечеть Крайстчерч. На мероприятии выступил премьер-министр Джасинда Ардерн.
