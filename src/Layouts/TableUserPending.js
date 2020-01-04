import React, { Component } from 'react'
import { connect } from 'react-redux';
import ModalCoursePending from "../Components/ModalCoursePending";
import ModalCourseAcceptedComponent from "../Components/ModalCourseAccepted"
import { fetchListUser } from '../Redux/Action/User/AdminActions';
import { fetchCoursePending, fetchCourseAccepted, fetchCourseList } from '../Redux/Action/Course/CourseActions';
import PaginationComponent from '../Layouts/Pagination'

class TableUserPending extends Component {

    state = {
        user: [],
        currentPage: 1,
        pagePerList: 7,
        text: "",
        searchResult: [],
    }

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        })
    }

    render() {
        const indexOfLastList = this.state.currentPage * this.state.pagePerList;
        const indexOfFirstList = indexOfLastList - this.state.pagePerList;
        const currentList = this.props.userList.slice(indexOfFirstList, indexOfLastList).filter(nameSearch => {
            return nameSearch.hoTen.toLowerCase().trim().indexOf(this.state.text) !== -1;
        });

        const paginate = (pageNumber) => {
            this.setState({
                currentPage: pageNumber
            })
        }

        return (
            <div>
                <div className="inputTableSearch d-flex">
                    <input 
                    className="form-control" 
                    name="searchUser" 
                    onChange={this.handleChange}/>
                    <div className="d-flex">
                        <button className="btn btn-success">Search</button>
                    </div>
                </div>
                <div className="tableContainer container">
                    <div className="tableUserList">
                        <table className="table table-striped table-condensed">
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
                                currentList.map((user, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1 }</td>
                                                <td>{user.taiKhoan}</td>
                                                <td>{user.hoTen}</td>
                                                <td>{user.email}</td>
                                                <td>{user.soDt}</td>
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
                                    
                                )) : (
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
                                    <PaginationComponent pagePerList={this.state.pagePerList} totalItems={this.props.userList.length} paginate={paginate}/>
                            </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        )
    }
    componentDidMount () {
        this.props.dispatch(fetchListUser())
    
    }

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
    courseListPending: state.courseReducer.courseListPending,
    courseListAccepted: state.courseReducer.courseListAccepted,
   
})

export default connect(mapStateToProps)(TableUserPending);
