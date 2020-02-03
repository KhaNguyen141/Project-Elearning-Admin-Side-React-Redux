import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Formik, Field, Form } from 'formik';
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
                onSubmit={values => {
                    this.props.dispatch(adminAddUser(values))
                }}
                >
                {({ handleChange }) => (
                    <div className="userEditCotaniner">
                        <Form className="container formSearch">
                            <h2>User Addition</h2>
                            <div className="row">

                                <div className="col-6">
                                    <h4 className="text-left">User ID</h4>
                                    <Field
                                        name="taiKhoan"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Email</h4>
                                    <Field
                                        name="email"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                            </div>

                            <div className="row">

                                <div className="col-6">
                                    <h4 className="text-left">Password</h4>
                                    <Field
                                        name="matKhau"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Phone contact</h4>
                                    <Field
                                        name="soDT"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <h4 className="text-left">Name</h4>
                                    <Field
                                        name="hoTen"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                                <div className="form-group col-6">
                                    <h4 className="text-left">User type</h4>
                                    <Field
                                        as="select"
                                        name="maLoaiNguoiDung"
                                        className="form-control">
                                        <option>Please choose user type</option>
                                        {this.props.userType.map((type, index) => {
                                            return <option
                                                value={type.maLoaiNguoiDung}
                                                key={index}
                                            >{type.tenLoaiNguoiDung}</option>


                                        })}
                                    </Field>
                                </div>

                            </div>

                            <div className="row">
                                <div className="form-group col-6">
                                    <h4 className="text-left">Group ID</h4>

                                    <Field
                                        name="maNhom"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
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

