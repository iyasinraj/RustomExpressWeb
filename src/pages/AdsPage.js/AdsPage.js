import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdsCard from './AdsPageComponents/AdsCard';
import Pegination from './AdsPageComponents/Pegination';
import { AuthContext } from '../../context/UserContext';

const AdsPage = () => {
    const { ads, adsLoading, fetchData, currentPage, totalPages } = useContext(AuthContext)
    

    return (
        <div>
            <Helmet>
                <title>Ads || RustomExpress</title>
            </Helmet>
            <div className=''>
                {adsLoading ?
                    (
                        <div className="h-screen w-full flex justify-center items-center">
                            <span className="loading loading-dots loading-lg"></span>
                        </div>)
                    : ads?.length > 0 ?
                        ads.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)
                        :
                        (
                            <div className='min-h-[500px] flex justify-center items-center'>
                                <h1 className='text-5xl text-center'> No Post Found</h1>
                            </div>
                        )
                }
            </div>

            {/* pegination part */}
            {
                totalPages > 1 &&
                <div className='flex justify-center'>
                    <Pegination fetchData={fetchData} currentPage={currentPage} totalPages={totalPages}></Pegination>
                </div>
            }


        </div>
    );
};

export default AdsPage;