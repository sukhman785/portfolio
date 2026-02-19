import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

interface Project {
    id: string;
    title: string;
    description: string;
    tags: string[];
    impact: string;
    status: 'LIVE' | 'POLISHING' | 'PLANNED' | 'IN PROGRESS';
    specs: { label: string; value: string }[];
    github?: string;
}

const projects: Project[] = [
    {
        id: "PROJ-01",
        title: "Cloud AutoOps",
        description: "End-to-end observability platform featuring real-time log simulation, ML-based anomaly detection, and automated remediation triggers. High-performance FastAPI backend with WebSocket event streaming.",
        tags: ["Python", "FastAPI", "React", "Docker", "Terraform", "AWS"],
        impact: "Full-stack systems design with real-time event processing and automated incident lifecycle management.",
        status: "LIVE",
        specs: [
            { label: "Architecture", value: "Event-Driven" },
            { label: "Environment", value: "AWS EC2" },
            { label: "Core Focus", value: "Observability" }
        ],
        github: "https://github.com/sukhman785/Cloud-AutoOps",
    },
    {
        id: "PROJ-02",
        title: "AWS Security Baseline",
        description: "Modular Terraform framework provisioning secure-by-default infrastructure. Enforces least-privilege IAM, encrypted storage, and network isolation with automated security validation.",
        tags: ["Terraform", "AWS", "Checkov", "tfsec"],
        impact: "Hardened infrastructure with zero public S3 access, IMDSv2 enforcement, and policy-as-code security gates.",
        status: "LIVE",
        specs: [
            { label: "Compliance", value: "Verified" },
            { label: "Security", value: "Cloud-Native" },
            { label: "Workflow", value: "Automated" }
        ],
        github: "https://github.com/sukhman785/Terraform-AWS-Security-Baseline",
    },
    {
        id: "PROJ-03",
        title: "MolView Platform",
        description: "Completed full-stack molecular data platform for extracting, normalizing, and storing compound records. Built with a C-powered parsing core, Python processing pipelines, and a web UI for faster exploration of chemical datasets.",
        tags: ["C", "Python", "SQL", "JavaScript"],
        impact: "Delivered a production-ready cross-language system that improves reliability and throughput for chemistry data ingestion and query workflows.",
        status: "LIVE",
        specs: [
            { label: "Backend", value: "C + Python" },
            { label: "Database", value: "SQL" },
            { label: "Maturity", value: "Completed" }
        ],
        github: "https://github.com/sukhman785/molview",
    },
    {
        id: "PROJ-04",
        title: "OctagonOdds",
        description: "In-progress UFC betting odds predictor that combines fighter statistics, stylistic matchup features, and contextual fight factors to estimate realistic win probabilities and identify market inefficiencies.",
        tags: ["Python", "FastAPI", "Next.js", "PostgreSQL", "XGBoost", "Docker"],
        impact: "Building an end-to-end ML + product pipeline with automated data ingestion, model-driven odds conversion, and a custom matchup simulator for scenario analysis.",
        status: "IN PROGRESS",
        specs: [
            { label: "Domain", value: "Sports ML" },
            { label: "Backend", value: "FastAPI" },
            { label: "Data", value: "UFC Stats" }
        ],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="work" className="section-padding">
            <div className="portfolio-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                    style={{ textAlign: 'left', borderBottom: '1px solid var(--border-dim)', paddingBottom: '32px', marginBottom: '60px' }}
                >
                    <span className="mono uppercase" style={{ color: 'var(--accent-light)', fontSize: '12px', fontWeight: '700' }}>Project Showcase</span>
                    <h2 className="display-text" style={{ fontSize: '3rem', marginTop: '12px' }}>Featured <span style={{ color: 'var(--accent-light)' }}>Work</span></h2>
                </motion.div>

                <div className="projects-util-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(450px, 1fr))', gap: '32px' }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="border-frame"
                            style={{ background: 'rgba(20, 27, 24, 0.6)', backdropFilter: 'blur(5px)' }}
                        >
                            <div className="label-tab" style={{ color: 'var(--accent-light)' }}>Project 0{index + 1}</div>

                            <div style={{ padding: '32px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', alignItems: 'center' }}>
                                    <h3 className="display-text" style={{ fontSize: '1.5rem', textTransform: 'none', letterSpacing: 'normal' }}>{project.title}</h3>
                                    <div className="status-indicator">
                                        <div
                                            className="status-dot"
                                            style={{
                                                background: project.status === 'LIVE'
                                                    ? '#22c55e'
                                                    : (project.status === 'IN PROGRESS'
                                                        ? 'var(--accent)'
                                                        : (project.status === 'POLISHING' ? 'var(--security-amber)' : 'var(--text-muted)'))
                                            }}
                                        ></div>
                                        <span className="mono uppercase" style={{ fontSize: '10px' }}>{project.status}</span>
                                    </div>
                                </div>

                                <div className="project-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '20px' }}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className="border-frame mono" style={{ padding: '4px 10px', fontSize: '10px', background: 'var(--bg-secondary)', color: 'var(--accent)', fontWeight: '600' }}>{tag}</span>
                                    ))}
                                </div>

                                <p className="mono" style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '0.95rem', lineHeight: '1.7' }}>
                                    {project.description}
                                </p>

                                <div className="border-frame" style={{ padding: '20px', background: 'rgba(0,0,0,0.15)', marginBottom: '24px' }}>
                                    <div className="label-tab" style={{ fontSize: '9px', top: '-11px' }}>Impact</div>
                                    <p className="mono" style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>{project.impact}</p>
                                </div>

                                <div className="technical-specs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', borderTop: '1px solid var(--border-dim)', paddingTop: '20px', marginBottom: '24px' }}>
                                    {project.specs.map(spec => (
                                        <div key={spec.label}>
                                            <div className="mono uppercase" style={{ fontSize: '9px', color: 'var(--text-muted)', fontWeight: '700' }}>{spec.label}</div>
                                            <div className="mono" style={{ fontSize: '11px', fontWeight: '500' }}>{spec.value}</div>
                                        </div>
                                    ))}
                                </div>

                                <div className="project-actions" style={{ display: 'flex', gap: '24px' }}>
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer" className="mono uppercase" style={{ fontSize: '11px', color: 'var(--accent)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: '700' }}>
                                            <Github size={15} /> Source Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
