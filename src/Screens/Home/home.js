import React, { Component } from "react";

import { connect } from "react-redux";

// import Component
import LoginBox from '../../Layouts/LoginBox/LoginBox';

// import SCSS
import "../../App.scss";
import { fetchListUser } from "../../Redux/Action/User/AdminActions";
import { fetchCourseList } from "../../Redux/Action/Course/CourseActions";

// import layout

 class HomeScreen extends Component {
  render() {
    return (
      <div>
        {this.props.credentials ? (
          <div>
           
              <div className="homeContentContainer">
                
                <div className="row chartContainer">
                  <div className="col-lg-12 col-xl-8 bg-white">
                    <img className="chartFramework" src="/img/framework chart 2019.png" alt="Front End Framework Chart"/>
                  </div>
    
                  <div className="col-lg-12 col-xl-4 bg-white">
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

                <div className="row text-white tableLatestContainer">
                  <div className="col-lg-12 bg-white rounded">
                      <div className="tableUserList">
                        <div className="row">
                          
                            <h2>Latest User List</h2>
                            <table className="table table-striped table-condensed">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Username</th>
                                  <th>Name</th>
                                  <th>Email</th>
                                  <th>Phone Number</th>
                                  <th>Date Registered</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.userList.slice(0, 6).map((user, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{user.taiKhoan}</td>
                                      <td>{user.hoTen}</td>
                                      <td>{user.email}</td>
                                      <td>{user.soDT}</td>
                                      <td>31/12/2019</td>
                                    </tr>
                               
                                  )
                                })}
                                
                              </tbody>
                            </table>
                        
                        </div>
                      </div>
    
                    </div>

                    <div className="col-lg-12 bg-white rounded">
                      <div className="tableCourseList">
                        <div className="row">
                          
                            <h2>Latest Course List</h2>
                            <table className="table table-striped table-condensed">
                              <thead>
                                <tr>
                                  <th>#</th>
                                  <th>Course ID</th>
                                  <th>Course Name</th>
                                  <th>Views</th>
                                  <th>Creator</th>
                                  <th>Creation Date</th>
                                </tr>
                              </thead>
                              <tbody>
                                {this.props.courseList
                                .sort((a, b) => b.ngayTao.split('/').reverse().join().localeCompare(a.ngayTao.split('/').reverse().join()))
                                .slice(0, 6)
                                .map((course, index) => {
                                  return (
                                    <tr key={index}>
                                      <td>{index + 1}</td>
                                      <td>{course.maKhoaHoc}</td>
                                      <td>{course.tenKhoaHoc}</td>
                                      <td>{course.luotXem}</td>
                                      <td>{course.nguoiTao.hoTen}</td>
                                      <td>{course.ngayTao}</td>
                                    </tr>
                               
                                  )
                                })}
                                
                              </tbody>
                            </table>
                        
                        </div>
                      </div>
    
                    </div>
                  </div>
    
    
                </div>
            

            </div>
        ) : (
          <LoginBox />
        ) }
        
        </div>


    )
  }

  componentDidMount() {
    this.props.dispatch(fetchListUser())
    this.props.dispatch(fetchCourseList())
  }
}

const mapStateToProps = (state) => ({
  credentials: state.adminReducer.credentials,
  userList: state.userReducer.userList,
  courseList: state.courseReducer.courseList,
})

export default connect(mapStateToProps)(HomeScreen);

