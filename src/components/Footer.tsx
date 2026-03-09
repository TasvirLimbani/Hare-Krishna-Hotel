import { Link } from 'react-router-dom';

interface FooterLink {
    label: string;
    href: string;
    isExternal?: boolean;
}

interface FooterProps {
    exploreLinks?: FooterLink[];
    quickLinks?: FooterLink[];
}

const defaultExploreLinks: FooterLink[] = [
    { label: 'Rooms & Suites', href: '/#rooms' },
    { label: 'Dining', href: '/#dining' },
    { label: 'Banquets', href: '/#banquets' },
    { label: 'Gallery', href: '#' },
];

const defaultQuickLinks: FooterLink[] = [
    { label: 'About Us', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'FAQs', href: '#' },
];

export default function Footer({ exploreLinks = defaultExploreLinks, quickLinks = defaultQuickLinks }: FooterProps) {
    const renderLink = (link: FooterLink, i: number) => {
        if (link.href.startsWith('#') || link.href.startsWith('/')) {
            return link.href.startsWith('#') ? (
                <a key={i} href={link.href}>{link.label}</a>
            ) : (
                <Link key={i} to={link.href}>{link.label}</Link>
            );
        }
        return <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}</a>;
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__grid">
                    <div className="footer__brand">
                        <Link to="/" className="header__logo">
                            <i className="fa-solid fa-shield-halved"></i>
                            <span>HARE KRISHNA</span>
                        </Link>
                        <p>Where timeless luxury meets modern sophistication. Experience the finest in hospitality.</p>
                        <div className="footer__social">
                            <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                            <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram"></i></a>
                            <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube"></i></a>
                        </div>
                    </div>
                    <div className="footer__col">
                        <h4>EXPLORE</h4>
                        {exploreLinks.map(renderLink)}
                    </div>
                    <div className="footer__col">
                        <h4>LINKS</h4>
                        {quickLinks.map(renderLink)}
                    </div>
                </div>
                <div className="footer__bottom">
                    <p>&copy; 2026 Hare Krishna Hotel. All rights reserved.</p>
                    <p className="footer__credit">
                        Designed, Developed &amp; Maintained by <strong>RADHE SOFTWARE SOLUTIONS</strong>
                    </p>
                </div>
            </div>
        </footer>
    );
}
