import React, { Component } from 'react'

class SidebarButton extends Component {
    render() {
        return (
            <div>
                <button id="sidebarCollapse" type="button" className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2" /><small className="text-uppercase font-weight-bold">Toggle</small></button>
            </div>
        )
    }
}

export default (SidebarButton);
