import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>Terms of Use</h1>
            </div>
            <div>
                <p>
                    Welcome to <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>.
                    Please read these <span className='font-bold'>(Terms of Use)</span> carefully before using our services.
                    By accessing or using the Website,
                    you agree to be bound by these Terms.
                    If you do not agree to these Terms,
                    please do not use our Website.
                </p>
                <h2 className='font-bold my-4'>
                    1. Acceptance of Terms
                </h2>
                <p>
                    By using <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>,
                    you agree to comply with and be legally bound by these Terms.
                    If you do not agree with these Terms, you should not use our services.
                </p>


                <h2 className='font-bold my-4'>
                    2. User Registration
                </h2>
                <p>
                    2.1. You may use our Website without registering; however, some features may require registration.
                    <br />
                    2.2. When registering, you must provide accurate, current, and complete information.
                    <br />
                    2.3. You are responsible for maintaining the confidentiality of your account and password and for all activities that occur under your account.
                </p>

                <h2 className='font-bold my-4'>
                    3. User-Generated Content
                </h2>
                <p>
                    3.1. Users may post products or services for sale on the Website.
                    <br />
                    3.2. Users are solely responsible for the accuracy, quality, legality, and appropriateness of their content.
                    <br />
                    3.3. You grant RustomExpress.com a non-exclusive, worldwide, royalty-free license to use, reproduce, modify, and distribute your content on the Website.
                    <br />
                    3.4. We reserve the right to remove or modify any user-generated content that violates these Terms or is deemed inappropriate.
                </p>

                <h2 className='font-bold my-4'>
                    4. Prohibited Activities
                </h2>
                <p>
                    4.1. You agree not to use our Website for any unlawful or prohibited purpose.
                    <br />
                    4.2. Prohibited activities include, but are not limited to, posting fraudulent, misleading, or illegal content, spamming, and violating the rights of others.
                </p>

                <h2 className='font-bold my-4'>
                    5. Privacy
                </h2>
                <p>
                    5.1. Your use of the Website is also governed by our Privacy Policy.
                    <br />
                    5.2. By using the Website, you consent to the collection and use of your information as described in our Privacy Policy.
                </p>

                <h2 className='font-bold my-4'>
                    6. Intellectual Property
                </h2>
                <p>
                    6.1. All content and materials on the Website, including text, graphics, logos, and images, are owned by or licensed to RustomExpress.com and are protected by copyright and other intellectual property laws.
                    <br />
                    6.2. You may not reproduce, distribute, or create derivative works from the Website's content without our prior written consent.
                </p>


                <h2 className='font-bold my-4'>
                    7. Termination
                </h2>
                <p>
                    We reserve the right to terminate or suspend your account and access to the Website, with or without cause, at our discretion.
                </p>

                <h2 className='font-bold my-4'>
                    8. Limitation of Liability
                </h2>
                <p>
                    8.1. RustomExpress.com is not responsible for any user-generated content or actions of users on the Website.
                    <br />
                    8.2. We do not guarantee the accuracy, completeness, or availability of content and services on the Website.
                    <br />
                    8.3. You use the Website at your own risk.
                </p>


                <h2 className='font-bold my-4'>
                    9. Indemnification
                </h2>
                <p>
                    You agree to indemnify and hold RustomExpress.com, its affiliates, officers, employees, and agents harmless from any claims, liabilities, damages, or expenses arising out of your use of the Website or violation of these Terms.
                </p>

                <h2 className='font-bold my-4'>
                    10. Changes to Terms
                </h2>
                <p>
                    We may revise these Terms at any time. The most current version will be available on the Website. Your continued use of the Website after any changes constitute your acceptance of the revised Terms.
                </p>

                <h2 className='font-bold my-4'>
                    11. Governing Law
                </h2>
                <p>
                    These Terms are governed by the laws of Bangladesh, without regard to its conflict of law principles.
                </p>

                <h2 className='font-bold my-4'>
                    12. Contact Information
                </h2>
                <p>
                    For questions or concerns about these Terms, please <span className='font-bold'><Link to={'/contact'}>contact us</Link></span>.
                </p>
            </div>
        </div>
    );
};

export default Terms;