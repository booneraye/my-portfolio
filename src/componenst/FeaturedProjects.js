import React from "react";
import { Col, Row } from "shards-react";
import { useAppData } from "../context/AppContext";
import ProjectCard from "./ProjectCard";
import SectionContainer from "./SectionContainer";

const FeaturedProjects = () => {
  const { MY_PROJECTS } = useAppData();

  return (
    <SectionContainer id="featured-projects" title="Feature Projects">
      <Row>
        {MY_PROJECTS.filter((project) => project.featured)
          .map((project) => ({
            ...project,
            description: project.description.split("\n"),
          }))
          .map((project, index) => (
            <Col md={2} sm={6} xs={6} style={{ padding: 10 }}>
              <ProjectCard project={project} id={index} key={index} />
            </Col>
          ))}
      </Row>
    </SectionContainer>
  );
};

export default FeaturedProjects;
