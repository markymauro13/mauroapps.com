import { Button, Card, Col } from "react-bootstrap";

export default function ProjectCard({ title, description, link }) {
  return (
    <Col md="6" lg="4" className="mb-4">
      <Card className="project-card text-center">
        <Card.Title className="fs-3 mb-3">{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>
          <Button
            href={link}
            variant="primary"
            className="mt-4 card-button"
            target="_blank"
            rel="noreferrer">
            View on App Store
          </Button>
        </Card.Text>
      </Card>
    </Col>
  );
}
