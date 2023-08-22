import React from 'react';
import MyAdsCard from './MyAdsCard';
import { Helmet } from 'react-helmet-async';

const Dashboard = () => {
    return (
        <div>
            <Helmet>
                <title>Dashboard || PIPIL</title>
            </Helmet>
            <div className='text-end font-bold md:text-2xl border-b'>
                <p>Welcome User</p>
            </div>
            <div className='my-6'>
                <p className='text-center md:text-2xl font-bold'>My Ads</p>
                <div className='grid gap-4'>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                    <MyAdsCard></MyAdsCard>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;