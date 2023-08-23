import React from 'react';
import AdsCard from '../AdsPageComponents/AdsCard';

const SimilarAds = () => {
    return (
        <div className='grid md:grid-cols-2 gap-4 md:p-4'>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
            <AdsCard></AdsCard>
        </div>
    );
};

export default SimilarAds;