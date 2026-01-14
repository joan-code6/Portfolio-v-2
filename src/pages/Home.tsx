import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import ColorBends from '../components/ColorBends';
import SocialButton from '../components/SocialButton';
import { SiPython, SiDart, SiReact, SiHtml5, SiJavascript } from 'react-icons/si';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Animated background */}
      <div className="bg-canvas">
        <ColorBends
          rotation={45}
          speed={0.2}
          colors={["#dc2626","#8b5cf6"]}
          transparent
          autoRotate={0}
          scale={1}
          frequency={1}
          warpStrength={1}
          mouseInfluence={0.1}
          parallax={0.5}
          noise={0.1}
        />
      </div>

      {/* Main card */}
      <motion.div
        className="portfolio-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="card-content">
          {/* Left column - Profile */}
          <div className="left-column">

            {/* Profile picture */}
            <motion.div
              className="profile-pic"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <img 
                src="https://avatars.githubusercontent.com/u/172996447" 
                alt="Profile"
                className="profile-img"
              />
            </motion.div>

            {/* Name and handle */}
            <motion.div
              className="name-section"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="name">Bennet Joan Wegener</h1>
              <p className="handle">joan-code he/him</p>
            </motion.div>

            {/* Info section */}
            <motion.div
              className="info-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <div className="info-item">
                <span className="info-label">Location</span>
                <span className="info-value">Germany</span>
              </div>
              <div className="info-item">
                <span className="info-label">Timezone</span>
                <span className="info-value">CET (UTC+1)</span>
              </div>
              <div className="info-item">
                <span className="info-label">School</span>
                <span className="info-value">Adolf Reichwein Gymnasium Heusenstamm</span>
              </div>
            </motion.div>
          </div>

          {/* Right column - Skills, Status, Social */}
          <div className="right-column">

            {/* Skills */}
            <motion.div
              className="skills-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <h3 className="section-title">Programming languages</h3>
              <div className="skills-grid">
                {[
                  { name: 'Python', Icon: SiPython, color: '#3776AB' },
                  { name: 'Dart / Flutter', Icon: SiDart, color: '#0175C2' },
                  { name: 'React', Icon: SiReact, color: '#61DAFB' },
                  { name: 'Java', Icon: () => <span className="java-icon" aria-hidden>☕</span>, color: '#EA8220' },
                  { name: 'HTML & CSS', Icon: SiHtml5, color: '#E34F26' },
                ].map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    className="skill-tag"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.08, type: 'spring', stiffness: 100 }}
                    whileHover={{ x: 4 }}
                  >
                    <skill.Icon size={22} style={{ color: skill.color }} aria-hidden />
                    <span>{skill.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="social-section"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <h3 className="section-title">Connect</h3>
              <div className="social-links">
                {[
                  { name: 'GitHub', url: 'https://github.com/joan-code6', type: 'github' },
                  { name: 'Discord', url: 'https://discord.gg/HADC4eBJHR', type: 'discord' },
                  { name: 'Email', url: 'mailto:bennet-wegener@web.de', type: 'email' },
                  { name: 'Wikipedia', url: 'https://en.wikipedia.org/wiki/Joke', type: 'wikipedia' },
                ].map((social, index) => (
                  <SocialButton
                    key={social.name}
                    name={social.name}
                    url={social.url}
                    type={social.type as 'github' | 'discord' | 'email' | 'wikipedia'}
                    delay={0.8 + index * 0.1}
                  />
                ))}
              </div>
            </motion.div>

            {/* Portfolio button */}
            <motion.button
              className="portfolio-btn"
              onClick={() => navigate('/portfolio')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.02, borderColor: "rgba(255, 255, 255, 0.4)" }}
              whileTap={{ scale: 0.98 }}
            >
              View Portfolio →
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Floating code elements */}
      <motion.div
        className="floating-code"
        style={{ top: '15%', right: '8%' }}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'</>'}
      </motion.div>
      <motion.div
        className="floating-code"
        style={{ bottom: '15%', left: '8%' }}
        animate={{
          y: [0, 15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {'{}'}
      </motion.div>
    </div>
  );
};

export default Home;
