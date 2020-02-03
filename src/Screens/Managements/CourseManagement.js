import React, { Component } from 'react'
import TableCoursePending from '../../Layouts/TableCourse/TableCoursesManagement'

class UserManagementsComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <TableCoursePending />

                </div>
            </div>
        )
    }
}

export default (UserManagementsComponent);
