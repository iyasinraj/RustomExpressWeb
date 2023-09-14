import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';

const LoginCard = ({ setMethod }) => {
    const { register, handleSubmit } = useForm()
    const { userLogin, googlePopUpLogin, localUrl } = useContext(AuthContext)
    const [loginError, setLoginError] = useState('')
    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const handleLogin = async (data) => {
        try {
            setLoginError('');
            const result = await userLogin(data.email, data.password);
            const user = result.user;
            toast.success('Log in Successfully');
            // close modal
            const modalCheckbox = document.getElementById('login_modal');
            if (modalCheckbox) {
                modalCheckbox.checked = false;
            }
            navigate(from, { replace: true });
        } catch (error) {
            setLoginError(error.message.split('/')[1]);
        }
    };


    const handleGooglePopUpLogin = async () => {
        try {
            const result = await googlePopUpLogin();
            const user = result.user;
            saveUser(user.displayName, user.email, '')
            // close modal
            const modalCheckbox = document.getElementById('login_modal');
            if (modalCheckbox) {
                modalCheckbox.checked = false;
            }
            toast.success('Login successful');
        } catch (err) {
            // console.log(err);
            setLoginError(err.message.split('/')[1]);
        }
    };

    const saveUser = (name, email, number) => {
        const user = {
            name: name,
            email: email,
            mobile: number,
            profile: '',
            status: 'active',
            role: 'user',
            likedAds: [],
            createdAt: Date.now()
        }
        fetch(`${localUrl}/userlogin`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-96 lg:text-left">
                    <h1 className="text-4xl font-bold">Login now!</h1>
                    <p className="py-6">Don't have any account? <Link className='font-bold' onClick={() => setMethod(false)}>Register Now</Link></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">

                        <form action=""
                            onSubmit={handleSubmit(handleLogin)}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" {...register("password", { required: true })} className="input input-bordered" required />
                                <label className="label">
                                    <Link className="label-text-alt link link-hover">Forgot password?</Link>
                                </label>
                            </div>
                            {loginError && <p className='text-red-500 font-bold'>{`(${loginError}`}</p>}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <div className='w-full'>
                            <div className='divider'>Or countinue with</div>
                            <div className='mt-4 px-4 flex justify-between'>
                                <h1 onClick={handleGooglePopUpLogin} className='w-full text-center bg-base-200 p-2 rounded-md'><Link>Google</Link></h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginCard;