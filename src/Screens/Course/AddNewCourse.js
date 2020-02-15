import React, { Component } from 'react';
import { fetchListCategory } from '../../Redux/Action/Course/CourseActions';
import { connect } from 'react-redux';

import { Formik, Field, Form } from 'formik';
import { adminAddNewCourse } from '../../Redux/Action/User/AdminActions';
import BackupIcon from '@material-ui/icons/Backup';

class AddCourseComponent extends Component {
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
        const { fileName } = this.state;
        let file = null;
     
        file = fileName 
           ? ( <span>File Selected - {fileName}</span>) 
           : ( <span>Upload a file...</span> );

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
                onSubmit={values => {
                    this.props.dispatch(adminAddNewCourse(values, values.hinhAnh, values.tenKhoaHoc))
                    console.log(values);

                }}
                >
                {({ handleChange, setFieldValue }) => (
                    <div className="courseEditCotaniner">
                        <Form className="container formSearch">
                            <h2>Course Addition</h2>
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
                                    <h4 className="text-left">Evaluation</h4>
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
                                    <Field
                                        name="tenKhoaHoc"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Views of course</h4>
                                    <Field
                                        name="luotXem"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-group col-6">
                                    <h4 className="text-left">Course categories</h4>
                                    <Field
                                        as="select"
                                        name="maDanhMucKhoaHoc"
                                        className="form-control">
                                        <option>Please choose course category</option>
                                        {this.props.listCategory.map((list, index) => {
                                            return <option
                                                value={list.maDanhMuc}
                                                key={index}
                                            >{list.tenDanhMuc}</option>


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
                                    <h4 className="text-left">Date create</h4>
                                    <Field
                                        name="ngayTao"
                                        type="text"
                                        onChange={handleChange}
                                        className="form-control" />
                                </div>

                                <div className="col-6">
                                    <h4 className="text-left">Upload image</h4>
                                    <label className="form-control imageInput">
                                        <BackupIcon /> 
                                        <input
                                            name="hinhAnh"
                                            type="file"

                                            onChange={(event) => {
                                                this.onChange(event);
                                                setFieldValue("hinhAnh", event.target.files[0].name)
                                                
                                            }}

                                            className="upload"
                                        />
                                        <span className="fileName">{file}</span>
                                    </label>
                                    
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

                            <button type="submit" className="buttonAddNewCourse btn btn-udi-yellow my-5">Add</button>
                        </Form>
                    </div>
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

export default connect(mapStateToProps)(AddCourseComponent);
