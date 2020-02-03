import {LIST_COURSE_PENDING, LIST_COURSE_ACCEPTED, LIST_CATEGORY, LIST_COURSES, LIST_COURSE_PAGINATION } from "../type";
import reduxAction from "../action";

import CourseService from "../../../Services/courseService";

const courseService = new CourseService();

// Async Action User

export const fetchCoursePending = (taiKhoan) => {
  return dispatch => {
    courseService
      .fetchCoursePending(taiKhoan)
      .then(res => {
        
        dispatch(reduxAction(LIST_COURSE_PENDING, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })


  }
}

export const fetchCourseAccepted = (taiKhoan) => {
  return dispatch => {
    courseService
      .fetchCourseAccepted(taiKhoan)
      .then(res => {
        
        dispatch(reduxAction(LIST_COURSE_ACCEPTED, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })


  }
}

export const fetchListCategory = (listCategory) => {
  return dispatch => {
    courseService
      .fetchListCategory(listCategory)
      .then(res => {
        dispatch(reduxAction(LIST_CATEGORY, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })


  }
}

export const fetchCourseList = () => {
  return dispatch => {
      courseService
      .fetchCourseList()
      .then(res => {
        dispatch(reduxAction(LIST_COURSES, res.data.items));
        dispatch(reduxAction(LIST_COURSE_PAGINATION, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}

export const fetchCourseListPagination = (pageNumber) => {
  return dispatch => {
      courseService
      .fetchCourseListPagination(pageNumber)
      .then(res => {
        dispatch(reduxAction(LIST_COURSES, res.data.items));
        dispatch(reduxAction(LIST_COURSE_PAGINATION, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}

