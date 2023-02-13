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

const WorkHistory = () => {
  return (
    <div id="work-history" style={{display: "block"}}>
      <VerticalTimeline>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="2021 - present"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h3 className="vertical-timeline-element-title">Gate Distribution</h3>
          <h4 className="vertical-timeline-element-subtitle">
            IT Specialist / Web Developer
          </h4>
          <p>React Js Application/ Web Design / Database Management / Network Management</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020 - 2021"
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h3 className="vertical-timeline-element-title">Biyaheroes</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Freelance Web Developer
          </h4>
          <p>Web Design / Web Development</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faFlagCheckered} />}
        >
          <h4 className="vertical-timeline-element-subtitle">
            Start of my carreer shift journey
          </h4>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="October 2019"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faPen} />}
        >
          <h3 className="vertical-timeline-element-title">
            Reacj JS PH - Guest Speaker
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            The Business side: Importance of Social Media Marketing tools
            Integration in Web Development
          </h4>
          <p>Community / Talk / Presentations</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="Decemeber 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h3 className="vertical-timeline-element-title">
            Advanced Google Analytics
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Online Course Certification
          </h4>
          <p>Analytics / Data Science</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="April 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSuitcase} />}
        >
          <h3 className="vertical-timeline-element-title">Biyaheroes</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Sales & Marketing Office
          </h4>
          <p>Social Media Manager / Merchant Partner Aquisition / Content Creation</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014 - 2018"
          iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faSchool} />}
        >
          <h3 className="vertical-timeline-element-title">
            BSBA major in Marketing Management
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Bachelor Degree
          </h4>
          <p>Dept. Org Creative Director</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          icon={<FontAwesomeIcon icon={faFlagCheckered} />}
        />
      </VerticalTimeline>
    </div>
  );
};

export default WorkHistory;
