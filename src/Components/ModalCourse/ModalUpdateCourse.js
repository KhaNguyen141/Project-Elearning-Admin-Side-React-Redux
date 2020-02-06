import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { fetchListCategory } from '../../Redux/Action/Course/CourseActions';
import { adminUpdateCourse } from '../../Redux/Action/User/AdminActions';

import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalUpdateCourseComponent extends Component {

    render() {
        return (
            <Formik
                initialValues={{
                    maKhoaHoc: "",
                    biDanh: "",
                    tenKhoaHoc: "",
                    moTa: "",
                    luotXem: 0,
                    danhGia: 0,
                    hinhAnh: "",
                    maNhom: "",
                    ngayTao: "",
                    maDanhMucKhoaHoc: "",
                    taiKhoanNguoiTao: "",
                }}

                onSubmit={(values) => {

                    this.props.dispatch(adminUpdateCourse(values, values.hinhAnh, values.tenKhoaHoc))
                    console.log(values);

                }}
            >
                {({ handleChange, setFieldValue }) => (
                    <Modal isOpen={this.props.isUpdateCourseModalOpen} toggle={this.props.isUpdateCourseModalClose}>
                        <ModalHeader toggle={this.props.isUpdateCourseModalClose}>
                            Update Course
                        </ModalHeader>

                        <Form className="container formSearch">
                           <ModalBody>
                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Course ID</h4>
                                        <Field
                                            name="maKhoaHoc"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left">Rating</h4>
                                        <Field
                                            name="danhGia"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Course name</h4>
                                        <input
                                            name="tenKhoaHoc"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left">Views</h4>
                                        <Field
                                            name="luotXem"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <h4 className="text-left">Course type</h4>
                                        <Field
                                            as="select"
                                            name="maDanhMucKhoaHoc"
                                            className="form-control">
                                            <option>Please choose course type</option>

                                            {this.props.listCategory.map((list, index) => {
                                                return (
                                                    <option
                                                        value={list.maDanhMuc}
                                                        key={index}
                                                    >{list.tenDanhMuc}</option>
                                                )
                                            })}
                                        </Field>
                                    </div>

                                    <div className="form-group col-6">
                                        <h4 className="text-left">Creator</h4>
                                        <Field
                                            name="taiKhoanNguoiTao"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Creation date</h4>
                                        <Field
                                            name="ngayTao"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left">Image Upload</h4>
                                        <input
                                            name="hinhAnh"
                                            type="file"
                                            onChange={(event) => {
                                                setFieldValue("hinhAnh", event.target.files[0].name)
                                            }}

                                            className="form-control" />
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Group ID</h4>

                                        <Field
                                            name="maNhom"
                                            type="text"
                                            onChange={handleChange}
                                            className="form-control" />
                                    </div>

                                </div>

                                <div>

                                    <div>
                                        <h4 className="text-left">Description</h4>
                                        <textarea
                                            name="moTa"
                                            type="text"
                                            onChange={handleChange}
                                            className="inputDescription form-control" />
                                    </div>
                                </div>

                            </ModalBody>

                            <ModalFooter>
                                <button type="submit" className="btn btn-udi-yellow">Update</button>
                            </ModalFooter>
                        </Form>
                    </Modal>
                )}

            </Formik>
        )
    }

    componentDidMount() {
        this.props.dispatch(fetchListCategory())
    }
}

const mapStateToProps = (state) => ({
    listCategory: state.courseReducer.courseListCategory,
    checkAdmin: state.adminReducer.credentials,
})

export default connect(mapStateToProps)(ModalUpdateCourseComponent);
