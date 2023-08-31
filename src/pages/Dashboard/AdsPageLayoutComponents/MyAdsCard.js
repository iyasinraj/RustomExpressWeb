import { Link } from 'react-router-dom';

const MyAdsCard = () => {    
    return (
        <Link>
            <div className="flex w-full rounded-md bg-base-100 shadow-xl">
                <img className='w-1/2 p-4 rounded-s-3xl' src="https://images.unsplash.com/photo-1587831990711-23ca6441447b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVza3RvcCUyMGNvbXB1dGVyfGVufDB8fDB8fHww&w=1000&q=80" alt="Movie" />
                <div className="w-1/2 p-4 grid self-center">
                    <h2 className="">New movie is released!</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </Link>
    );
};

export default MyAdsCard;