import React, { Component } from 'react';
import CKEditor from 'ckeditor4-react';
import { fetchListCategory } from '../../Redux/Action/Course/CourseActions';
import { connect } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import { adminAddNewCourse } from '../../Redux/Action/User/AdminActions';

class EditCourseComponent extends Component {
    render() {
        const {taiKhoan} = this.props.checkAdmin;

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
                onSubmit={values => {
                this.props.dispatch(adminAddNewCourse(values))
                console.log(values);

            }}
            render = {({ handleChange }) => (
                <div className="courseEditCotaniner">
                <Form className="container formSearch">
                    <h2>Thêm khoá học</h2>
                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Mã khoá học</h4>
                            <Field 
                            name="maKhoaHoc"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Đánh giá</h4>
                            <Field 
                            name="danhGia"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                        
                    </div>

                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Tên khoá học</h4>
                            <Field 
                            name="tenKhoaHoc"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Lượt xem</h4>
                            <Field 
                            name="luotXem"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <h4 className="text-left">Danh mục khoá học</h4>
                               <Field 
                               as="select"
                               name="maDanhMucKhoaHoc" 
                               className="form-control">
                                {this.props.listCategory.map((list, index) => {
                                    return <option 
                                    value={list.maDanhMuc} 
                                    key={index} 
                                    >{list.tenDanhMuc}</option>
                                   
                                    
                                })}
                                </Field>
                        </div>
                        
                    <div className="form-group col-6">
                            <h4 className="text-left">Người tạo</h4>
                            <Field 
                            name="taiKhoanNguoiTao"
                            type="text"
                            value={this.props.checkAdmin.taiKhoan}
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                    </div>

                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Ngày tạo</h4>
                            <Field 
                            name="ngayTao"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Hình ảnh</h4>
                            {/* <div className="custom-file">
                                    <Field name="hinhAnh" type="text" className=" form-control custom-file-input" id="customFile" />
                                    <label className="custom-file-label" htmlFor="customFile">Choose file</label>
                            </div> */}

                            <Field 
                            name="hinhAnh"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                            
                        </div>
                        
                    </div>

                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Mã nhóm</h4>

                            <Field 
                            name="maNhom"
                            type="text"
                            onChange={handleChange}
                            className="form-control"/>
                        </div>
                    </div>

                    <div>
                                
                        <div> 
                            <h4 className="text-left">Mô tả</h4>
                            <textarea 
                            name="moTa"
                            type="text"
                            onChange={handleChange}
                            className="inputDescription form-control"/>
                        </div>
                    </div>
                    
                    <button type="submit" className="buttonAddNewCourse btn btn-udi-yellow my-5">Thêm</button>
                </Form>
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

export default connect(mapStateToProps)(EditCourseComponent);