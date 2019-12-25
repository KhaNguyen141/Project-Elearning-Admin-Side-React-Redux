import {LIST_COURSE_PENDING } from "../type";
import reduxAction from "../action";

import { settings } from "../../../Config/settings";

import Swal from 'sweetalert2';
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


