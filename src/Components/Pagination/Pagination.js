import React from 'react';
import "./style.scss";

const Pagination = ({nPages, currentPage, setCurrentPage}) => {
    const pageNumbers = nPages && ([...Array(nPages + 1).keys()].slice(1));

    const nextPage = () => {
        if(currentPage !== nPages) 
            setCurrentPage(currentPage + 1)
    }
    const prevPage = () => {
        if(currentPage !== 1) 
            setCurrentPage(currentPage - 1)
    }

    return (
        <div className="pagination">
            <button onClick={prevPage} className="btn-nav left-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="left-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            {pageNumbers?.map((num) => (
            <div className="page-numbers">
                <button key={num} className={`btn-page ${currentPage === num && 'btn-selected'}`}>{num}</button>
            </div>
            ))}
            <button onClick={nextPage} className="btn-nav right-btn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="right-icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
};

export default Pagination;