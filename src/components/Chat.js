import { useState, useEffect } from "react";
import MessageBar from "./MessageBar";
import "./Chat.css"; 
import defaultAvatar from "../assets/default-pfp.png"; 

function Chat() {
  const [messages, setMessages] = useState([]);
  const [avatar, setAvatar] = useState(defaultAvatar);
  const [accentText, setAccentText] = useState("hsl(200, 100%, 50%)");
  const [accentBanner, setAccentBanner] = useState("hsl(200, 50%, 80%)");

  const [username] = useState(() => localStorage.getItem("username") || "Guest");

  // Load saved settings from localStorage
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    const savedTextColor = localStorage.getItem("accentTextColor");
    const savedBannerColor = localStorage.getItem("accentBannerColor");

    if (savedAvatar) setAvatar(savedAvatar);
    if (savedTextColor) setAccentText(savedTextColor);
    if (savedBannerColor) setAccentBanner(savedBannerColor);
  }, []);

  // Keep avatar in sync
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
  }, [avatar]);

  const handleSend = (msg) => {
    setMessages([...messages, { id: Date.now(), text: msg }]);
  };

  return (
    <div style={{ position: "absolute", right: 0, left: 0, bottom: 0 }}>
      <div
        className="message-box"
        style={{ display: "block", position: "relative", overflowY: "auto", height: "72.7vh" }}
      >
        {messages.map((m) => (
          <p key={m.id} className="message" style={{ background: accentBanner }}>
            <span className="message-left">
              <img
                src={avatar}
                alt="avatar"
                className="avatar"
                onError={(e) => (e.target.src = defaultAvatar)}
              />
              <span className="user" style={{ color: accentText }}>
                {username}
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
