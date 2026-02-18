import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className="navbar"
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
                background: scrolled ? 'rgba(13, 17, 16, 0.84)' : 'transparent',
                backdropFilter: scrolled ? 'blur(16px)' : 'none',
                borderBottom: scrolled ? '1px solid var(--border-bright)' : '1px solid transparent',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                padding: '20px 0'
            }}
        >
            <div className="portfolio-container navbar-inner" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" className="display-text" style={{ fontSize: '1.5rem', color: 'var(--text-primary)', textDecoration: 'none', letterSpacing: '0.1em' }}>
                    S.Brar<span style={{ color: 'var(--accent-light)' }}>/</span>26
                </a>

                <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
                    <ul className="navbar-links" style={{ display: 'flex', gap: '24px', listStyle: 'none' }}>
                        <li><a href="#about" className="mono uppercase" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '700' }}>Profile</a></li>
                        <li><a href="#experience" className="mono uppercase" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '700' }}>History</a></li>
                        <li><a href="#work" className="mono uppercase" style={{ fontSize: '11px', color: 'var(--text-secondary)', textDecoration: 'none', fontWeight: '700' }}>Projects</a></li>
                    </ul>
                    <a href="#contact" className="border-frame mono uppercase" style={{
                        padding: '8px 20px', fontSize: '11px', color: 'var(--accent-light)', textDecoration: 'none',
                        fontWeight: '800', borderStyle: 'solid', borderColor: 'var(--accent)', background: 'rgba(209, 178, 122, 0.08)'
                    }}>
                        Contact
                    </a>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
