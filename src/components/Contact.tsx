import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Send } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="contact" className="section-padding">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="border-frame"
                    style={{ padding: '80px 40px', background: 'linear-gradient(125deg, rgba(165, 197, 179, 0.08) 0%, rgba(20, 27, 24, 0.82) 58%, rgba(209, 178, 122, 0.1) 100%)', textAlign: 'center' }}
                >
                    <div className="label-tab">Contact</div>
                    <div className="scanline"></div>

                    <Mail size={40} style={{ color: 'var(--accent-light)', marginBottom: '32px', marginInline: 'auto' }} />

                    <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', textTransform: 'none', letterSpacing: 'normal' }}>
                        Let's Start a <span className="gradient-text">Conversation</span>
                    </h2>

                    <p className="mono" style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 48px', lineHeight: '1.8' }}>
                        I’m currently open to software engineering roles across backend, cloud infrastructure, and security-focused systems.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
                        <motion.a
                            href="mailto:sukhmanb2001@gmail.ca"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="btn-industrial"
                            style={{ textDecoration: 'none' }}
                        >
                            Send an Email <Send size={18} />
                        </motion.a>

                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="https://github.com/sukhman785" target="_blank" rel="noreferrer" className="social-link" style={{ width: '56px', height: '56px', color: 'var(--text-secondary)' }}>
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/sbrar05" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--text-secondary)' }}>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                <footer className="footer" style={{ marginTop: '100px', paddingBlock: '40px', borderTop: '1px solid var(--border-dim)' }}>
                    <div className="mono uppercase" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                        &copy; 2026 Sukhman Brar
                    </div>
                    <div className="mono uppercase" style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '600' }}>
                        Software Engineer | Backend, Cloud Infrastructure & Security
                    </div>
                </footer>
            </div>
        </section>
    );
};

export default Contact;
