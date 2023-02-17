import React from "react";

const SectionContainer = ({ children, ...props }) => {
  return (
    <div style={{ padding: "5%" }} id={props.id}>
      {/* <hr style={{ width: "25%" }} /> */}
      {props.title && (
        <h3 style={{ margin: "0 auto", textAlign: "center", marginBottom: 20 }}>
          {props.title}
        </h3>
      )}
      {children}
    </div>
  );
};

export default SectionContainer;
