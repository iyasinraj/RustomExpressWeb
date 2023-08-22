import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Shared/Footer/Footer';
import Navbar from '../components/Shared/Navbar/Navbar';

const Main = () => {
    return (
        <div>
            <div className='mx-auto max-w-screen-xl'>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
            <hr />
            <div className='mx-auto max-w-screen-xl'>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;