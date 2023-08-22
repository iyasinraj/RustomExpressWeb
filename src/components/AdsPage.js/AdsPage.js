import React from 'react';
import { Helmet } from 'react-helmet-async';
import AdsCard from './AdsPageComponents/AdsCard';
import Pegination from './AdsPageComponents/Pegination';

const AdsPage = () => {
    return (
        <div>
            <Helmet>
                <title>Ads || PIPIL</title>
            </Helmet>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <div className='flex justify-center'>
                <Pegination></Pegination>
            </div>
        </div>
    );
};

export default AdsPage;