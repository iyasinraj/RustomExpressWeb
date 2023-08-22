import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import SelectLocatoinModal from '../components/Home/SelectLocation/SelectLocatoinModal';

const AdsPageLayout = () => {
    return (
        <div>
            <div className='mx-auto max-w-screen-xl'>
                <Navbar></Navbar>
                <div className='my-20 rounded-xl shadow-2xl'>
                    <div className="flex justify-center">
                        <div className='my-4 flex items-center'>
                            <SelectLocatoinModal></SelectLocatoinModal>
                            <div className='flex ms-6'>
                                <input className='me-2 text-xs md:text-lg border w-full ps-2 py-2 rounded-md' type="text" placeholder='What are you looking for?' />
                                <button className='btn'>search</button>
                            </div>
                        </div>
                    </div>
                    <div className='md:flex w-full mx-auto'>
                        <div className=' hidden lg:block md:w-2/12 md:p-2'>
                            <div>
                                <p className='text-center'>shorts list</p>
                            </div>
                        </div>
                        <div className='md:w-10/12 md:border-s p-4'>
                            <Outlet></Outlet>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mx-auto max-w-screen-xl'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AdsPageLayout;