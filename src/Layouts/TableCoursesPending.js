import React, { Component } from 'react'
import { connect } from 'react-redux';
import { fetchCourseList, fetchCourseListPagination } from '../Redux/Action/Course/CourseActions';
import ModalUserPending from "../Components/ModalUserPending";
import ModalUpdateCourseComponent from '../Components/ModalUpdateCourse';
import { fetchListUserPending } from '../Redux/Action/User/AdminActions';   

import PaginationComponent from './Pagination/Pagination';

class TableCoursePending extends Component {
    constructor() {
        super();
        this.state = {
            course: [],
            text: "",
            searchResult: [],
    
        };
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        const currentList = this.props.courseList.filter(nameSearch => {
            return nameSearch.tenKhoaHoc.toLowerCase().trim().indexOf(this.state.text) !== -1;
        });

        return (
            <div>
                <div className="inputTableSearch d-flex">
                    <input 
                    className="form-control" 
                    name="searchUser" 
                    onChange={this.handleChange} 
                    placeholder="Search"/>
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
                                {currentList.length > 0 ? (
                                    currentList.map((course, index) => (
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
                                                    onClick={() => this.handleFetchInfoCourse(course)}
                                                    className="btn btn-udi-yellow mr-2"
                                                    data-toggle="modal"
                                                    data-target="#modalUpdateCourse">Update</button>
                                            </td>
                                        </tr>
                                    )
                                )) : (
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td>Course not found</td>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                    </tr>
                                )}
                                    <ModalUserPending course={this.state.course} />
                                    <ModalUpdateCourseComponent course={this.state.course}/>
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
   
    componentDidMount () {
        this.props.dispatch(fetchCourseList())
        
    }

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        this.props.dispatch(fetchCourseListPagination(pageNumber))
    };

    handleFetchUserPending = (course) => {
        this.setState({
            course: course
            
        }, () => {
            this.props.dispatch(fetchListUserPending(course.maKhoaHoc))

        });
    }

    handleFetchInfoCourse = (course) => {
        this.setState({
            course: course
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
})

export default connect(mapStateToProps)(TableCoursePending);