import React, { Component } from "react";

import { connect } from "react-redux";

// import Component

// import SCSS
import "../../App.scss";

// import layout

 class HomeScreen extends Component {
  render() {

    return (
      <div>
        <div className="vertical-nav bg-white" id="sidebar">
          <div className="py-4 px-3 mb-4 bg-light">
            <div className="media d-flex align-items-center"><img src="https://res.cloudinary.com/mhmd/image/upload/v1556074849/avatar-1_tcnd60.png" alt="..." width={65} className="mr-3 rounded-circle img-thumbnail shadow-sm" />
              <div className="media-body">
                <h4 className="m-0">Hello, Jason Doe</h4>
                <p className="font-weight-light text-muted mb-0">Web developer</p>
              </div>
            </div>
          </div>
          <p className="mainMenu">Main</p>
          <ul className="nav flex-column bg-white mb-0">
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic bg-light">
                <i className="fa fa-th-large mr-3 text-primary fa-fw" />
                Home
        </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-address-card mr-3 text-primary fa-fw" />
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-cubes mr-3 text-primary fa-fw" />
                Courses Management
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link text-dark font-italic">
                <i className="fa fa-picture-o mr-3 text-primary fa-fw" />
                Student Management
              </a>
            </li>
          </ul>
        </div>
        {/* End vertical navbar */}
        {/* Page content holder */}
        <div className="page-content p-5" id="content">
          {/* Toggle button */}
          <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2" /><small className="text-uppercase font-weight-bold">Toggle</small></button>
          {/* Demo content */}
         
          <div className="separator" />
          
          <div className="homeContentContainer">
            
            <div className="row bg-white rounded chartContainer">
              <div className="col-8">
                <img className="chartFramework" src="/img/framework chart 2019.png" />
              </div>

              <div className="col-4">
                <div className="chartInfoContainer">
                  <div className="TotalInfo">
                    <h3>Total</h3>
                    <p>235.434 million downloads (100%)</p>
                    <div className="progressContainerBar">
                        <div className="progressBar"></div>
                    </div>
                  </div>

                  <div className="ReactInfo">
                    <h3>React JS</h3>
                    <p>147.576 million downloads (45%)</p>
                    <div className="progressContainerBar">
                      <div className="progressBar"></div>
                    </div>
                    
                  </div>

                  <div className="AngularInfo">
                    <h3>Angular Core</h3>
                    <p>67.421 million downloads (35%)</p>
                    <div className="progressContainerBar">
                      <div className="progressBar"></div>
                    </div>
                  </div>

                  <div className="VueInfo">
                    <h3>Vue JS</h3>
                    <p>20.437 million downloads (20%)</p>
                    <div className="progressContainerBar">
                      <div className="progressBar"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="row text-white tableUserContainer">
              <div className="col-lg-7 bg-white rounded">
                  <div className="tableListUser">
                    <div className="row">
                      <div className="span5">
                        <table className="table table-striped table-condensed">
                          <thead>
                            <tr>
                              <th>ID</th>
                              <th>Username</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Phone Number</th>
                              <th>Status</th>
                              <th>Date Registered</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Donna12345</td>
                              <td>Donna R. Folse</td>
                              <td>chuoi321@gmail.com</td>
                              <td>0902333333</td>
                              <td><span className="label label-success">Active</span>
                              </td>
                              <td>2012/05/06</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Donna12345</td>
                              <td>Donna R. Folse</td>
                              <td>chuoi321@gmail.com</td>
                              <td>0902333333</td>
                              <td><span className="label label-success">Active</span>
                              </td>
                              <td>2012/05/06</td>
                            </tr>
                            <tr>
                              <td>3</td>
                              <td>Donna12345</td>
                              <td>Donna R. Folse</td>
                              <td>chuoi321@gmail.com</td>
                              <td>0902333333</td>
                              <td><span className="label label-success">Active</span>
                              </td>
                              <td>2012/05/06</td>
                            </tr>
                            <tr>
                              <td>4</td>
                              <td>Donna12345</td>
                              <td>Donna R. Folse</td>
                              <td>chuoi321@gmail.com</td>
                              <td>0902333333</td>
                              <td><span className="label label-success">Active</span>
                              </td>
                              <td>2012/05/06</td>
                            </tr>
                            <tr>
                              <td>5</td>
                              <td>Donna12345</td>
                              <td>Donna R. Folse</td>
                              <td>chuoi321@gmail.com</td>
                              <td>0902333333</td>
                              <td><span className="label label-success">Active</span>
                              </td>
                              <td>2012/05/06</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
 


    )
  }
}

export default (HomeScreen);

