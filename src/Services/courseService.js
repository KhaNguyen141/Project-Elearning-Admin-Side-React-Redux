import { restConnector } from ".";
import { settings } from "../Config/settings";

class CourseService {
    fetchCoursePending(taiKhoan) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
            data: {
                taiKhoan: taiKhoan,
                header: settings.token,
            },
        });
        
    }

    fetchCourseAccepted(taiKhoan) {
        return restConnector({
            method: "POST",
            url: "/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
            data: {
                taiKhoan: taiKhoan,
                header: settings.token,
            },
        });
    }

    fetchListCategory (listCategory) {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
            data: listCategory
            
        })
    }

    fetchCourseList (courseList) {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP09",
            data: courseList
            
        })
    }
    
}

export default CourseService;