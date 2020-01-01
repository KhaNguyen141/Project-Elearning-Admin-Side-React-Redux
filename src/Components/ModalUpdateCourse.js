import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { fetchListCategory } from '../Redux/Action/Course/CourseActions';
import { adminUpdateCourse, adminUploadImage } from '../Redux/Action/User/AdminActions';

import Axios from 'axios';
import { settings } from '../Config/settings';

class ModalUpdateCourseComponent extends Component {

    render() {
        return (
            <Formik
            initialValues= {{
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
            render = {({ values, handleChange, setFieldValue }) => (
            <div className="modal fade" id="modalUpdateCourse" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Sửa khoá học</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <Form className="container formSearch">
                            <div className="modal-body">
                                    <div className="row">

                                        <div className="col-6">
                                            <h4 className="text-left">Mã khoá học</h4>
                                            <Field
                                                name="maKhoaHoc"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                        <div className="col-6">
                                            <h4 className="text-left">Đánh giá</h4>
                                            <Field
                                                name="danhGia"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col-6">
                                            <h4 className="text-left">Tên khoá học</h4>
                                            <input
                                                name="tenKhoaHoc"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                        <div className="col-6">
                                            <h4 className="text-left">Lượt xem</h4>
                                            <Field
                                                name="luotXem"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                    </div>

                                    <div className="row">
                                        <div className="form-group col-6">
                                            <h4 className="text-left">Danh mục khoá học</h4>
                                            <Field
                                                as="select"
                                                name="maDanhMucKhoaHoc"
                                                className="form-control">
                                                <option>Vui lòng chọn danh mục</option>
                                                       
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
                                            <h4 className="text-left">Người tạo</h4>
                                            <Field
                                                name="taiKhoanNguoiTao"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>
                                    </div>

                                    <div className="row">

                                        <div className="col-6">
                                            <h4 className="text-left">Ngày tạo</h4>
                                            <Field
                                                name="ngayTao"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                        <div className="col-6">
                                            <h4 className="text-left">Hình ảnh</h4>
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
                                            <h4 className="text-left">Mã nhóm</h4>

                                            <Field
                                                name="maNhom"
                                                type="text"
                                                onChange={handleChange}
                                                className="form-control" />
                                        </div>

                                    </div>

                                    <div>

                                        <div>
                                            <h4 className="text-left">Mô tả</h4>
                                            <textarea
                                                name="moTa"
                                                type="text"
                                                onChange={handleChange}
                                                className="inputDescription form-control" />
                                        </div>
                                    </div>

                                </div>

                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Save</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            )}
            >
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
