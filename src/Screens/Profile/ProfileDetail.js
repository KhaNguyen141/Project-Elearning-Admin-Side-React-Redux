import React, { Component, useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { adminProfileUpdate } from '../../Redux/Action/User/AdminActions';

import {validationSchema} from '../../Layouts/Validation/ValidationForm';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const ProfileDetail = () => {

    const dispatch = useDispatch();
  
    const userInfo = JSON.parse(localStorage.getItem('userLogin'));
    return (
        <Formik 
        initialValues = {{
            taiKhoan: userInfo.taiKhoan,
            matKhau: "",
            hoTen: userInfo.hoTen,
            soDT: userInfo.soDT,
            maLoaiNguoiDung: "GV",
            maNhom: "GP09",
            email: userInfo.email
        }}

        validationSchema={validationSchema}
        onSubmit={values  => {
            
            dispatch(adminProfileUpdate(values))
        }}
        >
        {({values, errors, touched, handleChange}) => (
        <div className="container">
            <div className="row">
                <div className="col-3">
                    <div className="card" style={{ width: '18rem' }}>
                        <img src="https://blog.techiehunter.org/wp-content/uploads/2018/09/product_16032_product_shot_wide_image.jpg" className="card-img-top" alt="profile picture" />
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <div>
                                <a href="#">Profile</a>
                            </div>
                            <div>
                                <a href="#">Course Registered</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-9">
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
                                            // disabled={true}
                                            />
                                            <ErrorMessage touched={touched.taiKhoan} message={errors.taiKhoan}/>
                                            {/* {errors.taiKhoan && touched.taiKhoan ? <div>{errors.taiKhoan}</div> : ''} */}
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
                                            {/* {errors.matKhau && touched.matKhau ? <div>{errors.matKhau}</div> : ''} */}
                                        </div>
                                        <div className="form-group">
                                            <label>Họ tên: </label>
                                            <Field 
                                            name="hoTen" type="text" 
                                            value={values.hoTen} 
                                            onChange={handleChange}
                                            className="form-control" placeholder="Họ tên" />
                                            <ErrorMessage touched={touched.hoTen} message={errors.hoTen}/>
                                            {/* {errors.hoTen && touched.hoTen ? <div>{errors.hoTen}</div> : ''} */}
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
                                            {/* {errors.soDT && touched.soDT ? <div>{errors.soDT}</div> : ''} */}
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
                                            {/* {errors.email && touched.email ? <div>{errors.email}</div> : ''} */}
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

export default ProfileDetail;
