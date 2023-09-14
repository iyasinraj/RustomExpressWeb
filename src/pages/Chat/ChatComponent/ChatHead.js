import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ChatHead = ({ productId, localUrl }) => {
    const [ad, setAd] = useState()
    useEffect(() => {
        fetch(`${localUrl}/ad/${productId}`)
            .then(res => res.json())
            .then(data => {
                setAd(data)
            })
    }, [localUrl, productId])
    
    return (
        <div>
            <Link to={`/ads/${productId}`}>
            {
                ad &&
                <div className='flex border-b ms-4 ps-4 pb-4'>
                    <div className="avatar">
                        <div className="w-24 rounded-md">
                            <img alt='img' src={ad?.images[0]} />
                        </div>
                    </div>
                    <div className='ms-4'>
                        <h3 className='text-2xl font-bold'>{ad.title}</h3>
                        <p>{ad.location[2].area}, {ad.location[1].state} || { new Date (ad.createdAt).toDateString()}</p>
                        <p className='font-bold'>TK: {ad.price}</p>
                    </div>
                </div>
            }
            </Link>
        </div>

    );
};

export default ChatHead;