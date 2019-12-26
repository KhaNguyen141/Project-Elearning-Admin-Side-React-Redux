import { restConnector } from ".";
import { settings } from "../Config/settings";

class UserService {
    adminLoginAction(adminLogin) {
        return restConnector({
            method: "POST",
            url: "/api/quanlynguoidung/dangnhap",
            data: adminLogin,
        });
    }


    adminProfileUpdate(adminProfileUpdate) {
        return restConnector({
            method: "PUT",
            url: "/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
            header: { 
              'Authorization': "Bearer " + settings.token },
            data: adminProfileUpdate,
        });
    }

    fetchListUser() {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP02",
        })
    }

    adminApproveCourses (maKhoaHoc, taiKhoan) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",
            header: { 
                'Authorization': "Bearer " + settings.token },
            data: {
                maKhoaHoc: maKhoaHoc,
                taiKhoan: taiKhoan
            }
            
        })
    }

    adminAddNewCourse(data) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/ThemKhoaHoc",
            header: { 
                'Authorization': "Bearer " + settings.token },
            data: data
            
        })
    }

}

export default UserService;