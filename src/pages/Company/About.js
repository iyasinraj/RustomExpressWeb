import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>About Us</h1>
            </div>
            <div>
                <p>
                    Welcome to <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>.
                    your trusted online marketplace for all your buying and selling needs in Bangladesh. We are dedicated to providing a seamless and user-friendly platform where individuals and businesses can connect, trade, and discover a world of possibilities.
                </p>
                <h2 className='font-bold my-4'>
                    Our Mission
                </h2>
                <p>
                    At <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>,
                    our mission is to empower individuals and businesses across Bangladesh by providing
                    them with a robust online marketplace.
                    We strive to create an inclusive and innovative space where you can sell your
                    products or services, find unique items, and reach a wider audience,
                    all while enjoying a safe and convenient shopping experience.
                </p>
                <h2 className='font-bold my-4'>
                    Why Choose RustomExpress.com?
                </h2>
                <p>
                    <b>Free and Unlimited Listings:</b> We believe that everyone should have the opportunity to showcase their offerings. That's why we offer free and unlimited listings for your products and services, allowing you to grow your online presence without constraints.
                    <br />
                    <b>Local and Global Reach:</b> Whether you're a local artisan or a multinational corporation, our platform connects you with potential customers.
                    <br />
                    <b>User-Focused Experience:</b> We prioritize user experience and strive to make our platform easy to navigate, whether you're a seasoned online shopper or new to e-commerce. Our user-friendly interface ensures a hassle-free experience.
                </p>

                <h2 className='font-bold my-4'>
                    Our Team
                </h2>
                <p>
                    Behind <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span> is
                    a dedicated team of professionals who are passionate about marketplace, e-commerce and technology.
                    We work tirelessly to improve and expand our platform, ensuring that it meets the evolving needs
                    of our users.
                </p>
                <h2 className='font-bold my-4'>
                    Get in Touch
                </h2>
                <p>
                    Have questions, suggestions, or feedback? We value your input and are here to assist you. 
                    Don't hesitate to reach out to us at through our 
                    <span className='font-bold'><Link to={'/contact'}>"Contact Us"</Link></span> page.
                </p>
                <p>
                    Thank you for choosing <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span> 
                    as your trusted online marketplace. We look forward to serving you and helping you achieve your buying and selling goals.
                </p>
            </div>
        </div>
    );
};

export default About;