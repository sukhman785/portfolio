import React from 'react';
import { motion } from 'framer-motion';
import { Cloud, ShieldCheck, Code2, Eye, GitBranch, AlertTriangle } from 'lucide-react';

const skills = [
    { name: "Cloud Infrastructure", icon: <Cloud size={16} /> },
    { name: "DevSecOps Engineering", icon: <ShieldCheck size={16} /> },
    { name: "Backend Development", icon: <Code2 size={16} /> },
    { name: "System Observability", icon: <Eye size={16} /> },
    { name: "Infrastructure as Code", icon: <GitBranch size={16} /> },
    { name: "Security Automation", icon: <AlertTriangle size={16} /> },
];

const About: React.FC = () => {
    return (
        <section id="about" className="section-padding">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                    style={{ textAlign: 'left', borderBottom: '1px solid var(--border-dim)', paddingBottom: '32px', marginBottom: '60px' }}
                >
                    <span className="mono uppercase" style={{ color: 'var(--accent-light)', fontSize: '12px', fontWeight: '700' }}>About / Engineer</span>
                    <h2 className="display-text" style={{ fontSize: '3rem', marginTop: '12px' }}>Professional <span style={{ color: 'var(--accent-light)' }}>Profile</span></h2>
                </motion.div>

                <div className="about-util-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)', gap: '60px', alignItems: 'start' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="border-frame" style={{ padding: '40px', background: 'var(--glass)' }}>
                            <div className="label-tab">Overview</div>
                            <div className="scanline"></div>

                            <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '24px' }}>
                                I am a Software Engineering student at the University of Guelph, graduating in April 2026. I specialize in building secure, resilient cloud architecture and automated pipelines.
                            </p>
                            <p className="mono" style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.9' }}>
                                With a background in security operations and full-stack development, I focus on creating systems that are secure by default without compromising on performance or scalability.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="border-frame" style={{ padding: '32px' }}>
                            <div className="label-tab">Core Skills</div>

                            <div className="capabilities-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                                {skills.map((skill, index) => (
                                    <motion.div
                                        key={skill.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.05 }}
                                        className="border-frame mono"
                                        style={{
                                            padding: '16px', background: 'var(--bg-secondary)', fontSize: '11px',
                                            display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '600'
                                        }}
                                    >
                                        <span style={{ color: 'var(--accent-light)' }}>{skill.icon}</span>
                                        {skill.name}
                                    </motion.div>
                                ))}
                            </div>

                            <div className="profile-stats-industrial" style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div className="border-frame" style={{ padding: '24px', textAlign: 'center' }}>
                                    <div className="display-text" style={{ fontSize: '2.5rem', color: 'var(--accent-light)' }}>2026</div>
                                    <div className="mono uppercase" style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700' }}>Graduation Year</div>
                                </div>
                                <div className="border-frame" style={{ padding: '24px', textAlign: 'center' }}>
                                    <div className="display-text" style={{ fontSize: '2.5rem', color: 'var(--cyan)' }}>3+</div>
                                    <div className="mono uppercase" style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700' }}>Work Placements</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default About;
