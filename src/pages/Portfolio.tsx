import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'Zen AI',
    description: 'Personal AI assistant with intelligent memory, cross-device sync, and deep integrations.',
    tags: ['Python', 'Flutter', 'Firebase', 'AI'],
    color: '#a855f7',
    link: 'https://github.com/joan-code6/zen_ai'
  },
  {
    id: 2,
    title: 'Voice-Guard (WIP)',
    description: 'Machine learning model in development to detect racial slurs directly from audio.',
    tags: ['ML', 'Audio', 'Security'],
    color: '#ef4444',
    link: 'https://github.com/joan-code6/Voice-Guard'
  },
  {
    id: 3,
    title: 'qssh',
    description: 'Quick SSH session manager to save VM credentials and connect with a single command.',
    tags: ['Python', 'CLI'],
    color: '#2563eb',
    link: 'https://github.com/joan-code6/qssh'
  },
  {
    id: 4,
    title: 'Text Editor',
    description: 'A clean, distraction-free Svelte text editor focused on a minimal writing UI.',
    tags: ['Svelte', 'UI', 'Writing'],
    color: '#0ea5a4',
    link: 'https://github.com/joan-code6/clean-svelte-based-text-editor'
  },
  {
    id: 5,
    title: 'Modset Policy Enforcement (MPE)',
    description: 'Fabric mod that enforces banned mods and protects Minecraft servers from cheaters.',
    tags: ['Java', 'Minecraft', 'Fabric'],
    color: '#f59e0b',
    link: 'https://github.com/joan-code6/Modset-Policy-Enforcement'
  },
  {
    id: 6,
    title: 'Lanis API',
    description: 'Python API to access the Schulportal Hessen (LANIS) programmatically.',
    tags: ['Python', 'API'],
    color: '#06b6d4',
    link: 'https://github.com/joan-code6/lanis_api'
  },
  // 'More Projects' is rendered as a full-width component below the grid
];

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <div className="portfolio-container">
      {/* Animated background */}
      <div className="portfolio-bg">
        <motion.div
          className="bg-gradient-1"
          animate={{
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="bg-gradient-2"
          animate={{
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Header */}
      <motion.header
        className="portfolio-header"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.button
          className="back-button"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05, x: -5 }}
          whileTap={{ scale: 0.95 }}
        >
          ← Back to Home
        </motion.button>
        <motion.h1
          className="portfolio-title"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          My Portfolio
        </motion.h1>
        <p className="portfolio-subtitle">Explore my latest projects and work</p>
      </motion.header>

      {/* Projects Grid */}
      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.1}}
            whileHover={{ y: -10, scale: 1.02 }}
            style={{ '--accent-color': project.color } as React.CSSProperties}
          >
            <motion.div
              className="project-glow"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.2,
              }}
              style={{ background: project.color }}
            />

            <div className="project-content">
              <motion.div
                className="project-number"
                animate={{
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {String(project.id).padStart(2, '0')}
              </motion.div>

              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <motion.a
                className="view-project-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>

      
      {/* Full-width More Projects card (spans left to right) */}
      <motion.a
        className="more-projects-full"
        href="https://github.com/joan-code6"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        <div className="more-projects-inner">
          <div className="more-projects-title" style={{ textAlign: 'left' }}>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              More Projects
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Explore more of my work on GitHub — tools, experiments, and side projects.
            </motion.p>
          </div>
          <motion.div
            className="more-projects-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <span className="view-project-btn">Visit GitHub</span>
          </motion.div>
        </div>
      </motion.a>


      {/* Floating decorative elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="floating-dot"
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Portfolio;
