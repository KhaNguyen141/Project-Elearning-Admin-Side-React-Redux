import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCoursePending from "../Components/ModalCoursePending";
import ModalCourseAcceptedComponent from "../Components/ModalCourseAccepted"
import { fetchListUser } from '../Redux/Action/User/AdminActions';
import { fetchCoursePending, fetchCourseAccepted } from '../Redux/Action/Course/CourseActions';

class TableCoursePending extends Component {
    render() {
        return (
            <div>
                <div className="inputTableSearch d-flex">
                    <input className="form-control" name="searchUser" />
                    <div className="d-flex">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
                <div className="tableContainer container">
                    <div className="tableUserList">
                        <table className="table table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Username</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th className="text-center">Manipulation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.userList.map((user, index) => {
                                    if (user.maLoaiNguoiDung === "HV")
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1 }</td>
                                            <td>{user.taiKhoan}</td>
                                            <td>{user.hoTen}</td>
                                            <td>{user.email}</td>
                                            <td>{user.soDt}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.handleFetchCoursePending(user.taiKhoan)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalCoursePending">Pending</button>
                                                    <ModalCoursePending user={user} key={index}/>
                                                <button
                                                    onClick={() => this.handleFetchCourseAccepted(user.taiKhoan)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalCourseAccepted">Accepted</button>
                                                    <ModalCourseAcceptedComponent />
                                            </td>
                                        </tr>
                                    )
                                })}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
    componentDidMount () {
        this.props.dispatch(fetchListUser())
    
    }

    handleFetchCoursePending = (taiKhoan) => {
        this.props.dispatch(fetchCoursePending(taiKhoan))
    }

    handleFetchCourseAccepted = (taiKhoan) => {
        this.props.dispatch(fetchCourseAccepted(taiKhoan))
    }
}

const mapStateToProps = (state) => ({
    userList: state.userReducer.userList,
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
   
})

export default connect(mapStateToProps)(TableCoursePending);
