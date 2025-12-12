import { useState } from "react";

export default function Tabs({ children }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="tabs-container">

      <div className="tabs-nav">
        {children.map((child, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`tab-btn ${activeIndex === index ? "active" : ""}`}
          >
            {child.props.title}
          </button>
        ))}
      </div>

      <div className="tab-content">
        {children[activeIndex]}
      </div>
    </div>
  );
}
