import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
    return (
        <section className="section-padding hero-section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', paddingTop: '120px' }}>
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '800px' }}
                >
                    <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', color: 'var(--text-primary)', marginBottom: '32px', lineHeight: '1' }}>
                        Sukhman <span className="gradient-text">Brar</span>
                    </h1>

                    <div className="border-frame" style={{ padding: '40px', background: 'var(--glass)', backdropFilter: 'blur(10px)', marginBottom: '40px' }}>
                        <div className="label-tab">Professional Profile</div>
                        <div className="scanline"></div>

                        <h2 className="display-text" style={{ fontSize: '1.75rem', marginBottom: '16px', color: 'var(--accent-light)', textTransform: 'none', letterSpacing: 'normal' }}>
                            Software Engineer | Backend, Cloud Infrastructure & Security
                        </h2>
                        <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                            I design and build production-grade software systems across backend services, cloud infrastructure, and security-focused automation. My work spans distributed systems, infrastructure-as-code, observability pipelines, and secure-by-default architecture.
                        </p>
                    </div>

                    <div className="hero-button-group" style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <a href="#experience" className="btn-industrial btn-industrial-ghost" style={{ textDecoration: 'none' }}>
                            View Experience <ArrowRight size={18} />
                        </a>

                        <a href="#work" className="mono uppercase" style={{ textDecoration: 'none', color: 'var(--text-secondary)', fontSize: '11px', fontWeight: '700', letterSpacing: '0.1em' }}>
                            See Featured Projects
                        </a>

                        <div className="hero-quick-links" style={{ display: 'flex', gap: '16px' }}>
                            <a href="https://github.com/sukhman785" target="_blank" rel="noreferrer" className="social-link" style={{ fontSize: '1.5rem', color: 'var(--text-secondary)' }}>
                                <Github size={24} />
                            </a>
                            <a href="https://linkedin.com/in/sbrar05" target="_blank" rel="noreferrer" className="social-link" style={{ color: 'var(--text-secondary)' }}>
                                <Linkedin size={24} />
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
