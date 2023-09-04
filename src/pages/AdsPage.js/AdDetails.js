import { Link, useLoaderData } from "react-router-dom";
import Carousel from "./AdDetailsComponents/Carousel";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/UserContext";

import {
    EmailIcon, EmailShareButton, FacebookIcon, FacebookMessengerIcon,
    FacebookMessengerShareButton, FacebookShareButton, TwitterIcon, TwitterShareButton,
    WhatsappIcon, WhatsappShareButton
} from "react-share";
import AdsCard from "./AdsPageComponents/AdsCard";

const AdsDetails = () => {
    const { selectedDivision, localUrl } = useContext(AuthContext)
    const post = useLoaderData()
    const { title, description, price, createdAt, location, condition, category, author, images } = post


    const date = new Date(createdAt);
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-indexed, so add 1
    const day = date.getDate();

    // console.log(`Date: ${year}-${month}-${day}`);

    const [isCopied, setIsCopied] = useState(false);
    const url = window.location.href

    // save post
    const [save, setSave] = useState(false)
    const handleSavePost = () => {
        setSave(!save)
    }

    const handleCopyClick = () => {
        navigator.clipboard.writeText(url).then(() => {
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000); // Reset "Copied" status after 1.5 seconds
        })
    }

    const [similarAds, setSimilarAds] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); // Set loading to true before fetching data
        fetch(`${localUrl}/ads?category=${category[0]?.category}&limit=4`)
            .then(res => res.json())
            .then(data => {
                setSimilarAds(data.items);
                setLoading(false); // Set loading to false after data is fetched
            })
            .catch(error => {
                console.error(error);
                setLoading(false); // Set loading to false if there's an error
            });
    }, [category, localUrl]);

    return (
        <div className="">
            <div className="md:grid grid-cols-5">
                <div className="w-full col-span-3 h-[350px]">
                    <Carousel images={images}></Carousel>
                </div>
                <div className="px-2 md:ps-4 col-span-2">
                    <div className="mt-8 md:mt-0">
                        <p className="font-bold text-xl md:text-2xl">{title}</p>
                        <p className="font-extrabold md:text-xl">TK: {price}</p>
                    </div>
                    <p className="font-light my-2">Sale by: {author[0]?.name}</p>
                    <div className="grid grid-cols-2 w-full">
                        <p className="text-xl font-bold text-center m-2 bg-base-200 rounded-md py-2"><Link to='/chat'>Send message</Link></p>
                        <p className="text-xl font-bold text-center m-2 bg-base-200 rounded-md py-2"><Link to={`tel:+88${author[2].mobile}`}>Call Seller</Link></p>
                    </div>

                    {/* for Pc Screen Paid Ads */}
                    <div className="hidden md:block m-4 bg-base-200 h-full">
                        <p className="text-center font-bold py-24">Contact for ad</p>
                    </div>
                </div>
            </div>
            <div className="px-2 md:px-0 md:grid grid-cols-5">
                <div className="col-span-3">
                    <div className="flex justify-between max-w-full ">
                        <div>
                            <p className="">Posted on<span className="font-bold"> {day}/{month}/{year} </span></p>
                            <p className=""> Location: <span className="font-bold"> <Link to={`/ads?location=${location[1].state}`}>{location[1].state}</Link>, <Link to={`/ads?location=${location[1].state}`}>{location[2].area}</Link></span></p>
                        </div>

                        <div className=" ">
                            <div className="flex">
                                <div className="dropdown dropdown-end">
                                    <label tabIndex={0} className="btn btn-sm p-0 pr-3 md:pr-1 grid gap-0 grid-cols-2 md:flex md:tooltip m-1" data-tip="Share this post">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
                                        </svg>
                                        <span className="text-[8px] md:text-sm"> Share</span></label>

                                    <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-32">
                                        <li>
                                            <FacebookShareButton url={url} title={title} >
                                                <FacebookIcon size={20} round={true} /> Facebook
                                            </FacebookShareButton>
                                        </li>

                                        <li className="my-4">
                                            <FacebookMessengerShareButton url={url} title={title} >
                                                <FacebookMessengerIcon size={20} round={true} />Messenger
                                            </FacebookMessengerShareButton>
                                        </li>
                                        <li>
                                            <WhatsappShareButton url={url} title={title} >
                                                <WhatsappIcon size={20} round={true} />WhatsApp
                                            </WhatsappShareButton>
                                        </li>
                                        <li className="my-4">
                                            <TwitterShareButton url={url} title={title} >
                                                <TwitterIcon size={20} round={true} />Twitter
                                            </TwitterShareButton>
                                        </li>
                                        <li>
                                            <EmailShareButton url={url} title={title} >
                                                <EmailIcon size={20} round={true} />E-Mail
                                            </EmailShareButton>
                                        </li>
                                        <li className="mt-4">
                                            <button onClick={handleCopyClick} className="text-[14px]">
                                                {isCopied ? 'Copied!' : 'Copy Link'}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="">
                                    <label onClick={handleSavePost} className="btn btn-sm p-0 pr-3 md:pr-1 grid gap-0 grid-cols-2 md:flex md:tooltip m-1" data-tip="Save this post">
                                        {
                                            save ?
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFF00" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                                :
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                                </svg>
                                        }
                                        <span className="text-[8px] md:text-sm">Save</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <p className="mt-4 font-bold">Category: <Link to={`/ads?location=${selectedDivision}?category=${category[0].category}`} className="text-blue-400">{category[0].category}</Link> / <Link to={`/ads?location=${selectedDivision}?subCategory=${category[1].subCategory}`} className="text-blue-400">{category[1].subCategory}</Link></p>
                    <p className="mt-4 font-bold">Condition: <span className="uppercase">{condition}</span></p>

                    <p className="mt-4 font-bold">Description</p>
                    <div className="m-2 p-2 border border-base-200 max-w-[640px]">
                        <textarea className="textarea text-sm md:text-lg font-semibold w-full min-h-[150px] h-full" style={{ resize: 'none' }} readOnly>{description}</textarea>
                        <p></p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center mt-10 pt-4 text-2xl md:text-3xl font-bold">Similar ads</h2>
                <div>
                    {loading ? (
                        <div className="h-screen w-full flex justify-center items-center">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>
                    ) : similarAds.length > 0 ? (
                        <div className="grid md:grid-cols-2">
                            { similarAds.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)}
                        </div>
                    ) : (
                        <div className="w-full">
                            <p className="text-center">No similar ads available.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AdsDetails;