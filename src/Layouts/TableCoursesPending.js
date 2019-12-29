import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourseList } from '../Redux/Action/Course/CourseActions';
import ModalUserPending from "../Components/ModalUserPending";
import ModalUpdateCourseComponent from '../Components/ModalUpdateCourse';
import { fetchListUserPending } from '../Redux/Action/User/AdminActions';

class TableCoursePending extends Component {

    state = {
        course: {}
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
                    <div className="tableCourseList">
                        <table className="table table-striped table-condensed">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Course ID</th>
                                    <th>Course Name</th>
                                    <th>Views</th>
                                    <th>Creator</th>
                                    <th className="text-center">Manipulation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.courseList.map((course, index) => (
                                        <tr key={index} >
                                            <td>{index + 1}</td>

                                            <td>{course.maKhoaHoc}</td>

                                            <td>{course.tenKhoaHoc}</td>
                                            <td>{course.luotXem}</td>
                                            <td>{course.nguoiTao.hoTen}</td>
                                            <td>
                                                <button
                                                    onClick={() => this.handleFetchUserPending(course)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalUserPending">Pending</button>
                                                    
                                                <button
                                                    
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalUpdateCourse">Update</button>
                                            </td>
                                        </tr>

                                    )
                                )}
                                    <ModalUserPending course={this.state.course} />
                                    <ModalUpdateCourseComponent />
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
   
    componentDidMount () {
        this.props.dispatch(fetchCourseList())
    }

    handleFetchUserPending = (course) => {
        this.setState({
            course: course
        }, () => {

            this.props.dispatch(fetchListUserPending(course.maKhoaHoc))

        });
    }

    handleFetchUserAccepted = (maKhoaHoc) => {
        
    }
}

const mapStateToProps = (state) => ({
    courseList: state.courseReducer.courseList,
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
})

export default connect(mapStateToProps)(TableCoursePending);