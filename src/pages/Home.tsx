import Header from '../components/Header';
import Footer from '../components/Footer';
import RoomCard from '../components/RoomCard';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { mainNavItems } from '../data/navigation';
import '../styles/home.css';

export default function Home() {
    useScrollReveal();

    return (
        <>
            <Header navItems={mainNavItems} activePage="HOME" />

            {/* HERO */}
            <section className="hero" id="hero">
                <div className="hero__bg"></div>
                <div className="hero__overlay"></div>
                <div className="hero__content reveal">
                    <p className="hero__subtitle">LUXURY REDEFINED</p>
                    <h1 className="hero__title">The Sanctuary<br /><em>of Elegance</em></h1>
                    <p className="hero__desc">
                        Where timeless luxury meets modern sophistication. Immerse yourself in an<br />
                        experience crafted for the most discerning travelers.
                    </p>
                </div>
            </section>

            {/* ABOUT */}
            <section className="about" id="about">
                <div className="container">
                    <p className="section-tag reveal">SETTING NEW STANDARDS</p>
                    <div className="about__grid">
                        <div className="about__text reveal">
                            <h2 className="section-title">Unparalleled<br /><em>Comfort &amp; Serenity</em></h2>
                            <p className="about__desc">
                                Nestled in a prime location, designed to create a welcoming haven for travelers seeking a harmonious blend of modern elegance, captivating cuisine, and warm hospitality — redefining your travel experience.
                            </p>
                            <div className="about__features">
                                <div className="about__feature"><i className="fa-solid fa-spa"></i><span>Luxury Spa &amp; Wellness</span></div>
                                <div className="about__feature"><i className="fa-solid fa-bell-concierge"></i><span>24/7 Concierge Service</span></div>
                                <div className="about__feature"><i className="fa-solid fa-utensils"></i><span>Fine Dining Experience</span></div>
                                <div className="about__feature"><i className="fa-solid fa-wifi"></i><span>Complimentary High-Speed WiFi</span></div>
                            </div>
                            <a href="#rooms" className="btn btn--outline">EXPLORE MORE</a>
                        </div>
                        <div className="about__image reveal">
                            <div className="about__img-wrapper" style={{ background: "url('/images/royal-suite.png') center/cover no-repeat" }}>
                                <div className="about__img-label">The Royal Suite</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ROOMS */}
            <section className="rooms" id="rooms">
                <div className="container">
                    <p className="section-tag reveal">ACCOMMODATION</p>
                    <div className="rooms__grid">
                        <RoomCard image="/images/executive-king.png" title="Executive King" description="Spacious room with king-sized bed, city views, and premium amenities for the discerning business traveler." size="45 m²" bedType="King Bed" guests="2 Guests" price="250" />
                        <RoomCard image="/images/junior-suite.png" title="Junior Suite" description="Elegant living space with separate lounge area, panoramic windows, and luxurious marble bathroom." size="65 m²" bedType="King Bed" guests="3 Guests" price="420" />
                        <RoomCard image="/images/presidential-suite.png" title="Presidential Suite" description="The pinnacle of luxury — a sprawling suite with private dining, butler service, and breathtaking views." size="120 m²" bedType="King Bed" guests="4 Guests" price="780" />
                    </div>
                </div>
            </section>

            {/* DINING */}
            <section className="dining" id="dining">
                <div className="dining__grid">
                    <div className="dining__images reveal">
                        <div className="dining__img dining__img--large" style={{ backgroundImage: "url('/images/gourmet-dining.png')" }}></div>
                        <div className="dining__img dining__img--small" style={{ backgroundImage: "url('/images/restaurant-interior.png')" }}></div>
                    </div>
                    <div className="dining__content reveal">
                        <p className="section-tag">CULINARY EXCELLENCE</p>
                        <h2 className="section-title">Gourmet<br /><em>Indulgence</em></h2>
                        <p className="dining__desc">Experience culinary artistry that transforms the finest seasonal ingredients into unforgettable dining experiences across our signature restaurants.</p>
                        <div className="dining__venues">
                            <div className="dining__venue">
                                <i className="fa-solid fa-utensils"></i>
                                <div><h4>La Pergola</h4><p>Fine Dining · Italian</p></div>
                            </div>
                            <div className="dining__venue">
                                <i className="fa-solid fa-martini-glass-citrus"></i>
                                <div><h4>The Library Bar</h4><p>Cocktails · Lounge</p></div>
                            </div>
                        </div>
                        <a href="#" className="btn btn--outline">RESERVE A TABLE</a>
                    </div>
                </div>
            </section>

            {/* BANQUET */}
            <section className="banquet" id="banquets">
                <div className="container">
                    <p className="section-tag reveal">CELEBRATIONS &amp; EVENTS</p>
                    <h2 className="section-title reveal"><span className="text-white">Grand</span> <em>Occasions</em></h2>
                    <p className="banquet__desc reveal">From intimate gatherings to grand celebrations, our remarkable venues offer the perfect backdrop for your most memorable moments.</p>
                </div>
                <div className="banquet__showcase reveal">
                    <div className="banquet__img" style={{ backgroundImage: "url('/images/crystal-ballroom.png')" }}></div>
                    <div className="banquet__label">
                        <h3>The Crystal Ballroom</h3>
                        <p>Up to 500 guests · 8,000 sq ft · State-of-the-art AV · Customizable layouts</p>
                        <a href="#" className="btn btn--gold btn--sm">ENQUIRE NOW</a>
                    </div>
                </div>
            </section>

            {/* LOCATION */}
            <section className="location" id="location">
                <div className="location__grid">
                    <div className="location__map reveal">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1!2d-73.98!3d40.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzAwLjAiTiA3M8KwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
                            title="Hotel Location"
                        ></iframe>
                    </div>
                    <div className="location__content reveal">
                        <p className="section-tag">FIND US</p>
                        <h2 className="section-title">Location &amp;<br /><em>Contact</em></h2>
                        <div className="location__details">
                            <div className="location__detail">
                                <i className="fa-solid fa-location-dot"></i>
                                <div><h4>Address</h4><p>123 Grand Avenue, Manhattan<br />New York, NY 10001</p></div>
                            </div>
                            <div className="location__detail">
                                <i className="fa-solid fa-phone"></i>
                                <div><h4>Phone</h4><p>+1 (212) 555-0100</p></div>
                            </div>
                            <div className="location__detail">
                                <i className="fa-solid fa-envelope"></i>
                                <div><h4>Email</h4><p>reservations@harekrishnahotel.com</p></div>
                            </div>
                            <div className="location__detail">
                                <i className="fa-solid fa-clock"></i>
                                <div><h4>Front Desk</h4><p>24 hours, 7 days a week</p></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
