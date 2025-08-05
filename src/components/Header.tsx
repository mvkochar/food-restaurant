import './Header.css'

const Header = () => {
  return (
    <header className='header d-f jc-sb align-center'>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><a href="">Home</a></li>
                <li className="header-nav-item"><a href="">Menu</a></li>
                <li className="header-nav-item"><a href="">Our Story</a></li>
                <li className="header-nav-item"><a href="">Location</a></li>
                <li className="header-nav-item"><a href="">News</a></li>
            </ul>
        </nav>
        <a href="" className="header-reserve">Reserve a Seat</a>
    </header>
  )
}

export default Header