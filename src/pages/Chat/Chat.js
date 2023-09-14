import React, { useContext, useEffect } from 'react';
import ChatHead from './ChatComponent/ChatHead';
import { AuthContext } from '../../context/UserContext';

const Chat = () => {
    const { activeChat, tempChat, chat, dbUser, localUrl, content, setContent } = useContext(AuthContext)


    const handleSendMessage = async (e) => {
        e.preventDefault()
        await setContent(e.target.content.value)
        // await console.log(content, content.length)
        await e.target.reset()
    }

    useEffect(() => {
        const isPageReloaded = performance.getEntriesByType('navigation')[0].type === 'reload';

    // Check if the page is being reloaded
    if (isPageReloaded) {
      // Page is being reloaded, redirect to the desired route
      window.location.href = '/chat';
    }
    }, []);

    return (
        <div className={`${!activeChat && "hidden"}`}>
            <div>
                {
                    tempChat ?
                        <ChatHead productId={tempChat?.productId} localUrl={localUrl}></ChatHead>
                        :
                        <ChatHead productId={activeChat?.productId} localUrl={localUrl}></ChatHead>
                }
            </div>
            <div>
                <div className={`w-full overflow-auto h-[270px] md:h-[400px] mt-4 bg-base-200`}>

                    {
                        activeChat?.messages.length > 0 ?
                            <div className={`chat ${dbUser._id === activeChat.senderId ? "chat-start" : "chat-end"} p-4`}>
                                <div className="chat-header">
                                    {activeChat.senderId}
                                    <time className="text-xs opacity-50">{new Date().toDateString()}</time>
                                </div>
                                {
                                    activeChat.messages.map(con => <div className="chat-bubble my-4">{con.content}</div>)
                                }

                            </div>
                            : <div></div>
                    }

                    {/* <div className="chat chat-start">
                        <div className="chat-header">
                            Obi-Wan Kenobi
                            <time className="text-xs opacity-50">12:45</time>
                        </div>
                        <div className="chat-bubble">You were the Chosen One!</div>
                    </div> */}
                </div>
                <form onSubmit={handleSendMessage}>
                    <div className='p-4 bg-base-200 w-full grid grid-cols-12 gap-2'>
                        <input className='input-md rounded-md shadow-md fill-base-300 col-span-8 md:col-span-10 p-4' type="text" name='content' />
                        <button type='submit' className='btn btn-outline col-span-4 md:col-span-2'>
                            Send
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>

        </div>
    );
};

export default Chat;