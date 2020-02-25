import * as Yup from 'yup';

export const validationCourseSchema = Yup.object().shape({
    //Course 
    maKhoaHoc: Yup.string()
    .min(2, "Course ID must have at least 2 characters")
    .max(50, "Course ID only contains 50 characters")
    .required("Course ID is required"),

    tenKhoaHoc: Yup.string()
    .min(6, "Course name must have at least 6 characters")
    .max(255, "Course name only contains 255 characters")
    .required("Course name is required"),

    maDanhMucKhoaHoc: Yup.string()
    .required("Course categories is required"),
    
    taiKhoanNguoiTao: Yup.string()
    .required("Admin is required"),

    ngayTao: Yup.string()
    .required("Date is required"),

    hinhAnh: Yup.string()
    .required("Image course is required"),
    
    maNhom: Yup.string()
    .required("Group ID is required"),

    moTa: Yup.string()
    .min(5, "Description must have at least 5 characters")
    .max(255, "Description only contains 255 characters")
    .required("Description is required"),

})