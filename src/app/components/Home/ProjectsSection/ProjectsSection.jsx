// ProjectsSection.js
import { Container, Row } from "react-bootstrap";
import { projects } from "../../../data/projects";
import ProjectCard from "./ProjectCard";
import "./ProjectsSection.css";

export default function ProjectsSection() {
  const visibleProjects = projects.filter((p) => p.isVisible);

  return (
    <div className="projects-section" id="projects">
      <Container>
        <h2 className="text-center mb-5">Our Mobile SaaS Projects</h2>

        {visibleProjects.length ? (
          <Row className="justify-content-center">
            {visibleProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </Row>
        ) : (
          <p className="text-center fs-5">Nothing here yet—check back later!</p>
        )}
      </Container>
    </div>
  );
}
