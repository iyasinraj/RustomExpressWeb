import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const MyAdsCard = ({ singleAd }) => {
    const { user, handleDeletePost, setDeleteId, localUrl, modlAd, setModlAd, updatePostId, setUpdatePostId, setCount, count } = useContext(AuthContext)

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
    const { register, formState: { errors }, handleSubmit } = useForm()

    const updatePost = async (data) => {
        try {
            const title = data.title
            const description = data.description
            const price = data.price
            const condition = data.condition
            const link = data.link
            const mobile = data.mobile
            update(title, description, price, condition, link, mobile)
        } catch (error) {
            console.error(error);
        }
    }
    const update = async (title, description, price, condition, link, mobile) => {
        const post = {
            title: title,
            description: description,
            price: price,
            condition: condition,
            postStatus: "available",
            additionalLink: link,
            mobile: mobile

        }
        fetch(`${localUrl}/ad/${updatePostId}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    // close modal
                    const modalCheckbox = document.getElementById('updateModal');
                    if (modalCheckbox) {
                        modalCheckbox.checked = false;
                    }
                    toast.success('Update Successfull')
                    setModlAd(null)
                    setUpdatePostId(null)
                    setCount(count + 1)
                }
            })
    }


    const handleSingleAd = async () => {
        await setModlAd(null)
        await setModlAd(singleAd)
        await setUpdatePostId(singleAd?._id)

        const updateModalCheckbox = await document.querySelector('#updateModal');
        if (updateModalCheckbox) {
            updateModalCheckbox.checked = true;
        }
    };

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
                                <label
                                    onClick={handleSingleAd}
                                    className="btn btn-xs ms-12 md:btn-md md:ms-0 font-bold bg-base-300 md:text-lg">
                                    Update
                                </label>
                                {/* <button htmlFor="deleteModal" className='btn bg-red-500 ms-4 text-white font-bold text-lg'>Delete</button> */}
                                <label htmlFor="deleteModal" onClick={() => setDeleteId(singleAd._id)}
                                    className="btn btn-xs ms-12 md:btn-md bg-red-500 mt-2 md:mt-0 md:ms-4 text-white font-bold md:text-lg">
                                    Delete
                                </label>
                            </div>
                        </div>
                    }
                    <div className='flex justify-end items-end'>
                        <p className='text-end pe-4'>{formatTimeDifference(differenceInMinutes)} ago.</p>
                    </div>
                </div>
            </div>
            {/* Post Update Modal */}
            <input type="checkbox" id="updateModal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl">
                    <form id="adsForm" onSubmit={handleSubmit(updatePost)}>

                        <h2 className='text-xl font-bold my-4'>Condition</h2>
                        <select defaultValue={modlAd?.condition} {...register("condition", { required: true })} className="select select-bordered w-full">
                            <option disabled>Select Condition</option>
                            <option value="new">New</option>
                            <option value="used">Used</option>
                        </select>

                        <h2 className='text-xl font-bold my-4'>Product Title</h2>
                        <input type="text" defaultValue={modlAd?.title} {...register("title", { required: true })} placeholder="Title" className="input input-bordered w-full" />
                        {errors.title?.type === 'required' && <p className="text-red-600" role="alert">title is required</p>}

                        <h2 className='text-xl font-bold my-4'>Product Description</h2>
                        <textarea defaultValue={modlAd?.description} {...register("description", { required: true })} className="textarea w-full min-h-[200px] textarea-bordered" placeholder="Description"></textarea>
                        {errors.description?.type === 'required' && <p className="text-red-600" role="alert">Description is required</p>}

                        <h2 className='text-xl font-bold my-4'>Price</h2>
                        <input type="number" defaultValue={modlAd?.price} {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full" />
                        {errors.price?.type === 'required' && <p className="text-red-600" role="alert">Price is required</p>}

                        <h2 className='text-xl font-bold my-4'>Mobile Number</h2>
                        <input type="number" defaultValue={modlAd?.author[2].mobile} {...register("mobile", { required: true })} placeholder="Mobile Number" className="input input-bordered w-full" />
                        {errors.number && <p className="text-red-600" role="alert">Number is required</p>}

                        <h2 className='text-xl font-bold my-4'>Additional Link (Optional)</h2>
                        <input type="url" defaultValue={modlAd?.additionalLink} placeholder="https://example.com" pattern="https://.*" {...register("link")} className="input input-bordered w-full" />
                        <div className="modal-action">
                            <label htmlFor="updateModal" className="btn">Cancel</label>
                            <button type="submit" className="btn" >Submit</button>
                        </div>
                    </form>
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