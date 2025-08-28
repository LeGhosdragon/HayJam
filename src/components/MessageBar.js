import React, { useState } from "react";
import "./MessageBar.css";

export default function MessageBar({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim()) return; // prevent empty messages
    onSend(message);
    setMessage(""); // clear input
  };

  return (
    <form className="message-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="message-input"
        placeholder="Type a message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" className="send-button">Send</button>
    </form>
  );
}
