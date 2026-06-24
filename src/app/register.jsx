import { useState } from 'react'
import './login.css'

function Register({ onSwitchPage, onLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [termsAccepted, setTermsAccepted] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match.')
      return
    }
    if (!termsAccepted) {
      alert('Please accept the terms and conditions.')
      return
    }
    onLogin?.(email || name)
  }

  return (
    <div className="login-page">
      <div className="login-glow" />
      <div className="login-beam" />

      <article className="login-card">
        <div className="brand-block">
          <span className="brand-pill">ExperienceHub</span>
          <span className="brand-subtitle">Expert platform</span>
        </div>

        <header className="login-header">
          <h1>Create an account</h1>
          <p>Join ExperienceHub and start collaborating with experts, managing projects, and growing your profile.</p>
        </header>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              className="form-input"
              type="text"
              placeholder="Your full name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              id="email"
              className="form-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className="form-input"
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm password</label>
            <input
              id="confirmPassword"
              className="form-input"
              type="password"
              placeholder="Repeat your password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
              required
            />
          </div>

          <div className="form-row">
            <label className="remember">
              <input
                className="form-checkbox"
                type="checkbox"
                checked={termsAccepted}
                onChange={(event) => setTermsAccepted(event.target.checked)}
              />
              I agree to the terms
            </label>
          </div>

          <button className="submit-button" type="submit">
            Create account
          </button>
          <p className="login-note">You’ll receive a verification email after signup.</p>
        </form>

        <div className="auth-footer">
          <span>Already have an account?</span>
          <a
            href="#"
            onClick={(event) => {
              event.preventDefault()
              onSwitchPage?.()
            }}
          >
            Sign in
          </a>
        </div>
      </article>
    </div>
  )
}

export default Register
