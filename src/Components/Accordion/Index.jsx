import React, { useState } from "react";
import "./Styles.css";
import panels from "./Data";

function Index() {
  const [active, setActive] = useState(null);

  //Toggle function to expand/ collapse panels
  const toggleAccordion = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <div className="wrapper">
      <div className="accordion">
        {panels.map((panel, index) => (
          <div className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <h2>{panel.title}</h2>
              <span>{active === index ? "-" : "+"}</span>
            </div>
            <div
              className={
                active === index
                  ? "accordion-content show"
                  : "accordion-content"
              }
            >
              {panel.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Index;
