import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { groupNavItems } from '../data/navigation';
import '../styles/group.css';

export default function Group() {
    useScrollReveal();

    return (
        <>
            <Header navItems={groupNavItems} activePage="GROUP" alwaysScrolled />

            {/* HERO */}
            <section className="group-hero">
                <div className="group-hero__bg"></div>
                <div className="group-hero__overlay"></div>
                <div className="group-hero__content reveal">
                    <p className="hero__subtitle">THE LEGACY</p>
                    <h1 className="hero__title">Our <em>Story</em></h1>
                    <p className="hero__desc">A legacy of excellence built on the foundation of warm hospitality,<br />exceptional service, and an unwavering commitment to luxury.</p>
                </div>
            </section>

            {/* ABOUT GROUP */}
            <section className="group-about" id="groupAbout">
                <div className="container">
                    <div className="group-about__grid">
                        <div className="group-about__content reveal">
                            <p className="section-tag">WHO WE ARE</p>
                            <h2 className="section-title">A Tradition of<br /><em>Hospitality Excellence</em></h2>
                            <p className="group-about__desc">Founded with a vision to redefine the hospitality landscape, Hare Krishna Hotel Group has grown into a distinguished name synonymous with luxury, warmth, and impeccable service.</p>
                            <p className="group-about__desc">Our journey began with a single property and a simple promise — to make every guest feel at home while experiencing the finest in comfort and cuisine.</p>
                            <div className="group-about__stats">
                                <div className="group-about__stat"><span className="stat-number">15+</span><span className="stat-label">Years of Excellence</span></div>
                                <div className="group-about__stat"><span className="stat-number">5</span><span className="stat-label">Hotel Properties</span></div>
                                <div className="group-about__stat"><span className="stat-number">200+</span><span className="stat-label">Luxury Rooms</span></div>
                                <div className="group-about__stat"><span className="stat-number">50K+</span><span className="stat-label">Happy Guests</span></div>
                            </div>
                        </div>
                        <div className="group-about__image reveal">
                            <div className="group-about__img" style={{ backgroundImage: "url('/images/group-about.png')" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* VISION / MISSION / VALUES */}
            <section className="group-vision">
                <div className="container">
                    <div className="group-vision__grid">
                        <div className="group-vision__card reveal">
                            <div className="group-vision__icon"><i className="fa-solid fa-eye"></i></div>
                            <h3>Our Vision</h3>
                            <p>To be the most trusted and admired hospitality brand, known for creating extraordinary experiences that leave lasting impressions.</p>
                        </div>
                        <div className="group-vision__card reveal">
                            <div className="group-vision__icon"><i className="fa-solid fa-bullseye"></i></div>
                            <h3>Our Mission</h3>
                            <p>To deliver unparalleled hospitality by combining modern luxury with traditional warmth, investing in our people, and continuously innovating.</p>
                        </div>
                        <div className="group-vision__card reveal">
                            <div className="group-vision__icon"><i className="fa-solid fa-gem"></i></div>
                            <h3>Our Values</h3>
                            <p>Integrity, excellence, and compassion form the cornerstone of everything we do — from serving guests to nurturing our community.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SERVICES */}
            <section className="group-services" id="services">
                <div className="container">
                    <p className="section-tag reveal">WHAT WE OFFER</p>
                    <h2 className="section-title reveal">Our <em>Services</em></h2>
                    <div className="group-services__grid">
                        {[
                            { img: 'service-accommodation.png', icon: 'fa-bed', title: 'Luxury Accommodation', desc: 'From elegantly appointed rooms to opulent suites, our accommodations are designed to offer supreme comfort.' },
                            { img: 'service-dining.png', icon: 'fa-utensils', title: 'Fine Dining', desc: 'Savor exquisite culinary creations crafted by our award-winning chefs, featuring the finest flavors.' },
                            { img: 'service-banquet.png', icon: 'fa-champagne-glasses', title: 'Banquet & Events', desc: 'Host your most cherished celebrations in our magnificent banquet halls with dedicated event planning.' },
                        ].map((s, i) => (
                            <div className="group-services__card reveal" key={i}>
                                <div className="group-services__img" style={{ backgroundImage: `url('/images/${s.img}')` }}></div>
                                <div className="group-services__body">
                                    <i className={`fa-solid ${s.icon}`}></i>
                                    <h3>{s.title}</h3>
                                    <p>{s.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LEADERSHIP */}
            <section className="group-leadership" id="leadership">
                <div className="container">
                    <p className="section-tag reveal">THE TEAM BEHIND THE LEGACY</p>
                    <h2 className="section-title reveal">Our <em>Leadership</em></h2>
                    <p className="group-leadership__desc reveal">Guided by visionary leaders who share a passion for hospitality and a relentless drive for excellence.</p>
                    <div className="group-leadership__grid">
                        {[
                            { name: 'Rajesh Patel', role: 'Founder & Chairman' },
                            { name: 'Amit Patel', role: 'Managing Director' },
                            { name: 'Priya Sharma', role: 'Director of Operations' },
                        ].map((l, i) => (
                            <div className="group-leadership__card reveal" key={i}>
                                <div className="group-leadership__photo"></div>
                                <h4>{l.name}</h4>
                                <p className="group-leadership__role">{l.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="group-cta">
                <div className="container">
                    <div className="group-cta__inner reveal">
                        <h2 className="section-title">Experience the<br /><em>Hare Krishna Difference</em></h2>
                        <p>Whether you're planning a luxurious getaway, a memorable celebration, or a corporate retreat — we promise an experience beyond expectations.</p>
                        <div className="group-cta__buttons">
                            <a href="/" className="btn btn--gold">EXPLORE OUR HOTELS</a>
                            <a href="#" className="btn btn--outline">CONTACT US</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
