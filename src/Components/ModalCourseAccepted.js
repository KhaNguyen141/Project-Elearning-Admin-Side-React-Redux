import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourseAccepted } from '../Redux/Action/Course/CourseActions';

class ModalCourseAcceptedComponent extends Component {
    render() {

        return (
            <div>
                <div className="modal fade" id="modalCourseAccepted" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-xl" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Khoá học đã xét duyệt</h5>
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
                                                    <td></td>
                                                    <td>{item.maKhoaHoc}</td>
                                                    <td>{item.tenKhoaHoc}</td>
                                                    <td className="text-center">
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
    courseListAccepted: state.courseReducer.courseListAccepted
})

export default connect(mapStateToProps)(ModalCourseAcceptedComponent);
