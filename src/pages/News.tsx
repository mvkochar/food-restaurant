import { NewsItem } from '../components'
import NewsList from '../db/NewsList'
import './css/News.css'

const News = () => {
    return (
        <>
            <main className='news-main'>
                <div><img src="/images/hero-logo.png" alt="hero-logo" /></div>
                <h1 className="news-main-title">Stories from the Kitchen & Beyond</h1>
                <p className="news-main-desc">
                    Stay inspired with the latest from Platieu — from seasonal
                    menu launches and chef spotlights to behind-the-scenes stories
                    and culinary insights.
                </p>
            </main>
            <section className='news-heading d-f jc-sb'>
                <div>
                    <h2 className="news-heading-title">Fresh Stories from the Kitchen</h2>
                    <p className="news-heading-desc">
                        Discover the stories behind our kitchen, culinary tips, and flavor inspirations
                        that we pour into every dish. This blog is a place where we share more than
                        just food — we share experiences.
                    </p>
                </div>
                <form action="" className='news-heading-fm d-f'>
                    <button type="button" className='btn-clear d-b'>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.7138 6.8382C18.1647 9.28913 18.1647 13.2629 15.7138 15.7138C13.2629 18.1647 9.28913 18.1647 6.8382 15.7138C4.38727 13.2629 4.38727 9.28913 6.8382 6.8382C9.28913 4.38727 13.2629 4.38727 15.7138 6.8382" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M19 19.0009L15.71 15.7109" stroke="#FDFDFD" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                    <input type="text" name='searchQuery' placeholder='Search..' />
                </form>
            </section>
            <div className="news-content d-f">
                {
                    NewsList.map((post) => {
                        return (
                            <NewsItem
                                key={`news${post.id}`}
                                {...post}
                            />
                        )
                    })
                }
            </div>
            <button className='news-more'>Load More</button>
            <section className='news-cta'>
                <h2 className="news-cta-title">Discover More Stories</h2>
                <p className="news-cta-desc">
                    There's always something cooking at Platieu. From culinary inspiration 
                    to behind-the-scenes moments, our journal is filled with fresh stories 
                    waiting to be explored.
                </p>
                <form action="" className='news-cta-fm d-f jc-sb'>
                    <input type="email" name="ctaEmail" placeholder='Type your email' />
                    <button type="button">Subscribe</button>
                </form>
            </section>
        </>
    )
}

export default News