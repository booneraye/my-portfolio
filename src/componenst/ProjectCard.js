import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardImg,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from "shards-react";

const ProjectCard = (props) => {
  const [open, setOpen] = useState("");
  return (
    <>
      <Modal open={open === props.id} toggle={() => setOpen("")}>
        <ModalHeader>{props.project.title}</ModalHeader>
        <ModalBody style={{maxHeight: "70vh", overflow: "auto"}}>
          <p>
            {props.project.description}
          </p>
        </ModalBody>
        <ModalFooter style={{padding: "10px 20px"}}>
          <Button theme="light" onClick={() => setOpen("")}>Close</Button>
        </ModalFooter>
      </Modal>

      <Card>
        {props.project.cover ? <CardImg top src={props.project.cover} /> : ""}
        <CardBody style={{ padding: "10px 20px" }}>
          <h6 style={{ fontSize: "12px" }}>{props.project.title}</h6>
        </CardBody>
        <CardBody style={{ padding: 0 }}>
          <Button
            block
            className="read-more-btn"
            onClick={() => setOpen(props.id)}
          >
            Read more
          </Button>
        </CardBody>
      </Card>
    </>
  );
};

export default ProjectCard;
