import { ProductsItem } from '../components'
import ProductsList from '../db/ProductsList'
import './css/Home.css'

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
            ProductsList.filter((elem)=> elem.id < 7).map((product)=> {
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
    </>
  )
}

export default Home