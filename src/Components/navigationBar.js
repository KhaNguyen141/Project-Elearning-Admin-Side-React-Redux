import React, { Component } from 'react'
import { connect } from 'react-redux';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import { withRouter, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';


class NavigationBarComponent extends Component {
    render() {
        const {hoTen} = this.props.credentials;
        return (
            <div className="vertical-nav bg-white" id="sidebar">
            <div className="py-4 px-3 mb-4 bg-light">
              <div className="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width={65} className="mr-3 rounded-circle img-thumbnail shadow-sm" />
                <div className="media-body">
                  <h4 className="m-0">Hello, {hoTen}</h4>
                  <p className="font-weight-light text-muted mb-0">Web developer</p>
                </div>
              </div>
            </div>
            <p className="mainMenu">Main</p>
            <ul className="nav flex-column bg-white mb-0">
              <li className="nav-item">
                <NavLink to="/admin" className="nav-link textMenu font-italic">
                  <HomeIcon className="menuIcon mr-3" />
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin/detail" className="nav-link textMenu font-italic">
                  <PermContactCalendarIcon className="menuIcon mr-3" />
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/admin/list-user-manage" className="nav-link textMenu font-italic">
                  <i className="menuIcon fa fa-cubes mr-3" />
                  List User Management
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/list-course-manage" className="nav-link textMenu font-italic">
                  <i className="menuIcon fa fa-cubes mr-3" />
                  List Course Management
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/course-manage" className="nav-link textMenu font-italic">
                  <i className="menuIcon fa fa-picture-o mr-3" />
                  Course Edit
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/admin/user-manage" className="nav-link textMenu font-italic">
                  <i className="menuIcon fa fa-picture-o mr-3" />
                  User Edit
                </NavLink>
              </li>

              <li className="nav-item">
                <a onClick={this.handleLogout} className="nav-link textMenu font-italic">
                  <ExitToAppIcon className="menuIcon SignOutIcon mr-3" />
                  Logout
                </a>
              </li>
            </ul>
          </div>
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