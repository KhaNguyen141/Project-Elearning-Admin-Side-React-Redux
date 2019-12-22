import React, { Component } from "react";
import { NavLink } from "react-router-dom"; //Thư viện thẻ link (thay thế thẻ <a></a>)
import { connect } from "react-redux";
import "../App.scss";

// Import function layout
import AdminLogin from "./UserAction/AdminLogin";

import { settings } from "../Config/settings";

class HeaderComponent extends Component {

  render() {
    return (
      <header className="udemyNavbar container">
          <nav className="header__navbar navbar navbar-expand-lg navbar-light">

            <div className="header__left col-md-7">
              <div className="row">
                <NavLink className="navbar-brand" to="/admin/home">
                  <img src="/img/CybersoftLogo.png" />
                </NavLink>
                
                <form className="formSearch">
                  <div className="input-group">
                    <input type="text" className="form-control" placeholder="Tìm khóa học" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                    <div className="input-group-append">
                      <span className="input-group-text" id="basic-addon2">
                        <i className="fa fa-search" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div className="header__right col-md-5 ml-3" style={{marginTop: "-3px"}}>
              <div className="row">
              <ul className="navbar-nav mr-auto">
              {this.props.credentials ? (
              
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      Hello, {this.props.credentials.hoTen}
                  </a>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <NavLink to="/profile" className="dropdown-item">Profile</NavLink>
                  <button className="dropdown-item" onClick={handleLogout}>Đăng xuất</button>

                  <a className="dropdown-item" href="#">
                      My course
                  </a>
                  
                </div>
              </div>
              </li> 
              ) : (
                
                <li className="button-group d-flex">
                <AdminLogin />
                <div className="nav-link">
                    <button className="btn btn-udi-yellow" data-toggle="modal" data-target="#modalLogin">Đăng nhập</button>
                </div>
             
                </li>
               
              )}
              </ul>
              </div>
            </div>

          </nav>

      </header>

    );
  }

}

const handleLogout = (e) => {
  e.preventDefault();
  localStorage.removeItem(settings.adminLogin);
  window.location.replace("/admin");
 
}

const mapStateToProps = (state) => ({
  credentials: state.adminReducer.credentials,

});

export default connect(mapStateToProps)(HeaderComponent);


