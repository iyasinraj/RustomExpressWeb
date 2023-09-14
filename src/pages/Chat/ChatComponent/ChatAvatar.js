import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/UserContext';

const ChatAvatar = ({ chat }) => {
    const { productId } = chat
    const { dbUser, localUrl } = useContext(AuthContext)
    // const user1 = users[0].id 
    // const user2 = users[1].id
    // let user = "" 
    // if(dbUser._id === user1){
    //     user = users[0].username
    // }else{
    //     user = users[1].usernameer2
    // }
    const [ad, setAd] = useState()
    useEffect(() => {
        fetch(`${localUrl}/ad/${productId}`)
            .then(res => res.json())
            .then(data => {
                setAd(data)
            })
    }, [localUrl, productId])

    const options = {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        day: "2-digit",
        month: "short",
        year: "2-digit",
    };

    return (
        <div className='flex items-center'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img alt='img' src={ad?.images[0]} />
                </div>
            </div>
            <div className='ms-4'>
                <p className='text-xl font-bold'>{ad?.author[0].name}</p>
                <p className='font-thin'>{new Date(chat?.lastMessage).toLocaleDateString("en-US", options)}</p>
            </div>
        </div>
    );
};

export default ChatAvatar;