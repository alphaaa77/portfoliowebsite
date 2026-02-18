import { useMemo, useState } from 'react';
import './App.css';

const pages = [
  { key: 'home', label: 'Landing' },
  { key: 'projects', label: 'Projects & Jobs' },
  { key: 'about', label: 'About Me' },
  { key: 'contact', label: 'Contact' },
];

const projectCards = [
  {
    title: 'Anchor Steel — Internal Operations Suite',
    tag: 'Full stack • VB.NET • PostgreSQL • PDFSharp',
    body:
      'Built internal tools for inventory, dispatch, document generation, and operational reporting. Focused on reliability, speed, and clean workflows for non-technical users.',
  },
  {
    title: 'Inventory & Stocktake System',
    tag: 'PostgreSQL • Reporting • Automation',
    body:
      'Database-driven stocktake sessions, delivery tracking, usage calculations, and PDF summaries. Designed to reduce “ghost stock” and speed up reconciliation.',
  },
  {
    title: 'Delivery Dockets + Document Automation',
    tag: 'PDF generation • Data integration',
    body:
      'Automated generation and merging of delivery dockets and supporting documents (e.g., MTCs) based on job/schedule selections.',
  },
];

function App() {
  const [activePage, setActivePage] = useState('home');

  const currentLabel = useMemo(
    () => pages.find((p) => p.key === activePage)?.label ?? '',
    [activePage]
  );

  return (
    <div className="app-shell">
      <header className="top-bar">
        <div className="brand-wrap">
          <h1 className="brand">Hugh</h1>
          <p className="brand-subtitle">Software Developer • IT Consultant</p>
        </div>

        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {pages.map((page) => (
              <li key={page.key}>
                <button
                  type="button"
                  className={`nav-button ${activePage === page.key ? 'active' : ''}`}
                  onClick={() => setActivePage(page.key)}
                  aria-current={activePage === page.key ? 'page' : undefined}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="content-card">
        <p className="eyebrow">{currentLabel}</p>

        {activePage === 'home' && (
          <section className="fade-in">
            <h2>Hi, I’m Hugh.</h2>
            <h3>I build practical software that helps teams move faster.</h3>

            <p className="description">
              I’m a full-stack developer with hands-on experience delivering business software end-to-end —
              from database design and backend logic to UI and PDF/report automation. I also support teams
              as an IT consultant, helping keep systems stable and people unblocked.
            </p>

            <div className="cta-row">
              <button className="primary-cta" onClick={() => setActivePage('projects')}>
                View Projects
              </button>
              <button className="secondary-cta" onClick={() => setActivePage('contact')}>
                Contact Me
              </button>
            </div>
          </section>
        )}

        {activePage === 'projects' && (
          <section className="fade-in">
            <h2>Projects & Jobs</h2>
            <h3>A snapshot of work I’ve undertaken.</h3>

            <div className="card-grid">
              {projectCards.map((p) => (
                <article key={p.title} className="mini-card">
                  <p className="mini-tag">{p.tag}</p>
                  <h4 className="mini-title">{p.title}</h4>
                  <p className="mini-body">{p.body}</p>
                </article>
              ))}
            </div>

            <p className="muted">
              More detailed case studies (screenshots + architecture breakdowns) coming soon.
            </p>
          </section>
        )}

        {activePage === 'about' && (
          <section className="fade-in">
            <h2>About Me</h2>
            <h3>Developer-first, but I care about the people using the system.</h3>

            <p className="description">
              I like turning messy real-world processes into clean, reliable software. I’m big on
              communication, clarity, and building tools that feel “obvious” to use — especially for
              teams that don’t want to think about tech all day.
              {'\n\n'}
              Outside of dev work, I enjoy continuous learning and refining how I solve problems — whether
              that’s system design, UI/UX, or automation that saves people hours each week.
            </p>
          </section>
        )}

        {activePage === 'contact' && (
          <section className="fade-in">
            <h2>Contact</h2>
            <h3>Let’s connect.</h3>

            <div className="contact-list">
              <div className="contact-item">
                <span className="contact-label">Email: </span>
                <a className="contact-link" href="mailto:hugh@devtechsolutions.au">
                  hugh@devtechsolutions.au
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">GitHub: </span>
                <a className="contact-link" href="https://github.com/alphaaa77" target="_blank" rel="noreferrer">
                  github.com/alphaaa77
                </a>
              </div>

              <div className="contact-item">
                <span className="contact-label">LinkedIn: </span>
                <span className="muted">Add when ready</span>
              </div>
            </div>

            <p className="muted">
              Prefer a quick message? Email is best — I usually reply within a day.
            </p>
          </section>
        )}
      </main>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Hugh • Built with React</span>
      </footer>
    </div>
  );
}

export default App;
