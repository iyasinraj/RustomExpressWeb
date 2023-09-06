import React, { useContext } from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import SelectLocatoinModal from '../pages/Home/SelectLocation/SelectLocatoinModal';
import Filter from '../pages/Dashboard/AdsPageLayoutComponents/Filter';
import { AuthContext } from '../context/UserContext';
import { Icon } from '@iconify/react';

const AdsPageLayout = () => {
    const { handleSearch, locationIcon, location } = useContext(AuthContext)
    return (
        <div>
            <div className='mx-auto max-w-screen-xl'>
                <Navbar></Navbar>
                <div className='my-20 rounded-xl shadow-2xl'>
                    <div className="flex justify-center">
                        <div className='my-4 flex items-center'>
                            <div>
                                <div className="drawer md:hidden">
                                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                                    <div className="drawer-content">
                                        {/* Page content here */}
                                        <label htmlFor="my-drawer" className="btn drawer-button shadow-none border-none bg-base-100 font-bold grid grid-cols-3 gap-0">
                                            <span className='col-span-1'><Icon icon="ion:filter" width="24" height="24" /></span>
                                            <span className='col-span-2 pe-4'>Categories</span>
                                        </label>
                                    </div>
                                    <div className="drawer-side">
                                        <label htmlFor="my-drawer" className="drawer-overlay"></label>
                                        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                            {/* Sidebar content here */}
                                            <Filter></Filter>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <label htmlFor="location_modal" className="md:text-2xl font-semibold hover:font-bold flex items-center justify-center">{locationIcon} <span>{location}</span></label>
                            <SelectLocatoinModal></SelectLocatoinModal>
                            <div className='flex ms-1 md:ms-6'>
                                <input onChange={handleSearch} className='me-2 text-xs md:text-lg border w-full ps-2 py-2 rounded-md' type="text" placeholder='What are you looking for?' />
                            </div>
                        </div>
                    </div>
                    <div className='md:flex w-full mx-auto'>
                        <div className=' hidden lg:block md:w-3/12 md:p-2'>
                            <div className='px-4'>
                                <Filter></Filter>
                            </div>
                        </div>
                        <div className='md:w-9/12 md:border-s p-4'>
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