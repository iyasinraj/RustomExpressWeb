import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../context/UserContext';
import MyAdsCard from './AdsPageLayoutComponents/MyAdsCard';

const Dashboard = () => {
    const { dbUser, user, localUrl } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const email = user.email
    const [myAds, setMyAds] = useState([])
    useEffect(() => {
        setLoading(true)
        fetch(`${localUrl}/ads/${email}`)
            .then(res => res.json())
            .then(data => {
                setMyAds(data)
                setLoading(false)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }, [localUrl, email])
    return (
        <div>
            <Helmet>
                <title>Dashboard || RustomExpress</title>
            </Helmet>
            <div className='text-end font-bold md:text-2xl border-b'>
                <p>{dbUser?.name ? `Welcome ${dbUser?.name}` : `Welcome ${user?.displayName}`}</p>
            </div>
            <div className='my-6'>
                <p className='text-center md:text-2xl font-bold'>My Ads</p>
                <div className='grid gap-4'>
                    <div className='h-full'>
                        {loading ? (
                            <div className="h-screen w-full flex justify-center items-center">
                                <span className="loading loading-dots loading-lg"></span>
                            </div>
                        ) : myAds.length > 0 ? (
                            <div className="grid gap-4">
                                {
                                    myAds.map(ad => <MyAdsCard key={ad._id} singleAd={ad}></MyAdsCard>)
                                }
                            </div>
                        ) : (
                            <div className="h-[500px] flex justify-center items-center">
                                <p className="text-center text-2xl">You don't have any post.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;