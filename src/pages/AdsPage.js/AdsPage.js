import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import AdsCard from './AdsPageComponents/AdsCard';
import Pegination from './AdsPageComponents/Pegination';
import { AuthContext } from '../../context/UserContext';

const AdsPage = () => {
    const { ads } = useContext(AuthContext)
    return (
        <div>
            <Helmet>
                <title>Ads || PIPIL</title>
            </Helmet>
            {
                ads.map(ad => <AdsCard key={ad._id} singleAd={ad}></AdsCard>)
            }
            <div className='flex justify-center'>
                <Pegination></Pegination>
            </div>
        </div>
    );
};

export default AdsPage;