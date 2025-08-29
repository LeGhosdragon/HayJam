import { useState, useEffect } from "react";

export default function Typewriter({ text, speed = 100, deleting = false, blinking = true }) {
  const [displayed, setDisplayed] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    //let index = 0;
    let interval;

    if (!deleting) {
      // typing forward
      interval = setInterval(() => {
        setDisplayed((prev) => {
          if (prev.length < text.length) {
            return text.slice(0, prev.length + 1);
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, speed);
    } else {
      // deleting backwards
      interval = setInterval(() => {
        setDisplayed((prev) => {
          if (prev.length > 0) {
            return prev.slice(0, -1);
          } else {
            clearInterval(interval);
            return "";
          }
        });
      }, speed / 2);
    }

    return () => clearInterval(interval);
  }, [text, deleting, speed]);

  // blinking cursor
  useEffect(() => {
    setCursorVisible(false);
    if(blinking)
    {
        // const cursorBlink = setInterval(() => {
        // setCursorVisible((v) => !v);
        // }, 500);
        // return () => clearInterval(cursorBlink);
    }}, []);

  return (
    <span>
      {displayed}
      <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
    </span>
  );
}
