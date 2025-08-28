// NavBar.js
import "./NavBar.css";

function NavBar({ buttons }) {
  return (
    <div className="nav-bar">
      {buttons.map((btn, index) => (
        <button
          key={index}
          className="nav-button"
          onClick={btn.onClick}
        >
          {btn.label}
        </button>
      ))}
    </div>
  );
}

export default NavBar;
