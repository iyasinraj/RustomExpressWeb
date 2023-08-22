import Carousel from "./AdDetailsComponents/Carousel";

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
                    <p className="font-light">Sale by: users name</p>
                    <div className="flex w-full">
                        <p className="text-xl font-bold text-center m-2 w-1/2 bg-base-200">Send message</p>
                        <p className="text-xl font-bold text-center m-2 w-1/2 bg-base-200">Call Seller</p>
                    </div>

                    {/* for Pc Screen Paid Ads */}
                    <div className="hidden md:block m-4 bg-base-200 h-full">
                        <p className="text-center font-bold py-24">Contact for ad</p>
                    </div>
                </div>
            </div>
            <div className="px-2 md:px-0">
                <div className="flex justify-between max-w-[640px] ">
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
            <div>
                <p className="text-center">similar ads</p>
            </div>
        </div>
    );
};

export default AdsDetails;