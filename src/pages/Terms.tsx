import './css/Terms.css'

const Terms = () => {
    return (
        <>
            <main className='terms-main'>
                <h1 className="terms-main-title">Terms of Use</h1>
                <p className="terms-main-desc">
                    These Terms of Use ("Terms") govern your use of the Platieu website
                    and its related services. By accessing or using our website, you agree
                    to be legally bound by these Terms.
                </p>
                <div className="terms-main-info d-f align-center">
                    <p>Update</p>
                    <div className="ellipse"></div>
                    <p>Effective Date: 30 May 2025</p>
                    <div className="ellipse"></div>
                    <p>10.45 PM</p>
                </div>
            </main>
            <div className="terms-content d-f">
                <div>
                    <h4 className="terms-bl-title">1. Eligibility</h4>
                    <p className="terms-bl-desc">
                        You must be at least 18 years old to make a reservation
                        or interact with payment services through our website.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">2. Reservation & Deposit Policy</h4>
                    <p className="terms-bl-desc">
                        To confirm a reservation at Platieu, a non-refundable deposit of $25 is required.
                        This helps ensure seating availability and avoid last-minute <br /> cancellations.
                    </p>
                    <p className="terms-bl-desc" style={{ marginTop: "20px" }}>
                        Upload of deposit proof is mandatory and must clearly show the transaction reference.
                        Reservations without confirmed deposits may be canceled.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">3. Cancellation & Refund</h4>
                    <ul className="terms-bl-sublist">
                        <li>Cancellations made at least 24 hours in advance are eligible for a refund.</li>
                        <li>Late cancellations or no-shows will forfeit the deposit.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="terms-bl-title">4. User Conduct</h4>
                    <p className="terms-bl-desc">Users agree to:</p>
                    <ul className="terms-bl-sublist">
                        <li>Provide accurate, current, and complete information.</li>
                        <li>Refrain from illegal or unauthorized use of the website.</li>
                        <li>Not upload harmful, defamatory, or offensive content.</li>
                    </ul>
                </div>
                <div>
                    <h4 className="terms-bl-title">5. Intellectual Property</h4>
                    <p className="terms-bl-desc">
                        All content on the Platieu website (text, logos, images, menu items,
                        layouts, and branding) is protected by copyright laws and may not
                        be reused <br /> without permission.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">6. Website Availability</h4>
                    <p className="terms-bl-desc">
                        We strive to keep our website available at all times, but
                        we do not guarantee uninterrupted access. Maintenance, updates,
                        or technical issues may cause temporary disruptions.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">7. Limitation of Liability</h4>
                    <p className="terms-bl-desc">
                        Platieu shall not be liable for any indirect, incidental,
                        or consequential damages arising out of your use of our services.
                        Our liability is limited to the amount you paid (if any) for services rendered.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">8. Modifications to Terms</h4>
                    <p className="terms-bl-desc">
                        We reserve the right to update or modify these Terms at any time.
                        Changes will be posted on this page with an updated date. Continued
                        use of the website after changes constitutes your acceptance of the new Terms.
                    </p>
                </div>
                <div>
                    <h4 className="terms-bl-title">9. Governing Law</h4>
                    <p className="terms-bl-desc">These Terms are governed by and construed under the laws of France.</p>
                </div>
                <div>
                    <h4 className="terms-bl-title">Contact Us</h4>
                    <p className="terms-bl-desc">
                        For any questions about these Terms, contact us: Platieu Legal Department <br />
                        Email: <a href="mailto:legal@platieu.com" className='terms-bl-mail'>legal@platieu.com</a> <br />
                        Address: <span className='terms-bl-address'>12 Rue de Paris, 75001 Paris, France</span> 
                    </p>
                </div>
            </div>
        </>
    )
}

export default Terms