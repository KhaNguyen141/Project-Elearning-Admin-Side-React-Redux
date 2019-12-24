import React, { Component } from 'react'
import { connect } from 'react-redux';

class TableCoursePending extends Component {
    render() {
        return (
            <div className="tableCoursePending col-8">
                <table className="table table-striped table-condensed">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Username</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Status</th>
                            <th className="text-center">Manipulation</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Donna12345</td>
                            <td>Donna R. Folse</td>
                            <td>chuoi321@gmail.com</td>
                            <td>0902333333</td>
                            <td><span className="label label-success">Active</span>
                            </td>
                            <td className="text-center">
                                <button className="btn btn-udi-yellow mr-2">Accept</button>  
                                <button className="btn btn-cyber-red">Cancel</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default connect()(TableCoursePending);
