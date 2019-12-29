import React, { Component } from 'react'
import TableUserPending from '../../Layouts/TableUserPending'

class UserManagementsComponent extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <TableUserPending />

                </div>
            </div>
        )
    }
}

export default (UserManagementsComponent);
