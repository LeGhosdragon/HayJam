import './Login.css';
import { useState } from "react";
//import { useNavigate } from "react-router-dom";

function Login({ onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  //const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Example validation (replace with real auth)
    if (username === "username" && password === "1234") {
      //navigate("/dashboard"); // redirect to dashboard page
      setError();
      onLoginSuccess();
    } else {
      setError("Invalid user or password");
    }

    // To use when the backend is connected
    //
        // // send credentials to server
        // const res = await fetch("/api/login", {
        // method: "POST",
        // body: JSON.stringify({ username, password }),
        // headers: { "Content-Type": "application/json" }
        // });

        // if (res.ok) {
        // const { token } = await res.json();
        // // Save the token in httpOnly cookie (or localStorage if you must)
        // setLoggedIn(true);
        // }
    //

  };

  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p className="errMsg">{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="username"
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
        <button type="submit" className="login-btn">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
