import React from 'react';
import SavedItemCard from './SavedItemCard';
import { Helmet } from 'react-helmet-async';

const SavedItems = () => {
    return (
        <div className='my-10'>
            <Helmet>
                <title>Saved Items || PIPIL</title>
            </Helmet>
            <p className='text-2xl font-bold border-b'>Saved Items</p>

            <div className='my-6 grid md:grid-cols-3 gap-6'>
                <SavedItemCard></SavedItemCard>
                <SavedItemCard></SavedItemCard>
                <SavedItemCard></SavedItemCard>
                <SavedItemCard></SavedItemCard>
                <SavedItemCard></SavedItemCard>
                <SavedItemCard></SavedItemCard>
            </div>
        </div>
    );
};

export default SavedItems;