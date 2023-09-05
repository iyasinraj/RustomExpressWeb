import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../context/UserContext';
import AdsCard from '../../AdsPage.js/AdsPageComponents/AdsCard';

const SavedItems = () => {
    const { dbUser, localUrl, adsLoading, setAdsLoading } = useContext(AuthContext)
    const [ads, setAds] = useState([]);

    useEffect(() => {
        setAdsLoading(true);

        const loadSavedAds = async () => {
            try {
                const newDataList = [];
                const ids = dbUser.likedAds;

                for (const id of ids) {
                    const response = await fetch(`${localUrl}/ad/${id}`);
                    if (!response.ok) {
                        throw new Error(`Error fetching data for ID: ${id}`);
                    }
                    const data = await response.json();
                    newDataList.push(data);
                }

                setAds(newDataList);
                setAdsLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setAdsLoading(false);
            }
        };

        loadSavedAds();
    }, [dbUser.likedAds, localUrl, setAdsLoading]);




    return (
        <div className=''>
            <Helmet>
                <title>Saved Items || RustomExpress</title>
            </Helmet>
            <p className='md:text-2xl font-bold border-b'>Saved Items</p>

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
                                <h1 className='text-5xl text-center'> No Save Post Found</h1>
                            </div>
                        )
                }
            </div>
        </div>
    );
};

export default SavedItems;