import React from "react";
import { Col, Row } from "shards-react";
import ProjectCard from "../componenst/ProjectCard";
import { useAppData } from "../context/AppContext";

const WordPressProjects = () => {
  const { WORDPRESS_PROJECTS } = useAppData();
  return (
    <div style={{ padding: "20px 3%" }}>
      <h3 style={{ margin: 5, marginBottom: 30, textAlign: "center" }}>
        My WordPress Projects
      </h3>
      <Row>
        {WORDPRESS_PROJECTS.map((project) => ({
          ...project,
          description: project.description.split("\n"),
        })).map((project, index) => (
          <Col md={3} sm={6} xs={6} style={{ padding: 10 }}>
            <ProjectCard project={project} id={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default WordPressProjects;
