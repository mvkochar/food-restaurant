import './Footer.css'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="d-f jc-sb">
        <div>
          <h2 className="footer-title">Explore Our French-Inspired Dishes</h2>
          <a href="" className="footer-view">View Menu</a>
        </div>
        <nav>
          <ul className="footer-nav">
            <li className="footer-nav-item"><a href="">Home</a></li>
            <li className="footer-nav-item"><a href="">Menu</a></li>
            <li className="footer-nav-item"><a href="">Our Story</a></li>
            <li className="footer-nav-item"><a href="">Reservation</a></li>
            <li className="footer-nav-item"><a href="">News</a></li>
          </ul>
        </nav>
        <div>
          <h5 className="footer-connect-title">Connect On</h5>
          <div className="footer-connect-box d-f">
            <a href="" className="d-b"><img src="/images/connect1.png" alt="connect1" /></a>
            <a href="" className="d-b"><img src="/images/connect2.png" alt="connect2" /></a>
            <a href="" className="d-b"><img src="/images/connect3.png" alt="connect3" /></a>
            <a href="" className="d-b"><img src="/images/connect4.png" alt="connect4" /></a>
          </div>
        </div>
      </div>
      <div className="footer-info d-f jc-sb">
        <p>&copy;Platieu 2025. All rights reserved.</p>
        <div className="footer-links d-f align-center">
          <a href="" className="d-b">Privacy Policy</a>
          <div className="divider"></div>
          <a href="" className="d-b">Terms of Services</a>
        </div>
      </div>
      <div><img src="/images/footer-logo.svg" alt="footer-logo" /></div>
    </footer>
  )
}

export default Footer