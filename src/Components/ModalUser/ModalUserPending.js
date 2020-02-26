import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminApproveCourses, adminCancelCourses } from '../../Redux/Action/User/AdminActions';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalUserPending extends Component {
    render() {
        const {maKhoaHoc} = this.props.course;
        return (
                <Modal isOpen={this.props.isUserPendingModalOpen} toggle={this.props.isUserPendingModalClose}>
                    <ModalHeader toggle={this.props.isUserPendingModalClose}>
                        Users list pending
                    </ModalHeader>
                    
                    <ModalBody>
                        <table className="table tableUserPending">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User ID</th>
                                    <th>Name</th>
                                    <th className="text-center">Manipulation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.userListPending.length ? (
                                this.props.userListPending.map((user, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{user.taiKhoan}</td>
                                            <td>{user.hoTen}</td>
                                            <td className="text-center">
                                                <button
                                                    onClick={() => this.handleApprove(maKhoaHoc, user.taiKhoan)}
                                                    className="btn btn-udi-yellow mr-2">Approve</button>
                                                <button
                                                    onClick={() => this.handleCancel(maKhoaHoc, user.taiKhoan)}
                                                    className="btn btn-cyber-red mr-2">Cancel</button>

                                            </td>
                                        </tr>
                                    )
                                })
                                ) : (
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td className="tableUserPending__emptyList">Empty List</td>
                                        <td></td>
                                    </tr>
                                )
                               }

                            </tbody>
                        </table>
                    </ModalBody>
                </Modal>
        )
    }
    
    handleApprove = (maKhoaHoc, taiKhoan) => {
        this.props.dispatch(adminApproveCourses(maKhoaHoc, taiKhoan))
    }

    handleCancel = (maKhoaHoc, taiKhoan) => {
        this.props.dispatch(adminCancelCourses(maKhoaHoc, taiKhoan))
    }
    
    
}

const mapStateToProps = (state) => ({
    userListPending: state.userReducer.userListPending,
   
})

export default connect(mapStateToProps)(ModalUserPending);
