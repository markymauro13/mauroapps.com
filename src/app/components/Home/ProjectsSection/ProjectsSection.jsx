import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
import Image from "next/image";
import { projects } from "../../../data/projects";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  const visibleProjects = projects.filter((p) => p.isVisible);

  return (
    <section className="projects-section" id="projects">
      <Container fluid className="px-0">
        {/* Section Header */}
        <motion.div 
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="projects-eyebrow">Our Apps</span>
          <h2 className="projects-title">Designed for Everyone</h2>
          <p className="projects-subtitle">
            Premium mobile applications built with attention to every detail.
            Native performance, beautiful interfaces.
          </p>
        </motion.div>

        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} {...project} index={index} />
            ))}
          </div>
        ) : (
          <EmptyState />
        )}
      </Container>
    </section>
  );
}

function ProjectCard({ title, description, link, icon, index }) {
  return (
    <motion.article 
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.7, 
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.1 
      }}
    >
      {/* Preview Area */}
      <div className="project-card-preview">
        <div className="project-card-icon">
          {icon || "📱"}
        </div>
      </div>
      
      {/* Content */}
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
        
        <a 
          href={link} 
          className="project-card-action"
          target="_blank"
          rel="noreferrer"
        >
          View on App Store
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path 
              d="M3.33337 8H12.6667M12.6667 8L8.00004 3.33333M12.6667 8L8.00004 12.6667" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </motion.article>
  );
}

function EmptyState() {
  return (
    <motion.div 
      className="projects-grid"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <article className="project-card project-card-compact">
        <div className="project-card-icon-compact">
          <Image
            src="/assets/dearly_icon.png"
            alt="Dearly"
            width={120}
            height={120}
            className="dearly-logo"
            unoptimized
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '22px' }}
          />
        </div>
        <div className="project-card-content">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <h3 className="project-card-title" style={{ margin: 0 }}>
              Dearly
            </h3>
            <span className="coming-soon-tag">Coming Soon</span>
          </div>
          <p className="project-card-description">
            A beautiful app for preserving and cherishing greeting cards from loved ones. 
            Scan, store, and relive your special moments forever.
          </p>
          <a 
            href="https://github.com/markymauro13/Dearly"
            target="_blank"
            rel="noreferrer"
            className="project-card-action"
            style={{ marginTop: 'auto' }}
          >
            View on GitHub
          </a>
        </div>
      </article>
    </motion.div>
  );
}
