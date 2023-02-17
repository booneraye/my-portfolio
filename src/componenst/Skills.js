import React from "react";
import { ReactComponent as GitHub } from "../assets/icons/github1.svg";
import { ReactComponent as Nodejs } from "../assets/icons/nodejs.svg";
import { ReactComponent as ReactJS } from "../assets/icons/reactjs.svg";
import { ReactComponent as HTML } from "../assets/icons/html.svg";
import { ReactComponent as CSS } from "../assets/icons/css.svg";
import { ReactComponent as PHP } from "../assets/icons/php.svg";
import { ReactComponent as Javascript } from "../assets/icons/javascript.svg";
import { ReactComponent as Mysql } from "../assets/icons/mysql.svg";
import { ReactComponent as Wordpress } from "../assets/icons/wordpress.svg";
import { ReactComponent as Woocommerce } from "../assets/icons/woocommerce.svg";
import { Col, Row } from "shards-react";
import SectionContainer from "./SectionContainer";

const Skills = () => {
  return (
    <SectionContainer id="skills" title="Skills">
      <Row>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <GitHub width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <Nodejs width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <ReactJS width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <HTML width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <CSS width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <PHP width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <Javascript width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <Mysql width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <Wordpress width="100px" height="100px" />
        </Col>
        <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
          <Woocommerce width="100px" height="100px" />
        </Col>
      </Row>
    </SectionContainer>
  );
};

export default Skills;
