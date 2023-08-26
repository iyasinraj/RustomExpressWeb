import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';

const Register = ({ setMethod }) => {
    const { register, handleSubmit } = useForm()
    const {createUser, updateUser, googlePopUpLogin} = useContext(AuthContext)
    const [signUpError, setSignUpError] = useState('')

    const handleRegister = (data) => {
        console.log(data)
        setSignUpError('')
        createUser(data.email, data.password)
        .then(result => {
            const user = result.user
            console.log(user)
            toast.success('Account created successfully')
            // close modal
            const modalCheckbox = document.getElementById('login_modal');
            if (modalCheckbox) {
                modalCheckbox.checked = false;
            }
            const userInfo = {
                displayName: data.name
            }
            updateUser(userInfo)
            .then(() => {})
            .catch(error => console.log(error))
        })
        .catch(err => {
            console.log(err)
            setSignUpError(err.message.split('/')[1])
        })
    }
    const handleGooglePopUpLogin = () => {
        googlePopUpLogin()
        .then(result => {
            const user = result.user
            console.log(user)
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
                        
                        // onSubmit={handleSubmit((data) => {

                        //     // for split location value to remove id
                        //     const divisionValue = data.division;
                        //     const divisionParts = divisionValue.split(',');
                        //     const divisionName = divisionParts[0].trim();
                        //     const stateValue = data.state;
                        //     const stateParts = stateValue.split(',');
                        //     const stateName = stateParts[0].trim();
                        //     setData(({ ...data, division: divisionName, state: stateName }));
                        //     handleRegister()
                        // })}
                        
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name *</span>
                                </label>
                                <input type="text" {...register("name", {required: true})} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">E-mail *</span>
                                </label>
                                <input type="email" {...register("email", {required: true})} className="input input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Mobile *</span>
                                </label>
                                <input type="number" {...register("number", {required: true})} className="input input-bordered" required />
                            </div>

                            {/* <div className='md:grid gap-2 md:grid-cols-2'>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select Division *</span>
                                    </label>
                                    <select className="select select-bordered w-full" {...register("division")} onChange={handleChange}>
                                        <option disabled selected value=''>Select Division</option>
                                        {
                                            divisions.map(division => <LocationOptions key={division.id} options={division}></LocationOptions>)
                                        }
                                    </select>
                                </div> */}

                            {/* <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Select State</span>
                                    </label>
                                    <select className="select select-bordered w-full" {...register("state")} onChange={handleChangeDis} >
                                        <option disabled selected value=''>Select State</option>
                                        {
                                            districts.map(district => <LocationOptions key={district.id} options={district}></LocationOptions>)
                                        }
                                    </select>
                                </div> */}

                            {/* <div className="form-control col-span-2">
                                    <label className="label">
                                        <span className="label-text">Select Area</span>
                                    </label>
                                    <select className="select select-bordered w-full" {...register("area")} onChange={handleChangeArea}>
                                        <option disabled selected value=''>Select Area</option>
                                        {
                                            areas.map(area => <option key={area.id} value={area.postOffice}>{area.postOffice + " " + area.postCode}</option>)
                                        }
                                    </select>
                                </div>
                            </div> */}

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password *</span>
                                </label>
                                <input type="password" {...register("password", {required: true})} className="input input-bordered" required />
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