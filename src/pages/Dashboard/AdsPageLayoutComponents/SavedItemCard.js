import React from 'react';

const SavedItemCard = () => {
    return (
        <div className="card w-full bg-base-100 shadow-md">
            <figure><img src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" alt="Title" /></figure>
            <div className="card-body">
                <h2 className="card-title">Post Title</h2>
                <div className="card-actions justify-end">
                    <input checked type="checkbox" className="checkbox" />
                </div>
            </div>
        </div>
    );
};

export default SavedItemCard;