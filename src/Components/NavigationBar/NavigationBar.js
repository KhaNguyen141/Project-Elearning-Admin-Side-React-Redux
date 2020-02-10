import React, { Component } from 'react'
import { connect } from 'react-redux';

import { withRouter, NavLink } from 'react-router-dom';

// import Material UI
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import ListAltIcon from '@material-ui/icons/ListAlt';
import EditIcon from '@material-ui/icons/Edit';

class NavigationBarComponent extends Component {

    render() {
        const {hoTen} = this.props.credentials;

        let drawerClasses = 'vertical-nav';
        if (this.props.show) {
            drawerClasses = 'vertical-nav open';

        }
        return (
            <nav className={drawerClasses} id="sidebar">
            <div className="py-4 px-3 mb-4 bg-light">
              <div className="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="profile" width={65} className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                <div className="media-body">
                  <h4 className="m-0">Hello, {hoTen}</h4>
                  <img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="profile" width={35} className="imgResponsive rounded-circle img-thumbnail shadow-sm" />
                  <p className="font-weight-light text-muted mb-0">Web developer</p>
                </div>
              </div>
            </div>
            <p className="mainMenu">Main</p>
            <ul className="nav flex-column bg-white mb-0">
              <li className="nav-item">
                <NavLink activeStyle={{backgroundColor: "red"}} exact to="/admin" className="nav-link textMenu font-italic">
                  <HomeIcon className="menuIcon mr-3" />
                  <span>Home</span>
                  <HomeIcon className="menuIconResponsive" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{color: "red"}} exact to="/admin/detail" className="nav-link textMenu font-italic">
                  <PermContactCalendarIcon className="menuIcon mr-3" />
                  <span>About</span>
                  <PermContactCalendarIcon className="menuIconResponsive text-right" />
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={{ backgroundColor:'red' }} exact to="/admin/list-user-manage" className="nav-link textMenu font-italic">
                  <ListAltIcon className="menuIcon mr-3" />
                  <span>List User Management</span>
                  <ListAltIcon className="menuIconResponsive" />
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink activeStyle={{ backgroundColor:'red' }} exact to="/admin/list-course-manage" className="nav-link textMenu font-italic">
                  <ListAltIcon className="menuIcon mr-3" />
                  <span>List Course Management</span>
                  <ListAltIcon className="menuIconResponsive" />
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/course-manage" className="nav-link textMenu font-italic">
                  <EditIcon className="menuIcon fa fa-picture-o mr-3" />
                  <span>Course Edit</span>
                  <EditIcon className="menuIconResponsive fa fa-picture-o" />
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/user-manage" className="nav-link textMenu font-italic">
                  <EditIcon className="menuIcon fa fa-picture-o mr-3" />
                  <span>User Edit</span>
                  <EditIcon className="menuIconResponsive fa fa-picture-o" />
                </NavLink>
              </li>

              <li className="nav-item">
                <div onClick={this.handleLogout} className="nav-link textMenu font-italic">
                  <ExitToAppIcon className="menuIcon SignOutIcon mr-3" />
                  <span>Logout</span>
                  <ExitToAppIcon className="menuIconResponsive SignOutIcon" />
                </div>
              </li>
            </ul>
          </nav>
        )
    }

    handleLogout = () => {
      localStorage.removeItem("adminLogin");
      this.props.history.replace('/admin');
      window.location.reload('/admin');
    }
}

const mapStateToProps = (state) => ({
    credentials: state.adminReducer.credentials,

})

export default withRouter(connect(mapStateToProps)(NavigationBarComponent));