import { useState } from "react";
import MessageBar from "./MessageBar";
import "./Chat.css"; 

function Chat() {
  const [messages, setMessages] = useState([]);

  const u = [
    { username: "ChillGuy6969", txtColor: "Red", auraColor: "#3c1f49"},
  ];
  
  const handleSend = (msg) => {
    setMessages([...messages, { id: Date.now(), text: msg }]);
  };

  return (
    <div style={{ position: "absolute", right: 0, left: 0, bottom: 0 }}>
      <div
        className="message-box"
        style={{display: "block",position: "relative",overflowY: "auto",height: "72.7vh"}}
      >
        {messages.map((m) => (
          <p className="message" style={{ background: u[0].auraColor }}>
            <span className="message-left">
              <img src="your-avatar.png" alt="avatar" className="avatar" />
              <span className="user" style={{ color: u[0].txtColor }}>
                {u[0].username}
              </span>
            </span>
            <span className="text">{m.text}</span>
            <span className="timestamp">
              {new Date(m.id).getFullYear()}-
              {String(new Date(m.id).getMonth() + 1).padStart(2, "0")}- 
              {String(new Date(m.id).getDate()).padStart(2, "0")}{" "} 
              {String(new Date(m.id).getHours()).padStart(2, "0")}:
              {String(new Date(m.id).getMinutes()).padStart(2, "0")}:
              {String(new Date(m.id).getSeconds()).padStart(2, "0")}
            </span>
          </p>


        ))}
      </div>
      <div style={{ position: "relative", right: 0, left: 0, bottom: 0 }}>
        <MessageBar onSend={handleSend} />
      </div>
    </div>
  );
}

export default Chat;
