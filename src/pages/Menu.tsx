import { ProductsItem, Testimonial } from '../components'
import ProductsList from '../db/ProductsList'
import './css/Menu.css'

const Menu = () => {
    return (
        <>
            <main className='menu-main'>
                <div className="menu-main-union"><img src="/images/hero-logo.png" alt="hero-logo" /></div>
                <h1 className="menu-main-title">Discover Our Curated Culinary Selection</h1>
                <p className="menu-main-desc">
                    From timeless classics to signature creations, 
                    our menu is a celebration of fresh ingredients 
                    and refined craftsmanship.
                </p>
            </main>
            <section className='menu-content'>
                <div className="d-f jc-sb align-center">
                    <h2 className="menu-content-title">Today Menu</h2>
                    <div className="menu-content-categories d-f">
                        <button className='categories-btn categories-btn__active'>All Menu</button>
                        <button className='categories-btn'>Appetizer</button>
                        <button className='categories-btn'>Main Course</button>
                        <button className='categories-btn'>Dessert</button>
                        <button className='categories-btn'>Beverage</button>
                    </div>
                </div>
                <div className="menu-content-box d-f">
                    {
                        ProductsList.map((product)=> {
                            return (
                                <ProductsItem
                                  key={`priduct${product.id}`}
                                  {...product}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <Testimonial/>
            <div style={{marginBottom: "100px"}}></div>
        </>
    )
}

export default Menu