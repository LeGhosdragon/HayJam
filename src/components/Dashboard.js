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
    { tName: "ButtKickNation", 
      active: "01213412",
      shortResume:"This is what a short resume of this thread is supposed to look like, brief and simple !",
      threadAge: "2020-01-22",
      description: "this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description", 
    },
    { tName: "Jolene's Gardeners", 
      active: "01213412",
      shortResume:"This is what a short resume of this thread is supposed to look like, brief and simple !",
      threadAge: "2020-01-22",
      description: "this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description", 
    },
    { tName: "Does Bruno Mars is gay ?", 
      active: "696969",
      shortResume:"Bruno Mars is gay is the most discussed in the media in the few years ago. Even it has happened in 2012, but some of the public still curious about what is exactly happening and to be the reason there is a rumor comes out about his gay. At that time he became the massive social networking rumor.",
      threadAge: "2012-05-13",
      description: "The public, especially his fans are shocked. He just came out with his bad rumor which is spread massively. This time is not about his music career, but his bad rumor. The rumor is out of standardize of hoax, according the last reported this singer revealed himself as homosexual. Do you still believe or not, this rumor is really much talked by people even in a person of his fans.", 
    },
        { tName: "ButtKickNation", 
      active: "01213412",
      shortResume:"This is what a short resume of this thread is supposed to look like, brief and simple !",
      threadAge: "2020-01-22",
      description: "this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description", 
    },
    { tName: "Jolene's Gardeners", 
      active: "01213412",
      shortResume:"This is what a short resume of this thread is supposed to look like, brief and simple !",
      threadAge: "2020-01-22",
      description: "this is a very long description, this is a very long description this is a very long description this is a very long description this is a very long description this is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long descriptionthis is a very long description", 
    },
    { tName: "Does Bruno Mars is gay ?", 
      active: "696969",
      shortResume:"Bruno Mars is gay is the most discussed in the media in the few years ago. Even it has happened in 2012, but some of the public still curious about what is exactly happening and to be the reason there is a rumor comes out about his gay. At that time he became the massive social networking rumor.",
      threadAge: "2012-05-13",
      description: "The public, especially his fans are shocked. He just came out with his bad rumor which is spread massively. This time is not about his music career, but his bad rumor. The rumor is out of standardize of hoax, according the last reported this singer revealed himself as homosexual. Do you still believe or not, this rumor is really much talked by people even in a person of his fans.", 
    },
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
