import React from 'react';

const Pegination = ({currentPage,totalPages, fetchData}) => {
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            fetchData(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            fetchData(currentPage + 1);
        }
    };
    return (
        <div className="join">
            <button className="join-item btn" onClick={handlePreviousPage}>« Previous </button>
            {Array.from({ length: totalPages }, (_, index) => (
                <button key={index} className={`join-item btn ${currentPage === index + 1 ? 'current' : ''}`} onClick={() => fetchData(index + 1)}>{index + 1}</button>
            ))}
            <button className="join-item btn" onClick={handleNextPage}>Next »</button>
        </div>
    );
};

export default Pegination;