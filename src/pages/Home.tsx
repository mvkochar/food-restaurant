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
    </>
  )
}

export default Home