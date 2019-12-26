import React, { Component } from 'react'

class EditCourseComponent extends Component {
    render() {
        return (
            <div className="courseEditCotaniner">
                <form className="container">
                    <h2>Thêm khoá học</h2>
                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Mã khoá học</h4>
                            <input className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Đánh giá</h4>
                            <input className="form-control"/>
                        </div>
                        
                    </div>

                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Tên khoá học</h4>
                            <input className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Lượt xem</h4>
                            <input className="form-control"/>
                        </div>
                        
                    </div>
                    <div className="row">
                        <div class="form-group col-6">
                            <h4 className="text-left">Danh mục khoá học</h4>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                        
                        <div class="form-group col-6">
                            <h4 className="text-left">Người tạo</h4>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        
                        <div className="col-6"> 
                            <h4 className="text-left">Ngày tạo</h4>
                            <input className="form-control"/>
                        </div>
                        
                        <div className="col-6">
                            <h4 className="text-left">Hình ảnh</h4>
                            <input className="form-control"/>
                            <button className="btn btn-udi-white my-4">Upload</button>
                        </div>
                        
                    </div>

                    <div>
                        
                        <div> 
                            <h4 className="text-left">Mô tả</h4>
                            <textarea className="form-control"/>
                        </div>
                    </div>
                    
                    <button className="btn btn-udi-yellow my-5">Thêm</button>
                </form>
            </div>
        )
    }
}

export default (EditCourseComponent);
