import Link from "next/link";
import pageStyles from "./page.module.css";
import uiStyles from "../components/ui.module.css";

export default function Home() {
  const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "Radip97";

  const resumeProjects = [
    {
      name: "RAG Fitness Assistant",
      description: "A local RAG system that generates personalized workouts using hybrid BM25 + vector search. Extracts weight/PR updates from chat to power a real-time dashboard. Uses custom LLM interceptors to prevent hallucinations.",
      tags: ["Python", "Flask", "LangChain", "Qwen 2.5"],
      githubUrl: "https://github.com/Radip97/Fitness_RAG_application"
    },
    {
      name: "Real-Time Exercise Classifier",
      description: "Designed a Bi-LSTM + Temporal Attention model to recognize 7 exercise types and generate a continuous form-quality score. Achieved 90%+ accuracy with low-latency inference using MediaPipe pose landmarks.",
      tags: ["Python", "TensorFlow", "OpenCV", "MediaPipe"],
      githubUrl: "https://github.com/Radip97/Workout-Identifier"
    },
    {
      name: "Library Management System",
      description: "Full-stack platform with secure authentication and RBAC for Librarian and Member workflows. Optimized PostgreSQL queries and indexing strategies for catalog search performance.",
      tags: ["PHP", "PostgreSQL", "RBAC"]
    },
    {
      name: "Supplement Store Recommendation",
      description: "Built a geospatial clustering model using DBSCAN to identify optimal supplement store locations based on gym density and competitor proximity. Visualized spatial data with Pandas and Matplotlib.",
      tags: ["Python", "DBSCAN", "Geospatial Analysis"],
      githubUrl: "https://github.com/Radip97/Supplement-Store-Recommendation"
    },
    {
      name: "Personal Cloud Server",
      description: "Repurposed an old laptop into a secure, self-hosted cloud server using Nextcloud on Ubuntu. Configured remote access, SSL, user permissions, and automated backups.",
      tags: ["Ubuntu", "Nextcloud", "Networking"]
    }
  ];

  return (
    <div className={pageStyles.main}>
      <nav className={pageStyles.navbar}>
        <Link href="/" className={pageStyles.navLogo}>
          <span style={{ color: 'var(--accent)', fontWeight: 800 }}>RADIP</span>
        </Link>
        <ul className={pageStyles.navLinks}>
          <li><a href="#hero" className={pageStyles.navLink}>Home</a></li>
          <li><a href="#support" className={pageStyles.navLink}>Services</a></li>
          <li><a href="#about" className={pageStyles.navLink}>About me</a></li>
          <li><a href="#projects" className={pageStyles.navLink}>Portfolio</a></li>
        </ul>
        <div className={pageStyles.navAction}>
          <a href="#contact" className={`${uiStyles.button} ${uiStyles.buttonPrimary}`}>Hire Me</a>
        </div>
      </nav>

      <section id="hero" className={`${uiStyles.section} ${pageStyles.hero}`}>
        <div className={pageStyles.heroContent}>
          <div className={pageStyles.heroText}>
            <div className={pageStyles.heroSubtitle}>Hi I am</div>
            <div className={pageStyles.heroName}>Radip Shrestha</div>
            <h1 className={pageStyles.heroTitle}>Software <br/>Engineer</h1>
            
            <div className={pageStyles.socialLinks} style={{ margin: '0 0 2rem 0', justifyContent: 'flex-start', background: 'none' }}>
              <a href={`https://github.com/Radip97`} target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.05)', width: '36px', height: '36px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              </a>
              <a href="https://www.instagram.com/radip.__.sht/" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.05)', width: '36px', height: '36px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=radip.crestha@gmail.com" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(255,255,255,0.05)', width: '36px', height: '36px' }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              </a>
            </div>

            <div className={pageStyles.heroButtons}>
              <a href="/Radip_Shrestha_Resume.pdf" target="_blank" className={`${uiStyles.button} ${uiStyles.buttonPrimary}`}>Download CV</a>
            </div>

            <div className={pageStyles.heroStats}>
              <div className={pageStyles.statItem}>
                <span className={pageStyles.statNumber}>BS</span>
                <span className={pageStyles.statLabel}>Comp. Science</span>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className={pageStyles.statItem}>
                <span className={pageStyles.statNumber}>7+</span>
                <span className={pageStyles.statLabel}>Proj. Completed</span>
              </div>
              <div style={{ width: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
              <div className={pageStyles.statItem}>
                <span className={pageStyles.statNumber}>20+</span>
                <span className={pageStyles.statLabel}>Core Skills</span>
              </div>
            </div>
          </div>
          
          <div className={pageStyles.heroImageContainer}>
            <div className={pageStyles.heroCircle}></div>
            <img src="/profile.jpg" alt="Radip Shrestha" className={pageStyles.profileImage} />
          </div>
        </div>
      </section>

      <section id="about" className={uiStyles.section}>
        <h2 className={uiStyles.sectionTitle}>About Me</h2>
        <div className={pageStyles.aboutContent}>
          <div className={pageStyles.aboutText}>
            <p style={{ marginBottom: '1rem' }}>
              Hello! I'm Radip, a Software Engineer who recently completed my Bachelor of Science in Computer Science with a minor in Computer & Information Technology at Northern Kentucky University. 
            </p>
            <p>
              I am deeply interested in building scalable services and deploying high-impact, intelligent software solutions. Whether I'm training machine learning models for real-time computer vision, designing secure full-stack applications, or configuring Linux servers, I enjoy taking on challenging technical problems that push me to learn and grow.
            </p>
          </div>
        </div>

        <div className={pageStyles.skillsContainer}>
          <div className={pageStyles.skillCategory}>
            <h3>Languages</h3>
            <div className={pageStyles.skillList}>
              <span className={uiStyles.badge}>Python</span>
              <span className={uiStyles.badge}>C++</span>
              <span className={uiStyles.badge}>Java</span>
              <span className={uiStyles.badge}>JavaScript</span>
              <span className={uiStyles.badge}>PHP</span>
              <span className={uiStyles.badge}>C#</span>
              <span className={uiStyles.badge}>SQL</span>
            </div>
          </div>
          <div className={pageStyles.skillCategory}>
            <h3>Frameworks & Tools</h3>
            <div className={pageStyles.skillList}>
              <span className={uiStyles.badge}>Flask</span>
              <span className={uiStyles.badge}>REST APIs</span>
              <span className={uiStyles.badge}>Git</span>
              <span className={uiStyles.badge}>Linux / Bash</span>
              <span className={uiStyles.badge}>AWS</span>
              <span className={uiStyles.badge}>Nextcloud</span>
            </div>
          </div>
          <div className={pageStyles.skillCategory}>
            <h3>IT & Systems</h3>
            <div className={pageStyles.skillList}>
              <span className={uiStyles.badge}>PC Building</span>
              <span className={uiStyles.badge}>Hardware Troubleshooting</span>
              <span className={uiStyles.badge}>Remote Support (AnyDesk)</span>
              <span className={uiStyles.badge}>Linux SysAdmin</span>
              <span className={uiStyles.badge}>Driver Management</span>
              <span className={uiStyles.badge}>Network Config</span>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className={uiStyles.section}>
        <h2 className={uiStyles.sectionTitle}>Featured Projects</h2>
        <div className={pageStyles.projectsGrid}>
          {resumeProjects.map((repo, i) => (
            <div key={i} className={uiStyles.card}>
              <div className={pageStyles.projectHeader}>
                <h3 className={pageStyles.projectTitle}>{repo.name}</h3>
                {repo.githubUrl && (
                  <div className={pageStyles.projectLinks}>
                    <a href={repo.githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                    </a>
                  </div>
                )}
              </div>
              <p className={pageStyles.projectDesc}>{repo.description}</p>
              <div className={pageStyles.projectTags}>
                {repo.tags.map(topic => (
                  <span key={topic} className={uiStyles.badge}>{topic}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="support" className={uiStyles.section}>
        <h2 className={uiStyles.sectionTitle}>IT & Technical Support</h2>
        <div className={pageStyles.projectsGrid}>
          <div className={uiStyles.card}>
            <h3 className={pageStyles.projectTitle}>PC Building & Hardware</h3>
            <p className={pageStyles.projectDesc}>
              Experienced in custom PC assembly, from part selection to BIOS configuration. Specialized in building high-performance workstations and gaming rigs, ensuring optimal thermal management and cable routing.
            </p>
            <div className={pageStyles.projectTags}>
              <span className={uiStyles.badge}>Hardware Assembly</span>
              <span className={uiStyles.badge}>Diagnostics</span>
              <span className={uiStyles.badge}>Component Selection</span>
            </div>
          </div>
          <div className={uiStyles.card}>
            <h3 className={pageStyles.projectTitle}>Remote Assistance & Troubleshooting</h3>
            <p className={pageStyles.projectDesc}>
              Providing technical support using AnyDesk and other remote tools. Expert in resolving software conflicts, driver issues, and OS-level optimizations for friends and family across different systems.
            </p>
            <div className={pageStyles.projectTags}>
              <span className={uiStyles.badge}>AnyDesk</span>
              <span className={uiStyles.badge}>Remote Support</span>
              <span className={uiStyles.badge}>Driver Fixing</span>
            </div>
          </div>
          <div className={uiStyles.card}>
            <h3 className={pageStyles.projectTitle}>Linux & System Admin</h3>
            <p className={pageStyles.projectDesc}>
              Proficient in Linux environments (Ubuntu, Debian). Experienced in setting up home servers, managing file systems, and automating tasks through shell scripting.
            </p>
            <div className={pageStyles.projectTags}>
              <span className={uiStyles.badge}>Ubuntu</span>
              <span className={uiStyles.badge}>Shell Scripting</span>
              <span className={uiStyles.badge}>Server Management</span>
            </div>
          </div>
        </div>
      </section>

      <section id="education" className={uiStyles.section}>
        <h2 className={uiStyles.sectionTitle}>Education & Certifications</h2>
        <div className={pageStyles.timeline}>
          <div className={pageStyles.timelineItem}>
            <div className={pageStyles.expRole}>Bachelor of Science in Computer Science</div>
            <div className={pageStyles.expCompany}>Northern Kentucky University</div>
            <div className={pageStyles.expDate}>Graduated: May 2026</div>
            <ul className={pageStyles.expPoints}>
              <li>Minor in Computer & Information Technology.</li>
              <li>Relevant Coursework: Data Structures & Algorithms, Operating Systems, Database Systems, Software Engineering, Computer Networks, Machine Learning, Deep Learning.</li>
            </ul>
          </div>
          <div className={pageStyles.timelineItem}>
            <div className={pageStyles.expRole}>Microsoft C# Certification</div>
            <div className={pageStyles.expCompany}>Microsoft</div>
            <div className={pageStyles.expDate}>In Progress</div>
            <ul className={pageStyles.expPoints}>
              <li>Demonstrating proficiency in C# programming, object-oriented concepts, and application development.</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="contact" className={uiStyles.section}>
        <div className={pageStyles.contactWrapper}>
          <h2 className={uiStyles.sectionTitle}>Get In Touch</h2>
          <p className={pageStyles.contactDesc}>
            I'm currently seeking a full-time Software Engineering role to build scalable services. I'm based in Highland Heights, KY. Whether you have an opportunity or just want to connect, feel free to reach out!
          </p>
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=radip.crestha@gmail.com" target="_blank" rel="noopener noreferrer" className={`${uiStyles.button} ${uiStyles.buttonPrimary}`}>
            Email Me
          </a>
          
          <div className={pageStyles.socialLinks}>
            <a href={`https://github.com/${GITHUB_USERNAME}`} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a href="https://www.instagram.com/radip.__.sht/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
          <p style={{ marginTop: '2rem', color: '#888', fontSize: '0.9rem', fontFamily: 'var(--font-geist-mono), monospace' }}>
            (859) 287-5362
          </p>
        </div>
      </section>
    </div>
  );
}
