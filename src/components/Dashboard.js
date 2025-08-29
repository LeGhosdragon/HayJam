import './Dashboard.css';
import Chat from './Chat';
import NavBar from './NavBar';
import Profile from './Profile';
import { useState} from "react";

// Dashboard.js
function Dashboard({ onLogout }) {
  const [toProfile, setOnWayToProfile] = useState(false);
  const userButtons = [
    { label: "Home", onClick: () => console.log("Go Home") },
    { label: "Profile", onClick: () =>  setOnWayToProfile(true) },
    { label: "Settings", onClick: () => console.log("Go Settings") },
    { 
    label: "Logout", 
    onClick: () => {
      const confirmLogout = window.confirm("Are you sure you want to Log out?");
      if (confirmLogout) {
        console.log("Logging out...");
        onLogout();
      }
      else{
        alert(`
          (ノಠ益ಠ)ノ彡┻━┻
          Bruh, you're wasting my time!
          `);
      }


    }
  },
];


  

  return (
    <div className="dashboard">
        <header style={{textAlign: "center", fontSize: "calc(10px + 2vmin)"}}>
            <h1 id="welcomeTxt">Welcome to the Dashboard 🎉</h1>
        </header>
        <div className="navbar">
          <NavBar  buttons={userButtons}/>
        </div>
        <div className="chat-area"> 
          {!toProfile ? 
          (
            <Chat /> 
          ) : ( 
            <Profile />
          )}
        </div>
    </div>
  );
}

export default Dashboard;
