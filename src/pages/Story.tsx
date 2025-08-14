import { Link } from 'react-router-dom'
import { TeamMember } from '../components'
import TeamMembersList from '../db/TeamMembersList'
import './css/Story.css'

const Story = () => {
    return (
        <>
            <main className='story-main'>
                <div><img src="/images/hero-logo.png" alt="hero-logo" /></div>
                <h2 className="story-main-title">Where Passion Meets the Plate</h2>
                <p className="story-main-desc">
                    At Platieu, every dish begins with a story—crafted
                    from heart, heritage, and honest ingredients.
                </p>
            </main>
            <section className='story-about d-f jc-sb'>
                <h2 className="story-about-title">A Culinary Journey Rooted in Tradition</h2>
                <div>
                    <div className="story-about-text d-f">
                        <p className="story-about-desc">
                            Founded in the heart of France, Platieu is more than
                            just a restaurant—it's a celebration of flavors, culture,
                            and the joy of gathering. Our mission is simple: to bring
                            soulful dining experiences that blend local ingredients
                            with refined techniques, served with warmth and care.
                        </p>
                        <p className="story-about-desc">
                            From humble beginnings to a thriving culinary destination,
                            our story continues to evolve with each plate we serve and
                            every guest we welcome.
                        </p>
                    </div>
                    <div className="story-about-stats d-f">
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
                    <div className="story-about-images d-f">
                        <div><img src="/images/home-about1.png" alt="story-about1" /></div>
                        <div><img src="/images/home-about2.png" alt="story-about2" /></div>
                    </div>
                </div>
            </section>
            <section className='story-team'>
                <div className="d-f jc-sb">
                    <h2 className="story-team-title">
                        Meet the Soul Behind Our Kitchen
                    </h2>
                    <p className="story-team-desc">
                        Leading our kitchen is Chef Julien Moreau,
                        whose expertise and vision elevate every dish
                        on our menu. With over 15 years of experience
                        in fine dining, Chef Julien draws inspiration
                        from French countryside traditions while embracing
                        modern culinary artistry.
                    </p>
                </div>
                <div className="story-team-box d-f">
                    {
                        TeamMembersList.map((member) => {
                            return (
                                <TeamMember
                                    key={`teamMember${member.id}`}
                                    {...member}
                                />
                            )
                        })
                    }
                </div>
            </section>
            <section className="story-cta">
                  <h2 className="story-cta-title">Let's Create Your Next Culinary Memory</h2>
                  <p className="story-cta-desc">
                    Have a question, a special request, or just want to say hello? 
                    Our team would love to hear from you.
                 </p>
                 <Link to="/contact" className="story-cta-link">Contact Us</Link>  
            </section>
        </>
    )
}

export default Story