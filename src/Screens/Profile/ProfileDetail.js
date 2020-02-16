import React from 'react';
import { useDispatch } from 'react-redux';
import {adminProfileUpdate } from '../../Redux/Action/User/AdminActions';

import {validationUserSchema} from '../../Layouts/Validation/ValidationUserSchema';
import { Formik, Field, Form } from 'formik';
import ErrorMessage from '../../Layouts/ErrorMessage/ErrorMessage';

const ProfileDetail = () => {

    const dispatch = useDispatch();
  
    const adminInfo = JSON.parse(localStorage.getItem('adminLogin'));

    return (
        <Formik
        initialValues = {{
            taiKhoan: adminInfo.taiKhoan,
            matKhau: "",
            hoTen: adminInfo.hoTen,
            soDT: adminInfo.soDT,
            maLoaiNguoiDung: "GV",
            maNhom: "GP09",
            email: adminInfo.email
        }}

        validationSchema={validationUserSchema}
        onSubmit={values  => {
            
            dispatch(adminProfileUpdate(values))
        }}
        >
        {({values, errors, touched, handleChange}) => (
        <div className="profileContainer">
            <div className="row">
                <div className="col-12">
                    <div className="card text-center">
                    
                    <Form className="formSearch">
                        <div>
                            <div className="card-header">
                                <h2>Public profile</h2>
                                <p>Add information about yourself</p>
                            </div>
                            
                            <div className="card-body text-left">
                                
                                    <div>
                                        <div className="form-group">
                                            <label>Tài khoản: </label>
                                            <Field 
                                            name="taiKhoan" 
                                            type="text" 
                                            value={values.taiKhoan} 
                                            onChange={handleChange}
                                            className="form-control valid"
                                            placeholder="Tài khoản"
                                            disabled={true}
                                            />
                                            <ErrorMessage touched={touched.taiKhoan} message={errors.taiKhoan}/>
                                            
                                        </div>
                                        <div className="form-group">
                                            <label>Mật khẩu: </label>
                                            <Field 
                                            name="matKhau" 
                                            type="password" 
                                            value={values.matKhau} 
                                            onChange={handleChange}
                                            className={
                                                !touched.matKhau ? "form-control" : touched.matKhau && !errors.matKhau ? "form-control valid" : "form-control error"
                                            } 
                                            placeholder="Mật khẩu" />
                                            <ErrorMessage touched={touched.matKhau} message={errors.matKhau}/>
                                           
                                        </div>
                                        <div className="form-group">
                                            <label>Họ tên: </label>
                                            <Field 
                                            name="hoTen" type="text" 
                                            value={values.hoTen} 
                                            onChange={handleChange}
                                            className={
                                                !touched.hoTen ? "form-control" : touched.hoTen && !errors.hoTen ? "form-control valid" : "form-control error"
                                            }  
                                            placeholder="Họ tên" />
                                            <ErrorMessage touched={touched.hoTen} message={errors.hoTen}/>
                                          
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Số điện thoại: </label>
                                            <Field 
                                            name="soDT" 
                                            type="text" 
                                            value={values.soDT}
                                            onChange={handleChange}
                                            className={
                                                !touched.soDT ? "form-control" : touched.soDT && !errors.soDT ? "form-control valid" : "form-control error"
                                            }  
                                            placeholder="Số điện thoại" />
                                            <ErrorMessage touched={touched.soDT} message={errors.soDT}/>
                                            
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Email: </label>
                                            <Field name="email" 
                                            type="email" 
                                            value={values.email} 
                                            onChange={handleChange}
                                            className={
                                                !touched.email ? "form-control" : touched.email && !errors.email ? "form-control valid" : "form-control error"
                                            }  
                                            placeholder="Email" />
                                            <ErrorMessage touched={touched.email} message={errors.email}/>
                                            
                                        </div>
                                    </div>
                            </div>
                                        <div className="card-footer text-muted">
                                            <button type="submit" className="btn btn-udi-yellow">Update profile</button>    
                                        </div>
                        </div>
                    </Form>
                    </div>
            </div>
        </div>
    </div> 
    )}
    </Formik>
    );


};

export default (ProfileDetail);
