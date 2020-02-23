import { ADMIN_LOGIN, ADMIN_UPDATE_USER, LIST_USERS, ADMIN_APPROVE_COURSE, ADMIN_ADD_NEW_COURSE, LIST_USER_PENDING, ADMIN_CANCEL_COURSE, ADMIN_UPDATE_COURSE, ADMIN_UPLOAD_IMAGE, ADMIN_ADD_USER, FETCH_USER_TYPE, LIST_USERS_PAGINATION, SEARCH_USER, FETCH_USER_SEARCH, ADMIN_DELETE_COURSE } from "../type";
import reduxAction from "../action";

import { settings } from "../../../Config/settings";
import { restConnector } from "../../../Services";

import Swal from 'sweetalert2';
import UserService from "../../../Services/userService";

const userService = new UserService();

// Async Action User

export const adminLoginAction = (adminLogin) => {
  return dispatch => {
      userService
      .adminLoginAction(adminLogin)
      .then(res => {
        //1.luu local
        localStorage.setItem(settings.adminLogin, JSON.stringify(res.data));
        localStorage.setItem(settings.token, res.data.accessToken);

        //lưu data lên store để render lại giao diện header

        dispatch(reduxAction(ADMIN_LOGIN, res.data));

        //bỏ token lên header của tất cả request
        restConnector.defaults.headers['Authorization'] = "Bearer " + res.data.accessToken

        Swal.fire (
          'Login Successfully!',
          '',
          'success'
        ).then(() => {
          window.location.reload();
      })

      })
      .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Login Failed!',
            text: 'Please check your ID and Password and try again'
        })
      });
  };
};

export const adminProfileUpdate = (adminProfileUpdate) => {
  return dispatch => {
      userService
      .adminProfileUpdate(adminProfileUpdate)
      .then(res => {
        localStorage.setItem(settings.adminLogin, JSON.stringify(res.data));
        dispatch(reduxAction(ADMIN_UPDATE_USER, res.data));
        Swal.fire(
          'Update Account Successfully!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Account update failed!',
          text: 'Please check the value and try again'
        })
      })
  }
}

export const fetchListUser = () => {
  return dispatch => {
      userService
      .fetchListUser()
      .then(res => {
        dispatch(reduxAction(LIST_USERS, res.data.items));
        dispatch(reduxAction(LIST_USERS_PAGINATION, res.data));
        
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}

export const searchUser = (text) => {
  return dispatch => {
    dispatch(reduxAction(SEARCH_USER, text))
  }
}

export const fetchListSearchUser = (keyword) => {
  return dispatch => {
      userService
      .fetchListSearchUser(keyword)
      .then(res => {
        dispatch(reduxAction(FETCH_USER_SEARCH, res.data));
        
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}

export const fetchListUserPagination = (pageNumber) => {
  return dispatch => {
      userService
      .fetchListUserPagination(pageNumber)
      .then(res => {
        dispatch(reduxAction(LIST_USERS, res.data.items))
        dispatch(reduxAction(LIST_USERS_PAGINATION, res.data));
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}

export const adminApproveCourses = (maKhoaHoc, taiKhoan) => {
  return dispatch => {
      userService
      .adminApproveCourses(maKhoaHoc, taiKhoan)
      .then(res => {
        dispatch(reduxAction(ADMIN_APPROVE_COURSE, res.data));
        Swal.fire(
          'You Have Successfully Enrolled!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Action Failed!',
          text: 'Please check and try again!',
        })
      })
  }
}

export const adminCancelCourses = (maKhoaHoc, taiKhoan) => {
  return dispatch => {
      userService
      .adminCancelCourses(maKhoaHoc, taiKhoan)
      .then(res => {
        
        dispatch(reduxAction(ADMIN_CANCEL_COURSE, res.data));
        Swal.fire(
          'Course Successfully Canceled!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Action Failed!',
          text: 'Please check and try again!',
        })
      })
  }
}

export const adminAddNewCourse = (data, file, tenKhoaHoc) => {
  return dispatch => {
      userService
      .adminAddNewCourse(data)
      .then(res => {
        userService.adminUploadImage(file, tenKhoaHoc).then(response => {
          dispatch(reduxAction(ADMIN_UPLOAD_IMAGE, response.data))
        }).catch(error => {
          console.log(error)
        })

        dispatch(reduxAction(ADMIN_ADD_NEW_COURSE, res.data));
        console.log(res.data);
        Swal.fire(
          'Course Successfully Added!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Course Added Failed',
          text: 'Please check and try again!',
        })
      })
  }
}

export const adminUpdateCourse = (data, file, tenKhoaHoc) => {
  return dispatch => {
      userService
      .adminUpdateCourse(data)
      .then(res => {
        userService.adminUploadImage(file, tenKhoaHoc).then(response => {
          dispatch(reduxAction(ADMIN_UPLOAD_IMAGE, response.data))
        }).catch(error => {
          console.log(error)
        })

        dispatch(reduxAction(ADMIN_UPDATE_COURSE, res.data));
        console.log(res.data);
        Swal.fire(
          'Update Course Successfully!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Update Course Failed',
          text: 'Please check and try again!',
        })
      })
  }
}

export const adminDeleteCourse = (maKhoaHoc) => {
  return dispatch => {
      userService
      .adminDeleteCourse(maKhoaHoc)
      .then(res => {
        dispatch(reduxAction(ADMIN_DELETE_COURSE, res.data));
        Swal.fire(
          'Course Successfully Deleted!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Action Failed!',
          text: 'Please check and try again!',
        })
      })
  }
}

export const fetchListUserPending = (maKhoaHoc) => {
  return dispatch => {
      userService
      .fetchListUserPending(maKhoaHoc)
      .then(res => {
        
        dispatch(reduxAction(LIST_USER_PENDING, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: '',
          text: 'Please check and try again!',
        })
      })
  }
}

export const adminAddUser = (data) => {
  return dispatch => {
      userService
      .adminAddUser(data)
      .then(res => {
        
        dispatch(reduxAction(ADMIN_ADD_USER, res.data));
        console.log(res.data);
        Swal.fire(
          'New User Successfully Added!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'User Added Failed',
          text: 'Please check the value and try again!',
        })
      })
  }
}

export const fetchUserType = () => {
  return dispatch => {
      userService
      .fetchUserType()
      .then(res => {
        
        dispatch(reduxAction(FETCH_USER_TYPE, res.data));
        console.log(res.data);
      }).catch(error => {
        console.log(error.response.data)
      })
  }
}




