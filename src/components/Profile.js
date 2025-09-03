import './Profile.css';
import { useState, useEffect } from "react";

function Profile() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  // Load the username from localStorage on mount
  useEffect(() => {
    const storedUsername = localStorage.getItem("username") || "";
    setUsername(storedUsername);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // Save updated username to localStorage (or call API)
    localStorage.setItem("username", username);

    // Simulate saving password securely (in a real app, call backend)
    setSuccess("Profile updated successfully!");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="profile-page">
      <h2>Your Profile</h2>

      {error && <p className="errMsg">{error}</p>}
      {success && <p className="successMsg">{success}</p>}

      <form className="profile-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            value={username}
            placeholder={localStorage.getItem("username")}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="-input"
          />
        </label>

        <label>
          New Password
          <input
            type="password"
            value={password}
            placeholder="Enter new password"
            onChange={(e) => setPassword(e.target.value)}
            className="-input"
          />
        </label>

        <label>
          Confirm Password
          <input
            type="password"
            value={confirmPassword}
            placeholder="Confirm new password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="-input"
          />
        </label>

        <button type="submit" className="profile-btn">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
