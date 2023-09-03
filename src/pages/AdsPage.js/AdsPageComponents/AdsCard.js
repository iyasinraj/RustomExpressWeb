import { Link } from 'react-router-dom';

const AdsCard = ({ singleAd }) => {
    const currentDate = new Date()
    const postDate = new Date(singleAd?.createdAt)
    const differenceInMilliseconds =  currentDate - postDate;
    const differenceInMinutes = Math.floor(differenceInMilliseconds / (1000 * 60))

    function formatTimeDifference(timeInMinutes) {
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
        <Link to={`/ads/${singleAd?._id}`} className="mx-4 h-[150px] md:h-[200px] rounded-md my-4 flex bg-base-100 hover:shadow-xl shadow-md">
            <img className='w-1/3 rounded-l-md' src={singleAd?.images[0]} alt="productImage" />
            <div className="ms-4 w-full p-2 flex flex-col content-between">
                <div className='h-full flex flex-col justify-between'>
                    <h2 className="font-bold">{singleAd?.title}</h2>
                    <p>{singleAd?.location[1].state}, {singleAd?.location[2].area}</p>
                    <p className='font-extrabold'>TK: {singleAd?.price} </p>
                </div>
                <div className="h-full flex justify-end items-end">
                    <p className='text-end pe-4'>{formatTimeDifference(differenceInMinutes)} ago.</p>
                </div>
            </div>
        </Link>

    );
};

export default AdsCard;