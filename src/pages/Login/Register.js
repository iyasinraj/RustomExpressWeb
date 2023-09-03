import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';

const Register = ({ setMethod }) => {
    const { register, handleSubmit } = useForm()
    const { createUser, updateUser, googlePopUpLogin, localUrl } = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const handleRegister = (data) => {
        setSignUpError('')
        createUser(data.email, data.password)
            .then(result => {
                // const user = result.user
                toast.success('Account created successfully')
                saveUser(data.name, data.email, data.number)

                // add name
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                    })
                    .catch(error => {
                        setSignUpError(error.message.split('/')[1])
                    })

                // close modal
                const modalCheckbox = document.getElementById('login_modal');
                if (modalCheckbox) {
                    modalCheckbox.checked = false;
                }
            })
            .catch(err => {
                setSignUpError(err.message.split('/')[1])
            })
    }
    const handleGooglePopUpLogin = () => {
        googlePopUpLogin()
            .then(result => {
                const user = result.user
                saveUser(user.displayName, user.email, '')
                // close modal
                const modalCheckbox = document.getElementById('login_modal');
                if (modalCheckbox) {
                    modalCheckbox.checked = false;
                }
                toast.success('Account created successfully')

            })
            .catch(err => {
                console.log(err)
                setSignUpError(err.message.split('/')[1])
            })

    }
    const saveUser = (name, email, number) => {
        const user = {
            name: name,
            email: email,
            mobile: number,
            profile: '' ,
            status: 'active',
            role: 'user',
            likedAds: [],
            createdAt: Date.now()
        }
        fetch(`${localUrl}/users`, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            
        })
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:w-96 lg:text-left">
                    <h1 className="text-4xl font-bold">Register now!</h1>
                    <p className="py-6">Already have an account <Link className='font-bold' onClick={() => setMethod(true)}>Login Now</Link></p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form action="" onSubmit={handleSubmit(handleRegister)}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name *</span>
                                </label>
                                <input type="text" {...register("name", { required: true, maxLength: 20 })}
                                className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">E-mail *</span>
                                </label>
                                <input type="email" {...register("email", { required: true })} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile *</span>
                                </label>
                                <input type="number" {...register("number", { required: true, minLength: 11, maxminLength: 14 })} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password *</span>
                                </label>
                                <input type="password" {...register("password", { required: true, minLength: 6 })} placeholder='minmum 6 character or longer.' className="input input-bordered" required />
                            </div>
                            {signUpError && <p className='text-red-500 font-bold'>{`(${signUpError}`}</p>}
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Register</button>
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
   
export default Register;