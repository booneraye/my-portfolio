import React from "react";
import {
  faFlagCheckered,
  faPen,
  faSchool,
  faSuitcase,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SectionContainer from "../components/SectionContainer";

const WorkHistory = () => {
  return (
    <SectionContainer id="carreer-history" title="Carreer History">
      <VerticalTimeline lineColor="#dbdbdb">
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h5 className="vertical-timeline-element-title">Gate Distribution</h5>
          <h6 className="vertical-timeline-element-subtitle">
            IT Specialist / Web Developer
          </h6>
          <p>
            React Js Application/ Web Design / Database Management / Network
            Management
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90)" }}
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h5 className="vertical-timeline-element-title">Biyaheroes</h5>
          <h6 className="vertical-timeline-element-subtitle">
            Freelance Web Developer
          </h6>
          <p>Web Design / Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          contentStyle={{ background: "#E24D24", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  #E24D24" }}
          iconStyle={{ background: "#E24D24", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faFlagCheckered} />}
        >
          <h6 className="vertical-timeline-element-subtitle">
            Start of my carreer shift journey
          </h6>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2019"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90" }}
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPen} />}
        >
          <h5 className="vertical-timeline-element-title">
            Reacj JS PH - Guest Speaker
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            The Business side: Importance of Social Media Marketing tools
            Integration in Web Development
          </h6>
          <p>Community / Talk / Presentations</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Decemeber 2018"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90" }}
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h5 className="vertical-timeline-element-title">
            Advanced Google Analytics
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            Online Course Certification
          </h6>
          <p>Analytics / Data Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2018"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90" }}
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h5 className="vertical-timeline-element-title">Biyaheroes</h5>
          <h6 className="vertical-timeline-element-subtitle">
            Sales & Marketing Office
          </h6>
          <p>
            Social Media Manager / Merchant Partner Aquisition / Content
            Creation
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          contentStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(206, 44, 90" }}
          iconStyle={{ background: "rgb(206, 44, 90)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h5 className="vertical-timeline-element-title">
            BSBA major in Marketing Management
          </h5>
          <h6 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h6>
          <p>Dept. Org Creative Director</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#E24D24", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faFlagCheckered} />}
        />
      </VerticalTimeline>
    </SectionContainer>
  );
};

export default WorkHistory;
