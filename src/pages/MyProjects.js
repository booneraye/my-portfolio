import React from "react";
import { Col, Row } from "shards-react";
import ProjectCard from "../components/ProjectCard";
import { PROJECTS } from "../data/project-list";

const MyProjects = () => {
  console.log(PROJECTS);
  return (
    <div>
      <h3 style={{ textAlign: "center", margin: 10 }}>Projects</h3>
      <Row style={{padding: "20px 10px"}}>
        {PROJECTS.map((project, index) => (
          <Col md={3} sm={6} xs={6} style={{ padding: 10 }} key={index}>
            <ProjectCard project={project} id={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MyProjects;
