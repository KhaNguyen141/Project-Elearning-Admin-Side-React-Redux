import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCoursePending from "../../Components/ModalCourse/ModalCoursePending";
import ModalCourseAcceptedComponent from "../../Components/ModalCourse/ModalCourseAccepted"
import { fetchListUser, fetchListUserPagination } from '../../Redux/Action/User/AdminActions';
import { fetchCoursePending, fetchCourseAccepted } from '../../Redux/Action/Course/CourseActions';

import PaginationComponent from '../Pagination/Pagination';

class TableUserPending extends Component {

    constructor() {
        super();
        this.state = {
            user: [],
            text: "",
            searchResult: [],
        }
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {

        const currentList = this.props.userList.filter(nameSearch => {
            return nameSearch.hoTen.toLowerCase().trim().indexOf(this.state.text) !== -1;
        });

        return (
            <div>

                <div className="inputTableSearch">
                    <input 
                    className="form-control" 
                    name="searchUser" 
                    onChange={this.handleChange}
                    placeholder="Search"/>
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
                                {currentList.length > 0 ? (
                                (currentList).map((user, index) => {
                                   
                                            return (
                                                <tr key={index}>
                                                    <td>{index + 1 }</td>
                                                    <td>{user.taiKhoan}</td>
                                                    <td>{user.hoTen}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.soDT}</td>
                                                    <td>
                                                        <button
                                                            onClick={() => this.handleFetchCoursePending(user)}
                                                            className="btn btn-udi-yellow mr-2"
                                                            data-toggle="modal"
                                                            data-target="#modalCoursePending">Pending
                                                        </button>
                                                            
                                                        <button
                                                            onClick={() => this.handleFetchCourseAccepted(user)}
                                                            className="btn btn-udi-yellow mr-2"
                                                            data-toggle="modal"
                                                            data-target="#modalCourseAccepted">Accepted
                                                        </button>
                                                            
                                                    </td>
                                                    
                                                </tr>
                                            
                                        
                                        
                                    )
                                            
                                        
                                        
                                    }
                                )
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
                            }
                                    <ModalCoursePending user={this.state.user}/>
                                    <ModalCourseAcceptedComponent user={this.state.user}/>
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
        this.props.dispatch(fetchListUser())
    }

    handlePageChange = pageNumber => {
        console.log(`active page is ${pageNumber}`);
        this.props.dispatch(fetchListUserPagination(pageNumber))
    };

    handleFetchCoursePending = (user) => {
        this.setState({
            user: user
        }, () => {
            this.props.dispatch(fetchCoursePending(user.taiKhoan))
        })   
    }

    handleFetchCourseAccepted = (user) => {
        this.setState({
            user: user
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
   
})

export default connect(mapStateToProps)(TableUserPending);
