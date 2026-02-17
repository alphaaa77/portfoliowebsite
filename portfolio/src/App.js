import { useState } from 'react';
import './App.css';

const pages = [
  { key: 'home', label: 'Landing' },
  { key: 'projects', label: 'Projects & Jobs' },
  { key: 'about', label: 'About Me' },
  { key: 'contact', label: 'Contact' },
];

const content = {
  home: {
    title: "Hi, I'm Hugh.",
    subtitle: 'I design and build practical software solutions.',
    body: 'Welcome to my portfolio. I focus on delivering clear, reliable, and user-friendly digital experiences that solve real problems for businesses and people.',
  },
  projects: {
    title: 'Projects & Jobs',
    subtitle: 'A snapshot of work I have undertaken.',
    body: 'This page can highlight your key projects, clients, responsibilities, and outcomes. Add cards for each project including the problem, your role, the tech stack, and measurable results.',
  },
  about: {
    title: 'About Me',
    subtitle: 'More than just an IT professional.',
    body: 'I enjoy helping people turn ideas into products they can actually use. I value communication, empathy, and consistency, so clients always know who they are working with and where things stand.',
  },
  contact: {
    title: 'Contact Me',
    subtitle: "Let's connect.",
    body: 'Email: you@example.com\nPhone: +1 (000) 000-0000\nLinkedIn: linkedin.com/in/yourprofile\nGitHub: github.com/yourusername',
  },
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const currentPage = content[activePage];

  return (
    <div className="app-shell">
      <header className="top-bar">
        <h1 className="brand">Hugh Portfolio</h1>
        <nav aria-label="Main navigation">
          <ul className="nav-list">
            {pages.map((page) => (
              <li key={page.key}>
                <button
                  className={`nav-button ${activePage === page.key ? 'active' : ''}`}
                  onClick={() => setActivePage(page.key)}
                >
                  {page.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="content-card">
        <p className="eyebrow">{pages.find((page) => page.key === activePage)?.label}</p>
        <h2>{currentPage.title}</h2>
        <h3>{currentPage.subtitle}</h3>
        <p className="description">{currentPage.body}</p>
      </main>
    </div>
  );
}

export default App;
