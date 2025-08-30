// src/App.jsx
import React from "react";
import profileImg from "./assets/profile.jpg";

function IconMail() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M3 8.5v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M21 8.5l-9 6-9-6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function IconLink() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M10 14a4 4 0 0 1 0-5.657l1.414-1.414a4 4 0 0 1 5.657 5.657" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14 10a4 4 0 0 1 0 5.657l-1.414 1.414a4 4 0 0 1-5.657-5.657" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function App() {
  const year = new Date().getFullYear();

  return (
    <div className="site">
      <header className="hero">
        <div className="container header-inner">
          <div className="title-block">
            <div className="profile-section">
              <img 
                src={profileImg}
                alt="Mohammed Fazle Mubin"
                className="profile-image"
              />
              <div className="profile-text">
                <h1 className="name">Mohammed Fazle Mubin</h1>
                <p className="role">DevOps &amp; Cloud Engineer</p>
                
                <div className="links">
                  <a className="pill" href="mailto:fzmubin98@gmail.com">
                    <span className="icon"><IconMail/></span>
                    fzmubin98@gmail.com
                  </a>

                  <a className="pill" href="https://www.linkedin.com/in/fazle-mubin-325007242/" target="_blank" rel="noreferrer">
                    <span className="icon"><IconLink/></span>
                    LinkedIn
                  </a>

                  <a className="pill" href="https://github.com/fzmubin98" target="_blank" rel="noreferrer">
                    <span className="icon">GH</span>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            
            <p className="address">67 Swamibag Road, Dhaka · +8801676345176</p>
          </div>
        </div>
      </header>

      <main className="container main-grid">
        <section id="objective" className="card">
          <h2>Career Objective</h2>
          <p>
            As a passionate and detail-oriented DevOps and Cloud Engineer, I strive to deliver state-of-the-art solutions
            that reflect my love for science and innovation. I leverage efficient problem-solving to create unique, impactful
            solutions that benefit society while continuously learning to expand my expertise.
          </p>
        </section>

        <section id="experience" className="card">
          <h2>Work Experience</h2>

          <article className="work">
            <div className="work-left">
              <h3>DevOps &amp; Cloud Engineer — BJIT Ltd.</h3>
              <p className="muted">Aug 2023 — Present</p>
            </div>
            <div className="work-right">
              <ul>
                <li>Manage large client infrastructure on Google Cloud Platform ensuring scalability & fault tolerance.</li>
                <li>Design & maintain infra with Terraform; worked with AWS ECS, Load Balancers, EC2.</li>
                <li>Automated workflows with Lambda, Step Functions, EventBridge, SNS; monitored via CloudWatch.</li>
                <li>Implemented security measures (WAF, Shield), CI/CD (GitHub Actions, GitLab CI/CD, Jenkins).</li>
                <li>Led client communication, documentation, and team accountability processes.</li>
              </ul>
            </div>
          </article>

          <article className="work">
            <div className="work-left">
              <h3>Trainee DevOps &amp; Cloud Engineer — BJIT Academy</h3>
              <p className="muted">Apr 2023 — Jul 2023</p>
            </div>
            <div className="work-right">
              <ul>
                <li>Hands-on with Linux, Docker, Ansible, Jenkins, Git, GitLab, Kubernetes.</li>
                <li>Deployed & maintained AWS infrastructure; sharpened client communication & PM skills.</li>
              </ul>
            </div>
          </article>
        </section>

        <section id="skills" className="card">
          <h2>Skills &amp; Technologies</h2>
          <div className="chips">
            {["Terraform","AWS","GCP","Docker","Kubernetes","CI/CD","GitHub Actions","Jenkins","Linux","Python","Java","MySQL","Postgres","MongoDB"].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="card">
          <h2>Projects &amp; Achievements</h2>
          <ul className="project-list">
            <li><strong>Thesis (2022):</strong> HyperLedger Fabric Induced Supershop Supply Chain Model (Hyperledger Fabric, Golang)</li>
            <li><strong>ECS Event Alert Pipeline (2025):</strong> AWS Lambda, EventBridge, SNS, Slack Bot</li>
            <li><strong>Dockerized Node.js App (2024):</strong> CI/CD with GitHub Actions</li>
            <li className="muted">Awards: Best Client Feedback (Q4 2023), Best Performer (Q4 2023), Best Employee (Q1 2024)</li>
          </ul>
        </section>

        <section id="education" className="card">
          <h2>Education</h2>
          <ul className="compact-list">
            <li><strong>B.Sc (CSE)</strong> — BRAC University (CGPA 3.53)</li>
            <li><strong>HSC</strong> — Notre Dame College, Dhaka (GPA 5)</li>
            <li><strong>SSC</strong> — Motijheel Ideal School &amp; College (GPA 5)</li>
          </ul>
        </section>

        <section id="cert" className="card">
          <h2>Certifications & Tools</h2>
          <p><strong>HashiCorp Certified: Terraform Associate (003)</strong></p>
          <p className="muted">Tools: Okta, ZTNA, Klocwork, InstallShield. VCS: GitHub, GitLab, Bitbucket, Gerrit.</p>
        </section>

        <section id="contact" className="card contact-card">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:fzmubin98@gmail.com">fzmubin98@gmail.com</a></p>
          <p>Phone: +8801676345176</p>
          <p className="muted">References available on request. (T.M. Kamrul Bari — kamrul.bari@bjitgroup.com)</p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {year} Mohammed Fazle Mubin · Built with React & Vite</small>
          <div className="links-right">
            <a href="https://github.com/fzmubin98" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/fazle-mubin-325007242/" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}