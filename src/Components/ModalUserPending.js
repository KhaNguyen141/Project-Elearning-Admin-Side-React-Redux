import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminApproveCourses, fetchListUserPending } from '../Redux/Action/User/AdminActions';
import { fetchCourseList } from '../Redux/Action/Course/CourseActions';

class ModalUserPending extends Component {
    render() {
        const {maKhoaHoc} = this.props.course;
        return (
            <div>
                <div className="modal fade" id="modalUserPending" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Users list pending</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped table-condensed">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>User ID</th>
                                            <th>Name</th>
                                            <th className="text-center">Manipulation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {this.props.userListPending.map((user, index) => {
                                            
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.taiKhoan}</td>
                                                    <td>{user.hoTen}</td>
                                                    <td className="text-center">
                                                        <button
                                                        onClick={() => this.handleApprove(maKhoaHoc, user.taiKhoan)} 
                                                        className="btn btn-udi-yellow mr-2">Approve</button>
                                                        <button className="btn btn-cyber-red mr-2">Cancel</button>
                                                        
                                                    </td>
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

        )
    }
    
    handleApprove = (maKhoaHoc, taiKhoan) => {
        console.log("maKH",maKhoaHoc)

        this.props.dispatch(adminApproveCourses(maKhoaHoc, taiKhoan))
    }
    
}

const mapStateToProps = (state) => ({
    userListPending: state.userReducer.userListPending,
   
})

export default connect(mapStateToProps)(ModalUserPending);
