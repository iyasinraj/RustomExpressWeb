import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>Privacy policy</h1>
            </div>
            <div>
                <p>
                    At <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>,
                    we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard
                    your personal information when you use our services.
                    By accessing or using our Website, you consent to the practices described in this Privacy Policy.
                </p>
                <h2 className='font-bold my-4'>
                    1. Information We Collect
                </h2>
                <p>
                    1.1. <span className='font-bold'>Information You Provide:</span> We collect information that you voluntarily provide when
                    using our Website,
                    such as when you register an account, post content, or contact us. This information may include your name, email address,
                    phone number, and other personal details.
                    <br />
                    1.2. <span className=' font-bold'>Automatically Collected Information:</span> We may automatically collect certain
                    information when you visit our Website, including your IP address, browser type, device information, and usage data through
                    cookies and similar tracking technologies. This information is used for analytics and to improve our services.
                </p>



                <h2 className='font-bold my-4'>
                    2. How We Use Your Information
                </h2>
                <p>
                    2.1. <span className=' font-bold'> We may use your information to:</span>
                    <br />
                    - Provide and maintain our services.
                    <br />
                    - Process and fulfill your requests and transactions.
                    <br />
                    - Communicate with you, including responding to your inquiries.
                    <br />
                    - Customize and improve our Website and user experience.
                    <br />
                    - Send you updates, promotions, and other marketing materials (you can opt out at any time).
                    <br />
                    - Monitor and analyze usage patterns to enhance our services.
                    <br />
                    - Comply with legal obligations and enforce our Terms of Use.
                </p>



                <h2 className='font-bold my-4'>
                    3. Disclosure of Your Information
                </h2>

                <p>
                    3.1. <span className=' font-bold'>
                        We may share your information with:
                    </span>
                    <br />
                    - Service providers who help us operate and maintain the Website.
                    <br />
                    - Law enforcement or government authorities when required by law.
                    <br />
                    - Third parties in connection with a business merger, sale, or acquisition.
                    <br />
                    3.2.
                    We do not sell or rent your personal information to third parties for their marketing purposes.

                </p>

                <h2 className='font-bold my-4'>
                    4. Your Choices
                </h2>

                <p>
                    4.1. You can access, update, or delete your account information at any time through your account settings.
                    <br />
                    4.2. You can opt out of receiving promotional emails from us by following the instructions provided in those emails.
                    <br />
                    4.3. You can configure your browser to refuse cookies or alert you when cookies are being sent, but this may limit some features of our Website.
                </p>

                <h2 className='font-bold my-4'>
                    5. Security
                </h2>
                <p>
                    5.1. We employ reasonable security measures to protect your information from unauthorized access and use. However, no data transmission over the internet can be guaranteed to be 100% secure.
                </p>

                <h2 className='font-bold my-4'>
                    6. Children's Privacy
                </h2>

                <p>
                    6.1. Our Website is not intended for children under the age of 13. We do not knowingly collect or maintain personal information from children under 13 years of age.
                </p>

                <h2 className='font-bold my-4'>
                    7. Changes to this Privacy Policy
                </h2>
                <p>
                    7.1. We may update this Privacy Policy from time to time. Any changes will be posted on this page, and the date of the latest revision will be indicated at the top of the policy.
                </p>

                <h2 className='font-bold my-4'>
                    8. Contact Us
                </h2>
                <p>
                    8.1. If you have any questions, concerns, or requests regarding this Privacy Policy, please <span className='font-bold'><Link to={'/contact'}>contact us</Link></span>.
                </p>
            </div>
        </div>
    );
};

export default Privacy;