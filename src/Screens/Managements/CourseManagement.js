import React, { Component } from 'react'
import TableCoursePending from '../../Layouts/TableCoursesPending'

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
