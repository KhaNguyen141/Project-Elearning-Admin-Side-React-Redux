import React, { Component } from "react";
import HomeScreen from "./Screens/Home/home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import LoginBox from "./Layouts/LoginBox";
import ProfileDetail from "./Screens/Profile/ProfileDetail";

import { ADMIN_LOGIN } from "./Redux/Action/type";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/admin/home" component={HomeScreen} />
          <Route exact path="/admin/profile" component={ProfileDetail} />
          <Route exact path="/admin" component={LoginBox} />
        </Switch>
      </BrowserRouter>
    );
  }

  componentDidMount() {
    const adminLoginStr = localStorage.getItem("adminLogin");
    const adminAccessToken = localStorage.getItem('accessToken');
    if (adminLoginStr && adminAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + adminAccessToken
      
      this.props.dispatch( reduxAction( ADMIN_LOGIN, JSON.parse(adminLoginStr) )  );

    }

    document.body.style.background = "#ffde7d";
  }
}

export default connect()(App);
