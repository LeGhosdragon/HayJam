// Home.js
import "./Home.css";

function Home({ onNavigate }) {
  return (
    <div className="home-page">
      <header className="home-header">
        <h1>Welcome to HayJam 🎉</h1>
        <p>Choose where you want to go:</p>
      </header>

      <div className="home-buttons">
        <button className="home-btn" onClick={() => onNavigate("profile")}>
          Profile
        </button>
        <button className="home-btn" onClick={() => onNavigate("chat")}>
          Chat
        </button>
      </div>
    </div>
  );
}

export default Home;
