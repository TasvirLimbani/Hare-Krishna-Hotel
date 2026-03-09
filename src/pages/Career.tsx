import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { groupNavItems } from '../data/navigation';
import '../styles/career.css';

export default function Career() {
    useScrollReveal();

    return (
        <>
            <Header navItems={groupNavItems} activePage="CAREER" alwaysScrolled />

            {/* HERO */}
            <section className="career-hero">
                <div className="career-hero__bg"></div>
                <div className="career-hero__overlay"></div>
                <div className="career-hero__content reveal">
                    <p className="hero__subtitle">JOIN OUR FAMILY</p>
                    <h1 className="hero__title">Build Your Career<br /><em>With Us</em></h1>
                    <p className="hero__desc">
                        Be part of a team that turns hospitality into an art form —<br />
                        where your passion meets purpose.
                    </p>
                </div>
            </section>

            {/* INTRO / VALUES */}
            <section className="career-intro" id="about">
                <div className="container">
                    <div className="career-intro__grid">
                        <div className="career-intro__content reveal">
                            <p className="section-tag">WHO WE ARE</p>
                            <h2 className="section-title">Our People,<br /><em>Our Strength</em></h2>
                            <p className="career-intro__desc">
                                At Hare Krishna Hotel, we believe that exceptional hospitality begins with exceptional people. Our guests are the heart of our business, and our team members are the backbone that keeps it beating strong.
                            </p>
                            <p className="career-intro__desc">
                                We don't just hire employees — we welcome family. Every staff member, from housekeeping to management, plays a vital role in creating the warm, luxurious experiences our guests cherish. When our people grow, our hotel grows.
                            </p>
                        </div>
                        <div className="career-intro__values reveal">
                            <div className="career-value">
                                <div className="career-value__icon"><i className="fa-solid fa-handshake"></i></div>
                                <div>
                                    <h4>Guest-First Culture</h4>
                                    <p>Every interaction matters. We empower our team to go above and beyond for every guest.</p>
                                </div>
                            </div>
                            <div className="career-value">
                                <div className="career-value__icon"><i className="fa-solid fa-heart"></i></div>
                                <div>
                                    <h4>Employee Well-being</h4>
                                    <p>Competitive pay, growth opportunities, and a supportive work environment — because you deserve the best too.</p>
                                </div>
                            </div>
                            <div className="career-value">
                                <div className="career-value__icon"><i className="fa-solid fa-graduation-cap"></i></div>
                                <div>
                                    <h4>Continuous Learning</h4>
                                    <p>Regular training programs and skill development workshops to help you reach your full potential.</p>
                                </div>
                            </div>
                            <div className="career-value">
                                <div className="career-value__icon"><i className="fa-solid fa-users"></i></div>
                                <div>
                                    <h4>Team Spirit</h4>
                                    <p>We celebrate together, support each other, and build lasting bonds beyond the workplace.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY JOIN */}
            <section className="career-why">
                <div className="container">
                    <p className="section-tag reveal">WHY HARE KRISHNA HOTEL?</p>
                    <h2 className="section-title reveal">More Than Just<br /><em>a Workplace</em></h2>
                    <div className="career-why__grid">
                        {[
                            { icon: 'fa-chart-line', title: 'Career Growth', desc: 'Clear paths for promotion and leadership opportunities across our growing hotel group.' },
                            { icon: 'fa-indian-rupee-sign', title: 'Competitive Package', desc: 'Attractive salary, performance bonuses, meals, and accommodation benefits.' },
                            { icon: 'fa-clock', title: 'Work-Life Balance', desc: 'Structured shifts, paid time off, and a management team that respects your personal time.' },
                            { icon: 'fa-award', title: 'Recognition', desc: 'Monthly awards, annual celebrations, and a culture that acknowledges outstanding performance.' },
                            { icon: 'fa-shield-halved', title: 'Job Security', desc: 'A stable, growing organization with 15+ years of trust and excellence in the industry.' },
                            { icon: 'fa-earth-americas', title: 'Multi-Location', desc: 'Opportunities to work across our properties in Navsari, Valsad, and future locations.' },
                        ].map((item, i) => (
                            <div className="career-why__card reveal" key={i}>
                                <i className={`fa-solid ${item.icon}`}></i>
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* APPLICATION FORM */}
            <section className="career-apply" id="apply">
                <div className="container">
                    <div className="career-apply__grid">
                        <div className="career-apply__info reveal">
                            <p className="section-tag">APPLY NOW</p>
                            <h2 className="section-title">Start Your<br /><em>Journey Today</em></h2>
                            <p className="career-apply__desc">
                                Ready to be part of the Hare Krishna family? Fill out the application form and we'll get back to you within 48 hours. We're always looking for passionate individuals who share our commitment to excellence.
                            </p>
                            <div className="career-apply__positions">
                                <h4>Current Openings</h4>
                                <ul>
                                    <li><i className="fa-solid fa-circle-check"></i> Front Desk Executive</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Restaurant Chef / Cook</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Housekeeping Staff</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Banquet Manager</li>
                                    <li><i className="fa-solid fa-circle-check"></i> Marketing Executive</li>
                                </ul>
                            </div>
                        </div>
                        <div className="career-apply__form-wrap reveal">
                            <h3>Application Form</h3>
                            <form className="career-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="career-form__row">
                                    <input type="text" placeholder="First Name *" required />
                                    <input type="text" placeholder="Last Name *" required />
                                </div>
                                <input type="email" placeholder="Email Address *" required />
                                <input type="tel" placeholder="Phone Number *" required />
                                <select defaultValue="" required>
                                    <option value="" disabled>Select Position *</option>
                                    <option>Front Desk Executive</option>
                                    <option>Restaurant Chef / Cook</option>
                                    <option>Housekeeping Staff</option>
                                    <option>Banquet Manager</option>
                                    <option>Marketing Executive</option>
                                    <option>Other</option>
                                </select>
                                <select defaultValue="" required>
                                    <option value="" disabled>Preferred Location *</option>
                                    <option>Navsari</option>
                                    <option>Valsad</option>
                                    <option>Any Location</option>
                                </select>
                                <input type="text" placeholder="Years of Experience" />
                                <textarea placeholder="Tell us about yourself — your skills, experience, and why you'd like to join our team..." rows={5} required></textarea>
                                <button type="submit" className="btn btn--gold career-form__submit">
                                    <i className="fa-solid fa-paper-plane"></i> SUBMIT APPLICATION
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
