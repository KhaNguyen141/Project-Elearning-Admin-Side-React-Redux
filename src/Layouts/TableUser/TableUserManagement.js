import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCoursePending from "../../Components/ModalCourse/ModalCoursePending";
import ModalCourseAcceptedComponent from "../../Components/ModalCourse/ModalCourseAccepted"
import { fetchListUser, fetchListUserPagination, searchUser, fetchListSearchUser } from '../../Redux/Action/User/AdminActions';
import { fetchCoursePending, fetchCourseAccepted } from '../../Redux/Action/Course/CourseActions';

import PaginationComponent from '../Pagination/Pagination';

class TableUserPending extends Component {

    constructor() {
        super();
        this.state = {
            user: [],
            isCoursePendingModalOpen: false,
            isCourseAccpetedModalOpen: false,
        }
    }

    coursePendingModalClose = () => {
        this.setState({ 
            isCoursePendingModalOpen: false
        })
    }

    courseAcceptedModalClose = () => {
        this.setState({
            isCourseAccpetedModalOpen: false
        })
        
    }

    render() {

        const currentList = this.props.userList.filter(nameSearch => {
            return nameSearch.hoTen.toLowerCase().indexOf(this.props.text.toLowerCase().trim()) !== -1;
        });

        const searchUserList = this.props.userSearch;
        return (
            <div>

                <div className="inputTableSearch">
                    <input
                        className="form-control"
                        name="searchUser"
                        onChange={this.handleChange}
                        placeholder="Search" />
                </div>
                <div className="tableContainer">
                    <div className="tableUserList">
                        <table className="table table-striped table-condensed tableUserList__tableCourseContent">
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
                                {searchUserList ? (
                                    currentList.length > 0 ? (
                                        (currentList).map((user, index) => {

                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1}</td>
                                                    <td>{user.taiKhoan}</td>
                                                    <td>{user.hoTen}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.soDT}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => this.handleFetchCoursePending(user)}
                                                            className="btn btn-udi-yellow mr-2"

                                                            >Pending
                                                        </button>

                                                        <button
                                                            onClick={() => this.handleFetchCourseAccepted(user)}
                                                            className="btn btn-udi-yellow mr-2"
                                                            >Accepted
                                                        </button>
                                                    </td>
                                                </tr>
                                            )

                                        })
                                            ) : (
                                            searchUserList.length > 0 ? (
                                                (searchUserList).map((user, index) => {
                                                    return (
                                                        <tr key={index}>
                                                            <td>{index + 1}</td>
                                                            <td>{user.taiKhoan}</td>
                                                            <td>{user.hoTen}</td>
                                                            <td>{user.email}</td>
                                                            <td>{user.soDT}</td>
                                                            <td>
                                                                <button
                                                                    onClick={() => this.handleFetchCoursePending(user)}
                                                                    className="btn btn-udi-yellow mr-2"
                                                                    >Pending
                                                                </button>

                                                                <button
                                                                    onClick={() => this.handleFetchCourseAccepted(user)}
                                                                    className="btn btn-udi-yellow mr-2"
                                                                    >Accepted
                                                                </button>

                                                            </td>

                                                        </tr>
                                                    )
                                                })
                                            ) : (
                                                    <tr>
                                                        <td></td>
                                                        <td></td>
                                                        <td>User not found</td>
                                                        <td></td>
                                                        <td></td>
                                                        <td></td>
                                                    </tr>

                                                )
                                        )
                                    ) : (
                                            (currentList).map((user, index) => {

                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.taiKhoan}</td>
                                                        <td>{user.hoTen}</td>
                                                        <td>{user.email}</td>
                                                        <td>{user.soDT}</td>
                                                        <td>
                                                            <button
                                                                onClick={() => this.handleFetchCoursePending(user)}
                                                                className="btn btn-udi-yellow mr-2"
                                                                >Pending
                                                            </button>

                                                            <button
                                                                onClick={() => this.handleFetchCourseAccepted(user)}
                                                                className="btn btn-udi-yellow mr-2"
                                                                >Accepted
                                                            </button>

                                                        </td>

                                                    </tr>



                                                )
                                            })
                                    )}

                                <ModalCoursePending 
                                user={this.state.user} 
                                isCoursePendingModalOpen={this.state.isCoursePendingModalOpen} 
                                isCloseCoursePending={() => this.coursePendingModalClose()}
                                />
                                <ModalCourseAcceptedComponent 
                                user={this.state.user}
                                isCourseAccpetedModalOpen={this.state.isCourseAccpetedModalOpen}
                                isCloseCourseAccepted={() => this.courseAcceptedModalClose()}
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
        this.props.dispatch(fetchListUser())
       
    }

    componentDidUpdate(prevProps) {
        if (this.props.text !== prevProps.text) {
            this.props.dispatch(fetchListSearchUser(this.props.text))
        }
        
    }

    handleChange = (event) => {
        this.props.dispatch(searchUser(event.target.value))
        
    }

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        this.props.dispatch(fetchListUserPagination(pageNumber))
    };

    handleFetchCoursePending = (user) => {
        this.setState({
            user: user,
            isCoursePendingModalOpen: true,
        }, () => {
            this.props.dispatch(fetchCoursePending(user.taiKhoan))
        })
    }

    handleFetchCourseAccepted = (user) => {
        this.setState({
            user: user,
            isCourseAccpetedModalOpen: true,
        }, () => {
            this.props.dispatch(fetchCourseAccepted(user.taiKhoan))
        })

    }
}

const mapStateToProps = (state) => ({
    courseList: state.courseReducer.courseList,
    userList: state.userReducer.userList,
    page: state.userReducer.currentPage,
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
    text: state.userReducer.userText,
    userSearch: state.userReducer.userSearch,
})

export default connect(mapStateToProps)(TableUserPending);
