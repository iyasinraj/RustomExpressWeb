import React from 'react';

const ChatBubble = () => {
    return (
            <div className="chat chat-end">
                <div className="chat-header">
                    Sender
                    <time className="text-xs opacity-50">time</time>
                </div>
                <div className="chat-bubble">Message content</div>
            </div>
    );
};

export default ChatBubble;