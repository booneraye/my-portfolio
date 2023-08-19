import React from "react";
import { Col, Row } from "shards-react";
import PageContainer from "../components/PageContainer";
import ProjectCard from "../components/ProjectCard";
import { useAppData } from "../context/AppContext";

const ReactJSProjects = () => {
  const { REACT_JS_PROJECTS } = useAppData();
  return (
    <PageContainer>
      <div style={{ padding: "20px 3%" }}>
        <h3 style={{ margin: 5, marginBottom: 30, textAlign: "center" }}>
          My React JS Projects
        </h3>
        <Row>
          {REACT_JS_PROJECTS.map((project) => ({
            ...project,
            description: project.description.split("\n"),
          })).map((project, index) => (
            <Col md={3} sm={6} xs={6} style={{ padding: 10 }}>
              <ProjectCard project={project} id={index} />
            </Col>
          ))}
        </Row>
      </div>
    </PageContainer>
  );
};

export default ReactJSProjects;
