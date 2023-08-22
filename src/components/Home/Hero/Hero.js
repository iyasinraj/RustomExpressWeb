import React from 'react';
import SelectLocatoinModal from '../SelectLocation/SelectLocatoinModal';

const Hero = () => {
    return (
        <div className="h-80 flex justify-center items-center">
            <div className='w-10/12 md:w-6/12'>
                <SelectLocatoinModal></SelectLocatoinModal>
                <div className='flex mt-6'>
                    <input className='me-2 text-xs md:text-lg border w-full ps-2 py-2 rounded-md' type="text" placeholder='What are you looking for?' />
                    <button className='btn'>search</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;