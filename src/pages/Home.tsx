import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { FaqItem, ProductsItem } from '../components'
import ProductsList from '../db/ProductsList'
import './css/Home.css'
import FaqItemsList from '../db/FaqItemsList';

const Home = () => {
  return (
    <>
      <main className="home-main">
        <div className="home-main-union"><img src="/images/hero-logo.png" alt="hero-logo" /></div>
        <h3 className="home-main-above">Welcome to our restaurant</h3>
        <p className="home-main-desc">
          Savor exquisite culinary creations prepared with fresh, local ingredients.
          Each dish celebrates vibrant flavors, presented in an ambiance of sophistication.
          Join us for an unforgettable dining experience where every bite tells a story.
        </p>
        <div className="home-main-actions d-f">
          <a href="" className="home-main-menu">Our Menu</a>
          <a href="" className="home-main-reserve">Reserve a Seat</a>
        </div>
      </main>
      <section className='home-about d-f'>

        <h2 className="home-about-title">Our Company</h2>
        <div>
          <div className="home-about-text d-f">
            <p className="home-about-desc">
              Since its opening, the Restaurant has become a place where taste,
              quality, and dining experience unite in harmony. We are here with
              a passion for serving delicious food made from the finest fresh
              ingredients, combined with a touch of love and creativity from our kitchen.
            </p>
            <p className="home-about-desc">
              We believe that food is not just a means to fill the stomach,
              but a part of the story, happiness, and togetherness. That's
              why every dish at the Restaurant is prepared with great care,
              to create special moments for you and your loved ones.
            </p>
          </div>
          <div className="home-about-stats d-f">
            <dl>
              <dt>10+ years</dt>
              <dd>of Culinary Excellence</dd>
            </dl>
            <dl>
              <dt>5 awards</dt>
              <dd>Winning Chefs</dd>
            </dl>
            <dl>
              <dt>4.9/5</dt>
              <dd>Customer Rating on Average</dd>
            </dl>
          </div>
          <div className="home-about-images d-f">
            <div><img src="/images/home-about1.png" alt="home-about1" /></div>
            <div><img src="/images/home-about2.png" alt="home-about2" /></div>
          </div>
        </div>
      </section>
      <section className='home-menu'>
        <h2 className="home-menu-title text-center">Chef's Favorites</h2>
        <p className="home-menu-desc">
          The dishes our chef can't stop
          thinking about, and neither will you.
        </p>
        <div className="home-menu-content d-f">
          {
            ProductsList.filter((elem) => elem.id < 7).map((product) => {
              return (
                <ProductsItem
                  key={`recommended-product${product.id}`}
                  {...product}
                />
              )
            })
          }
        </div>
        <a href="" className="home-menu-link">Explore Our Menu</a>
      </section>
      <section className='home-testimonial'>
        <h2 className="home-testimonial-title text-center">Real Talk From Real Foodies</h2>
        <p className="home-testimonial-desc">
          Exceptional dining experiences, shared by those who've tasted the difference.
        </p>
        <div className="home-testimonial-content d-f">
          <div className="home-testimonial-item">
            <div className="testimonial-item-info">
              <p className="testimonial-item-quote">
                "The Wagyu Steak was juicy. The ambiance made it ideal for a memorable evening.
                I'll recommend it to anyone who loves great food."
              </p>
              <div className="testimonial-item-author">
                <p className="author-name">James Tortellini</p>
                <p className="author-pos">Food Blogger</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div className="testimonial-item-info">
              <p className="testimonial-item-quote">
                "The cappuccino was rich and smooth. The eclectic decor adds a unique
                charm to the place. Perfect for a relaxing afternoon with a book."
              </p>
              <div className="testimonial-item-author">
                <p className="author-name">Maria Espresso</p>
                <p className="author-pos">Coffee Enthusiast</p>
              </div>
            </div>
          </div>
          <div className="home-testimonial-item">
            <div className="testimonial-item-info">
              <p className="testimonial-item-quote">
                "The roller coasters were exhilarating! The staff was friendly
                and the atmosphere was electric. A must-visit for thrill-seekers!"
              </p>
              <div className="testimonial-item-author">
                <p className="author-name">Tommy Thrill</p>
                <p className="author-pos">Adventure Blogger</p>
              </div>
            </div>
          </div>
        </div>
        <div className="home-testimonial-navigation d-f align-center">
          <Box sx={{ width: 992 }}>
            <Slider
              aria-label="Custom marks"
              defaultValue={20}
              step={10}
              sx={{ color: "#F4C73F" }}
            />
          </Box>
          <div className="home-testimonial-actions d-f">
            <button className='action-btn'>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 12L20 12M4 12L10 18M4 12L10 6" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button className="action-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 12H4M20 12L14 6M20 12L14 18" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>
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
      <div className="home-map">
        <div className="home-map-info d-f align-center">
          <div>
            <h5 className="home-map-title">Platieu Restaurant</h5>
            <div className="map-info-content d-f">
              <div className="map-info-item d-f">
                <div><img src="/images/location-home.png" alt="location-home" /></div>
                <p className="info-item-desc">21 Rue des Lilas 75001 Paris, France</p>
              </div>
              <div className="map-info-item d-f">
                <div><img src="/images/call2.png" alt="call2" /></div>
                <p className="info-item-desc">+33 6 12 34 56 78</p>
              </div>
              <div className="map-info-rating d-f">
                <p className="rating-num">4,6</p>
                <div className="rating-box d-f">
                  <div><img src="/images/star.png" alt="star" /></div>
                  <div><img src="/images/star.png" alt="star" /></div>
                  <div><img src="/images/star.png" alt="star" /></div>
                  <div><img src="/images/star.png" alt="star" /></div>
                  <div><img src="/images/star.png" alt="star" /></div>
                </div>
                <p className="rating-count">(1.662)</p>
              </div>
            </div>
          </div>
          <a href="" className="home-map-route">Route to restaurant</a>
        </div>
      </div>
      <section className='home-faq'>
        <div className="home-faq-heading d-f">
          <div><img src="/images/asset1.png" alt="asset1" /></div>
          <div>
            <h2 className="home-faq-title">What's on Your Mind?</h2>
            <p className="home-faq-desc">We've answered the questions you didn't know you had.</p>
          </div>
          <div><img src="/images/asset2.png" alt="asset2" /></div>
        </div>
        <div className="home-faq-content d-f">
          {
            FaqItemsList.map((faq)=> {
              return (
                <FaqItem
                  key={`faq${faq.id}`}
                  {...faq}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home