import React, { useState } from "react";
import {
<<<<<<< HEAD
  Card,
  CardBody,
  CardImg,
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
=======
  Button,
  Card,
  CardBody,
  CardImg,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
>>>>>>> 91b49b30341b4d41ac9db2abd3d4b611701685fb
} from "shards-react";

const ProjectCard = (props) => {
  const [open, setOpen] = useState("");
  return (
    <>
<<<<<<< HEAD
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

=======
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
              {props.project.btn_label}
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

>>>>>>> 91b49b30341b4d41ac9db2abd3d4b611701685fb
export default ProjectCard;
