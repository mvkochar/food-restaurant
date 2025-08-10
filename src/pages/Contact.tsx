import { ContactBlock, MapBlock } from '../components'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main'>
                <div><img src="/images/hero-logo.png" alt="hero-logo" /></div>
                <h1 className="contact-main-title">We'd Love to Hear From You</h1>
                <p className="contact-main-desc">
                    Whether you have a question, special request,
                    or simply want to say hello, our team is here to help.
                </p>
            </main>
            <div className="contact-content">
                <ContactBlock />
            </div>
            <MapBlock />
            <section className='contact-location d-f'>
                <div>
                    <h2 className="contact-location-title">Find Platieu Across France</h2>
                    <p className="contact-location-desc">
                        Enjoy Platieu's taste at our locations nationwide.
                        A memorable dining experience is always nearby.
                    </p>
                </div>
                <div className="contact-location-box d-f">
                    <div>
                        <h5 className="location-bl-title">Île-de-France</h5>
                        <p className="location-bl-desc">
                            12 Rue de Rivoli <br /> 75001 Paris, France
                        </p>
                    </div>
                    <div>
                        <h5 className="location-bl-title">Auvergne-Rhône-Alpes</h5>
                        <p className="location-bl-desc">
                            22 Rue de la République <br />
                            69002 Lyon, France
                        </p>
                    </div>
                    <div>
                        <h5 className="location-bl-title">Provence-Alpes-Côte d'Azur</h5>
                        <p className="location-bl-desc">
                            45 Avenue Jean Médecin <br />
                            06000 Nice, France
                        </p>
                    </div>
                    <div>
                        <h5 className="location-bl-title">Occitanie</h5>
                        <p className="location-bl-desc">
                            10 Rue Alsace Lorraine <br /> 31000 Toulouse, France
                        </p>
                    </div>
                    <div>
                        <h5 className="location-bl-title">Nouvelle-Aquitaine</h5>
                        <p className="location-bl-desc">
                            88 Cours Victor Hugo <br /> 33000 Bordeaux, France
                        </p>
                    </div>
                    <div>
                        <h5 className="location-bl-title">Hauts-de-France</h5>
                        <p className="location-bl-desc">
                            19 Place Rihour <br /> 59800 Lille, France
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Contact