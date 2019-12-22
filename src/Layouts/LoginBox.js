import React from 'react'
import {adminLoginAction} from '../Redux/Action/User/AdminActions';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

const LoginBox = () => {

    const dispatch = useDispatch();

        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",

                }}
                onSubmit={values => {
                    dispatch(adminLoginAction(values))
                    console.log(values);

                }}
            >
            <div className="adminLoginBox container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center">Admin Login</h3>
                            <div>
                                <p className="welcomeLogin text-center">Welcome! Please sign In.</p>
                            </div>
                        </div>
                       
                        <div className="card-body">
                            <Form className="formSearch">
                                    <div className="inputContainer">
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user" /></span>
                                            </div>
                                            <Field
                                                name="taiKhoan"
                                                type="text"
                                                className="form-control"
                                                placeholder="username" />
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key" /></span>
                                            </div>
                                            <Field
                                                name="matKhau"
                                                type="password"
                                                className="form-control"
                                                placeholder="password" />
                                        </div>
                                    </div>

                         
                                    <div className="form-group">
                                        <button type="submit" className="btn float-right login_btn" >Login</button>
                                    </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
            </Formik>
        )
    }


export default (LoginBox);
