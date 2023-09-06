import { Icon } from '@iconify/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/UserContext';

const Category = ({category}) => {
    const {name, icon} = category 
    const {setCategoryName, localUrl} = useContext(AuthContext)
    const [items, setItems] = useState([])
    const navigate = useNavigate()
    const goto = async () => {
       await setCategoryName(name)
       await navigate('/ads')
    }
    useEffect( () => {
        fetch(`${localUrl}/ads?category=${name}`)
        .then(res => res.json())
        .then(data => {
            console.log(data.items)
            setItems(data.items)
        })
    },[localUrl, name])
    return (
        <li onClick={goto}><Link>
            <div className='flex items-center w-[150px]'>
                <Icon icon={icon} width="100" height="100" />
                <div className='w-4/5 ms-2'>
                    <p className='font-bold'>{name}</p>
                    <p>{items?.length} ads</p>
                </div>
            </div>
        </Link></li>
    );
};

export default Category;