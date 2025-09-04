// ColorWheel.js
import { useState } from "react";
import { HslColorPicker } from "react-colorful";
import "./Colorwheel.css";

function Colorwheel({ onChange }) {
  const [color, setColor] = useState({ h: 200, s: 100, l: 50 });

  const handleChange = (newColor) => {
    setColor(newColor);
    if (onChange) onChange(newColor); // Pass value up if needed
  };

  return (
    <div className="color-wheel">
      <HslColorPicker color={color} onChange={handleChange} />
      <div
        className="preview"
        style={{ background: `hsl(${color.h}, ${color.s}%, ${color.l}%)` }}
      >
        {`hsl(${color.h}, ${color.s}%, ${color.l}%)`}
      </div>
    </div>
  );
}

export default Colorwheel;
