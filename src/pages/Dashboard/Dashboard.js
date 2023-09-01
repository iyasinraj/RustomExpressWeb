import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../context/UserContext';
import AdsCard from '../AdsPage.js/AdsPageComponents/AdsCard';

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
                <title>Dashboard || PIPIL</title>
            </Helmet>
            <div className='text-end font-bold md:text-2xl border-b'>
                <p>{user?.displayName ? `Welcome ${user?.displayName}` : `Welcome ${dbUser?.name}`}</p>
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
                                    myAds.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)
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