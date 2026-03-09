import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { locationNavItems } from '../data/navigation';
import '../styles/navsari.css';

export default function Navsari() {
    useScrollReveal();

    const footerExplore = [
        { label: 'Rooms & Suites', href: '#rooms' },
        { label: 'Restaurant', href: '#restaurant' },
        { label: 'Banquet Halls', href: '#banquet' },
        { label: 'Gallery', href: '#gallery' },
    ];
    const footerLinks = [
        { label: 'Main Website', href: '/' },
        { label: 'Our Group', href: '/group' },
        { label: 'Contact Us', href: '#contact' },
        { label: 'FAQs', href: '#' },
    ];

    return (
        <>
            <Header navItems={locationNavItems} activePage="HOME" />

            {/* HERO */}
            <section className="hero" id="hero">
                <div className="hero__bg nv-hero-bg"></div>
                <div className="hero__overlay"></div>
                <div className="hero__content reveal">
                    <p className="hero__subtitle">HARE KRISHNA HOTEL</p>
                    <h1 className="hero__title">Welcome to<br /><em>Navsari</em></h1>
                    <p className="hero__desc">Experience the perfect blend of traditional warmth and modern comfort<br />in the cultural heart of South Gujarat.</p>
                    <a href="#rooms" className="btn btn--gold" style={{ marginTop: 32 }}>EXPLORE ROOMS</a>
                </div>
            </section>

            {/* ABOUT */}
            <section className="nv-about" id="about">
                <div className="container">
                    <div className="nv-about__grid">
                        <div className="nv-about__content reveal">
                            <p className="section-tag">ABOUT US</p>
                            <h2 className="section-title">A Legacy of<br /><em>Warm Hospitality</em></h2>
                            <p className="nv-about__desc">Hare Krishna Hotel Navsari stands as a beacon of luxury and comfort in the vibrant city of Navsari. With years of dedicated service, we have earned the trust of travelers and locals alike — offering world-class accommodation, exquisite dining, and grand celebrations under one roof.</p>
                            <p className="nv-about__desc">Our commitment to excellence, attention to detail, and genuine warmth make every stay a memorable experience.</p>
                            <div className="nv-about__highlights">
                                {[
                                    { icon: 'fa-hotel', title: 'Premium Rooms', desc: 'Elegantly furnished for supreme comfort' },
                                    { icon: 'fa-utensils', title: 'Multi-Cuisine Restaurant', desc: 'Authentic flavors from around the world' },
                                    { icon: 'fa-champagne-glasses', title: 'Grand Banquet Halls', desc: 'Perfect venue for every occasion' },
                                    { icon: 'fa-car', title: 'Valet Parking', desc: 'Complimentary parking for all guests' },
                                ].map((h, i) => (
                                    <div className="nv-about__highlight" key={i}>
                                        <i className={`fa-solid ${h.icon}`}></i>
                                        <div><strong>{h.title}</strong><p>{h.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="nv-about__image reveal">
                            <div className="nv-about__img" style={{ backgroundImage: "url('/images/navsari-about.png')" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROOMS */}
            <section className="nv-rooms" id="rooms">
                <div className="container">
                    <p className="section-tag reveal">ACCOMMODATION</p>
                    <h2 className="section-title reveal">Our <em>Rooms &amp; Suites</em></h2>
                    <p className="nv-rooms__intro reveal">Each room is thoughtfully designed to offer a perfect retreat — combining modern amenities with elegant comfort.</p>
                    <div className="nv-rooms__grid">
                        <RoomCard image="/images/navsari-deluxe.png" title="Deluxe Room" description="A comfortable and stylish room with modern furnishings, ideal for business and leisure travelers." size="30 m²" bedType="Queen Bed" guests="2 Guests" price="2,500" currency="₹" bookHref="#contact" />
                        <RoomCard image="/images/navsari-super-deluxe.png" title="Super Deluxe Room" description="Spacious interiors with premium amenities, a sitting area, and panoramic views for an elevated stay." size="42 m²" bedType="King Bed" guests="2 Guests" price="3,800" currency="₹" bookHref="#contact" />
                        <RoomCard image="/images/navsari-suite.png" title="Suite" description="The pinnacle of luxury — a spacious suite with separate living area, premium bath, and bespoke services." size="65 m²" bedType="King Bed" guests="3 Guests" price="5,500" currency="₹" bookHref="#contact" />
                    </div>
                </div>
            </section>

            {/* BANQUET */}
            <section className="nv-banquet" id="banquet">
                <div className="container">
                    <p className="section-tag reveal">CELEBRATIONS &amp; EVENTS</p>
                    <h2 className="section-title reveal">Our <em>Banquet Halls</em></h2>
                    <p className="nv-banquet__intro reveal">From intimate gatherings to grand weddings, our versatile banquet spaces are designed to make every event truly special.</p>
                </div>
                <div className="nv-banquet__grid">
                    <div className="nv-banquet__card reveal">
                        <div className="nv-banquet__img" style={{ backgroundImage: "url('/images/navsari-banquet1.png')" }}></div>
                        <div className="nv-banquet__overlay"><h3>The Grand Hall</h3><p>Up to 500 Guests · Weddings · Receptions</p><a href="#contact" className="btn btn--gold btn--sm">ENQUIRE NOW</a></div>
                    </div>
                    <div className="nv-banquet__card reveal">
                        <div className="nv-banquet__img" style={{ backgroundImage: "url('/images/navsari-banquet2.png')" }}></div>
                        <div className="nv-banquet__overlay"><h3>The Celebration Hall</h3><p>Up to 200 Guests · Parties · Conferences</p><a href="#contact" className="btn btn--gold btn--sm">ENQUIRE NOW</a></div>
                    </div>
                </div>
            </section>

            {/* RESTAURANT */}
            <section className="nv-restaurant" id="restaurant">
                <div className="nv-restaurant__grid">
                    <div className="nv-restaurant__images reveal">
                        <div className="nv-restaurant__img nv-restaurant__img--main" style={{ backgroundImage: "url('/images/navsari-restaurant.png')" }}></div>
                        <div className="nv-restaurant__img nv-restaurant__img--secondary" style={{ backgroundImage: "url('/images/navsari-food.png')" }}></div>
                    </div>
                    <div className="nv-restaurant__content reveal">
                        <p className="section-tag">DINING</p>
                        <h2 className="section-title">Our <em>Restaurant</em></h2>
                        <p className="nv-restaurant__desc">Indulge in a culinary journey that celebrates the rich flavors of Gujarati cuisine alongside beloved Indian and international dishes — all prepared with the freshest ingredients and served with warmth.</p>
                        <div className="nv-restaurant__features">
                            {[
                                { icon: 'fa-leaf', label: 'Pure Vegetarian' },
                                { icon: 'fa-bowl-food', label: 'Gujarati Thali' },
                                { icon: 'fa-mug-saucer', label: 'Breakfast Buffet' },
                                { icon: 'fa-truck-fast', label: 'Room Service' },
                            ].map((f, i) => (
                                <div className="nv-restaurant__feature" key={i}><i className={`fa-solid ${f.icon}`}></i><span>{f.label}</span></div>
                            ))}
                        </div>
                        <a href="#contact" className="btn btn--outline">RESERVE A TABLE</a>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="nv-gallery" id="gallery">
                <div className="container">
                    <p className="section-tag reveal">PHOTO GALLERY</p>
                    <h2 className="section-title reveal">A Glimpse of <em>Our World</em></h2>
                    <div className="nv-gallery__grid">
                        <div className="nv-gallery__item nv-gallery__item--wide reveal" style={{ backgroundImage: "url('/images/navsari-hero.png')" }}></div>
                        <div className="nv-gallery__item reveal" style={{ backgroundImage: "url('/images/navsari-deluxe.png')" }}></div>
                        <div className="nv-gallery__item reveal" style={{ backgroundImage: "url('/images/navsari-banquet1.png')" }}></div>
                        <div className="nv-gallery__item reveal" style={{ backgroundImage: "url('/images/navsari-restaurant.png')" }}></div>
                        <div className="nv-gallery__item nv-gallery__item--wide reveal" style={{ backgroundImage: "url('/images/navsari-suite.png')" }}></div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="nv-contact" id="contact">
                <div className="container">
                    <div className="nv-contact__grid">
                        <div className="nv-contact__info reveal">
                            <p className="section-tag">GET IN TOUCH</p>
                            <h2 className="section-title">Contact <em>Us</em></h2>
                            <div className="nv-contact__details">
                                <div className="nv-contact__detail"><i className="fa-solid fa-location-dot"></i><div><h4>Address</h4><p>Station Road, Navsari<br />Gujarat, India — 396445</p></div></div>
                                <div className="nv-contact__detail"><i className="fa-solid fa-phone"></i><div><h4>Phone</h4><p>+91 2637 XXX XXX</p></div></div>
                                <div className="nv-contact__detail"><i className="fa-solid fa-envelope"></i><div><h4>Email</h4><p>navsari@harekrishnahotel.com</p></div></div>
                                <div className="nv-contact__detail"><i className="fa-solid fa-clock"></i><div><h4>Front Desk</h4><p>24 hours, 7 days a week</p></div></div>
                            </div>
                            <div className="nv-contact__social">
                                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="nv-contact__form-wrap reveal">
                            <h3>Send us a Message</h3>
                            <form className="nv-contact__form" onSubmit={(e) => e.preventDefault()}>
                                <input type="text" placeholder="Your Name" required />
                                <input type="email" placeholder="Your Email" required />
                                <input type="tel" placeholder="Your Phone" />
                                <textarea placeholder="Your Message" rows={4} required></textarea>
                                <button type="submit" className="btn btn--gold">SEND MESSAGE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer exploreLinks={footerExplore} quickLinks={footerLinks} />
        </>
    );
}
