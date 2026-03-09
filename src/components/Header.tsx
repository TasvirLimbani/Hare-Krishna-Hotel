import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useScrollHeader } from '../hooks/useScrollHeader';

export interface NavItem {
    label: string;
    href: string;
    isHash?: boolean;
    dropdown?: { label: string; href: string }[];
}

interface HeaderProps {
    navItems: NavItem[];
    activePage?: string;
    alwaysScrolled?: boolean;
}

export default function Header({ navItems, activePage, alwaysScrolled }: HeaderProps) {
    const scrolled = useScrollHeader();
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const isScrolled = alwaysScrolled || scrolled;

    const handleNavClick = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const handleDropdownToggle = (e: React.MouseEvent) => {
        e.preventDefault();
        setDropdownOpen(!dropdownOpen);
    };

    const renderLink = (item: NavItem, index: number) => {
        const isActive = activePage === item.label;

        if (item.dropdown) {
            return (
                <div className={`header__dropdown${dropdownOpen ? ' open' : ''}`} key={index}>
                    <a
                        href="#"
                        className={`header__link${isActive ? ' active' : ''}`}
                        onClick={handleDropdownToggle}
                    >
                        {item.label} <i className="fa-solid fa-chevron-down"></i>
                    </a>
                    <div className="header__dropdown-menu">
                        {item.dropdown.map((sub, i) => (
                            <Link key={i} to={sub.href} target="_blank" onClick={handleNavClick}>
                                {sub.label}
                            </Link>
                        ))}
                    </div>
                </div>
            );
        }

        if (item.isHash) {
            return (
                <a
                    key={index}
                    href={item.href}
                    className={`header__link${isActive ? ' active' : ''}`}
                    onClick={handleNavClick}
                >
                    {item.label}
                </a>
            );
        }

        return (
            <Link
                key={index}
                to={item.href}
                className={`header__link${isActive ? ' active' : ''}`}
                onClick={handleNavClick}
            >
                {item.label}
            </Link>
        );
    };

    return (
        <header className={`header${isScrolled ? ' scrolled' : ''}`} id="header">
            <div className="header__inner">
                <Link to="/" className="header__logo">
                    <i className="fa-solid fa-shield-halved"></i>
                    <span>HARE KRISHNA</span>
                </Link>
                <nav className={`header__nav${menuOpen ? ' open' : ''}`} id="nav">
                    {navItems.map(renderLink)}
                </nav>
                <div className="header__actions">
                    <a href="#rooms" className="btn btn--gold btn--sm">BOOK NOW</a>
                </div>
                <button
                    className={`header__burger${menuOpen ? ' active' : ''}`}
                    onClick={() => { setMenuOpen(!menuOpen); setDropdownOpen(false); }}
                    aria-label="Toggle menu"
                >
                    <span></span><span></span><span></span>
                </button>
            </div>
        </header>
    );
}
