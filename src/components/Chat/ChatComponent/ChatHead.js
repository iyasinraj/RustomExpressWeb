import React from 'react';

const ChatHead = () => {
    return (
        <div className='flex border-b ms-4 ps-4 pb-4'>
            <div className="avatar">
                <div className="w-24 rounded-md">
                    <img alt='img' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                </div>
            </div>
            <div className='ms-4'>
                <h3 className='text-2xl font-bold'>Product Title</h3>
                <p>Jurain, Dhaka || 10 aug 2023</p>
                <p className='font-bold'>TK: 1000</p>
            </div>
        </div>
    );
};

export default ChatHead;