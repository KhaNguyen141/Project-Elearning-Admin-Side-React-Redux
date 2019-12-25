import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCourseList from "../Components/ModalCourseList";
import { fetchListUser } from '../Redux/Action/User/AdminActions';
import { fetchCoursePending } from '../Redux/Action/Course/CourseActions';

class TableCoursePending extends Component {
    render() {
        return (
            <div>
                <div className="inputTableSearch d-flex">
                    <input className="form-control" name="searchUser" value="tra cứu tên người dùng" />
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
                                            <td className="text-center">
                                                <button
                                                    onClick={() => this.handleClick(user.taiKhoan)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modelID">Approve</button>
                                                    <ModalCourseList />
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

    handleClick = (taiKhoan) => {
        this.props.dispatch(fetchCoursePending(taiKhoan))
    }
}

const mapStateToProps = (state) => ({
    userList: state.userReducer.userList,
    courseListPending: state.courseReducer.courseListPending,
    checkAdmin: state.adminReducer.credentials,
})

export default connect(mapStateToProps)(TableCoursePending);
