import React, { useState } from 'react';
import LoginCard from './LoginCard';
import Register from './Register';

const Login = () => {
    const [method, setMethod] = useState(true)

    return (
        <div>
            <input type="checkbox" id="login_modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-3xl">

                    {
                        method ? 
                        <LoginCard setMethod={setMethod}></LoginCard>
                        :
                        <Register setMethod={setMethod}></Register>
                    }


                    <div className="modal-action">
                        <label htmlFor="login_modal" className="btn">Close!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;