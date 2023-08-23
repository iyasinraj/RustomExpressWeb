import React from 'react';

const ChatAvatar = () => {
    return (
        <div className='flex items-center'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img alt='img' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                </div>
            </div>
            <div className='ms-4'>
                <p className='text-xl font-bold'>Mr. Jhon Ali</p>
                <p className='font-thin'>10 aug 2023</p>
            </div>
        </div>
    );
};

export default ChatAvatar;