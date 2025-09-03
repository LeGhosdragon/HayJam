import { useState } from "react";
import "./Forum.css";

function Forum({ threads }) {
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (index) => {
    setExpanded((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const goToThread = (thread) => {
    // Replace with actual navigation logic (e.g., React Router)
    alert(`Going to thread: ${thread.tName}`);
  };

  return (
    <div className="forum-page">
      <h1 className="forum-description">
        The forum is a hub of activity, where anyone can attempt to find a discussion to suit their interests.
      </h1>
      <div className="thread-box">
        {threads.map((thread, index) => {
          const isExpanded = expanded[index] || false;
          return (
            <div key={index} className={`thread-viewer ${isExpanded ? "expanded" : ""}`}>
              <div className="thread-header">
                <h3
                  className="thread-title"
                  onClick={() => goToThread(thread)}
                >
                  {thread.tName}
                </h3>
                <span
                  className="arrow"
                  onClick={() => toggleExpand(index)}
                >
                  {isExpanded ? "Retract ▼" : "Expand ▶"}
                </span>
              </div>
              <p className="thread-resume">{thread.shortResume}</p>
              <div className="thread-meta">
                <span>Since {thread.threadAge}</span>
                <span>👥 {thread.active} active</span>
              </div>
              {isExpanded && (
                <div className="thread-description">
                  <p>{thread.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Forum;
