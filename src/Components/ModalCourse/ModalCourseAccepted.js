import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminCancelCourses } from '../../Redux/Action/User/AdminActions';

import { Modal, ModalHeader, ModalBody } from 'reactstrap';

class ModalCourseAcceptedComponent extends Component {
    render() {

        const {taiKhoan} = this.props.user;
        return (
            <div>
                <Modal isOpen={this.props.isCourseAccpetedModalOpen} toggle={this.props.isCloseCourseAccepted}>
                    <ModalHeader toggle={this.props.isCloseCourseAccepted}>
                        Courses list approved
                    </ModalHeader>
                    
                    <ModalBody>
                        <table className="table tableCourseApproved">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Course ID</th>
                                    <th>Name</th>
                                    <th className="text-center">Manipulation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.courseListAccepted.map((item, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.maKhoaHoc}</td>
                                            <td>{item.tenKhoaHoc}</td>
                                            <td className="text-center">
                                                <button onClick={() => this.handleCancelCourse(item.maKhoaHoc, taiKhoan)} className="btn btn-cyber-red mr-2">Cancel</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </ModalBody>
                </Modal>
            </div>
        )
    }

    handleCancelCourse = (maKhoaHoc, taiKhoan) => {
        this.props.dispatch(adminCancelCourses(maKhoaHoc, taiKhoan))
    }
}

const mapStateToProps = (state) => ({
    courseListAccepted: state.courseReducer.courseListAccepted
})

export default connect(mapStateToProps)(ModalCourseAcceptedComponent);
