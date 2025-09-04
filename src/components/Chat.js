import { useState, useEffect } from "react";
import MessageBar from "./MessageBar";
import "./Chat.css"; 
import defaultAvatar from "../assets/default-pfp.png"; 

function Chat() {
  const [messages, setMessages] = useState([]);
  const [avatar, setAvatar] = useState(defaultAvatar); // track avatar locally

  const defaultTextColor = "hsl(200, 100%, 50%)";
  const defaultBannerColor = "hsl(200, 50%, 80%)";

  const [username] = useState(() => localStorage.getItem("username") || "Guest");

  // Load avatar from localStorage when component mounts
  useEffect(() => {
    const savedAvatar = localStorage.getItem("avatar");
    if (savedAvatar) setAvatar(savedAvatar);
  }, []);

  // Update localStorage whenever avatar changes
  useEffect(() => {
    localStorage.setItem("avatar", avatar);
  }, [avatar]);

  const handleSend = (msg) => {
    setMessages([...messages, { id: Date.now(), text: msg }]);
  };

  // Example function to update avatar (e.g., from file input)
  const handleAvatarChange = (newAvatarUrl) => {
    setAvatar(newAvatarUrl);
  };

  return (
    <div style={{ position: "absolute", right: 0, left: 0, bottom: 0 }}>
      <div
        className="message-box"
        style={{ display: "block", position: "relative", overflowY: "auto", height: "72.7vh" }}
      >
        {messages.map((m) => (
          <p key={m.id} className="message" style={{ background: defaultBannerColor }}>
            <span className="message-left">
              <img
                src={avatar}
                alt="avatar"
                className="avatar"
                onError={(e) => e.target.src = defaultAvatar} // fallback
              />
              <span className="user" style={{ color: defaultTextColor }}>
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
        {/* Example input to change avatar */}
        {/* <input type="file" onChange={(e) => handleAvatarChange(URL.createObjectURL(e.target.files[0]))} /> */}
      </div>
    </div>
  );
}

export default Chat;
