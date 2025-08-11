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
        </>
    )
}

export default Reservation