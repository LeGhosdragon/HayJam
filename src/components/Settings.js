import './Settings.css';
import { useState, useEffect } from "react";

function Settings() {

  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === null) return true;
    return saved === "true";
  });
  const [notifications, setNotifications] = useState(() => {
    return localStorage.getItem("notifications") === "true";
  });
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem("language") || "en";
  });
  const [volume, setVolume] = useState(() => {
    return parseInt(localStorage.getItem("volume")) || 50;
  });

  // Apply theme immediately
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark-theme");
      root.classList.remove("light-theme");
    } else {
      root.classList.add("light-theme");
      root.classList.remove("dark-theme");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  // Update localStorage immediately when other settings change
  useEffect(() => {
    localStorage.setItem("notifications", notifications);
  }, [notifications]);

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    localStorage.setItem("volume", volume);
  }, [volume]);

  return (
    <div className="Settings-page">
      <h2 className="settings-title">⚙️ App Settings</h2>

      <div className="Settings-form">
        <div className="settings-option">
          <span>Dark Mode</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={darkMode}
              onChange={() => setDarkMode(!darkMode)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="settings-option">
          <span>Enable Notifications</span>
          <label className="switch">
            <input
              type="checkbox"
              checked={notifications}
              onChange={() => setNotifications(!notifications)}
            />
            <span className="slider round"></span>
          </label>
        </div>

        <div className="settings-option">
          <span>Language</span>
          <select
            className="dropdown"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="es">Español</option>
          </select>
        </div>

        <div className="settings-option">
          <span>Volume: {volume}%</span>
          <input
            type="range"
            min="0"
            max="100"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="slider-range"
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;
