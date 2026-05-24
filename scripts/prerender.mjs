import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');

const indexHtml = readFileSync(join(dist, 'index.html'), 'utf-8');

const pages = {
  '/': {
    title: 'Bennet Joan Wegener | Developer & Portfolio',
    content: `      <div class="home-container">
        <div class="portfolio-card">
          <div class="card-content">
            <div class="left-column">
              <div class="profile-pic">
                <img src="https://avatars.githubusercontent.com/u/172996447" alt="Bennet Joan Wegener profile" class="profile-img" />
              </div>
              <div class="name-section">
                <h1 class="name">Bennet Joan Wegener</h1>
                <p class="handle">joan-code he/him</p>
              </div>
              <div class="info-section">
                <div class="info-item"><span class="info-label">Location</span><span class="info-value">Germany</span></div>
                <div class="info-item"><span class="info-label">Timezone</span><span class="info-value">CET (UTC+1)</span></div>
                <div class="info-item"><span class="info-label">School</span><span class="info-value">Adolf Reichwein Gymnasium Heusenstamm</span></div>
              </div>
            </div>
            <div class="right-column">
              <div class="skills-section">
                <h3 class="section-title">Programming languages</h3>
                <div class="skills-grid">
                  <span class="skill-tag">Python</span>
                  <span class="skill-tag">Dart / Flutter</span>
                  <span class="skill-tag">React</span>
                  <span class="skill-tag">Java</span>
                  <span class="skill-tag">HTML & CSS</span>
                </div>
              </div>
              <div class="social-section">
                <h3 class="section-title">Connect</h3>
                <div class="social-links">
                  <a href="https://github.com/joan-code6" class="social-button">GitHub</a>
                  <a href="https://discord.gg/HADC4eBJHR" class="social-button">Discord</a>
                  <a href="mailto:bennet-wegener@web.de" class="social-button">Email</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`,
  },
  '/portfolio': {
    title: 'Portfolio | Bennet Joan Wegener',
    content: `      <div class="portfolio-container">
        <header class="portfolio-header">
          <h1 class="portfolio-title">My Portfolio</h1>
          <p class="portfolio-subtitle">Explore my latest projects and work</p>
        </header>
        <div class="projects-grid">
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Zen AI</h3>
              <p class="project-description">Personal AI assistant with intelligent memory, cross-device sync, and deep integrations.</p>
              <div class="project-tags"><span class="project-tag">Python</span><span class="project-tag">Flutter</span><span class="project-tag">Firebase</span><span class="project-tag">AI</span></div>
              <a href="https://github.com/joan-code6/zen_ai" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Voice-Guard (WIP)</h3>
              <p class="project-description">Machine learning model in development to detect racial slurs directly from audio.</p>
              <div class="project-tags"><span class="project-tag">ML</span><span class="project-tag">Audio</span><span class="project-tag">Security</span></div>
              <a href="https://github.com/joan-code6/Voice-Guard" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">qssh</h3>
              <p class="project-description">Quick SSH session manager to save VM credentials and connect with a single command.</p>
              <div class="project-tags"><span class="project-tag">Python</span><span class="project-tag">CLI</span></div>
              <a href="https://github.com/joan-code6/qssh" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Text Editor</h3>
              <p class="project-description">A clean, distraction-free Svelte text editor focused on a minimal writing UI.</p>
              <div class="project-tags"><span class="project-tag">Svelte</span><span class="project-tag">UI</span><span class="project-tag">Writing</span></div>
              <a href="https://github.com/joan-code6/clean-svelte-based-text-editor" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Modset Policy Enforcement (MPE)</h3>
              <p class="project-description">Fabric mod that enforces banned mods and protects Minecraft servers from cheaters.</p>
              <div class="project-tags"><span class="project-tag">Java</span><span class="project-tag">Minecraft</span><span class="project-tag">Fabric</span></div>
              <a href="https://github.com/joan-code6/Modset-Policy-Enforcement" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
          <div class="project-card">
            <div class="project-content">
              <h3 class="project-title">Lanis API</h3>
              <p class="project-description">Python API to access the Schulportal Hessen (LANIS) programmatically.</p>
              <div class="project-tags"><span class="project-tag">Python</span><span class="project-tag">API</span></div>
              <a href="https://github.com/joan-code6/lanis_api" class="view-project-btn" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        </div>
        <a href="https://github.com/joan-code6" class="more-projects-full" target="_blank" rel="noopener noreferrer">
          <div class="more-projects-inner">
            <h3>More Projects</h3>
            <p>Explore more of my work on GitHub — tools, experiments, and side projects.</p>
            <span class="view-project-btn">Visit GitHub</span>
          </div>
        </a>
      </div>`,
  },
};

for (const [route, page] of Object.entries(pages)) {
  const html = indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace('<div id="root"></div>', `<div id="root">${page.content}</div>`);

  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), html);
    console.log(`✓ Prerendered /`);
  } else {
    const dir = join(dist, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
    console.log(`✓ Prerendered ${route}`);
  }
}
