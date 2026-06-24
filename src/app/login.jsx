import { useState } from "react";
import "./login.css";

function Login({ onSwitchPage, onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin?.(email)
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <div className="brand-block">
          <span className="brand-pill">
            ExperienceHub
          </span>

          <span className="brand-subtitle">
            Experience Never Retires
          </span>
        </div>

        <div className="login-header">
          <h1>Welcome Back</h1>

          {/* <p>
            Sign in to access experts,
            consultations, projects and
            opportunities.
          </p> */}
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email Address</label>

            <input
              className="form-input"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              className="form-input"
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              required
            />
          </div>

          <div className="form-row">

            <label className="remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) =>
                  setRemember(
                    e.target.checked
                  )
                }
              />

              Keep me signed in
            </label>

            <a href="#">
              Forgot Password?
            </a>

          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Sign In
          </button>

        </form>

        <div className="auth-footer">
          <span>
            New to ExperienceHub?
          </span>

          <a
            href="#register"
            onClick={(event) => {
              event.preventDefault()
              onSwitchPage?.()
            }}
          >
            Create Account
          </a>
        </div>

      </div>
    </div>
  );
}

export default Login;