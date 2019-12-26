import React, { Component } from 'react'
import TableCoursePending from '../../Layouts/TableCoursePending'

class ManagementsComponent extends Component {
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

export default (ManagementsComponent);
