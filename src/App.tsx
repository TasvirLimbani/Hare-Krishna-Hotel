import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Group from './pages/Group';
import Navsari from './pages/Navsari';
import Valsad from './pages/Valsad';
import Career from './pages/Career';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { useScrollToHash } from './hooks/useScrollToHash';

function ScrollToTop() {
    useScrollToHash();
    return null;
}

export default function App() {
    return (
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/group" element={<Group />} />
                <Route path="/navsari" element={<Navsari />} />
                <Route path="/valsad" element={<Valsad />} />
                <Route path="/career" element={<Career />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    );
}
