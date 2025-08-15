import './css/Policy.css'

const Policy = () => {
    return (
        <>
            <main className='policy-main'>
                <h1 className="policy-main-title">Privacy Policy</h1>
                <p className="policy-main-desc">
                    At Platieu, we are committed to protecting the privacy and security
                    of our customers and website visitors. This Privacy Policy describes
                    how we collect, use, and handle your personal information when you
                    access our services, including through our website and any affiliated platforms.
                </p>
                <div className="policy-main-info d-f align-center">
                    <p>Update</p>
                    <div className="ellipse"></div>
                    <p>Effective Date: 30 May 2025</p>
                    <div className="ellipse"></div>
                    <p>10.45 PM</p>
                </div>
            </main>
            <div className="policy-content d-f">
                <div>
                    <h4 className="policy-bl-title">1. Information We Collect</h4>
                    <p className="policy-bl-desc">We collect several types of information to provide and improve our services:</p>
                    <ul className="policy-bl-list">
                        <li>Personal Information:
                            <ul className="policy-bl-sublist">
                                <li>Name</li>
                                <li>Email address</li>
                                <li>Phone number</li>
                                <li>Reservation information (date, time, party size)</li>
                                <li>Payment confirmation (upload of transfer receipt or deposit proof)</li>
                            </ul>
                        </li>
                        <li>Non-Personal Information:
                            <ul className="policy-bl-sublist">
                                <li>Browser type and version</li>
                                <li>IP address</li>
                                <li>Device type</li>
                                <li>Referral URLs and on-site interactions (pages visited, clicks, etc.)</li>
                                <li>Date and time of access</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="policy-bl-title">How We Use Your Information</h4>
                    <p className="policy-bl-desc">We use the information collected to:</p>
                    <ul className="policy-bl-sublist">
                        <li>Confirm and manage your table reservations.</li>
                        <li>Process required deposits.</li>
                        <li>Respond to customer support inquiries.</li>
                        <li>Improve website functionality and user experience.</li>
                        <li>Send marketing emails (only if you opt-in).</li>
                        <li>Detect, prevent, and address technical issues or fraudulent activity.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="policy-bl-title">3. Data Sharing and Disclosure</h4>
                    <p className="policy-bl-desc">
                        We do not sell, trade, or rent your personal data to third parties.
                        However, we may share your information with:
                    </p>
                    <ul className="policy-bl-sublist">
                        <li>Payment service providers (to process deposits securely).</li>
                        <li>IT and hosting partners (to maintain and operate our website).</li>
                        <li>IT and hosting partners (to maintain and operate our website).</li>
                    </ul>
                </div>
                <div>
                    <h4 className="policy-bl-title">4. Data Storage and Security</h4>
                    <p className="policy-bl-desc">We implement strong security measures, including:</p>
                    <ul className="policy-bl-sublist">
                        <li>Encrypted storage for sensitive data.</li>
                        <li>Secure HTTPS protocol across our website.</li>
                        <li>Limited access to your data, only by authorized personnel.</li>
                    </ul>
                    <p className="policy-bl-desc">
                        Despite these measures, no digital system is 100% secure.
                        Users should always protect their devices and logins.
                    </p>
                </div>
                <div>
                    <h4 className="policy-bl-title">5. Your Rights</h4>
                    <p className="policy-bl-desc">As a user, you have the right to:</p>
                    <ul className="policy-bl-sublist">
                        <li>Access your personal data.</li>
                        <li>Request correction of inaccurate data.</li>
                        <li>Request deletion of your data.</li>
                        <li>Withdraw consent (where applicable).</li>
                    </ul>
                    <p className="policy-bl-desc">
                        To exercise these rights, contact us
                        at <a href="mailto:privacy@platieu.com" className='policy-bl-mail'>privacy@platieu.com</a>.
                    </p>
                </div>
                <div>
                    <h4 className="policy-bl-title">6. Cookies</h4>
                    <p className="policy-bl-desc">We use cookies to:</p>
                    <ul className="policy-bl-sublist">
                        <li>Remember user preferences</li>
                        <li>Analyze traffic and site performance</li>
                        <li>Improve service delivery</li>
                    </ul>
                    <p className="policy-bl-desc">
                        You can disable cookies in your browser settings,
                        but this may affect your user experience.
                    </p>
                </div>
                <div>
                    <h4 className="policy-bl-title">7. Third-Party Links</h4>
                    <p className="policy-bl-desc">
                        Our website may contain links to external websites.
                        We are not responsible for their content or privacy
                        practices. Please review their policies <br /> separately.
                    </p>
                </div>
                <div>
                    <h4 className="policy-bl-title">8. Policy Updates</h4>
                    <p className="policy-bl-desc">
                        This Privacy Policy may be updated occasionally to reflect changes 
                        in law, technology, or our services. Updates will be posted on this 
                        page with an <br /> updated revision date.
                    </p>
                </div>
                <div>
                    <h4 className="policy-bl-title">Contact Us</h4>
                    <p className="policy-bl-desc">
                        If you have questions or concerns about this Privacy Policy, 
                        please contact us at: Platieu Customer Support <br />
                        Email: <a href="mailto:contact@platieu.com" className='policy-bl-mail'>contact@platieu.com</a> <br />
                        Phone: <a href="tel:+33 1 23 45 67 89" className='policy-bl-phone'>+33 1 23 45 67 89</a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Policy