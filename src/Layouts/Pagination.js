import React from 'react'

const PaginationComponent = ({ pagePerList, totalItems, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalItems / pagePerList); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className="paginationContainer">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default PaginationComponent;