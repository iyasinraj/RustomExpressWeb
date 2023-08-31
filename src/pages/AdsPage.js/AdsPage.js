import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdsCard from './AdsPageComponents/AdsCard';
import Pegination from './AdsPageComponents/Pegination';
import { AuthContext } from '../../context/UserContext';

const AdsPage = () => {
    const { ads, fetchData, currentPage, totalPages } = useContext(AuthContext)

    return (
        <div>
            <Helmet>
                <title>Ads || PIPIL</title>
            </Helmet>
            <div className=''>
                { ads?.length > 0?
                ads.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)
                :
                <div className='min-h-[500px] flex justify-center items-center'>
                    <h1 className='text-5xl text-center'> No Post Found</h1>
                </div>
                }
            </div>

            {/* pegination part */}
            <div className='flex justify-center'>
                <Pegination fetchData={fetchData} currentPage={currentPage} totalPages={totalPages}></Pegination>
            </div>


        </div>
    );
};

export default AdsPage;