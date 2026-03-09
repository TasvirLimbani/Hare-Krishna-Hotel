import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { locationNavItems } from '../data/navigation';
import '../styles/valsad.css';

export default function Valsad() {
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
                <div className="hero__bg vs-hero-bg"></div>
                <div className="hero__overlay"></div>
                <div className="hero__content reveal">
                    <p className="hero__subtitle">HARE KRISHNA HOTEL</p>
                    <h1 className="hero__title">Welcome to<br /><em>Valsad</em></h1>
                    <p className="hero__desc">Discover coastal charm blended with refined luxury — your perfect getaway<br />in the serene heart of South Gujarat.</p>
                    <a href="#rooms" className="btn btn--gold" style={{ marginTop: 32 }}>EXPLORE ROOMS</a>
                </div>
            </section>

            {/* ABOUT */}
            <section className="vs-about" id="about">
                <div className="container">
                    <div className="vs-about__grid">
                        <div className="vs-about__content reveal">
                            <p className="section-tag">ABOUT US</p>
                            <h2 className="section-title">Where Comfort<br /><em>Meets Elegance</em></h2>
                            <p className="vs-about__desc">Hare Krishna Hotel Valsad brings the same legacy of trusted hospitality to the charming coastal city of Valsad. Situated in a prime location, we offer premium accommodation, delightful cuisine, and beautiful event spaces — all wrapped in the warmth that defines the Hare Krishna experience.</p>
                            <p className="vs-about__desc">Whether you're here for business, leisure, or a grand celebration, our dedicated team ensures every moment is nothing short of exceptional.</p>
                            <div className="vs-about__highlights">
                                {[
                                    { icon: 'fa-hotel', title: 'Premium Rooms', desc: 'Modern comfort with elegant interiors' },
                                    { icon: 'fa-utensils', title: 'Multi-Cuisine Restaurant', desc: 'Flavors from Gujarat and beyond' },
                                    { icon: 'fa-champagne-glasses', title: 'Banquet Halls', desc: 'Versatile spaces for every occasion' },
                                    { icon: 'fa-car', title: 'Valet Parking', desc: 'Complimentary parking for all guests' },
                                ].map((h, i) => (
                                    <div className="vs-about__highlight" key={i}>
                                        <i className={`fa-solid ${h.icon}`}></i>
                                        <div><strong>{h.title}</strong><p>{h.desc}</p></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="vs-about__image reveal">
                            <div className="vs-about__img" style={{ backgroundImage: "url('/images/valsad-about.png')" }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROOMS */}
            <section className="vs-rooms" id="rooms">
                <div className="container">
                    <p className="section-tag reveal">ACCOMMODATION</p>
                    <h2 className="section-title reveal">Our <em>Rooms &amp; Suites</em></h2>
                    <p className="vs-rooms__intro reveal">Unwind in rooms designed for relaxation — each featuring contemporary furnishings, modern amenities, and a touch of coastal serenity.</p>
                    <div className="vs-rooms__grid">
                        <RoomCard image="/images/valsad-deluxe.png" title="Deluxe Room" description="A cozy, well-appointed room with modern conveniences — perfect for a comfortable stay in Valsad." size="28 m²" bedType="Queen Bed" guests="2 Guests" price="2,200" currency="₹" bookHref="#contact" />
                        <RoomCard image="/images/valsad-super-deluxe.png" title="Super Deluxe Room" description="Elevated luxury with extra space, premium furnishings, and a relaxing ambiance for the discerning traveler." size="40 m²" bedType="King Bed" guests="2 Guests" price="3,500" currency="₹" bookHref="#contact" />
                        <RoomCard image="/images/valsad-suite.png" title="Suite" description="Our finest offering — a grand suite with separate living area, luxurious bath, and personalized services." size="60 m²" bedType="King Bed" guests="3 Guests" price="5,000" currency="₹" bookHref="#contact" />
                    </div>
                </div>
            </section>

            {/* BANQUET */}
            <section className="vs-banquet" id="banquet">
                <div className="container">
                    <p className="section-tag reveal">CELEBRATIONS &amp; EVENTS</p>
                    <h2 className="section-title reveal">Our <em>Banquet Halls</em></h2>
                    <p className="vs-banquet__intro reveal">Create unforgettable memories in our beautifully appointed banquet halls — designed for weddings, receptions, parties, and corporate events.</p>
                </div>
                <div className="vs-banquet__grid">
                    <div className="vs-banquet__card reveal">
                        <div className="vs-banquet__img" style={{ backgroundImage: "url('/images/valsad-banquet1.png')" }}></div>
                        <div className="vs-banquet__overlay"><h3>The Royal Hall</h3><p>Up to 400 Guests · Weddings · Receptions</p><a href="#contact" className="btn btn--gold btn--sm">ENQUIRE NOW</a></div>
                    </div>
                    <div className="vs-banquet__card reveal">
                        <div className="vs-banquet__img" style={{ backgroundImage: "url('/images/valsad-banquet2.png')" }}></div>
                        <div className="vs-banquet__overlay"><h3>The Garden Terrace</h3><p>Up to 150 Guests · Parties · Outdoor Events</p><a href="#contact" className="btn btn--gold btn--sm">ENQUIRE NOW</a></div>
                    </div>
                </div>
            </section>

            {/* RESTAURANT */}
            <section className="vs-restaurant" id="restaurant">
                <div className="vs-restaurant__grid">
                    <div className="vs-restaurant__images reveal">
                        <div className="vs-restaurant__img vs-restaurant__img--main" style={{ backgroundImage: "url('/images/valsad-restaurant.png')" }}></div>
                        <div className="vs-restaurant__img vs-restaurant__img--secondary" style={{ backgroundImage: "url('/images/valsad-food.png')" }}></div>
                    </div>
                    <div className="vs-restaurant__content reveal">
                        <p className="section-tag">DINING</p>
                        <h2 className="section-title">Our <em>Restaurant</em></h2>
                        <p className="vs-restaurant__desc">Savor the authentic tastes of Gujarat alongside popular Indian and continental dishes — freshly prepared with love, using the finest local produce and traditional recipes.</p>
                        <div className="vs-restaurant__features">
                            {[
                                { icon: 'fa-leaf', label: 'Pure Vegetarian' },
                                { icon: 'fa-bowl-food', label: 'Gujarati Thali' },
                                { icon: 'fa-mug-saucer', label: 'Breakfast Buffet' },
                                { icon: 'fa-truck-fast', label: 'Room Service' },
                            ].map((f, i) => (
                                <div className="vs-restaurant__feature" key={i}><i className={`fa-solid ${f.icon}`}></i><span>{f.label}</span></div>
                            ))}
                        </div>
                        <a href="#contact" className="btn btn--outline">RESERVE A TABLE</a>
                    </div>
                </div>
            </section>

            {/* GALLERY */}
            <section className="vs-gallery" id="gallery">
                <div className="container">
                    <p className="section-tag reveal">PHOTO GALLERY</p>
                    <h2 className="section-title reveal">A Glimpse of <em>Our World</em></h2>
                    <div className="vs-gallery__grid">
                        <div className="vs-gallery__item vs-gallery__item--wide reveal" style={{ backgroundImage: "url('/images/valsad-hero.png')" }}></div>
                        <div className="vs-gallery__item reveal" style={{ backgroundImage: "url('/images/valsad-deluxe.png')" }}></div>
                        <div className="vs-gallery__item reveal" style={{ backgroundImage: "url('/images/valsad-banquet1.png')" }}></div>
                        <div className="vs-gallery__item reveal" style={{ backgroundImage: "url('/images/valsad-restaurant.png')" }}></div>
                        <div className="vs-gallery__item vs-gallery__item--wide reveal" style={{ backgroundImage: "url('/images/valsad-suite.png')" }}></div>
                    </div>
                </div>
            </section>

            {/* CONTACT */}
            <section className="vs-contact" id="contact">
                <div className="container">
                    <div className="vs-contact__grid">
                        <div className="vs-contact__info reveal">
                            <p className="section-tag">GET IN TOUCH</p>
                            <h2 className="section-title">Contact <em>Us</em></h2>
                            <div className="vs-contact__details">
                                <div className="vs-contact__detail"><i className="fa-solid fa-location-dot"></i><div><h4>Address</h4><p>Station Road, Valsad<br />Gujarat, India — 396001</p></div></div>
                                <div className="vs-contact__detail"><i className="fa-solid fa-phone"></i><div><h4>Phone</h4><p>+91 2632 XXX XXX</p></div></div>
                                <div className="vs-contact__detail"><i className="fa-solid fa-envelope"></i><div><h4>Email</h4><p>valsad@harekrishnahotel.com</p></div></div>
                                <div className="vs-contact__detail"><i className="fa-solid fa-clock"></i><div><h4>Front Desk</h4><p>24 hours, 7 days a week</p></div></div>
                            </div>
                            <div className="vs-contact__social">
                                <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                            </div>
                        </div>
                        <div className="vs-contact__form-wrap reveal">
                            <h3>Send us a Message</h3>
                            <form className="vs-contact__form" onSubmit={(e) => e.preventDefault()}>
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
