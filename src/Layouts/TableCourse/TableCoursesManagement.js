import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourseList, fetchCourseListPagination, searchCourse } from '../../Redux/Action/Course/CourseActions';
import ModalUserPending from "../../Components/ModalUser/ModalUserPending";
import ModalUpdateCourseComponent from '../../Components/ModalCourse/ModalUpdateCourse';
import { fetchListUserPending } from '../../Redux/Action/User/AdminActions';

import PaginationComponent from '../Pagination/Pagination';

class TableCoursePending extends Component {
    constructor() {
        super();
        this.state = {
            course: [],
            searchResult: [],
            isUserPendingModalOpen: false,
            isUpdateCourseModalOpen: false,
        };
    }

    userPendingModalClose = () => {
        this.setState({ 
            isUserPendingModalOpen: false
        })
    }

    updateCourseModalClose = () => {
        this.setState({
            isUpdateCourseModalOpen: false
        })
        
    }

    render() {
        const currentList = this.props.courseList.filter(nameSearch => {
            return nameSearch.tenKhoaHoc.toLowerCase().trim().indexOf(this.props.text.toLowerCase().trim()) !== -1;
        });

        
        return (
            <div>
                <div className="inputTableSearch d-flex">
                    <input
                        className="form-control"
                        name="searchUser"
                        onChange={this.handleChange}
                        placeholder="Search" />
                </div>
                <div className="tableContainer container">
                    <div className="tableCourseList">
                        <table className="table table-striped table-condensed tableCourseList__tableCourseContent">
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
                                {
                                    currentList.length > 0 ? (
                                        (currentList).map((course, index) => {
                                            return (
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
                                                            >Pending</button>

                                                        <button
                                                            onClick={() => this.handleFetchInfoCourse(course)}
                                                            className="btn btn-udi-yellow mr-2"
                                                            
                                                            >Update</button>
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    ) : (
                                       
                                        <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Course not found</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                       
                                                )

                               }

                                <ModalUserPending 
                                course={this.state.course} 
                                isUserPendingModalOpen={this.state.isUserPendingModalOpen}
                                isUserPendingModalClose={() => this.userPendingModalClose()}
                                />
                                <ModalUpdateCourseComponent 
                                course={this.state.course} 
                                isUpdateCourseModalOpen={this.state.isUpdateCourseModalOpen}
                                isUpdateCourseModalClose={() => this.updateCourseModalClose()}
                                />
                            </tbody>
                        </table>
                        <PaginationComponent
                            activePage={this.props.page.currentPage}
                            itemsCountPerPage={10}
                            totalItemsCount={this.props.page.totalCount}
                            pageRangeDisplayed={3}
                            onChange={this.handlePageChange}
                        />
                    </div>

                </div>

            </div>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchCourseList())

    }

    handleChange = (event) => {
        this.props.dispatch(searchCourse(event.target.value))
    }

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        this.props.dispatch(fetchCourseListPagination(pageNumber))
    };

    handleFetchUserPending = (course) => {
        this.setState({
            course: course,
            isUserPendingModalOpen: true
        }, () => {
            this.props.dispatch(fetchListUserPending(course.maKhoaHoc))

        });
    }

    handleFetchInfoCourse = (course) => {
        this.setState({
            course: course,
            isUpdateCourseModalOpen: true
        }, () => {
            console.log(course)
            localStorage.setItem("courseEventClickedInfo", JSON.stringify(course))
        })
    }
}

const mapStateToProps = (state) => ({
    courseList: state.courseReducer.courseList,
    page: state.courseReducer.currentPage,
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
    text: state.courseReducer.courseText,
})

export default connect(mapStateToProps)(TableCoursePending);