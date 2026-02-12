import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaApple, FaGooglePlay } from "react-icons/fa";
import projects from "../../../data/projects.json";
import BackgroundManager from "../../BackgroundManager/BackgroundManager";
import "./ProjectsSection.css";

const ANIMATION_EASE = [0.16, 1, 0.3, 1];

export default function ProjectsSection() {
  const visibleProjects = projects.filter((p) => p.isVisible);

  return (
    <section className="projects-section" id="projects">
      <BackgroundManager type="icons" />
      <div className="projects-container">
        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: ANIMATION_EASE }}
        >
          <span className="projects-eyebrow">Our Apps</span>
          <h2 className="projects-title">Designed for Everyone</h2>
          <p className="projects-subtitle">
            Premium mobile applications built with attention to every detail.
            Native performance, beautiful interfaces.
          </p>
        </motion.div>

        <div className="projects-grid">
          {visibleProjects.length > 0 ? (
            visibleProjects.map((project, index) => (
              <ProjectCard key={project.title} {...project} index={index} />
            ))
          ) : (
            <div className="no-projects">No projects found.</div>
          )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, icon, index, isComingSoon, githubLink, link, appleLink, googlePlayLink }) {
  const isInternalIcon = typeof icon === "string" && icon.startsWith("/");

  return (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, ease: ANIMATION_EASE, delay: index * 0.1 }}
    >
      {icon && (
        <div className="project-card-visual">
          <div className="project-card-icon-container">
            {isInternalIcon ? (
              <Image
                src={icon}
                alt={title}
                width={160}
                height={160}
                unoptimized
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "22%" }}
              />
            ) : (
              icon
            )}
          </div>
        </div>
      )}

      <div className="project-card-content">
        <header className="project-card-header">
          <h3 className="project-card-title">{title}</h3>
          {isComingSoon && <span className="coming-soon-tag">Coming Soon</span>}
        </header>

        {description && <p className="project-card-description">{description}</p>}

        <div className="project-card-actions">
          <div className="project-store-links">
            <StoreButton platform="ios" link={appleLink} isActive={!isComingSoon} />
            <StoreButton platform="android" link={googlePlayLink} isActive={!isComingSoon} />
          </div>

          {(githubLink || link) && (
            <a href={githubLink || link} target="_blank" rel="noreferrer" className="btn-github">
              <FaGithub size={18} />
              {githubLink ? "View on GitHub" : "View Project"}
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

function StoreButton({ platform, link, isActive }) {
  const Icon = platform === "ios" ? FaApple : FaGooglePlay;
  const label = platform === "ios" ? "App Store" : "Google Play";
  const Tag = isActive ? "a" : "div";

  const props = isActive
    ? { href: link || "#", target: "_blank", rel: "noreferrer", className: "btn-store active" }
    : { className: "btn-store placeholder" };

  return (
    <Tag {...props}>
      <Icon size={platform === "ios" ? 16 : 14} />
      <span>{label}</span>
    </Tag>
  );
}
