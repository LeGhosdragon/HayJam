import { useState, useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true); // track loading state

  useEffect(() => {
    const stored = localStorage.getItem("loggedIn");
    if (stored === "true") {
      setLoggedIn(true);
    }
    setLoading(false); // done checking
  }, []);

  useEffect(() => {
    localStorage.setItem("loggedIn", loggedIn);
  }, [loggedIn]);

  if (loading) {
    // show loading screen while checking localStorage
    return (
      <div className="loading-screen">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard onLogout={() => setLoggedIn(false)} />
      ) : ( 
        <Login onLoginSuccess={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
