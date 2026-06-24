import './login.css'

function Dashboard({ userName }) {
  return (
    <div className="dashboard-page">
      <header className="dashboard-hero">
        <div>
          <p className="dashboard-welcome">Welcome {userName} 👋</p>
          <h1>Expert Dashboard</h1>
        </div>
        <div className="dashboard-stats-card">
          <div>
            <span>Profile Completion</span>
            <strong>80%</strong>
          </div>
          <div>
            <span>New Opportunities</span>
            <strong>12</strong>
          </div>
          <div>
            <span>Upcoming Consultations</span>
            <strong>3</strong>
          </div>
          <div>
            <span>Unread Messages</span>
            <strong>5</strong>
          </div>
          <div>
            <span>Earnings This Month</span>
            <strong>₹25,000</strong>
          </div>
        </div>
      </header>

      <section className="dashboard-grid">
        <article className="dashboard-card profile-completion">
          <div className="card-header">
            <h2>Profile Completion</h2>
            <span>More profile completion = more visibility.</span>
          </div>
          <div className="completion-list">
            <div className="completion-item complete">✓ Basic Information</div>
            <div className="completion-item complete">✓ Experience</div>
            <div className="completion-item complete">✓ Skills</div>
            <div className="completion-item pending">✗ Certifications</div>
            <div className="completion-item pending">✗ Resume</div>
          </div>
          <div className="completion-meter">
            <div className="meter-fill" style={{ width: '80%' }} />
            <span>80% Complete</span>
          </div>
        </article>

        <article className="dashboard-card opportunities">
          <div className="card-header">
            <h2>Recommended Opportunities</h2>
          </div>
          <div className="opportunity-item">
            <strong>Academic Advisor</strong>
            <span>EdTech Startup · Remote · ₹50,000/month</span>
          </div>
          <div className="opportunity-item">
            <strong>Education Consultant</strong>
            <span>School Chain · Hybrid · ₹30,000/project</span>
          </div>
        </article>

        <article className="dashboard-card consultations">
          <div className="card-header">
            <h2>Upcoming Consultations</h2>
          </div>
          <div className="consultation-item">
            <strong>10:00 AM</strong>
            <span>ABC EdTech</span>
          </div>
          <div className="consultation-item">
            <strong>3:00 PM</strong>
            <span>Future Learning Pvt Ltd</span>
          </div>
        </article>

        <article className="dashboard-card messages">
          <div className="card-header">
            <h2>Recent Messages</h2>
          </div>
          <div className="message-item">
            <strong>ABC Startup</strong>
            <span>"We'd like to discuss..."</span>
          </div>
          <div className="message-item">
            <strong>XYZ Manufacturing</strong>
            <span>"Can we schedule a call?"</span>
          </div>
        </article>

        <article className="dashboard-card analytics">
          <div className="card-header">
            <h2>Profile Analytics</h2>
          </div>
          <div className="analytics-grid">
            <div>
              <span>Profile Views</span>
              <strong>234</strong>
            </div>
            <div>
              <span>Search Appearances</span>
              <strong>1,200</strong>
            </div>
            <div>
              <span>Consultation Requests</span>
              <strong>17</strong>
            </div>
            <div>
              <span>Acceptance Rate</span>
              <strong>85%</strong>
            </div>
          </div>
        </article>

        <article className="dashboard-card knowledge-hub">
          <div className="card-header">
            <h2>Knowledge Hub</h2>
          </div>
          <div className="knowledge-actions">
            <button>Publish Article</button>
            <button>Create Webinar</button>
            <button>Share Case Study</button>
            <button>Upload Course</button>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Dashboard
