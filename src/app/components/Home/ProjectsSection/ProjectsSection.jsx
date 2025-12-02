import { Container } from "react-bootstrap";
import { motion } from "framer-motion";
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
          <h2 className="projects-title">Designed for iOS</h2>
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
      {/* Coming Soon Card */}
      <article className="project-card project-card-coming-soon">
        <div className="project-card-preview">
          <div className="project-card-icon">✨</div>
        </div>
        <div className="project-card-content">
          <span className="coming-soon-badge">
            <span>Coming Soon</span>
          </span>
          <h3 className="project-card-title" style={{ marginTop: '12px' }}>
            Something Amazing
          </h3>
          <p className="project-card-description">
            We're working on something special. Our first iOS app is in development 
            and will be available on the App Store soon.
          </p>
        </div>
      </article>
      
      {/* Second Coming Soon Card */}
      <article className="project-card project-card-coming-soon">
        <div className="project-card-preview">
          <div className="project-card-icon">🚀</div>
        </div>
        <div className="project-card-content">
          <span className="coming-soon-badge">
            <span>In Development</span>
          </span>
          <h3 className="project-card-title" style={{ marginTop: '12px' }}>
            More to Come
          </h3>
          <p className="project-card-description">
            Stay tuned for more innovative iOS applications. Follow us for updates 
            and be the first to know when we launch.
          </p>
        </div>
      </article>
    </motion.div>
  );
}
