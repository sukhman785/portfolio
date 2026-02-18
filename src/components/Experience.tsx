import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react';

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    location: string;
    description: string[];
    skills: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "IDENTOS INC",
        role: "Information Security & IT Support Analyst Intern",
        period: "May 2025 – August 2025",
        location: "Toronto, ON",
        description: [
            "Built an internal alerting pipeline using Azure Logic Apps that pushed security events to Slack and auto-created Jira tickets.",
            "Developed a Node.js-based integration with the AlienVault OTX REST API for an internal threat intelligence service.",
            "Authored technical documentation and reusable workflows for long-term scalability of automation tools.",
            "Aligned security monitoring practices with NIST CSF and ISO 27001 by validating control effectiveness."
        ],
        skills: ["Azure Logic Apps", "Node.js", "Threat Intelligence", "NIST CSF"]
    },
    {
        company: "Bell Canada",
        role: "Cyber Incident & Intelligence (CIC) Analyst Intern",
        period: "Jan 2025 – April 2025",
        location: "Mississauga, ON",
        description: [
            "Supported cyber operations for 70+ enterprise clients, assisting with alert triage and incident investigations.",
            "Triaged and investigated 100+ security alerts per day in a high-volume monitoring environment.",
            "Developed custom ServiceNow dashboards and data filters to support scalable ticketing workflows and observability."
        ],
        skills: ["Incident Response", "ServiceNow", "Cyber Intelligence", "Alert Triage"]
    },
    {
        company: "University of Guelph",
        role: "Software Engineer Intern",
        period: "June 2024 – August 2024",
        location: "Guelph, ON",
        description: [
            "Built a web-based geospatial dashboard using Leaflet and Azure Maps to visualize avian influenza cases.",
            "Cleaned and transformed large datasets including thousands of influenza case records and environmental data.",
            "Deployed and hosted the application on AWS using an EC2-based setup, supporting reliable production access."
        ],
        skills: ["AWS EC2", "React", "Leaflet", "Data Transformation"]
    }
];

const Experience: React.FC = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                    style={{ marginBottom: '6rem' }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: 'var(--accent-light)', marginBottom: '1.5rem' }}>
                        <Briefcase size={20} />
                        <span className="mono" style={{ fontWeight: '800', letterSpacing: '0.2em', fontSize: '12px' }}>Professional Experience</span>
                    </div>
                    <h2 className="display-text" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', lineHeight: '1.2' }}>
                        Professional <span style={{ color: 'var(--accent-light)' }}>History</span>
                    </h2>
                </motion.div>

                <div className="experience-list" style={{ display: 'grid', gap: '3rem' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company + exp.role}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="border-frame experience-card"
                            style={{ padding: '3rem', position: 'relative' }}
                        >
                            <div className="label-tab" style={{ color: 'var(--cyan)' }}>EXP-{index + 1}</div>
                            <div className="scanline"></div>

                            <div className="exp-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '2.5rem' }}>
                                <div>
                                    <h3 className="display-text" style={{ fontSize: '1.75rem', marginBottom: '8px' }}>{exp.role}</h3>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-light)', fontWeight: '700' }} className="mono">
                                        {exp.company}
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '700' }} className="mono">
                                        <Calendar size={14} /> {exp.period}
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '12px', fontWeight: '700', marginTop: '4px' }} className="mono">
                                        <MapPin size={14} /> {exp.location}
                                    </div>
                                </div>
                            </div>

                            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2.5rem 0' }}>
                                {exp.description.map((item, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '12px', marginBottom: '12px', color: 'var(--text-secondary)', lineHeight: '1.7' }} className="mono">
                                        <ChevronRight size={18} style={{ color: 'var(--accent-light)', flexShrink: 0, marginTop: '2px' }} />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {exp.skills.map(skill => (
                                    <span key={skill} className="border-frame mono" style={{
                                        padding: '4px 12px', fontSize: '10px', fontWeight: '700',
                                        background: 'rgba(255,255,255,0.03)', color: 'var(--cyan)',
                                        borderColor: 'var(--border-bright)'
                                    }}>{skill}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
