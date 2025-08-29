import Typewriter from './Typewriter';
import './Login.css';
import { useState } from "react";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [text, setText] = useState("Login");
  const [deleting, setDeleting] = useState(false);



  const switchToSignup = () => {
    setDeleting(true);
    setTimeout(() => {
      if (text === "Login") {
        setText("Sign-Up");
      } else {
        setText("Login");
      }
      setDeleting(false);
      setError(""); 
    }, 800);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "Login") {
      if (username === "username" && password === "1234") {
        setError("");
        localStorage.setItem("username", username);
        onLoginSuccess();
      } else {
        setError("Invalid user or password");
      }
    } else {
      if (password !== confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      if (username.length < 3) {
        setError("Username must be at least 3 characters");
        return;
      }

      setError("");

      //ADD SIGNUP THINGY
      alert(`User ${username} signed up successfully!`);
      onLoginSuccess();
    }
  };

  return (
    <div className="login">
      {error && <p className="errMsg">{error}</p>}
      <form className="logSig" onSubmit={handleSubmit}>
        <Typewriter text={text} speed={100} deleting={deleting} blinking={false} />

        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="login-input"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="login-input"
          />
        </div>

        <div className={`confirm-password ${text === "Sign-Up" ? "show" : ""}`}>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required={text === "Sign-Up"}
            className="login-input"
          />
        </div>

        <button type="submit" className="login-btn">
          <Typewriter text={text} speed={100} deleting={deleting} blinking={false} />
        </button>

        <button type="button" onClick={switchToSignup} className="switch-btn">
          To {text === "Login" ? "Sign-Up" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default Login;
