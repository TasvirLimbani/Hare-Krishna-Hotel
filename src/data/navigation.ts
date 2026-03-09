import { NavItem } from '../components/Header';

export const mainNavItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'GROUP', href: '/group' },
    {
        label: 'LOCATIONS',
        href: '#',
        dropdown: [
            { label: 'Navsari', href: '/navsari' },
            { label: 'Valsad', href: '/valsad' },
        ],
    },
    { label: 'CAREER', href: '/career' },
    { label: 'BLOGS', href: '/blog' },
    { label: 'CONTACT US', href: '/contact' },
];

export const locationNavItems: NavItem[] = [
    { label: 'HOME', href: '#hero', isHash: true },
    { label: 'ABOUT US', href: '#about', isHash: true },
    { label: 'ROOMS', href: '#rooms', isHash: true },
    { label: 'BANQUET HALLS', href: '#banquet', isHash: true },
    { label: 'RESTAURANT', href: '#restaurant', isHash: true },
    { label: 'GALLERY', href: '#gallery', isHash: true },
    { label: 'CONTACT US', href: '#contact', isHash: true },
];

export const groupNavItems: NavItem[] = [
    { label: 'HOME', href: '/' },
    { label: 'GROUP', href: '/group' },
    {
        label: 'LOCATIONS',
        href: '#',
        dropdown: [
            { label: 'Navsari', href: '/navsari' },
            { label: 'Valsad', href: '/valsad' },
        ],
    },
    { label: 'CAREER', href: '/career' },
    { label: 'BLOGS', href: '/blog' },
    { label: 'CONTACT US', href: '/contact' },
];
