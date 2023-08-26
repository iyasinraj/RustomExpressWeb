import React from 'react';
import ChatHead from './ChatComponent/ChatHead';

const Chat = () => {
    return (
        <div className='h-full'>
            <div>
                <ChatHead></ChatHead>
            </div>
            <div className='w-full overflow-auto h-[270px] mt-4 bg-base-200'>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis, rem?</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
                    <p>chats will show here</p>
            </div>
        </div>
    );
};

export default Chat;