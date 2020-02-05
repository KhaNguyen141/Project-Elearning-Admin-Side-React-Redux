import { ADMIN_LOGIN, ADMIN_UPDATE_USER, LIST_USERS, ADMIN_APPROVE_COURSE, ADMIN_ADD_NEW_COURSE, LIST_USER_PENDING, ADMIN_CANCEL_COURSE, ADMIN_UPDATE_COURSE, ADMIN_UPLOAD_IMAGE, ADMIN_ADD_USER, FETCH_USER_TYPE, LIST_USERS_PAGINATION, SEARCH_USER, FETCH_USER_SEARCH } from "../type";
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
          'Đăng nhập thành công!',
          '',
          'success'
        ).then(() => {
          window.location.reload();
      })

      })
      .catch(error => {
          console.log(error.response.data);
          Swal.fire({
            icon: 'error',
            title: 'Đăng nhập thất bại',
            text: 'Vui lòng thử lại'
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
        console.log(res.data);
        Swal.fire(
          'Cập nhật thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Cập nhật thất bại',
          text: 'Vui lòng thử lại!'
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
        console.log(res.data);
        
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
        console.log(res.data);
        
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
        console.log(res.data);
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
        console.log(res.data);
        Swal.fire(
          'Duyệt thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Duyệt thất bại',
          text: 'Vui lòng kiểm tra lại!',
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
        console.log(res.data);
        Swal.fire(
          'Huỷ ghi danh thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Huỷ thất bại',
          text: 'Vui lòng kiểm tra lại!',
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
          'Thêm khoá học mới thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Thêm khoá học thất bại',
          text: 'Vui lòng kiểm tra lại!',
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
          'Cập nhật khoá học thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Cập nhật khoá học thất bại',
          text: 'Vui lòng kiểm tra lại!',
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
          text: 'Vui lòng kiểm tra lại!',
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
          'Thêm user thành công!',
          '',
          'success'
        )
      }).catch(error => {
        console.log(error.response.data)
        Swal.fire({
          icon: 'error',
          title: 'Thêm user thất bại',
          text: 'Vui lòng kiểm tra lại!',
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




