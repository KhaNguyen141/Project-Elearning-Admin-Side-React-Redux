import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
    taiKhoan: Yup.string()
    .min(6, "Tài khoản phải có ít nhất 6 kí tự")
    .max(255, "Tài khoản chỉ được phép tối đa 255 kí tự")
    .required("Tài khoản không được để trống"),

    matKhau: Yup.string()
    .min(6, "Mật khẩu phải có ít nhất 6 kí tự")
    .max(255, "Mật khẩu chỉ được phép tối đa 255 kí tự")
    .required("Mật khẩu không được để trống"),

    hoTen: Yup.string()
    .min(6, "Họ tên phải có ít nhất 6 kí tự")
    .max(255, "Họ tên chỉ được phép tối đa 255 kí tự")
    .required("Họ tên không được để trống"),

    maNhom: Yup.string()
    .min(4, "Mã nhóm phải có ít nhất 4 kí tự")
    .max(255, "Mã nhóm chỉ được phép tối đa 255 kí tự")
    .required("Mã nhóm không được để trống"),
    
    email: Yup.string()
    .email("Email phải đúng định dạng")
    .max(255, "Email chỉ được phép tối đa 255 kí tự")
    .required("Email không được để trống"),

    soDT: Yup.string().matches(/^\+?(?:[0-9]??).{5,14}[0-9]$/, 'Số điện thoại phải đúng định dạng')
    .min(10, 'Số điện thoại phải đúng định dạng')
    .required("Số điện thoại không được để trống"),

})