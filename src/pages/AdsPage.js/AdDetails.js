import { Link } from "react-router-dom";
import Carousel from "./AdDetailsComponents/Carousel";
import SimilarAds from "./AdDetailsComponents/SimilarAds";

const AdsDetails = () => {
    return (
        <div className="">
            <div className="md:grid grid-cols-5">
                <div className="w-full col-span-3">
                    <Carousel></Carousel>
                </div>
                <div className="px-2 md:ps-4 col-span-2">
                    <div>
                        <p className="font-bold text-xl md:text-2xl">Full Desktop Computer With Big Size Monitor</p>
                        <p className="font-extrabold md:text-xl">180000 Taka</p>
                    </div>
                    <p className="font-light my-2">Sale by: users name</p>
                    <div className="grid grid-cols-2 w-full">
                        <p className="text-xl font-bold text-center m-2 bg-base-200 rounded-md py-2"><Link to='/chat'>Send message</Link></p>
                        <p className="text-xl font-bold text-center m-2 bg-base-200 rounded-md py-2"><Link to="tel:+8801797319754">Call Seller</Link></p>
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
                        <p className=" font-extralight">Posted on<span> time stamp</span>, <span>location</span></p>
                        <div className="flex">
                            <p>Share </p>
                            <p>Save Post</p>
                        </div>
                    </div>

                    <p className="mt-4 font-bold">Description</p>
                    <div className="m-2 p-2 border border-base-200 max-w-[640px]">
                        <p> awesome computer setup
                            <br />
                            specifications:
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className="text-center mt-10 pt-4 text-2xl md:text-3xl font-bold">Similar ads</h2>
                <SimilarAds></SimilarAds>
            </div>
        </div>
    );
};

export default AdsDetails;