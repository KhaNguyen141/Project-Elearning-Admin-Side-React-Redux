import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCoursePending } from '../Redux/Action/Course/CourseActions';

class ModalCourseList extends Component {
    render() {

        return (
            <div>
                <div className="modal fade" id="modelID" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Khoá học chờ xét duyệt</h5>
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
                                        {this.props.courseListPending.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>1</td>
                                                    <td>{item.maKhoaHoc}</td>
                                                    <td>{item.tenKhoaHoc}</td>
                                                    <td className="text-center">
                                                        <button className="btn btn-udi-yellow mr-2">Approve</button>
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
    
}

const mapStateToProps = (state) => ({
    courseListPending: state.courseReducer.courseListPending,
    checkAdmin: state.adminReducer.credentials,
})

export default connect(mapStateToProps)(ModalCourseList);
