import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import reduxAction from "./Redux/Action/action";
import { restConnector } from "./Services";

// import Layout
import HomeScreen from "./Screens/Home/home";
import ProfileDetail from "./Screens/Profile/ProfileDetail";
import NavigationBarComponent from "./Components/NavigationBar/NavigationBar"
import UserManagementsComponent from "./Screens/Managements/UserManagements";
import CourseManagementsComponent from "./Screens/Managements/CourseManagement";
import AddCourseComponent from "./Screens/Course/AddNewCourse";
import AddUserComponent from "./Screens/UserAction/AddUser";

import { ADMIN_LOGIN } from "./Redux/Action/type";
import SidebarButton from "./Components/SidebarButton/SidebarButton";
import SeperatorLine from "./Components/SeperatorLine/SeperatorLine";
import PageNotFound from "./Screens/PageNotFound/PageNotFound";

class App extends Component {
  
  render() {
    const notFoundPage = () => (
      <PageNotFound />
    )
    
    return (
      <BrowserRouter> 
      
        {this.props.credentials &&
          <div>
            <NavigationBarComponent />

            <SidebarButton />

            <SeperatorLine />

          </div>
      
        }
      
        <Switch>
        
            <Route exact path="/admin" component={HomeScreen} />
            <Route exact path="/admin/detail" component={ProfileDetail} />
            <Route exact path="/admin/list-user-manage" component={UserManagementsComponent} />
            <Route exact path="/admin/list-course-manage" component={CourseManagementsComponent} />
            <Route exact path="/admin/course-manage" component={AddCourseComponent} />
            <Route exact path="/admin/user-manage" component={AddUserComponent} />
            <Route component={notFoundPage} />
            <Route path="/" component={HomeScreen} />
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
