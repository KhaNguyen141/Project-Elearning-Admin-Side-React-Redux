import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCoursePending from "../Components/ModalCoursePending";
import ModalCourseAcceptedComponent from "../Components/ModalCourseAccepted"
import { fetchListUser } from '../Redux/Action/User/AdminActions';
import { fetchCoursePending, fetchCourseAccepted, fetchCourseList } from '../Redux/Action/Course/CourseActions';

class TableUserPending extends Component {

    state = {
        user: {}
    }

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
                                                    onClick={() => this.handleFetchCoursePending(user)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalCoursePending">Pending
                                                </button>
                                                    
                                                <button
                                                    onClick={() => this.handleFetchCourseAccepted(user)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalCourseAccepted">Accepted
                                                </button>
                                                    
                                            </td>
                                            
                                        </tr>
                                    )
                                })}
                                    <ModalCoursePending user={this.state.user}/>
                                    <ModalCourseAcceptedComponent user={this.state.user}/>
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

    handleFetchCoursePending = (user) => {
        this.setState({
            user: user
        }, () => {
            this.props.dispatch(fetchCoursePending(user.taiKhoan))
        })   
    }

    handleFetchCourseAccepted = (user) => {
        this.setState({
            user: user
        }, () => {
            this.props.dispatch(fetchCourseAccepted(user.taiKhoan))
        })
        
    }
}

const mapStateToProps = (state) => ({
    courseList: state.courseReducer.courseList,
    userList: state.userReducer.userList,
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
   
})

export default connect(mapStateToProps)(TableUserPending);