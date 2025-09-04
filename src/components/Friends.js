import { useState, useEffect } from "react";
import "./Friends.css"; 
import defaultAvatar from "../assets/default-pfp.png"; 

function Friends() {
  const [friends, setFriends] = useState([]);
  const [accentText, setAccentText] = useState("hsl(200, 100%, 50%)");
  const [accentBanner, setAccentBanner] = useState("hsl(200, 50%, 80%)");

  // Load saved settings from localStorage
  useEffect(() => {
    //const savedAvatar = localStorage.getItem("avatar");
    const savedTextColor = localStorage.getItem("accentTextColor");
    const savedBannerColor = localStorage.getItem("accentBannerColor");

    if (savedTextColor) setAccentText(savedTextColor);
    if (savedBannerColor) setAccentBanner(savedBannerColor);

    // Example static friend list (replace later with DB or API)
    setFriends([
      { id: 1, name: "Alice", avatar: defaultAvatar },
      { id: 2, name: "Bob", avatar: defaultAvatar },
      { id: 3, name: "Charlie", avatar: defaultAvatar }
    ]);
  }, []);

  return (
    <div className="friends-page">
      <h2 style={{ color: accentText }}>Friends List</h2>
      <div className="friends-list">
        {friends.map(friend => (
          <div key={friend.id} className="friend-card" style={{ background: accentBanner }}>
            <img 
              src={friend.avatar || defaultAvatar} 
              alt={`${friend.name} avatar`} 
              className="friend-avatar"
              onError={(e) => (e.target.src = defaultAvatar)}
            />
            <span className="friend-name" style={{ color: accentText }}>
              {friend.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Friends;
