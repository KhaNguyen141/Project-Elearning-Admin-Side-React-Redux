import React, { Component } from 'react'

class SidebarButton extends Component {
    render() {
        return (
            <div>
                <button 
                onClick={this.props.click} 
                id="sidebarCollapse" 
                type="button" 
                className="btn btn-light bg-white rounded-pill shadow-sm px-4 mb-4"><i className="fa fa-bars mr-2" /><small className="text-uppercase font-weight-bold"
                data-toggle="collapse" 
                data-target="#sidebar" 
                aria-controls="navbarNav" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >Toggle</small></button>
            </div>
        )
    }
}

export default (SidebarButton);
