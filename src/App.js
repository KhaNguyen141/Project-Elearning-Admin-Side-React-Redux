import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import HomeScreen from "./Screens/Home/home";
import ProfileDetail from "./Screens/Profile/ProfileDetail";

import { ADMIN_LOGIN } from "./Redux/Action/type";

class App extends Component {
  render() {
    const notFoundPage = () => (
      <div className="container contentNotFound">
        <h1>Content is not found</h1>
        <Link className="btn btn-success" to="/admin">Back to home</Link>
      </div>
    )
    
    return (
      
      <BrowserRouter>
        <Switch>
            <Route exact path="/admin" component={HomeScreen} />
            <Route exact path="/admin/detail" component={ProfileDetail} />
            <Route component={notFoundPage} />
            <Route exact path="/" component={HomeScreen} />
        </Switch>
      </BrowserRouter>
    );
  }
  componentDidMount() {
    document.body.style.background = "#c49e00";
    
    const adminLoginStr = localStorage.getItem("adminLogin");
    const adminAccessToken = localStorage.getItem('accessToken');
    if (adminLoginStr && adminAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + adminAccessToken
      
      this.props.dispatch( reduxAction( ADMIN_LOGIN, JSON.parse(adminLoginStr) )  );

    }
  }
}

export default connect()(App);
