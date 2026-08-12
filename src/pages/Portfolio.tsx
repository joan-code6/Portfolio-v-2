import type { CSSProperties } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, Github, PackageOpen, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

type ProjectLink = {
  label: string;
  url: string;
  kind: 'demo' | 'code' | 'package' | 'video';
};

type Project = {
  id: number;
  title: string;
  kicker: string;
  status: string;
  description: string;
  note?: string;
  tags: string[];
  color: string;
  links: ProjectLink[];
};

const projects: Project[] = [
  {
    id: 1,
    title: 'LANIS for Schulportal Hessen',
    kicker: 'Full-stack platform',
    status: 'Active · 2025–now',
    description:
      'An unofficial, faster way to use Schulportal Hessen. I build and maintain the Python client, cached REST API, and responsive PWA for messages, courses, homework, files, calendars, substitution plans, and timetables.',
    note: 'The public API and visual interface are both running live.',
    tags: ['Python', 'FastAPI', 'React', 'TypeScript', 'PWA'],
    color: '#22d3ee',
    links: [
      { label: 'Open app', url: 'https://lanis.arg-server.de', kind: 'demo' },
      { label: 'API docs', url: 'https://lanis-backend.joancode.dev/documentation', kind: 'demo' },
      { label: 'API code', url: 'https://github.com/joan-code6/lanis_api', kind: 'code' },
      { label: 'UI code', url: 'https://github.com/joan-code6/lanis_ui', kind: 'code' },
    ],
  },
  {
    id: 2,
    title: 'Zen AI',
    kicker: 'Award-winning research project',
    status: 'Completed · 2025–2026',
    description:
      'A cross-platform personal AI assistant whose trigger-word memory retrieves only relevant notes instead of flooding the model with every saved detail. I built the backend, web, desktop, mobile, CLI, email, calendar, MCP, and e-ink integrations.',
    note: '1st place regionally, then 2nd place in Mathematics/Computer Science and the University of Kassel Informatics special prize at Jugend forscht junior Hessen 2026.',
    tags: ['AI', 'Python', 'React', 'Electron', 'Firebase'],
    color: '#a78bfa',
    links: [
      { label: 'Live web app', url: 'https://zen.arg-server.de', kind: 'demo' },
      { label: 'Project & benchmark', url: 'https://joan-code6.github.io/zen_ai/', kind: 'demo' },
      { label: 'Public code', url: 'https://github.com/joan-code6/zen_ai_public', kind: 'code' },
    ],
  },
  {
    id: 3,
    title: 'OC Forms',
    kicker: 'Production workflow',
    status: 'Active · 2026',
    description:
      'The application and review system for OutCraft Minecraft events. Players apply through Discord OAuth; moderators claim and score applications; admins resolve conflicts, manage roles, inspect audit logs, and export the final whitelist.',
    note: 'Built for a community of 11,000 members, OC Forms has handled more than 2,500 individual applications. It runs on Appwrite with 23 server functions, autosave, invite links, and analytics.',
    tags: ['React', 'TypeScript', 'Appwrite', 'Discord OAuth', 'PostHog'],
    color: '#fb7185',
    links: [
      { label: 'Live site', url: 'https://apply.outcraft.net', kind: 'demo' },
      { label: 'Source code', url: 'https://github.com/joan-code6/oc-forms', kind: 'code' },
    ],
  },
  {
    id: 4,
    title: 'Broccoli',
    kicker: 'Team hackathon build',
    status: 'Horizons Europa · Berlin 2026',
    description:
      'A competitive multiplayer virtual-pet game built with my team at Hack Club’s Horizons Europa hackathon in Berlin. Physical NFC chips feed and care for two on-screen broccoli pets while the game tracks their growth.',
    note: 'The prototype connects a Pico NFC reader over serial to a Flask game loop, React display, and Flutter companion app.',
    tags: ['NFC', 'MicroPython', 'Flask', 'React', 'Flutter'],
    color: '#4ade80',
    links: [
      {
        label: 'Watch demo',
        url: 'https://user-cdn.hackclub-assets.com/019f9dc0-2213-7ab4-9a04-f0c7d4e0ba9f/broccoli.mp4',
        kind: 'video',
      },
      { label: 'Source code', url: 'https://github.com/joan-code6/broccoli', kind: 'code' },
    ],
  },
  {
    id: 5,
    title: 'Smart Garden Irrigation',
    kicker: 'Hardware + software',
    status: 'Running at home · 2026',
    description:
      'The system that waters my garden for real: an ESP32-C3 controls five valves through a Raspberry Pi and MQTT, while a FastAPI dashboard handles schedules, history, and manual control.',
    note: 'It checks weather before watering, can skip rain or frost, and also supports Discord commands and Google Home. Public visitors can view the dashboard; physical controls stay protected.',
    tags: ['ESP32', 'Raspberry Pi', 'MQTT', 'FastAPI', 'IoT'],
    color: '#facc15',
    links: [
      { label: 'Live dashboard', url: 'https://garten-bewaesserung.joancode.dev', kind: 'demo' },
      { label: 'Source code', url: 'https://github.com/joan-code6/garten-bewaesserung', kind: 'code' },
    ],
  },
];

const utilityProject = {
  title: 'qssh',
  label: 'Everyday utility · stable',
  description:
    'A small Python CLI I still rely on: save an SSH session once, then connect by name with a single command. It supports password and key-based authentication and is published on PyPI.',
  tags: ['Python', 'CLI', 'PyPI', 'SSH'],
  links: [
    { label: 'Install from PyPI', url: 'https://pypi.org/project/qssh/', kind: 'package' as const },
    { label: 'Source code', url: 'https://github.com/joan-code6/qssh', kind: 'code' as const },
  ],
};

const linkIcons = {
  demo: ArrowUpRight,
  code: Github,
  package: PackageOpen,
  video: Play,
};

const decorativeDots = [
  { left: '7%', top: '19%', delay: 0.2 },
  { left: '91%', top: '12%', delay: 0.9 },
  { left: '15%', top: '71%', delay: 1.5 },
  { left: '85%', top: '54%', delay: 0.6 },
  { left: '47%', top: '8%', delay: 1.1 },
  { left: '66%', top: '88%', delay: 0.4 },
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Projects | Bennet Joan Wegener</title>
        <meta
          name="description"
          content="Selected projects by Bennet Joan Wegener: LANIS for Schulportal Hessen, award-winning Zen AI, OC Forms, Broccoli from Hack Club Horizons Europa, smart garden irrigation, and qssh."
        />
        <link rel="canonical" href="https://joancode.dev/portfolio" />
        <meta property="og:title" content="Projects | Bennet Joan Wegener" />
        <meta
          property="og:description"
          content="Full-stack platforms, AI research, event infrastructure, hardware, and useful developer tools built by Bennet Joan Wegener."
        />
        <meta property="og:url" content="https://joancode.dev/portfolio" />
        <meta name="twitter:title" content="Projects | Bennet Joan Wegener" />
        <meta
          name="twitter:description"
          content="LANIS, Zen AI, OC Forms, Broccoli, smart garden irrigation, and qssh."
        />
      </Helmet>

      <main className="portfolio-container">
        <div className="portfolio-bg" aria-hidden="true">
          <motion.div
            className="bg-gradient-1"
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            className="bg-gradient-2"
            animate={{ rotate: -360, scale: [1, 1.3, 1] }}
            transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
          />
        </div>

        <motion.header
          className="portfolio-header"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.55 }}
        >
          <nav className="page-nav" aria-label="Page navigation">
            <button className="back-button" onClick={() => navigate('/')}>
              ← Home
            </button>
            <button className="back-button page-nav-secondary" onClick={() => navigate('/media')}>
              Press &amp; recognition →
            </button>
          </nav>

          <p className="page-eyebrow">Selected work · 2025–2026</p>
          <h1 className="portfolio-title">Projects I’ve built</h1>
          <p className="portfolio-subtitle">
            Selected for depth, usefulness, and real-world use—not just recency.
          </p>
        </motion.header>

        <section className="projects-grid" aria-label="Featured projects">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.45 }}
              whileHover={{ y: -7 }}
              style={{ '--accent-color': project.color } as CSSProperties}
            >
              <div className="project-card-topline" aria-hidden="true" />
              <div className="project-content">
                <div className="project-meta-row">
                  <span className="project-number">{String(project.id).padStart(2, '0')}</span>
                  <span className="project-status">{project.status}</span>
                </div>

                <p className="project-kicker">{project.kicker}</p>
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                {project.note && <p className="project-note">{project.note}</p>}

                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.map((link) => {
                    const Icon = linkIcons[link.kind];
                    return (
                      <a
                        key={link.url}
                        className={`project-link project-link-${link.kind}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icon size={16} aria-hidden="true" />
                        {link.label}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        <motion.section
          className="utility-project"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.42, duration: 0.45 }}
          aria-labelledby="utility-title"
        >
          <div className="utility-copy">
            <p className="project-kicker">{utilityProject.label}</p>
            <h2 id="utility-title">{utilityProject.title}</h2>
            <p>{utilityProject.description}</p>
            <div className="project-tags">
              {utilityProject.tags.map((tag) => (
                <span key={tag} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="project-links utility-links">
            {utilityProject.links.map((link) => {
              const Icon = linkIcons[link.kind];
              return (
                <a
                  key={link.url}
                  className={`project-link project-link-${link.kind}`}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={16} aria-hidden="true" />
                  {link.label}
                </a>
              );
            })}
          </div>
        </motion.section>

        <motion.a
          className="more-projects-full"
          href="https://github.com/joan-code6"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ y: -3 }}
        >
          <div className="more-projects-inner">
            <div className="more-projects-title">
              <p className="project-kicker">More experiments, tools, and contributions</p>
              <h2>Everything else is on GitHub</h2>
            </div>
            <span className="project-link">
              <Github size={17} aria-hidden="true" />
              Visit GitHub
            </span>
          </div>
        </motion.a>

        {decorativeDots.map((dot, index) => (
          <motion.div
            key={index}
            className="floating-dot"
            aria-hidden="true"
            animate={{ y: [0, -24, 0], opacity: [0.15, 0.45, 0.15] }}
            transition={{ duration: 4, repeat: Infinity, delay: dot.delay }}
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </main>
    </>
  );
};

export default Portfolio;
