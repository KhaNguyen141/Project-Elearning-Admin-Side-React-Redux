import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import ErrorMessage from '../../Layouts/ErrorMessage/ErrorMessage';
import {validationUserSchema} from '../../Layouts/Validation/ValidationUserSchema';

import { fetchUserType, adminAddUser } from '../../Redux/Action/User/AdminActions';

class AddUserComponent extends Component {
    render() {
        return (
            <Formik
                initialValues={{
                    taiKhoan: "",
                    matKhau: "",
                    hoTen: "",
                    soDT: "",
                    maLoaiNguoiDung: "",
                    maNhom: "",
                    email: "",
                }}

                validationSchema={validationUserSchema}
                onSubmit={(values, { resetForm }) => {
                    this.props.dispatch(adminAddUser(values));
                    resetForm();
                }}
                >
                {({ handleChange, errors, touched }) => (
                    <div className="userEditCotaniner">
                        <Form className="container formSearch">
                            <h2>Add User</h2>
                            <div className="row">

                                <div className="col-6">
                                    <h4 className="text-left">User ID</h4>
                                    <Field
                                        name="taiKhoan"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.taiKhoan ? "form-control" : touched.taiKhoan && !errors.taiKhoan ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.taiKhoan} message={errors.taiKhoan}/>
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Email</h4>
                                    <Field
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.email ? "form-control" : touched.email && !errors.email ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.email} message={errors.email}/>
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-6">
                                    <h4 className="text-left">Password</h4>
                                    <Field
                                        name="matKhau"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.matKhau ? "form-control" : touched.matKhau && !errors.matKhau ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.matKhau} message={errors.matKhau}/>
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Phone contact</h4>
                                    <Field
                                        name="soDT"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.soDT ? "form-control" : touched.soDT && !errors.soDT ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.soDT} message={errors.soDT}/>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <h4 className="text-left">Name</h4>
                                    <Field
                                        name="hoTen"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.hoTen ? "form-control" : touched.hoTen && !errors.hoTen ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.hoTen} message={errors.hoTen}/>
                                </div>

                                <div className="form-group col-6">
                                    <h4 className="text-left">User type</h4>
                                    <Field
                                        component="select"
                                        name="maLoaiNguoiDung"
                                        className={
                                            !touched.maLoaiNguoiDung ? "form-control" : touched.maLoaiNguoiDung && !errors.maLoaiNguoiDung ? "form-control valid" : "form-control error"
                                        } >
                                        <option>Please choose user type</option>
                                        {this.props.userType.map((type, index) => {
                                            return <option
                                                    value={type.maLoaiNguoiDung}
                                                    key={index}
                                                >{type.tenLoaiNguoiDung}
                                                </option>
                                        })}
                                    </Field>
                                    <ErrorMessage touched={touched.maLoaiNguoiDung} message={errors.maLoaiNguoiDung}/>
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group col-6">
                                    <h4 className="text-left">Group ID</h4>

                                    <Field
                                        name="maNhom"
                                        type="text"
                                        onChange={handleChange}
                                        className={
                                            !touched.maNhom ? "form-control" : touched.maNhom && !errors.maNhom ? "form-control valid" : "form-control error"
                                        }  />
                                        <ErrorMessage touched={touched.maNhom} message={errors.maNhom}/>
                                </div>

                            </div>

                            <button type="submit" className="buttonAddNewCourse btn btn-udi-yellow my-5">Add</button>
                        </Form>
                    </div>
                )}

            </Formik>
        )
    }
    componentDidMount() {
        this.props.dispatch(fetchUserType())
    }
}

const mapStateToProps = (state) => ({
    userType: state.adminReducer.userType,
    checkAdmin: state.adminReducer.credentials,
})

export default connect(mapStateToProps)(AddUserComponent);

