import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className='w-full md:min-h-[60vh]'>
            <ul className="menu grid grid-cols-3 justify-items-center md:block md:p-2 text-[10px] md:text-lg">
                <li className={location.pathname === '/dashboard'? 'bg-base-200 rounded-md border-b  font-bold': ''}><Link className='text-center' to='/dashboard'>My Dashboard</Link></li>
                <li className={location.pathname === '/dashboard/settings'? 'bg-base-200 rounded-md border-b  font-bold': ''}><Link className='text-center' to='/dashboard/settings'>Account Settings</Link></li>
                <li className={location.pathname === '/dashboard/saveditems'? 'bg-base-200 rounded-md border-b  font-bold': ''}><Link className='text-center' to='/dashboard/saveditems'>Saved Items</Link></li>
            </ul>

        </div>
    );
};

export default Sidebar;