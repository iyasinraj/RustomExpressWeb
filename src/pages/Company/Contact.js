import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/UserContext';
import { toast } from 'react-hot-toast';

const Contact = () => {
    const { localUrl } = useContext(AuthContext)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        saveToDB(formData)

    };

    const saveToDB = (formData) => {
        fetch(`${localUrl}/contact`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Message Send Successfully")
                    setFormData({
                        name: '',
                        email: '',
                        message: '',
                    });
                }
            })
    };


    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>Contact Us</h1>
            </div>
            <div className="mx-auto max-w-md p-4">
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md input input-bordered"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">E-Mail</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-md input input-bordered"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="label">
                                <span className="label-text">Type your message here</span>
                            </label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full h-60 px-4 py-2 border rounded-md textarea textarea-bordered textarea-lg"
                                required
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-4 py-2 rounded-md bg-base-200 hover:bg-base-300 font-bold transition duration-300"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;