import './css/Reservation.css'

const Reservation = () => {
    return (
        <>
            <main className='reservation-main'>
                <div><img src="/images/hero-logo.png" alt="hero-log" /></div>
                <h1 className="reservation-main-title">Reserve Your Table at Platieu</h1>
                <p className="reservation-main-desc">
                    We're excited to host you! Kindly fill out the reservation 
                    form below to secure your table. To confirm your booking, 
                    a deposit of $25 is required. Please upload proof of payment 
                    at the end of the form.
                </p>
            </main>
            <section className="reservation-contact">
                <h2 className="reservation-contact-title">Reservation Form Fields</h2>
                <form action="" className="reservation-contact-fm d-f">
                    <div className="input-bl">
                        <label htmlFor="reserveName">Full name</label>
                        <input type="text" name='reserveName' id='reserveName' placeholder='Enter your full name.' />
                    </div>
                    <div className="input-box d-f">
                        <div className="input-bl">
                            <label htmlFor="reserveEmail">Email</label>
                            <input type="email" name="reserveEmail" id="reserveEmail" placeholder="We'll send your confirmation here."/>
                        </div>
                        <div className="input-bl">
                            <label htmlFor="reservePhone">Phone Number</label>
                            <input type="tel" name="reservePhone" id="reservePhone" placeholder='So we can reach you if needed' />
                        </div>
                    </div>
                    <div className="input-box d-f">
                        <div className="input-bl">
                            <label htmlFor="reserveDate">Reservation Date</label>
                            <input type="text" name="reserveDate" id="reserveDate" placeholder='Enter the date of your visit' />
                        </div>
                         <div className="input-bl">
                            <label htmlFor="reserveTime">Reservation Time</label>
                            <input type="text" name="reserveTime" id="reserveTime" placeholder='Enter your preferred time.' />
                        </div>
                    </div>
                    <div className="input-bl">
                        <label htmlFor="reserveGuests">Number of Guests</label>
                        <input type="text" name='reserveGuests' id='reserveGuests' placeholder='Let us know how many are dining.' />
                    </div>
                    <div className="input-bl">
                        <label htmlFor="reserveRequest">Special Request</label>
                        <textarea name="reserveRequest" id="reserveRequest" placeholder='Input text here'></textarea>
                    </div>
                    <div className="check-bl d-f align-center">
                        <input type="checkbox" name="reserveAgree" id="reserveAgree" />
                        <label htmlFor="reserveAgree">
                            By checking the box you agree to our <a href="">Terms of Service</a> and <a href="">Privacy Policy</a>.
                        </label>
                    </div>
                    <button type="button">Send Message</button>
                </form>
            </section>
        </>
    )
}

export default Reservation