import './Dashboard.css';
import Chat from './Chat';
import NavBar from './NavBar';

// Dashboard.js
function Dashboard({ onLogout }) {

  const userButtons = [
    { label: "Home", onClick: () => console.log("Go Home") },
    { label: "Profile", onClick: () => console.log("Go Profile") },
    { label: "Settings", onClick: () => console.log("Go Settings") },
    { label: "logout", onClick: ()=> onLogout()},
    // maybe more/less depending on user
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
          <Chat />
        </div>
    </div>
  );
}

export default Dashboard;
