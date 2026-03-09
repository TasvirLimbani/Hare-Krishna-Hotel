import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { groupNavItems } from '../data/navigation';
import '../styles/contact.css';

export default function Contact() {
    useScrollReveal();

    return (
        <>
            <Header navItems={groupNavItems} activePage="CONTACT US" alwaysScrolled />

            {/* HERO */}
            <section className="contact-hero">
                <div className="contact-hero__bg"></div>
                <div className="contact-hero__overlay"></div>
                <div className="contact-hero__content reveal">
                    <p className="hero__subtitle">GET IN TOUCH</p>
                    <h1 className="hero__title">We'd Love to<br /><em>Hear From You</em></h1>
                    <p className="hero__desc">
                        Whether you have a question, want to make a reservation, or simply wish to say hello —
                        our doors and lines are always open.
                    </p>
                </div>
            </section>

            {/* KEY CONTACT INFO */}
            <section className="contact-info">
                <div className="container">
                    <div className="contact-info__cards">
                        <div className="contact-info__card reveal">
                            <div className="contact-info__icon">
                                <i className="fa-solid fa-phone"></i>
                            </div>
                            <h3>Call Us</h3>
                            <div className="contact-info__details">
                                <div className="contact-info__location">
                                    <span>Navsari</span>
                                    <a href="tel:+912637232100">+91 2637 232 100</a>
                                </div>
                                <div className="contact-info__divider"></div>
                                <div className="contact-info__location">
                                    <span>Valsad</span>
                                    <a href="tel:+912632242100">+91 2632 242 100</a>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info__card reveal">
                            <div className="contact-info__icon">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <h3>Visit Us</h3>
                            <div className="contact-info__details">
                                <div className="contact-info__location">
                                    <span>Navsari</span>
                                    <p>Beside Sayaji Vaibhav, Falia Road,<br />Navsari, Gujarat 396445</p>
                                </div>
                                <div className="contact-info__divider"></div>
                                <div className="contact-info__location">
                                    <span>Valsad</span>
                                    <p>Near Dharampur Road, Station Area,<br />Valsad, Gujarat 396001</p>
                                </div>
                            </div>
                        </div>

                        <div className="contact-info__card reveal">
                            <div className="contact-info__icon">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <h3>Email Us</h3>
                            <div className="contact-info__details">
                                <div className="contact-info__location">
                                    <span>General Enquiry</span>
                                    <a href="mailto:info@harekrishnahotel.com">info@harekrishnahotel.com</a>
                                </div>
                                <div className="contact-info__divider"></div>
                                <div className="contact-info__location">
                                    <span>Reservations</span>
                                    <a href="mailto:reservations@harekrishnahotel.com">reservations@harekrishnahotel.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* MAP SECTIONS */}
            <section className="contact-maps">
                <div className="container">
                    <p className="section-tag reveal">OUR LOCATIONS</p>
                    <h2 className="section-title reveal">Find Us on the <em>Map</em></h2>

                    {/* Navsari */}
                    <div className="contact-map reveal">
                        <div className="contact-map__info">
                            <div className="contact-map__badge">
                                <i className="fa-solid fa-hotel"></i>
                            </div>
                            <div>
                                <h3>Hare Krishna Hotel — Navsari</h3>
                                <p>Beside Sayaji Vaibhav, Falia Road, Navsari, Gujarat 396445</p>
                                <div className="contact-map__meta">
                                    <span><i className="fa-solid fa-phone"></i> +91 2637 232 100</span>
                                    <span><i className="fa-solid fa-clock"></i> 24/7 Front Desk</span>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/Hare+Krishna+Hotel+Navsari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--outline btn--sm"
                                >
                                    <i className="fa-solid fa-diamond-turn-right"></i> GET DIRECTIONS
                                </a>
                            </div>
                        </div>
                        <div className="contact-map__embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5!2d72.9!3d20.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAwLjAiTiA3MsKwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hare Krishna Hotel Navsari"
                            ></iframe>
                        </div>
                    </div>

                    {/* Valsad */}
                    <div className="contact-map contact-map--reverse reveal">
                        <div className="contact-map__info">
                            <div className="contact-map__badge">
                                <i className="fa-solid fa-hotel"></i>
                            </div>
                            <div>
                                <h3>Hare Krishna Hotel — Valsad</h3>
                                <p>Near Dharampur Road, Station Area, Valsad, Gujarat 396001</p>
                                <div className="contact-map__meta">
                                    <span><i className="fa-solid fa-phone"></i> +91 2632 242 100</span>
                                    <span><i className="fa-solid fa-clock"></i> 24/7 Front Desk</span>
                                </div>
                                <a
                                    href="https://www.google.com/maps/search/Hare+Krishna+Hotel+Valsad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn--outline btn--sm"
                                >
                                    <i className="fa-solid fa-diamond-turn-right"></i> GET DIRECTIONS
                                </a>
                            </div>
                        </div>
                        <div className="contact-map__embed">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3738.5!2d72.93!3d20.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM2JzAwLjAiTiA3MsKwNTUnNDguMCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Hare Krishna Hotel Valsad"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </section>

            {/* QUICK ENQUIRY FORM */}
            <section className="contact-enquiry">
                <div className="container">
                    <div className="contact-enquiry__inner reveal">
                        <div className="contact-enquiry__text">
                            <p className="section-tag">SEND A MESSAGE</p>
                            <h2 className="section-title">Quick <em>Enquiry</em></h2>
                            <p className="contact-enquiry__desc">
                                Have a special request or need more information? Drop us a message and our concierge team will respond within 24 hours.
                            </p>
                            <div className="contact-enquiry__social">
                                <p>Follow us</p>
                                <div className="contact-enquiry__social-links">
                                    <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                                    <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                            <div className="contact-form__row">
                                <input type="text" placeholder="Your Name *" required />
                                <input type="email" placeholder="Email Address *" required />
                            </div>
                            <div className="contact-form__row">
                                <input type="tel" placeholder="Phone Number" />
                                <select defaultValue="" required>
                                    <option value="" disabled>Select Location</option>
                                    <option>Navsari</option>
                                    <option>Valsad</option>
                                    <option>General Enquiry</option>
                                </select>
                            </div>
                            <input type="text" placeholder="Subject" />
                            <textarea placeholder="Your Message *" rows={5} required></textarea>
                            <button type="submit" className="btn btn--gold">
                                <i className="fa-solid fa-paper-plane"></i> SEND MESSAGE
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* WORKING HOURS */}
            <section className="contact-hours">
                <div className="container">
                    <div className="contact-hours__grid">
                        <div className="contact-hours__card reveal">
                            <i className="fa-solid fa-bell-concierge"></i>
                            <h4>Front Desk</h4>
                            <p>24 Hours / 7 Days a Week</p>
                        </div>
                        <div className="contact-hours__card reveal">
                            <i className="fa-solid fa-utensils"></i>
                            <h4>Restaurant</h4>
                            <p>7:00 AM — 11:00 PM</p>
                        </div>
                        <div className="contact-hours__card reveal">
                            <i className="fa-solid fa-champagne-glasses"></i>
                            <h4>Banquet Booking</h4>
                            <p>10:00 AM — 8:00 PM</p>
                        </div>
                        <div className="contact-hours__card reveal">
                            <i className="fa-solid fa-headset"></i>
                            <h4>Reservations</h4>
                            <p>9:00 AM — 9:00 PM</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
