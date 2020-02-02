import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <div className="container contentNotFound">
                <h1>Content is not found</h1>
                <NavLink className="btn btn-udi-white" to="/admin">Back to home</NavLink>
            </div>
        )
    }
}

export default (PageNotFound);
