import React, { useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../context/UserContext';
import AdsCard from '../AdsPage.js/AdsPageComponents/AdsCard';

const Dashboard = () => {
    const {user, localUrl} = useContext(AuthContext)
    const email = user.email
    const [myAds, setMyAds] = useState([])
    useEffect(() => {
        fetch(`${localUrl}/ads/${email}`)
            .then(res => res.json())
            .then(data => setMyAds(data))
            .catch(error => console.error(error))
        }, [localUrl, email])
    return (
        <div>
            <Helmet>
                <title>Dashboard || PIPIL</title>
            </Helmet>
            <div className='text-end font-bold md:text-2xl border-b'>
                <p>{user.displayName? `Welcome ${user.displayName}`:`Welcome User`}</p>
            </div>
            <div className='my-6'>
                <p className='text-center md:text-2xl font-bold'>My Ads</p>
                <div className='grid gap-4'>
                    {
                        myAds.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Dashboard;