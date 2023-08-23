import React from 'react';
import Chat from '../components/Chat/Chat';
import ChatAvatar from '../components/Chat/ChatComponent/ChatAvatar';
import { Link } from 'react-router-dom';

const ChatPageLayout = () => {
    return (
        <div className='grid grid-cols-12 my-4 min-h-[400px]'>
            <div className='col-span-2 border-r'>
                <div className='grid gap-4'>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                    <Link to=''>
                        <ChatAvatar></ChatAvatar>
                    </Link>
                </div>
            </div>
            <div className='col-span-10'>
                <Chat></Chat>
            </div>
        </div>
    );
};

export default ChatPageLayout;