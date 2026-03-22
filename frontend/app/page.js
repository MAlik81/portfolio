import CustomCursor from './components/CustomCursor';

// ─── Data ─────────────────────────────────────────────────────

const projects = [
  {
    title: 'AI Call Operator Platform',
    type: 'AI Platform',
    summary:
      'A voice workflow platform for handling inbound and outbound call operations — built with automation, integrations, and operational controls that teams can manage day to day.',
    focus: 'Backend architecture · Voice APIs · Workflow automation',
    tags: ['Node.js', 'AI Services', 'REST APIs', 'Automation'],
    featured: true,
  },
  {
    title: 'Data Portability / Compliance Automation System',
    type: 'Compliance System',
    summary:
      'Backend-heavy business system for structured data handling, auditability, and repeatable compliance workflows at scale.',
    focus: 'Data pipelines · Audit logging · Process automation',
    tags: ['Node.js', 'AWS', 'Compliance'],
  },
  {
    title: 'Bright & Fit',
    type: 'SaaS Product',
    summary:
      'A product-focused application with a clean customer experience, reliable backend services, and a codebase designed for long-term maintainability.',
    focus: 'Full-stack delivery · Backend services · UX reliability',
    tags: ['Next.js', 'Node.js', 'Cloud'],
  },
  {
    title: 'Loyalty Card Management Module',
    type: 'Business Module',
    summary:
      'Modular feature set for managing customer loyalty programs, operational rules, and practical reporting in a live business environment.',
    focus: 'Business logic · Integrations · Operational reporting',
    tags: ['Node.js', 'Integrations', 'Business Logic'],
  },
];

const skillGroups = [
  {
    title: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'System design', 'Business logic'],
  },
  {
    title: 'Frontend',
    items: ['Next.js', 'React', 'Responsive UI', 'Accessible interfaces'],
  },
  {
    title: 'Cloud / DevOps',
    items: ['AWS', 'Docker', 'CI/CD', 'Linux servers', 'Monitoring'],
  },
  {
    title: 'Integrations / Tools',
    items: ['Stripe', 'Webhooks', 'Third-party APIs', 'Automation workflows', 'AI services'],
  },
];

const workPrinciples = [
  'Build systems that are easy to operate, extend, and debug — not just easy to ship once.',
  'Prefer clear architecture and stable delivery over unnecessary complexity.',
  'Design software around practical business workflows and measurable outcomes.',
];

// ─── SVG Graphics ──────────────────────────────────────────────

function HeroBgSVG() {
  return (
    <svg
      viewBox="0 0 440 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      <defs>
        <pattern
          id="heroGrid"
          x="0"
          y="0"
          width="32"
          height="32"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1.5" cy="1.5" r="1.5" fill="#6b9ac4" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="440" height="560" fill="url(#heroGrid)" />
      <line x1="96" y1="160" x2="224" y2="224" stroke="#4a7aab" strokeWidth="0.75" opacity="0.25" />
      <line x1="224" y1="224" x2="352" y2="160" stroke="#4a7aab" strokeWidth="0.75" opacity="0.25" />
      <line x1="224" y1="224" x2="240" y2="352" stroke="#4a7aab" strokeWidth="0.75" opacity="0.2" />
      <line x1="240" y1="352" x2="128" y2="416" stroke="#4a7aab" strokeWidth="0.75" opacity="0.18" />
      <line x1="240" y1="352" x2="352" y2="384" stroke="#4a7aab" strokeWidth="0.75" opacity="0.18" />
      <circle cx="96" cy="160" r="3.5" fill="#4a7aab" opacity="0.28" />
      <circle cx="224" cy="224" r="5" fill="#6b9ac4" opacity="0.32" />
      <circle cx="224" cy="224" r="13" stroke="#4a7aab" strokeWidth="0.75" fill="none" opacity="0.14" />
      <circle cx="352" cy="160" r="3" fill="#4a7aab" opacity="0.22" />
      <circle cx="240" cy="352" r="4.5" fill="#6b9ac4" opacity="0.28" />
      <circle cx="240" cy="352" r="11" stroke="#4a7aab" strokeWidth="0.75" fill="none" opacity="0.1" />
      <circle cx="128" cy="416" r="3" fill="#4a7aab" opacity="0.2" />
      <circle cx="352" cy="384" r="3.5" fill="#4a7aab" opacity="0.22" />
    </svg>
  );
}

function FeaturedProjectSVG() {
  return (
    <svg
      viewBox="0 0 360 280"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      <defs>
        <pattern id="projGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="1" fill="#6b9ac4" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="360" height="280" fill="url(#projGrid)" />
      <circle cx="180" cy="140" r="36" stroke="#4a7aab" strokeWidth="1" fill="none" opacity="0.35" />
      <circle cx="180" cy="140" r="20" stroke="#4a7aab" strokeWidth="1" fill="rgba(74,122,171,0.05)" opacity="0.45" />
      <circle cx="180" cy="140" r="5" fill="#6b9ac4" opacity="0.55" />
      <circle cx="80" cy="84" r="11" stroke="#4a7aab" strokeWidth="0.75" fill="rgba(74,122,171,0.04)" opacity="0.35" />
      <circle cx="80" cy="84" r="3" fill="#4a7aab" opacity="0.4" />
      <circle cx="284" cy="88" r="11" stroke="#4a7aab" strokeWidth="0.75" fill="rgba(74,122,171,0.04)" opacity="0.35" />
      <circle cx="284" cy="88" r="3" fill="#4a7aab" opacity="0.4" />
      <circle cx="72" cy="196" r="9" stroke="#4a7aab" strokeWidth="0.75" fill="none" opacity="0.28" />
      <circle cx="72" cy="196" r="2.5" fill="#4a7aab" opacity="0.32" />
      <circle cx="292" cy="200" r="9" stroke="#4a7aab" strokeWidth="0.75" fill="none" opacity="0.28" />
      <circle cx="292" cy="200" r="2.5" fill="#4a7aab" opacity="0.32" />
      <line x1="147" y1="122" x2="91" y2="91" stroke="#4a7aab" strokeWidth="0.75" opacity="0.28" />
      <line x1="213" y1="122" x2="273" y2="95" stroke="#4a7aab" strokeWidth="0.75" opacity="0.28" />
      <line x1="150" y1="157" x2="81" y2="190" stroke="#4a7aab" strokeWidth="0.75" opacity="0.22" />
      <line x1="210" y1="157" x2="283" y2="193" stroke="#4a7aab" strokeWidth="0.75" opacity="0.22" />
      <circle cx="180" cy="140" r="52" stroke="#4a7aab" strokeWidth="0.5" fill="none" opacity="0.1" />
    </svg>
  );
}

function DataSVG() {
  return (
    <svg
      viewBox="0 0 260 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      {[20, 38, 56, 74].map((y, i) => (
        <g key={y}>
          <rect x="24" y={y} width={[120, 88, 104, 72][i]} height="10" rx="2"
            fill="#4a7aab" opacity={[0.15, 0.1, 0.13, 0.08][i]} />
          <circle cx="14" cy={y + 5} r="2.5" fill="#4a7aab" opacity="0.22" />
        </g>
      ))}
      <line x1="180" y1="24" x2="230" y2="54" stroke="#4a7aab" strokeWidth="0.75" opacity="0.22" />
      <line x1="180" y1="54" x2="230" y2="54" stroke="#4a7aab" strokeWidth="0.75" opacity="0.18" />
      <circle cx="230" cy="54" r="4" fill="rgba(74,122,171,0.12)" stroke="#4a7aab" strokeWidth="0.75" opacity="0.35" />
    </svg>
  );
}

function ProductSVG() {
  return (
    <svg
      viewBox="0 0 260 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      <rect x="24" y="16" width="118" height="76" rx="6" stroke="#4a7aab" strokeWidth="0.75"
        fill="rgba(74,122,171,0.04)" opacity="0.38" />
      <rect x="32" y="26" width="102" height="8" rx="2" fill="#4a7aab" opacity="0.12" />
      <rect x="32" y="40" width="68" height="5" rx="2" fill="#4a7aab" opacity="0.09" />
      <rect x="32" y="51" width="82" height="5" rx="2" fill="#4a7aab" opacity="0.07" />
      <rect x="32" y="62" width="52" height="5" rx="2" fill="#4a7aab" opacity="0.09" />
      <rect x="168" y="28" width="48" height="52" rx="6" stroke="#4a7aab" strokeWidth="0.75"
        fill="rgba(74,122,171,0.05)" opacity="0.32" />
      <circle cx="192" cy="54" r="11" stroke="#4a7aab" strokeWidth="0.75" fill="none" opacity="0.28" />
      <circle cx="192" cy="54" r="3" fill="#4a7aab" opacity="0.28" />
    </svg>
  );
}

function LoyaltySVG() {
  return (
    <svg
      viewBox="0 0 260 108"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{ width: '100%', height: '100%', position: 'absolute', inset: 0 }}
    >
      {[{ x: 18, y: 30, op: 0.1 }, { x: 24, y: 22, op: 0.14 }, { x: 30, y: 14, op: 0.18 }].map((c, i) => (
        <rect key={i} x={c.x} y={c.y} width="128" height="68" rx="6"
          stroke="#4a7aab" strokeWidth="0.75" fill={`rgba(74,122,171,${c.op})`} opacity="0.5" />
      ))}
      <rect x="38" y="26" width="58" height="7" rx="2" fill="#4a7aab" opacity="0.14" />
      <rect x="38" y="40" width="38" height="5" rx="2" fill="#4a7aab" opacity="0.1" />
      <line x1="172" y1="34" x2="216" y2="34" stroke="#4a7aab" strokeWidth="0.75" opacity="0.22" />
      <line x1="172" y1="48" x2="208" y2="48" stroke="#4a7aab" strokeWidth="0.75" opacity="0.18" />
      <line x1="172" y1="62" x2="200" y2="62" stroke="#4a7aab" strokeWidth="0.75" opacity="0.14" />
      <circle cx="166" cy="34" r="2.5" fill="#4a7aab" opacity="0.28" />
      <circle cx="166" cy="48" r="2.5" fill="#4a7aab" opacity="0.22" />
      <circle cx="166" cy="62" r="2.5" fill="#4a7aab" opacity="0.18" />
    </svg>
  );
}

const cardGraphics = [DataSVG, ProductSVG, LoyaltySVG];

// ─── Page ──────────────────────────────────────────────────────

export default function HomePage() {
  const [featuredProject, ...otherProjects] = projects;

  return (
    <>
      <CustomCursor />

      {/* ── Navigation ── */}
      <header className="site-header">
        <div className="container nav-shell">
          <a className="brand-mark" href="#top" aria-label="Back to top">
            MY
          </a>
          <nav aria-label="Primary navigation">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="top">

        {/* ── Hero ── */}
        <section className="hero-section" aria-labelledby="hero-heading">
          <div className="container hero-grid">

            <div className="hero-copy">
              <p className="eyebrow" aria-hidden="true">Software Engineer</p>
              <h1 id="hero-heading">
                Software Engineer focused on SaaS, automation, and AI-powered systems
              </h1>
              <p className="hero-subtext">
                I build backend-heavy full-stack products for practical business use cases —
                cloud-hosted applications, integration layers, and automation workflows
                engineered to run reliably under real operational load.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#projects">View featured projects</a>
                <a className="btn-secondary" href="#contact">Get in touch</a>
              </div>
            </div>

            <div className="hero-visual" aria-label="Professional profile summary">
              <div className="hero-bg-pattern" aria-hidden="true">
                <HeroBgSVG />
              </div>

              {/*
                Profile image area.
                To replace with a real photo:
                  1. Add your image to /frontend/public/profile.jpg
                  2. Remove the <div className="profile-placeholder"> block
                  3. Add: <img src="/profile.jpg" alt="Your Name — Software Engineer" />
                The frame styling (.hero-image-frame) will handle the rest.
              */}
              <div className="hero-image-frame">
                <div className="profile-placeholder" aria-hidden="true">
                  <span className="profile-initials">MY</span>
                  <span className="profile-label">Portrait</span>
                </div>
              </div>

              <div className="hero-stats" aria-label="Quick profile">
                <div className="stat-row">
                  <span className="stat-label">Focus</span>
                  <span className="stat-value">SaaS · Automation · AI systems</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Strengths</span>
                  <span className="stat-value">Backend architecture · Integrations</span>
                </div>
                <div className="stat-row">
                  <span className="stat-label">Approach</span>
                  <span className="stat-value">Practical · Reliable · Systems-minded</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── About ── */}
        <section className="about-section" id="about" aria-labelledby="about-heading">
          <div className="container about-inner">
            <div className="about-heading">
              <p className="kicker">About</p>
              <h2 id="about-heading">Engineering software that supports real operations</h2>
            </div>
            <div className="about-body">
              <p>
                I work as a backend-heavy full-stack engineer, building software for real business
                environments. Most of my work lives in the layers that users never see but depend
                on every day — the APIs that handle the load, the workflows that remove manual
                steps, the integrations that make disparate tools talk to each other.
              </p>
              <p>
                My experience spans SaaS platforms, automation systems, third-party integrations,
                and cloud-hosted applications. I am most effective where product requirements,
                technical architecture, and operational practicality need to meet — and where the
                goal is software that teams can actually rely on, not just ship once.
              </p>
              <div className="about-values">
                <div className="value-item">
                  <p className="value-item-label">Priority</p>
                  <p className="value-item-text">Reliability and operational clarity over surface complexity</p>
                </div>
                <div className="value-item">
                  <p className="value-item-label">Approach</p>
                  <p className="value-item-text">Architecture that reflects real business workflows</p>
                </div>
                <div className="value-item">
                  <p className="value-item-label">Working style</p>
                  <p className="value-item-text">Practical, delivery-focused, systems-minded</p>
                </div>
                <div className="value-item">
                  <p className="value-item-label">Background</p>
                  <p className="value-item-text">SaaS · Automation · Integrations · AI-enabled products</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Skills ── */}
        <section className="skills-section" id="skills" aria-labelledby="skills-heading">
          <div className="container">
            <div className="skills-header">
              <p className="kicker">Skills</p>
              <h2 id="skills-heading">Core areas of practice</h2>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <div className="skill-group" key={group.title}>
                  <p className="skill-group-title">{group.title}</p>
                  <ul className="skill-items">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Featured Projects ── */}
        <section className="projects-section" id="projects" aria-labelledby="projects-heading">
          <div className="container">
            <div className="projects-header">
              <p className="kicker">Featured Projects</p>
              <h2 id="projects-heading">Selected work with a business systems mindset</h2>
            </div>

            {/* Featured — first project, full-width with visual panel */}
            <article className="project-featured" aria-label={`Featured: ${featuredProject.title}`}>
              <div className="project-featured-content">
                <div>
                  <p className="project-type-label">{featuredProject.type}</p>
                  <h3>{featuredProject.title}</h3>
                  <p className="project-summary">{featuredProject.summary}</p>
                  <p className="project-focus-line">{featuredProject.focus}</p>
                </div>
                <ul className="project-tags" aria-label="Technologies used">
                  {featuredProject.tags.map((tag) => (
                    <li className="project-tag" key={tag}>{tag}</li>
                  ))}
                </ul>
              </div>
              <div className="project-featured-visual" aria-hidden="true">
                <FeaturedProjectSVG />
              </div>
            </article>

            {/* Remaining three projects */}
            <div className="projects-grid">
              {otherProjects.map((project, index) => {
                const GraphicComponent = cardGraphics[index];
                return (
                  <article className="project-card" key={project.title}>
                    <div className="project-card-visual" aria-hidden="true">
                      <GraphicComponent />
                    </div>
                    <div className="project-card-body">
                      <p className="project-type-label">{project.type}</p>
                      <h3>{project.title}</h3>
                      <p className="project-summary">{project.summary}</p>
                      <ul className="project-tags" aria-label="Technologies used">
                        {project.tags.map((tag) => (
                          <li className="project-tag" key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── How I Work ── */}
        <section className="work-section" id="how-i-work" aria-labelledby="work-heading">
          <div className="container work-inner">
            <div className="work-heading">
              <p className="kicker">How I Work</p>
              <h2 id="work-heading">Calm execution, clear systems, practical outcomes</h2>
            </div>
            <div className="work-principles">
              {workPrinciples.map((text, i) => (
                <div className="principle-item" key={i}>
                  <span className="principle-number" aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="principle-text">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Current Focus ── */}
        <section className="focus-section" id="current-focus" aria-labelledby="focus-heading">
          <div className="container focus-inner">
            <div className="focus-heading">
              <p className="kicker">Current Focus</p>
              <h2 id="focus-heading">Building systems that reduce friction in product delivery</h2>
            </div>
            <div className="focus-body">
              <p>
                Right now I am most interested in AI-powered applications, internal tooling,
                and automation layers that help teams move faster without sacrificing clarity,
                reliability, or operational control. I am drawn to the engineering problems that
                sit at the boundary between business process and software system.
              </p>
              <ul className="focus-tags" aria-label="Areas of current interest">
                <li className="focus-tag">AI-powered applications</li>
                <li className="focus-tag">Internal tooling</li>
                <li className="focus-tag">Automation workflows</li>
                <li className="focus-tag">SaaS infrastructure</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="container contact-inner">
            <div className="contact-heading">
              <p className="kicker">Contact</p>
              <h2 id="contact-heading">Open to thoughtful product and engineering conversations</h2>
            </div>
            <div>
              <div className="contact-body">
                <p>
                  If you are building a SaaS platform, automation-heavy workflow, or an
                  AI-powered business product, I am happy to connect.
                </p>
              </div>
              <ul className="contact-links">
                <li>
                  <a className="contact-link-item" href="mailto:your-email@example.com">
                    <span className="contact-link-type">Email</span>
                    <span className="contact-link-value">your-email@example.com</span>
                  </a>
                </li>
                <li>
                  <a
                    className="contact-link-item"
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-link-type">GitHub</span>
                    <span className="contact-link-value">your-github</span>
                  </a>
                </li>
                <li>
                  <a
                    className="contact-link-item"
                    href="https://linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="contact-link-type">LinkedIn</span>
                    <span className="contact-link-value">your-linkedin</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <div className="container footer-shell">
          <div className="footer-left">
            <span className="footer-brand">MY</span>
            <span className="footer-text">Software Engineer</span>
          </div>
          <span className="footer-year">2024</span>
        </div>
      </footer>
    </>
  );
}
