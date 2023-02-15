import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardImg,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "shards-react";

const ProjectCard = (props) => {
  const [open, setOpen] = useState("");
  return (
    <>
      <Modal
        style={{ padding: "10px 20px" }}
        open={open === props.id}
        toggle={() => setOpen("")}
      >
        <ModalHeader>{props.project.title}</ModalHeader>
        <ModalBody>
          {props.project.description.map((d) => (
            <p>{d}</p>
          ))}
          {props.project.link && (
            <Button onClick={() => window.open(props.project.link)} className="my-primary-btn">
              View Website
            </Button>
          )}
          <Button theme="light" onClick={() => setOpen("")} style={{margin: 5}}>
            Close
          </Button>
        </ModalBody>
      </Modal>
      <Card>
        {props.project.cover && <CardImg src={props.project.cover} top />}
        <CardBody style={{ padding: "10px 20px" }}>
          <h1 style={{ fontSize: "13px", lineHeight: "normal" }}>
            {props.project.title}
          </h1>
        </CardBody>
        <CardBody style={{ padding: 0 }}>
          <Button className="project-button" onClick={() => setOpen(props.id)}>
            Read More
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
