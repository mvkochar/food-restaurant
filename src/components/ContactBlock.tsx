const ContactBlock = () => {
    return (
        <section className='home-contact d-f'>
            <form action='' className='home-contact-fm d-f'>
                <h3 className="contact-fm-title">Contact Us</h3>
                <div className="input-field">
                    <label htmlFor="contactName">Full name</label>
                    <input type="text" name='contactName' id='contactName' placeholder='Input your full name' />
                </div>
                <div className="input-field">
                    <label htmlFor="contactPhone">Phone Number</label>
                    <input type="tel" name='contactPhone' id='contactPhone' placeholder='Input your phone number' />
                </div>
                <div className="input-field">
                    <label htmlFor="contactPhone">Email</label>
                    <input type="email" name='contactEmail' id='contactEmail' placeholder='Input your working email' />
                </div>
                <div className="input-field">
                    <label htmlFor="contactRequest">Special Request</label>
                    <textarea name="contactRequest" id="contactRequest" placeholder='Input text here'></textarea>
                </div>
                <div className="check-bl d-f align-center">
                    <input type="checkbox" name="contactAgree" id="contactAgree" />
                    <label htmlFor="contactAgree">
                        By checking the box you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.
                    </label>
                </div>
                <button type="button">Send Message</button>
            </form>
            <div>
                <h2 className="home-contact-title">Craving Something <br /> Delicious?</h2>
                <p className="home-contact-desc">
                    From savory bites to sweet delights, your cravings end here.
                </p>
                <div className="home-contact-info d-f">
                    <div>
                        <h3 className="contact-info-title">Our Location</h3>
                        <div className="contact-info-item d-f">
                            <div><img src="/images/location.png" alt="Location" /></div>
                            <p className="info-item-desc">
                                21 Rue des Lilas 75001 Paris, <br /> France
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="contact-info-title">Phone Number</h3>
                        <div className="contact-info-item d-f">
                            <div><img src="/images/call.png" alt="call" /></div>
                            <p className="info-item-desc">
                                +33 6 12 34 56 78
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="contact-info-title">Email Address</h3>
                        <div className="contact-info-item d-f">
                            <div><img src="/images/sms.png" alt="sms" /></div>
                            <p className="info-item-desc">
                                hello@platieu.com
                            </p>
                        </div>
                    </div>
                    <div>
                        <h3 className="contact-info-title">Opening Hours</h3>
                        <div className="contact-info-box d-f">
                            <div className="contact-info-item d-f align-center">
                                <div><img src="/images/clock.png" alt="clock" /></div>
                                <p className="info-item-desc">
                                    Monday - Friday: 12:00 PM - <br />
                                    2:30 PM & 7:00 PM - 10:30 PM
                                </p>
                            </div>
                            <div className="contact-info-item d-f align-center">
                                <div><img src="/images/clock.png" alt="clock" /></div>
                                <p className="info-item-desc">
                                    Saturday: 7:00 PM - 11:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactBlock