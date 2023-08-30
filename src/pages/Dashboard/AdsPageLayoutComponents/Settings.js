import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../../context/UserContext';

const Settings = () => {
    const {user, logOut} = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
        .then( ()=> {})
        .catch(error => {})
    }
    return (
        <div>
            <Helmet>
                <title>Settings || PIPIL</title>
            </Helmet>
            <h2 className='md:text-2xl font-bold border-b'>Settings</h2>
            <div className='my-6 text-lg font-bold'>

                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='flex items-center mb-4'>
                        <p>Name: </p>
                        <input type="text" placeholder="Type here" className="ms-4 input input-bordered w-full" />
                    </div>

                    <div className='flex items-center mb-4'>
                        <p>Phone: </p>
                        <input type="text" placeholder="Type here" className="ms-4 input input-bordered w-full" />
                    </div>

                    <div className='flex items-center mb-4'>
                        <p>E_Mail: </p>
                        <input type="email" placeholder={user.email} className="ms-4 input input-bordered w-full" readOnly/>
                    </div>

                    <div className='flex items-center mb-4'>
                        <p>Location: </p>
                        <select className="ms-4 select select-bordered w-full">
                            <option disabled selected>Select Division</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                        <select className="ms-4 select select-bordered w-full">
                            <option disabled selected>Select State</option>
                            <option>Han Solo</option>
                            <option>Greedo</option>
                        </select>
                    </div>
                </div>
                <br />
                <button className='btn mb-12'>Update Details</button>
                <p className='text-xl font-bold mb-4'>Change Password: </p>
                <input type="text" placeholder="Current Password" className="input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" placeholder="New Password" className="my-6 input input-bordered w-full max-w-xs" />
                <br />
                <input type="text" placeholder="New Password" className="input input-bordered w-full max-w-xs" />
                <br />

                <div className='border-b'>
                    <button className='btn my-6'>Update Password</button>
                </div>

                <div className='mt-6'>
                    <button className={`btn mr-6`}>Delete Account</button>
                    <button className={`btn btn-error`} onClick={handleLogOut}>Log Out</button>
                </div>
            </div>
        </div>
    );
};

export default Settings;