import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchListCategory } from '../../Redux/Action/Course/CourseActions';
import { adminUpdateCourse } from '../../Redux/Action/User/AdminActions';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

import { Formik, Field, Form } from 'formik';
import ErrorMessage from '../../Layouts/ErrorMessage/ErrorMessage';
import {validationCourseSchema} from '../../Layouts/Validation/ValidationCourseSchema';

import BackupIcon from '@material-ui/icons/Backup';

class ModalUpdateCourseComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
           fileName: '',
        };
    }

    onChange = (e) => {

        switch (e.target.name) {
          // Updated this
          case 'hinhAnh':
            if(e.target.files.length > 0) {
                // Accessed .name from file 
                this.setState({ fileName: e.target.files[0].name });
            }
            break;

          default:
            this.setState({ [e.target.name]: e.target.value });
         }
    };

    render() {
        const courseInfo = JSON.parse(localStorage.getItem('courseEventClickedInfo'));

        const { fileName } = this.state;
        let file = null;
     
        file = fileName 
           ? ( <span>File Selected - {fileName}</span>) 
           : ( <span>Upload a file...</span> );

        return (
            <Formik
                initialValues={{
                    maKhoaHoc: courseInfo.maKhoaHoc,
                    biDanh: "",
                    tenKhoaHoc: "",
                    moTa: "",
                    luotXem: 0,
                    danhGia: 0,
                    hinhAnh: "",
                    maNhom: "",
                    ngayTao: "",
                    maDanhMucKhoaHoc: "",
                    taiKhoanNguoiTao: this.props.checkAdmin.taiKhoan,
                }}

                validationSchema={validationCourseSchema}
                onSubmit={(values) => {

                    this.props.dispatch(adminUpdateCourse(values, values.hinhAnh, values.tenKhoaHoc))

                }}
            >
                {({values, handleChange, setFieldValue, errors, touched }) => (
                    <Modal isOpen={this.props.isUpdateCourseModalOpen} toggle={this.props.isUpdateCourseModalClose}>
                        <ModalHeader toggle={this.props.isUpdateCourseModalClose}>
                            Update Course
                        </ModalHeader>

                        <Form className="container formSearch courseUpdateCotaniner">
                           <ModalBody>
                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Course ID</h4>
                                        <Field
                                            name="maKhoaHoc"
                                            type="text"
                                            disabled={true}
                                            value={values.maKhoaHoc}
                                            onChange={handleChange}
                                            className="form-control valid" />
                                            <ErrorMessage touched={touched.maKhoaHoc} message={errors.maKhoaHoc}/>
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left">Rating</h4>
                                        <Field
                                            name="danhGia"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.danhGia ? "form-control" : touched.danhGia && !errors.danhGia ? "form-control valid" : "form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.danhGia} message={errors.danhGia}/>
                                    </div>

                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Course name</h4>
                                        <Field
                                            name="tenKhoaHoc"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.tenKhoaHoc ? "form-control" : touched.tenKhoaHoc && !errors.tenKhoaHoc ? "form-control valid" : "form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.tenKhoaHoc} message={errors.tenKhoaHoc}/>
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left">Views</h4>
                                        <Field
                                            name="luotXem"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.luotXem ? "form-control" : touched.luotXem && !errors.luotXem ? "form-control valid" : "form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.luotXem} message={errors.luotXem}/>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className="form-group col-6">
                                        <h4 className="text-left">Course type</h4>
                                        <Field
                                            component="select"
                                            name="maDanhMucKhoaHoc"
                                            className={
                                                !touched.maDanhMucKhoaHoc ? "form-control" : touched.maDanhMucKhoaHoc && !errors.maDanhMucKhoaHoc ? "form-control valid" : "form-control error"  
                                            }
                                            >
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
                                        <ErrorMessage touched={touched.maDanhMucKhoaHoc} message={errors.maDanhMucKhoaHoc}/>
                                    </div>

                                    <div className="form-group col-6">
                                        <h4 className="text-left">Creator</h4>
                                        <Field
                                            name="taiKhoanNguoiTao"
                                            type="text"
                                            value={this.props.checkAdmin.taiKhoan}
                                            disabled
                                            onChange={handleChange}
                                            className="form-control valid" />
                                            <ErrorMessage touched={touched.taiKhoanNguoiTao} message={errors.taiKhoanNguoiTao}/>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Creation date</h4>
                                        <Field
                                            name="ngayTao"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.ngayTao ? "form-control" : touched.ngayTao && !errors.ngayTao ? "form-control valid" : "form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.ngayTao} message={errors.ngayTao}/>
                                    </div>

                                    <div className="col-6">
                                        <h4 className="text-left courseTitle">Image Upload</h4>
                                        <label className={
                                                !touched.hinhAnh ? "form-control imageInput" : touched.hinhAnh && !errors.hinhAnh ? "form-control imageInput valid" : "form-control imageInput error"  
                                        } >
                                        <BackupIcon /> 
                                        <input
                                            name="hinhAnh"
                                            type="file"

                                            onChange={(event) => {
                                                this.onChange(event);
                                                setFieldValue("hinhAnh", event.currentTarget.files[0].name)
                                                
                                            }}
                                            
                                        />
                                        <span className="fileName">{file}</span>
                                    </label>
                                    <ErrorMessage touched={touched.hinhAnh} message={errors.hinhAnh}/>
                                    </div>
                                </div>

                                <div className="row">

                                    <div className="col-6">
                                        <h4 className="text-left">Group ID</h4>

                                        <Field
                                            name="maNhom"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.maNhom ? "form-control" : touched.maNhom && !errors.maNhom ? "form-control valid" : "form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.maNhom} message={errors.maNhom}/>
                                    </div>

                                </div>

                                <div>

                                    <div>
                                        <h4 className="text-left">Description</h4>
                                        <textarea
                                            name="moTa"
                                            type="text"
                                            onChange={handleChange}
                                            className={
                                                !touched.moTa ? "form-control" : touched.moTa && !errors.moTa ? "inputDescription form-control valid" : "inputDescription form-control error"  
                                            } />
                                            <ErrorMessage touched={touched.moTa} message={errors.moTa}/>
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
