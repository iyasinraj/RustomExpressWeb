import React from 'react';
import { Link } from 'react-router-dom';

const Cookies = () => {
    return (
        <div className='my-8 text-justify px-4'>
            <div className='flex justify-center my-4'>
                <h1 className='text-center uppercase font-bold text-2xl border-b-2 w-1/2'>Cookie Policy</h1>
            </div>
            <div>
                <p>
                    At <span className='font-bold'><Link to={'/'}>RustomExpress.com</Link></span>,
                    we use cookies and similar tracking technologies to enhance your browsing experience.
                    This Cookie Policy explains what cookies are, how we use them, and your choices regarding their use.
                </p>
                <h2 className='font-bold my-4'>
                    1. What Are Cookies?
                </h2>
                <p>
                    Cookies are small text files that are stored on your device when you visit a website. They help websites recognize your device and remember your preferences, settings, and login information.
                </p>

                <h2 className='font-bold my-4'>
                    2. How We Use Cookies
                </h2>
                <p>
                    2.1. Essential Cookies: These cookies are necessary for the basic functioning of our Website. They enable you to navigate the site, use its features, and access secure areas. Without these cookies, our Website may not function properly.
                    <br />
                    2.2. Performance Cookies: We use performance cookies to collect information about how you interact with our Website. This information is used to improve the Website's performance and user experience.
                    <br />
                    2.3. Functionality Cookies: These cookies allow our Website to remember your preferences and settings (such as language and location) to provide you with a more personalized experience.
                    <br />
                    2.4. Analytics Cookies: We use third-party analytics services (e.g., Google Analytics) to collect data about how users interact with our Website. This information helps us analyze user behavior and improve our services.
                    <br />
                    2.5. Advertising Cookies: We may use advertising cookies to deliver targeted advertisements to you based on your interests and browsing behavior. These cookies are placed by third-party advertising networks.
                </p>

                <h2 className='font-bold my-4'>
                    3. Your Choices
                </h2>
                <p>
                    3.1. Cookie Consent: By using our Website, you consent to the use of cookies as described in this Cookie Policy. You can manage your cookie preferences through your browser settings.
                    <br />
                    3.2. Browser Settings: Most web browsers allow you to control cookies through their settings. You can choose to block or delete cookies, or configure your browser to alert you when cookies are being used. However, please note that blocking or disabling cookies may impact your ability to use certain features of our Website.
                    <br />
                    3.3. Opt-Out: You can opt out of certain third-party advertising cookies by visiting the Network Advertising Initiative's
                     Opt-Out page.
                </p>

                <h2 className='font-bold my-4'>
                    4. Third-Party Cookies
                </h2>
                <p>
                    4.1. Our Website may include content and features from third parties (e.g., social media plugins) that may set their own cookies. We do not have control over these cookies, and their use is subject to the third party's privacy policies and cookie policies.
                </p>
                <h2 className='font-bold my-4'>
                    5. Changes to this Cookie Policy
                </h2>
                <p>
                    5.1. We may update this Cookie Policy to reflect changes in our use of cookies. Any changes will be posted on this page with a revised "Last Updated" date.
                </p>
                <h2 className='font-bold my-4'>
                    6. Contact Us
                </h2>
                <p>
                    6.1. If you have any questions or concerns about our Cookie Policy, please <span className='font-bold'><Link to={'/contact'}>contact us</Link></span>.
                </p>
            </div>
        </div>
    );
};

export default Cookies;