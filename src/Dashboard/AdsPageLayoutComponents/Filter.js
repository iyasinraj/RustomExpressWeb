import React from 'react';
import { Link } from 'react-router-dom';

const ShortList = () => {
    return (
        <div>
            <p className='border-b text-center text-xl font-bold bg-base-200 rounded-md'>Filter</p>
            <ul className='mt-4'>
                <li><Link>Price high to low</Link></li>
                <li><Link>Price Low to High</Link></li>
            </ul>
        </div>
    );
};

export default ShortList;