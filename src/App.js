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
import Backdrop from "./Layouts/Backdrop/Backdrop";


import { ADMIN_LOGIN } from "./Redux/Action/type";
import SidebarButton from "./Components/SidebarButton/SidebarButton";
import SeperatorLine from "./Components/SeperatorLine/SeperatorLine";
import PageNotFound from "./Screens/PageNotFound/PageNotFound";

import ScreenRotationIcon from '@material-ui/icons/ScreenRotation';

class App extends Component {

  constructor() {
    super();
    this.state = {
      sideDrawerOpen: false,
      isMobileRotate: false

    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }
  
  render() {
    const notFoundPage = () => (
      <PageNotFound />
    )

    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler}/>;
    }

    const isMobileRotate = this.state.isMobileRotate;
    
    return (
      <BrowserRouter> 
        <div>
          {isMobileRotate ? (
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
          ) : (
              <div className="screenRotationContainer">
                <ScreenRotationIcon />
                <p>Please rotate your device</p>
              </div>
            )}
        </div>

        {this.props.credentials &&
          <div>
            {backdrop}
            <NavigationBarComponent show={this.state.sideDrawerOpen}/>

            <SidebarButton click={this.drawerToggleClickHandler}/>

            <SeperatorLine />

          </div>
      
        }
        
      </BrowserRouter>
    );
  }
  componentDidMount() {
    document.body.style.background = "#c49e00";
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    
    const adminLoginStr = localStorage.getItem("adminLogin");
    const adminAccessToken = localStorage.getItem('accessToken');
    if (adminLoginStr && adminAccessToken) {
      restConnector.defaults.headers['Authorization'] = "Bearer " + adminAccessToken
      this.props.dispatch( reduxAction( ADMIN_LOGIN, JSON.parse(adminLoginStr) )  );

    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isMobileRotate: window.innerWidth > 560 });
  }

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({
      sideDrawerOpen: false,
  
    });
  };
}

const mapStateToProps = (state) => ({
  credentials: state.adminReducer.credentials,

})

export default connect(mapStateToProps)(App);
