import React, { useState } from "react";
import SectionContainer from "../components/SectionContainer";
import { Col, Row, Popover, PopoverBody, PopoverHeader } from "shards-react";
import { useAppData } from "../context/AppContext";

const Logos = ({ data }) => {
  const { Logo, stack, description, id, selectedID, setSelectedID } = data;
  return (
    <Col md={2} sm={6} xs={6} style={{ padding: 20 }}>
      <img
        src={Logo}
        style={{ width: 100, height: 100 }}
        id={`skill-${id}`}
        onClick={() => setSelectedID(selectedID === id ? "" : id)}
        className="skill-logo"
      />

      {selectedID === id && (
        <Popover
          placement="bottom"
          open={selectedID === id}
          toggle={() => setSelectedID(selectedID === id ? "" : id)}
          target={`#skill-${id}`}
        >
          <PopoverHeader>{stack}</PopoverHeader>
          <PopoverBody>{description}</PopoverBody>
        </Popover>
      )}
    </Col>
  );
};

const Skills = () => {
  const { INFO } = useAppData();
  const [selectedID, setSelectedID] = useState("");
  return (
    <SectionContainer id="skills" title="Skills">
      <Row>
        {INFO.SKILLS.map((SKILL, id) => (
          <Logos
            data={{
              selectedID,
              setSelectedID,
              id,
              ...SKILL,
            }}
          />
        ))}
      </Row>
    </SectionContainer>
  );
};

export default Skills;
