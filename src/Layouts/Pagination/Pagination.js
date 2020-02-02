import React, { Component } from 'react';

import Pagination from "react-js-pagination";

class PaginationComponent extends Component {
    render() {
        return (
            <div className="panel-body">

                <div className='text-center'>
                    <Pagination
                        prevPageText='prev'
                        nextPageText='next'
                        firstPageText='first'
                        lastPageText='last'
                        activePage={this.props.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={this.props.totalItemsCount}
                        pageRangeDisplayed={3}
                        onChange={this.props.onChange}
                    />
                </div>
            </div>
        )
    }
}

export default PaginationComponent;
