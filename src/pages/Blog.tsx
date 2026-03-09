import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { groupNavItems } from '../data/navigation';
import '../styles/blog.css';

interface BlogPost {
    id: number;
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        image: '/images/gourmet-dining.png',
        category: 'Dining',
        date: 'February 15, 2026',
        title: 'A Culinary Journey Through Gujarat — Flavours at Hare Krishna Hotel',
        description: 'Discover the rich tapestry of Gujarati cuisine reimagined with modern flair at our award-winning restaurant. From traditional thalis to contemporary fusion dishes, every meal is a celebration.',
    },
    {
        id: 2,
        image: '/images/crystal-ballroom.png',
        category: 'Events',
        date: 'February 8, 2026',
        title: 'Planning the Perfect Wedding — A Guide to Our Banquet Halls',
        description: 'Your dream wedding deserves the perfect venue. Explore how our Crystal Ballroom and intimate banquet halls can transform your special day into an unforgettable celebration.',
    },
    {
        id: 3,
        image: '/images/royal-suite.png',
        category: 'Hospitality',
        date: 'January 28, 2026',
        title: 'The Art of Luxury Hospitality — What Sets Us Apart',
        description: 'At Hare Krishna Hotel, luxury is not just about opulent décor — it is about the warmth of genuine care, attention to detail, and experiences that linger in your memory.',
    },
    {
        id: 4,
        image: '/images/navsari-about.png',
        category: 'Travel',
        date: 'January 20, 2026',
        title: 'Exploring Navsari — Hidden Gems Near Our Hotel',
        description: 'Navsari is more than just a city — it is a treasure trove of culture, history, and natural beauty. Discover the best local attractions just minutes from our doorstep.',
    },
    {
        id: 5,
        image: '/images/restaurant-interior.png',
        category: 'Food & Drink',
        date: 'January 12, 2026',
        title: '5 Must-Try Dishes at Our Restaurant This Season',
        description: 'Our chefs have crafted an exciting seasonal menu that blends traditional recipes with innovative techniques. Here are the top five dishes you cannot afford to miss.',
    },
    {
        id: 6,
        image: '/images/hero-building.png',
        category: 'News',
        date: 'January 5, 2026',
        title: 'Hare Krishna Hotel Group — Our Vision for 2026 and Beyond',
        description: 'As we step into a new year, we share our ambitious plans for expansion, sustainability initiatives, and our continued commitment to redefining hospitality in South Gujarat.',
    },
];

export default function Blog() {
    useScrollReveal();

    return (
        <>
            <Header navItems={groupNavItems} activePage="BLOGS" alwaysScrolled />

            {/* HERO */}
            <section className="blog-hero">
                <div className="blog-hero__bg"></div>
                <div className="blog-hero__overlay"></div>
                <div className="blog-hero__content reveal">
                    <p className="hero__subtitle">OUR STORIES</p>
                    <h1 className="hero__title">Insights &<br /><em>Inspirations</em></h1>
                    <p className="hero__desc">
                        Discover stories, tips, and updates from the world of Hare Krishna Hotel —<br />
                        your window into luxury hospitality.
                    </p>
                </div>
            </section>

            {/* BLOG GRID */}
            <section className="blog-listing">
                <div className="container">
                    <div className="blog-listing__grid">
                        {blogPosts.map((post) => (
                            <article className="blog-card reveal" key={post.id}>
                                <div
                                    className="blog-card__image"
                                    style={{ backgroundImage: `url(${post.image})` }}
                                >
                                    <span className="blog-card__category">{post.category}</span>
                                </div>
                                <div className="blog-card__body">
                                    <p className="blog-card__date">
                                        <i className="fa-regular fa-calendar"></i> {post.date}
                                    </p>
                                    <h3 className="blog-card__title">{post.title}</h3>
                                    <p className="blog-card__desc">{post.description}</p>
                                    <a href="#" className="blog-card__btn">
                                        Read More <i className="fa-solid fa-arrow-right"></i>
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
