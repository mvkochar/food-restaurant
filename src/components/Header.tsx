import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><Link to="/">Home</Link></li>
                <li className="header-nav-item"><Link to="/menu">Menu</Link></li>
                <li className="header-nav-item"><a href="">Our Story</a></li>
                <li className="header-nav-item"><Link to="/contact">Location</Link></li>
                <li className="header-nav-item"><a href="">News</a></li>
            </ul>
        </nav>
        <a href="" className="header-reserve">Reserve a Seat</a>
    </header>
  )
}

export default Header