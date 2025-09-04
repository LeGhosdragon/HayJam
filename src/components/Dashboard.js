import './Dashboard.css';
import Chat from './Chat';
import Settings from './Settings';
import NavBar from './NavBar';
import Profile from './Profile';
import { useState } from "react";
import Forum from './Forum';

// Dashboard.js
function Dashboard({ onLogout }) {
  const [toProfile, setOnWayToProfile] = useState(false);
  const [toChat, setOnWayToChat] = useState(false);
  const [toHome, setOnWayToHome] = useState(false);
  const [toSettings, setOnWayToSettings] = useState(false);

  const userButtons = [
    { label: "Homelander's big butt cave", onClick: () => {
        const confirmLogout = window.confirm(`Are you sure you want to Enter his BIG BUTT CAVE ?`); 
        setDestinationFalse(); 
        if(confirmLogout) setOnWayToChat(true);
    }},
    { label: "Poopoo user", onClick: () =>  { setDestinationFalse(); setOnWayToChat(true); }},
    { label: "Specific fav Thread", onClick: () => { setDestinationFalse(); setOnWayToChat(true); }},
    { label: "Chat with UserX", onClick: () => { setDestinationFalse(); setOnWayToChat(true); }},
  ];

  const buttons = [
    { label: "Home but actually forumadwwadwdawdawdawdwa aw dawd w ad wa ", onClick: () => { setDestinationFalse(); setOnWayToHome(true); }},
    { label: "Profile", onClick: () =>  { setDestinationFalse(); setOnWayToProfile(true); }},
    { label: "Settings", onClick: () => { setDestinationFalse(); setOnWayToSettings(true); }},
    { 
      label: "Logout", 
      onClick: () => {
        const confirmLogout = window.confirm("Are you sure you want to Log out?");
        if (confirmLogout) {
          console.log("Logging out...");
          // Clear all localStorage data
          localStorage.clear();
          onLogout();
        } else {
          alert(`(ノಠ益ಠ)ノ彡┻━┻\nBruh, you're wasting my time!`);
        }
      }
    },
  ];

  const currentThreads = [
    // ... your threads array remains unchanged ...
  ];

  function setDestinationFalse() {
    setOnWayToHome(false);
    setOnWayToProfile(false);
    setOnWayToSettings(false);
    setOnWayToChat(false);
  }

  return (
    <div className="dashboard">
      <header style={{textAlign: "center", fontSize: "calc(10px + 2vmin)"}}></header>
      <div className="navbar">
        <NavBar userButtons={userButtons} buttons={buttons} />
      </div>
      <div className="chat-area"> 
        {toProfile && <Profile />}
        {toHome && <Forum threads={currentThreads}/>}
        {toSettings && <Settings />}
        {toChat && <Chat />}
      </div>
    </div>
  );
}

export default Dashboard;
