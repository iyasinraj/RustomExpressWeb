import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const ShortList = () => {
    const { categories, setCategoryName, setSubCategory, subCategories, setSubCategories, setCategoryId } = useContext(AuthContext)

    const subCatChange = async ( name, id) => {
        setCategoryName(name)
        setCategoryId(id)
        const subcat = await categories.filter(category => category.id === id)
        await setSubCategories(subcat[0].subCategories)
    }
    const setSubcat = (name) => {
        setSubCategory(name)
    }
    return (
        <div>
            <p className='border-b text-center font-bold rounded-md'>Find With Product Category</p>
            <div className='mt-4'>
                {
                    categories.map(category => <p className='my-2 font-semibold' key={category.id}
                    value={[category.name, category.id]}
                    onClick={() => subCatChange(category.name, category.id)}
                    > <Link>{category.name}</Link></p>)
                }
            </div>
            <div>
                { subCategories.length > 0 &&
                    <div>
                        <p className='border-b text-center font-bold mt-8 rounded-md'>Find With Product Sub-Category</p>
                        <div className='mt-4'>
                            {
                                subCategories.map((subCategory, i) => <p className='my-2 font-semibold' key={i} onClick={() => setSubcat(subCategory.name)}> <Link>{subCategory.name}</Link></p>)
                            }
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default ShortList;