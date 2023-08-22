import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation()
    return (
        <div className='w-full md:min-h-[60vh]'>
            <ul class="menu md:p-2 text-lg">
                <li className={location.pathname === '/dashboard'? 'border-b  font-bold': ''}><Link to='/dashboard'>My Dashboard</Link></li>
                <li className={location.pathname === '/dashboard/settings'? 'border-b  font-bold': ''}><Link to='/dashboard/settings'>Account Settings</Link></li>
                <li className={location.pathname === '/dashboard/saveditems'? 'border-b  font-bold': ''}><Link to='/dashboard/saveditems'>Saved Items</Link></li>
            </ul>

        </div>
    );
};

export default Sidebar;