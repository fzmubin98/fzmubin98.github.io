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
              </div>
            </div>
            
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
              
              <a className="pill" href="https://www.credly.com/users/fazle-mubin123" target="_blank" rel="noreferrer">
                <span className="icon">CR</span>
                Credly
              </a>
            </div>

            <p className="address">67 Swamibag Road, Dhaka · +8801676345176</p>
          </div>
        </div>
      </header>

      <main className="main-content">
        <div className="container">
          <div className="content-grid">
            
            <div className="left-column">
              <section className="card">
                <h2>Career Objective</h2>
                <p>
                  As a passionate and detail-oriented DevOps and Cloud Engineer, I strive to deliver state-of-the-art 
                  solutions that reflect my love for science and innovation. My goal is to leverage hard work, efficient 
                  thinking, and a problem-solving mindset to create unique, impactful solutions that benefit society. With 
                  an unwavering hunger for learning and growth, I aim to expand my expertise as a multi-dimensional 
                  engineer, serving clients locally and internationally while driving innovation and excellence in every 
                  project I undertake.
                </p>
              </section>

              <section className="card">
                <h2>Work Experience</h2>

                <div className="work-item">
                  <div className="work-header">
                    <h3>DevOps and Cloud Engineer</h3>
                    <div className="work-meta">
                      <span className="company">BJIT Ltd.</span>
                      <span className="period">August 2023 — Present</span>
                    </div>
                  </div>
                  <ul className="work-details">
                    <li>Manage a massive client infrastructure on Google Cloud Platform, ensuring scalability, fault tolerance, and damage recovery across multiple servers.</li>
                    <li>Utilized Terraform to design, create, and maintain complex architectures incorporating services like AWS ECS, AWS Load Balancer, and AWS EC2.</li>
                    <li>Worked extensively with AWS services including Lambda, Step Functions, EventBridge, SNS, CloudWatch, ECR, RDS and Aurora, WAF and Shield, SES to automate workflows, monitor system health, enhance security, and ensure robust notification systems.</li>
                    <li>Implement and maintain state-of-the-art security measures to protect sensitive systems and data.</li>
                    <li>Oversee systems connecting thousands of developers, utilizing tools like Version Control Systems, CI/CD pipelines with GitHub Action, GitLab CI/CD, Jenkins.</li>
                    <li>Develop and implement threat detection mechanisms to identify and mitigate potential risks proactively.</li>
                    <li>Engage in continuous client communication to ensure alignment with project goals and provide updates to stakeholders.</li>
                    <li>Drive accountability within the team by assigning responsibilities, ensuring seamless project management, and monitoring deliverables.</li>
                    <li>Maintain comprehensive, up-to-date project documentation to support operational continuity and future scalability.</li>
                  </ul>
                  <div className="tech-used">
                    <strong>Technology:</strong> Terraform, GitHub, AWS Lambda, AWS Step Functions, AWS EventBridge, AWS SNS, AWS CloudWatch, AWS ECR, AWS RDS, Aurora, AWS WAF, Shield, AWS SES, GitHub Actions, GitLab CI/CD, GCP, Virtual Machines, Load Balancer, Cloud Armor, Windows Server, GitLab, SAST
                  </div>
                </div>

                <div className="work-item">
                  <div className="work-header">
                    <h3>Trainee DevOps and Cloud Engineer</h3>
                    <div className="work-meta">
                      <span className="company">BJIT Academy</span>
                      <span className="period">April 2023 — July 2023</span>
                    </div>
                  </div>
                  <ul className="work-details">
                    <li>Gained hands-on experience with DevOps tools, including Linux, Docker, Ansible, Jenkins, Git, GitHub, GitLab, and Kubernetes.</li>
                    <li>Worked extensively with AWS cloud services to deploy and manage scalable cloud infrastructure.</li>
                    <li>Developed strong business communication skills for effective collaboration with clients and teams.</li>
                    <li>Enhanced project management abilities to ensure timely delivery of tasks and project milestones.</li>
                    <li>Engaged in client communication to understand requirements and provide tailored solutions.</li>
                    <li>Gained exposure to Japanese and other international cultures, fostering cross-cultural collaboration and understanding.</li>
                  </ul>
                  <div className="tech-used">
                    <strong>Technology:</strong> Linux, Docker, Ansible, Jenkins, Git, GitHub, GitLab, Kubernetes, Nginx, Apache2, Tomcat, SpringBoot, Node.JS, PHP, MySQL
                  </div>
                </div>
              </section>

              <section className="card">
                <h2>Projects</h2>
                <div className="project-item">
                  <h4>HyperLedger Fabric Induced Supershop Supply Chain Management Model</h4>
                  <p className="project-year">2022</p>
                  <p>Completed thesis on securing product authenticity using Hyperledger Fabric and Golang for supply chain management.</p>
                </div>
              </section>
            </div>

            <div className="right-column">
              <section className="card">
                <h2>Skills &amp; Technologies</h2>
                
                <div className="skill-category">
                  <h4>Programming Languages</h4>
                  <div className="chips">
                    <span className="chip">Python</span>
                    <span className="chip">Java</span>
                    <span className="chip">Golang</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Cloud &amp; DevOps</h4>
                  <div className="chips">
                    <span className="chip">AWS</span>
                    <span className="chip">GCP</span>
                    <span className="chip">Terraform</span>
                    <span className="chip">Docker</span>
                    <span className="chip">Kubernetes</span>
                    <span className="chip">Ansible</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>CI/CD &amp; VCS</h4>
                  <div className="chips">
                    <span className="chip">Jenkins</span>
                    <span className="chip">GitHub Actions</span>
                    <span className="chip">GitLab CI/CD</span>
                    <span className="chip">Git</span>
                    <span className="chip">BitBucket</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Databases</h4>
                  <div className="chips">
                    <span className="chip">MySQL</span>
                    <span className="chip">PostgreSQL</span>
                    <span className="chip">MongoDB</span>
                    <span className="chip">AWS RDS</span>
                    <span className="chip">Aurora</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h4>Security &amp; Tools</h4>
                  <div className="chips">
                    <span className="chip">Okta</span>
                    <span className="chip">ZTNA</span>
                    <span className="chip">Klocwork</span>
                    <span className="chip">AWS WAF</span>
                    <span className="chip">SAST</span>
                  </div>
                </div>
              </section>

              <section className="card">
                <h2>Education</h2>
                <div className="education-item">
                  <h4>Bachelor of Science (CSE)</h4>
                  <p className="school">BRAC University</p>
                  <p className="grade">CGPA: 3.53</p>
                </div>
                <div className="education-item">
                  <h4>Higher Secondary Certificate (HSC)</h4>
                  <p className="school">Notre Dame College, Dhaka</p>
                  <p className="grade">GPA: 5.0</p>
                </div>
                <div className="education-item">
                  <h4>Secondary School Certificate (SSC)</h4>
                  <p className="school">Motijheel Ideal School and College, Dhaka</p>
                  <p className="grade">GPA: 5.0</p>
                </div>
              </section>

              <section className="card">
                <h2>Certifications</h2>
                <div className="cert-item">
                  <h4>HashiCorp Certified: Terraform Associate (003)</h4>
                </div>
              </section>

              <section className="card">
                <h2>Achievements</h2>
                <ul className="achievement-list">
                  <li>Best Client Feedback Award — Q4 2023, BJIT Group</li>
                  <li>Best Performer Award — Q4 2023, BJIT Group</li>
                  <li>Best Employee Award — Q1 2024, BJIT Group</li>
                </ul>
              </section>

              <section className="card">
                <h2>References</h2>
                <div className="reference-item">
                  <h4>T.M. Kamrul Bari</h4>
                  <p>Principal Engineer – DevOps Architect</p>
                  <p>BJIT Inc., Shibe, Tokyo, Japan</p>
                  <p><a href="mailto:kamrul.bari@bjitgroup.com">kamrul.bari@bjitgroup.com</a></p>
                </div>
                <div className="reference-item">
                  <h4>Md. Samin Irtiza</h4>
                  <p>DevOps Engineer</p>
                  <p>Relisource, Dhaka, Bangladesh</p>
                  <p><a href="mailto:md.saminirtiza@gmail.com">md.saminirtiza@gmail.com</a></p>
                </div>
              </section>
            </div>

          </div>
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>© {year} Mohammed Fazle Mubin · Built with React & Vite</small>
          <div className="links-right">
            <a href="https://github.com/fzmubin98" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/fazle-mubin-325007242/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.credly.com/users/fazle-mubin123" target="_blank" rel="noreferrer">Credly</a>
          </div>
        </div>
      </footer>
    </div>
  );
}