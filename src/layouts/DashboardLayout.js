import React from 'react';
import Navbar from '../components/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Sidebar from '../Dashboard/Sidebar';

const DashboardLayout = () => {
    return (
        <div>
            <div className='mx-auto max-w-screen-xl'>
                <Navbar></Navbar>
                <div className='md:flex my-20 rounded-xl shadow-2xl'>
                    <div className='md:w-2/12 md:p-2'>
                        <Sidebar></Sidebar>
                    </div>
                    <div className='md:w-10/12 md:border-s p-4'>
                        <Outlet></Outlet>
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

export default DashboardLayout;