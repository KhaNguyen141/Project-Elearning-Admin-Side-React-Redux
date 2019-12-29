import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import HomeScreen from "./Screens/Home/home";
import ProfileDetail from "./Screens/Profile/ProfileDetail";
import NavigationBarComponent from "./Components/NavigationBar"
import UserManagementsComponent from "./Screens/Managements/UserManagements";
import CourseManagementsComponent from "./Screens/Managements/CourseManagement";
import AddCourseComponent from "./Screens/Course/AddNewCourse";

import { ADMIN_LOGIN } from "./Redux/Action/type";
import LoginBox from "./Layouts/LoginBox";

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
      
        {this.props.credentials &&
          <NavigationBarComponent />
        }
        <Switch>
            <Route exact path="/admin" component={HomeScreen} />
            <Route exact path="/admin/detail" component={ProfileDetail} />
            <Route exact path="/admin/list-user-manage" component={UserManagementsComponent} />
            <Route exact path="/admin/list-course-manage" component={CourseManagementsComponent} />
            <Route exact path="/admin/course-manage" component={AddCourseComponent} />
            <Route component={notFoundPage} />
            <Route exact path="/admin" component={LoginBox} />
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

const mapStateToProps = (state) => ({
  credentials: state.adminReducer.credentials,

})

export default connect(mapStateToProps)(App);
