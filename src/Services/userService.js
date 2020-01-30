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
            data: {
                maKhoaHoc: maKhoaHoc,
                taiKhoan: taiKhoan,
                header: settings.token,
            }
            
        })
    }

    adminCancelCourses (maKhoaHoc, taiKhoan) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/HuyGhiDanh",
            data: {
                maKhoaHoc: maKhoaHoc,
                taiKhoan: taiKhoan,
                header: settings.token,
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

    adminUpdateCourse(data) {
        return restConnector({
            method: "PUT",
            url: "/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
            header: { 
                'Authorization': "Bearer " + settings.token },
            data: data
            
        })
    }

    adminUploadImage(file, tenKhoaHoc) {
        let formData = new FormData();

        formData.append('file', file)
        formData.append('tenKhoaHoc', tenKhoaHoc)
        return restConnector({
            method: "POST",
            url: "/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
            data: formData,
            
        })
    }

    fetchListUserPending(maKhoaHoc) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
            header: { 
                'Authorization': "Bearer " + settings.token },
            data: {
                maKhoaHoc: maKhoaHoc,
                
            }
            
        })
    }

    adminAddUser(data) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/ThemNguoiDung",
            header: { 
                'Authorization': "Bearer " + settings.token },
            data: data,
            
        })
    }

    fetchUserType() {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
            
        })
    }

}

export default UserService;