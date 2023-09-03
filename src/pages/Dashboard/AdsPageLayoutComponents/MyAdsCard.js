import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const MyAdsCard = ({ singleAd }) => {
    const { user, handleDeletePost, setDeleteId } = useContext(AuthContext)
    const currentDate = new Date()
    const postDate = new Date(singleAd?.createdAt)
    const differenceInMilliseconds = currentDate - postDate;
    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60))
    // console.log(singleAd)
    const author = singleAd.author[1].email
    // console.log(author, user.email)

    const formatTimeDifference = (timeInMinutes) => {
        if (timeInMinutes >= 60 * 24) {
            const days = Math.floor(timeInMinutes / (60 * 24));
            return `${days} day${days > 1 ? 's' : ''}`;
        } else if (timeInMinutes >= 60) {
            const hours = Math.floor(timeInMinutes / 60);
            return `${hours} hour${hours > 1 ? 's' : ''}`;
        } else if (timeInMinutes >= 1) {
            return `${timeInMinutes} minute${timeInMinutes > 1 ? 's' : ''}`;
        } else {
            return 'Less than a minute';
        }
    }

    return (

        <div className="mx-4 h-[120px] md:h-[200px] rounded-md my-4 flex bg-base-100 hover:shadow-xl shadow-md">
            <Link to={`/ads/${singleAd?._id}`} className='w-1/3 rounded-l-md'><img className='w-fit h-[120px] md:h-[200px] rounded-l-md' src={singleAd?.images[0]} alt="Movie" /></Link>
            <div className="ms-4 w-full p-2 grid grid-cols-2">
                <div className='h-full flex flex-col'>
                    <Link to={`/ads/${singleAd?._id}`}>
                        <h2 className="font-bold truncate overflow-hidden">{singleAd?.title}</h2>
                        <p>{singleAd?.location[1].state}, {singleAd?.location[2].area}</p>
                        <p className='font-extrabold'>TK: {singleAd?.price} </p>
                    </Link>
                </div>

                <div className="h-full flex flex-col justify-between">
                    {
                        author === user.email &&
                        <div>
                            <div className='flex flex-col md:flex-row justify-end'>
                                <button className='btn btn-xs ms-12 md:ms-0 md:btn-md font-bold bg-base-300 md:text-lg'>Update</button>
                                {/* <button htmlFor="deleteModal" className='btn bg-red-500 ms-4 text-white font-bold text-lg'>Delete</button> */}
                                <label htmlFor="deleteModal" onClick={() => setDeleteId(singleAd._id)}
                                    className="btn btn-xs ms-12 md:btn-md bg-red-500 mt-2 md:mt-0 md:ms-4 text-white font-bold md:text-lg">Delete</label>
                            </div>
                        </div>
                    }
                    <div className='flex justify-end items-end'>
                        <p className='text-end pe-4'>{formatTimeDifference(differenceInMinutes)} ago.</p>
                    </div>
                </div>
            </div>
            {/* Post Delete Modal */}
            <input type="checkbox" id="deleteModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <p className="text-center my-4 py-4 font-bold text-xl">Remember this post data will never come back.</p>
                    <div className='flex justify-center'>
                        <button className='btn bg-red-500 text-white font-bold text-lg' onClick={handleDeletePost}>Confirm Delete</button>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="deleteModal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>

    );
};



export default MyAdsCard;