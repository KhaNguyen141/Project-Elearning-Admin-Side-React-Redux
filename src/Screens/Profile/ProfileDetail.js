import React from 'react';
import { useDispatch } from 'react-redux';
import {adminProfileUpdate } from '../../Redux/Action/User/AdminActions';

import {validationSchema} from '../../Layouts/Validation/ValidationForm';
import { Formik, Field, Form } from 'formik';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

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

        validationSchema={validationSchema}
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
                                            className="form-control" 
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
                                            className="form-control" 
                                            placeholder="Mật khẩu" />
                                            <ErrorMessage touched={touched.matKhau} message={errors.matKhau}/>
                                           
                                        </div>
                                        <div className="form-group">
                                            <label>Họ tên: </label>
                                            <Field 
                                            name="hoTen" type="text" 
                                            value={values.hoTen} 
                                            onChange={handleChange}
                                            className="form-control" placeholder="Họ tên" />
                                            <ErrorMessage touched={touched.hoTen} message={errors.hoTen}/>
                                          
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Số điện thoại: </label>
                                            <Field 
                                            name="soDT" 
                                            type="text" 
                                            value={values.soDT}
                                            onChange={handleChange}
                                            className="form-control" 
                                            placeholder="Số điện thoại" />
                                            <ErrorMessage touched={touched.soDT} message={errors.soDT}/>
                                            
                                        </div>
                                    
                                        <div className="form-group">
                                            <label>Email: </label>
                                            <Field name="email" 
                                            type="email" 
                                            value={values.email} 
                                            onChange={handleChange}
                                            className="form-control" 
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
