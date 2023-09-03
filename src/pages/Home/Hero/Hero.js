import React, { useContext } from 'react';
import SelectLocatoinModal from '../SelectLocation/SelectLocatoinModal';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const Hero = () => {
    const {handleSearch} = useContext(AuthContext)
    
    return (
        <div className="h-80 flex justify-center items-center">
            <div className='w-10/12 md:w-6/12'>
                <SelectLocatoinModal></SelectLocatoinModal>
                <div className='flex mt-6'>
                    <input onChange={handleSearch} className='me-2 text-xs md:text-lg border w-full ps-2 py-2 rounded-md' type="text" placeholder='What are you looking for?' />
                    <button className='btn'><Link to='/ads'>search</Link></button>
                </div>
            </div>
        </div>
    );
};

export default Hero;