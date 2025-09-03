// NavBar.js
import { useState } from "react";
import "./NavBar.css";

function NavBar({ buttons, userButtons }) {
  const [tooltip, setTooltip] = useState(null);

  // Handle mouse enter to show tooltip
  const handleMouseEnter = (e, label) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setTooltip({
      text: label,
      top: rect.top,
      left: rect.right + 5, // slightly outside nav-bar
    });
  };

  // Handle mouse leave to hide tooltip
  const handleMouseLeave = () => {
    setTooltip(null);
  };

  return (
    <>
      <div className="nav-bar">
        <div className="nav-items">
          {userButtons.map((btn, index) => (
            <button
              key={index}
              className="nav-button"
              onMouseEnter={(e) => handleMouseEnter(e, btn.label)}
              onMouseLeave={handleMouseLeave}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>

        <div className="user-buttons">
          {buttons.map((btn, index) => (
            <button
              key={index}
              className="nav-button"
              onMouseEnter={(e) => handleMouseEnter(e, btn.label)}
              onMouseLeave={handleMouseLeave}
              onClick={btn.onClick}
            >
              {btn.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tooltip rendered outside of nav-bar */}
      {tooltip && (
        <div
          className="tooltip"
          style={{
            position: "fixed",
            top: tooltip.top,
            left: tooltip.left,
            zIndex: 9999,
          }}
        >
          {tooltip.text}
        </div>
      )}
    </>
  );
}

export default NavBar;
