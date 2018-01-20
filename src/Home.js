import React, { Component } from "react";
import LoadingSpinner from "./LoadingSpinner";

class Home extends React.Component {
  render() {
    console.log("HOME>>>>", this.props);
    return (
      <div>
        {(this.props.github_auth.isSendingCode ||
          this.props.goog_auth.isAuthenticating) && <LoadingSpinner />}
        <h1>Hello</h1>
      </div>
    );
  }
}

export default Home;
