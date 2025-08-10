import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const Testimonial = () => {
  return (
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
  )
}

export default Testimonial