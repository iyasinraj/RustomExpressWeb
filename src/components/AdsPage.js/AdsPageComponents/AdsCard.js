import React from 'react';
import { Link } from 'react-router-dom';

const AdsCard = () => {
    return (
        <Link to={"/ads/title"} className="mx-4 rounded-md my-4 flex bg-base-100 hover:shadow-xl shadow-md">
            <img className='w-1/3 rounded-l-md' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" alt="Movie" />
            <div className="ms-4 w-full p-2 flex flex-col content-between">
                <div className='h-full flex flex-col justify-between'>
                    <h2 className="font-bold">Ad Title</h2>
                    <p>Location: Dhaka, Tejgaon</p>
                    <p className='font-extrabold'>price : </p>
                </div>
                <div className="h-full flex justify-end items-end">
                    <p className='text-end pe-4'> 1 Day ago.</p>
                </div>
            </div>
        </Link>

    );
};

export default AdsCard;