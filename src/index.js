import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import defaultAvatar from './assets/default-pfp.png'; // import default avatar

// Initialize default avatar in localStorage if not already set
if (!localStorage.getItem("avatar")) {
  localStorage.setItem("avatar", defaultAvatar);
}

const darkMode = () => {
  const saved = localStorage.getItem("darkMode");
  if (saved === null) return true; // default: dark
  return saved === "true";
};

if (darkMode()) {
  document.documentElement.classList.add("dark-theme");
} else {
  document.documentElement.classList.add("light-theme");
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register the service worker here:
serviceWorkerRegistration.register();

// (Optional) Measure performance
reportWebVitals();
