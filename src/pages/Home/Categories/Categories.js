import React, { useContext } from 'react';
import { AuthContext } from '../../../context/UserContext';
import Category from './Category';

const Categories = () => {
    const { categories } = useContext(AuthContext)

    return (
        <div className='md:h-80 flex justify-center items-center'>
            <ul className='px-4 gap-2 flex basis-5/6 md:basis-auto overflow-auto md:min-h-[300px] md:grid md:gap-10 md:grid-cols-5'>
                {
                    categories.map(category => <Category key={category.id} category={category}></Category>)
                }
            </ul>
        </div>
    );
};

export default Categories;