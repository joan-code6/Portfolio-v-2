import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Portfolio.css';

const projects = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management',
    tags: ['React', 'Node.js', 'MongoDB'],
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'AI Chat Application',
    description: 'Real-time chat app with AI-powered message suggestions',
    tags: ['TypeScript', 'WebSockets', 'OpenAI'],
    color: '#a855f7',
  },
  {
    id: 3,
    title: 'Analytics Dashboard',
    description: 'Data visualization dashboard with interactive charts and metrics',
    tags: ['React', 'D3.js', 'Firebase'],
    color: '#ec4899',
  },
  {
    id: 4,
    title: 'Task Management System',
    description: 'Collaborative project management tool with team features',
    tags: ['Next.js', 'PostgreSQL', 'Prisma'],
    color: '#14b8a6',
  },
  {
    id: 5,
    title: 'Weather Forecast App',
    description: 'Beautiful weather app with location-based forecasts',
    tags: ['React Native', 'API Integration'],
    color: '#f59e0b',
  },
  {
    id: 6,
    title: 'Portfolio Generator',
    description: 'Create stunning portfolios with customizable templates',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    color: '#8b5cf6',
  },
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

              <motion.button
                className="view-project-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>

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
