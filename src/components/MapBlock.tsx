const MapBlock = () => {
    return (
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
    )
}

export default MapBlock