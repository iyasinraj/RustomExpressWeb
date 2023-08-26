import React from 'react';
import { Link } from 'react-router-dom';

const LoginCard = ({ setMethod }) => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-96 lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <p className="py-6">Don't have any account? <Link className='font-bold' onClick={() => setMethod(false)}>Register Now</Link></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>

                        <div className='w-full'>
                            <h1 className='text-center my-4'>Or countinue with</h1>
                            <hr />
                            <div className='mt-4 px-4 flex justify-between'>
                                <h1><Link>Google</Link></h1>
                                <h1><Link>Facebook</Link></h1>
                                <h1><Link>GitHub</Link></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;