import { ADMIN_LOGIN, ADMIN_UPDATE_USER } from "../type";
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

export const userProfileUpdate = (adminProfileUpdate) => {
  return dispatch => {
      userService
      .userProfileUpdate(adminProfileUpdate)
      .then(res => {
        localStorage.setItem(settings.userLogin, JSON.stringify(res.data));
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


