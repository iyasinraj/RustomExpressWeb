import React, { useContext, useEffect } from 'react';
import ChatAvatar from '../pages/Chat/ChatComponent/ChatAvatar';
import { Link, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const ChatPageLayout = () => {
    const { activeChat, setActiveChat, chats, setChats, localUrl, dbUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSetActiveChat = async (chat, id) => {
        await setActiveChat(chat);
        // await navigate(`/chat/${id}`);
        // console.log(chat)
    };


    // Check if the current route is "/chat" and clear activeChat if needed
    if (location.pathname === '/chat') {
        setActiveChat(null); // Set activeChat to null when navigating to "/chat"
    }

    useEffect(() => {
        fetch(`${localUrl}/chats/${dbUser._id}`)
            .then(res => res.json())
            .then(data =>{
                    // console.log(data)
                    setChats(data)
                })
    }, [dbUser._id, localUrl, setChats])
    

    return (
        <div className='grid grid-cols-12 my-4 min-h-[400px]'>
            <div className={`${activeChat && 'hidden'} col-span-12 md:gap-4 md:block grid md:col-span-2 md:border-r`}>
                <div className=' flex flex-col gap-3 md:grid md:gap-4'>
                    {
                        chats &&
                        chats.map(chat => <Link key={chat._id} to='/chat/messages' onClick={() => handleSetActiveChat(chat, chat._id)}>
                            <ChatAvatar chat={chat} dbUser={dbUser} />
                        </Link>)
                    }
                    {/* <Link to='/chat/1' onClick={() => handleSetActiveChat(1)}>
                        <ChatAvatar />
                    </Link>
                    <Link to='/chat/2' onClick={() => handleSetActiveChat(2)}>
                        <ChatAvatar />
                    </Link>
                    <Link to='/chat/3' onClick={() => handleSetActiveChat(3)}>
                        <ChatAvatar />
                    </Link> */}
                </div>

            </div>
            <div className={`${!activeChat && 'hidden'} col-span-12 md:col-span-10`}>
                <div className='md:hidden flex justify-center mb-10'>
                    <Link to={'/chat'} className='text-center btn btn-sm font-bold'><p>{`<< Back To Chat Page`}</p></Link>
                </div>
                <Outlet />
            </div>
        </div>
    );
};

export default ChatPageLayout;
