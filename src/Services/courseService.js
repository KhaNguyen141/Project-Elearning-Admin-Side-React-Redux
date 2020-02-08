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

    fetchListCategory () {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
            
            
        })
    }

    fetchCourseList () {
        return restConnector({
            method: "GET",
            url: "/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP09",
            
        })
    }

    fetchCourseListPagination (pageNumber) {
        return restConnector({
            method: "GET",
            url: `/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${pageNumber}&pageSize=10&MaNhom=GP09`,
            
        })
    }
    
}

export default CourseService;