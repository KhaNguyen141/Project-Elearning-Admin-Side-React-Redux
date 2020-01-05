import React, { Component } from 'react'
import { connect } from 'react-redux';
import { adminCancelCourses } from '../Redux/Action/User/AdminActions';

class ModalCourseAcceptedComponent extends Component {
    render() {

        const {taiKhoan} = this.props.user;
        return (
            <div>
                <div className="modal fade" id="modalCourseAccepted" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Courses list approved</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table table-striped table-condensed">
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
                            </div>
                        </div>
                    </div>
                </div>
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
