import React from "react";
import { Col, Row } from "shards-react";
import Typewriter from "typewriter-effect";

import AwesomeSlider from "react-awesome-slider";
import Image1 from "../assets/images/1.png";
import Image2 from "../assets/images/1.png";

const MainCover = () => {
  return (
    <div style={{ height: "100vh", margin: 0, display: "block" }}>
      <Row style={{ height: "100vh", margin: 0 }}>
        <Col md={7} style={{ padding: "10%" }}>
          <h1>
            <Typewriter
              options={{
                strings: ["Boone Raye Flores"],
                autoStart: true,
                loop: true,
                pauseFor: 60000,
              }}
            />
          </h1>
          <h4>
            <Typewriter
              options={{
                strings: [
                  "Frontend Developer",
                  "IT Specialist",
                  "Digital Marketer",
                  "SEO Specialist",
                ],
                autoStart: true,
                loop: true,
              }}
            />
          </h4>
          <br />
          <br />
          <p>
            I'm a career shifter who previously worked in sales and marketing.
            My responsibilities included social media management, content
            creation, and merchant and partner acquisition. <br />
            <br />
            However, I decided to pursue my passion and dream of becoming a web
            developer in 2020. The transition was difficult but I'm glad to be
            on this path. I'm still learning but I have already accomplished
            some projects that I'm proud of.
            <br />
            <br />
            <strong style={{fontWeight: "bold"}}>
              I'm dedicated to continuing my growth and development as a web
              developer.
            </strong>
          </p>
        </Col>
        <Col md={5}>
          <img src={Image1} style={{ width: "100%" }} />
        </Col>
      </Row>
    </div>
  );
};

export default MainCover;
