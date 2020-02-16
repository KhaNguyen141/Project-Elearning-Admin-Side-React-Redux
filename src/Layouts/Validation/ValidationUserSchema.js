import * as Yup from 'yup';

export const validationUserSchema = Yup.object().shape({

    // User
    taiKhoan: Yup.string()
    .min(6, "ID must have at least 6 characters")
    .max(16, "Your ID only contains 16 characters")
    .required("ID is required"),

    matKhau: Yup.string()
    .min(6, "Your password must contain at least 6 characters")
    .max(16, "Your password only contains 16 characters")
    .required("Password is required"),

    hoTen: Yup.string()
    .min(6, "Your name must contain at least 6 characters")
    .max(50, "Your name only contains 50 characters")
    .required("Your name is required"),

    maLoaiNguoiDung: Yup.string()
    .required("User class is required"),

    maNhom: Yup.string()
    .min(4, "Group ID must contain at least 6 characters")
    .max(30, "Group ID only contains 30 characters")
    .required("Group ID is required"),
    
    email: Yup.string()
    .email("Email address is invalid")
    .max(255, "Email only contains 255 characters")
    .required("Email is required"),

    soDT: Yup.string().matches(/^\+?(?:[0-9]??).{5,14}[0-9]$/, 'Số điện thoại phải đúng định dạng')
    .min(10, 'Phone number is invalid')
    .required("Phone number is required"),

})