import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dist = join(__dirname, '..', 'dist');
const indexHtml = readFileSync(join(dist, 'index.html'), 'utf-8');

const pages = {
  '/': {
    title: 'Bennet Joan Wegener | Developer & Portfolio',
    description:
      'Bennet Joan Wegener (joan-code) is a German student developer building LANIS for Schulportal Hessen, Zen AI, web platforms, developer tools, and hardware projects.',
    canonical: 'https://joancode.dev/',
    content: `      <main class="home-container">
        <article class="portfolio-card">
          <div class="card-content">
            <section class="left-column">
              <div class="profile-pic">
                <img src="https://avatars.githubusercontent.com/u/172996447" alt="Bennet Joan Wegener" class="profile-img" />
              </div>
              <div class="name-section">
                <h1 class="name">Bennet Joan Wegener</h1>
                <p class="handle">joan-code · he/him</p>
                <p class="profile-summary">Student developer building useful full-stack systems, AI research projects, and hardware experiments.</p>
              </div>
              <div class="info-section">
                <div class="info-item"><span class="info-label">Location: </span><span class="info-value">Germany</span></div>
                <div class="info-item"><span class="info-label">Timezone: </span><span class="info-value">Europe/Berlin</span></div>
                <div class="info-item"><span class="info-label">School: </span><span class="info-value">Adolf-Reichwein-Gymnasium Heusenstamm</span></div>
              </div>
            </section>
            <section class="right-column">
              <div class="skills-section">
                <h2 class="section-title">Programming languages</h2>
                <div class="skills-grid">
                  <span class="skill-tag">Python</span><span class="skill-tag">Dart / Flutter</span>
                  <span class="skill-tag">React</span><span class="skill-tag">Java</span>
                  <span class="skill-tag">HTML & CSS</span>
                </div>
              </div>
              <nav class="home-actions" aria-label="Explore">
                <a class="portfolio-btn" href="/portfolio">View projects →</a>
                <a class="portfolio-btn media-btn" href="/media">Press & recognition →</a>
              </nav>
              <div class="social-links">
                <a href="https://github.com/joan-code6" class="social-button">GitHub</a>
                <a href="mailto:bennet-wegener@web.de" class="social-button">Email</a>
              </div>
            </section>
          </div>
        </article>
      </main>`,
  },
  '/portfolio': {
    title: 'Projects | Bennet Joan Wegener',
    description:
      'Selected projects by Bennet Joan Wegener: LANIS for Schulportal Hessen, award-winning Zen AI, OC Forms, Broccoli, smart garden irrigation, and qssh.',
    canonical: 'https://joancode.dev/portfolio',
    content: `      <main class="portfolio-container">
        <header class="portfolio-header">
          <nav class="page-nav"><a href="/">← Home</a><a href="/media">Press & recognition →</a></nav>
          <p class="page-eyebrow">Selected work · 2025–2026</p>
          <h1 class="portfolio-title">Projects I’ve built</h1>
          <p class="portfolio-subtitle">Selected for depth, usefulness, and real-world use—not just recency.</p>
        </header>
        <section class="projects-grid" aria-label="Featured projects">
          <article class="project-card"><div class="project-content">
            <p class="project-kicker">Full-stack platform · Active</p><h2 class="project-title">LANIS for Schulportal Hessen</h2>
            <p class="project-description">An unofficial, faster way to use Schulportal Hessen. I build and maintain the Python client, cached REST API, and responsive PWA for messages, courses, homework, files, calendars, substitution plans, and timetables.</p>
            <div class="project-links"><a href="https://lanis.arg-server.de">Live app</a><a href="https://lanis-backend.joancode.dev/documentation">API docs</a><a href="https://github.com/joan-code6/lanis_api">API code</a><a href="https://github.com/joan-code6/lanis_ui">UI code</a></div>
          </div></article>
          <article class="project-card"><div class="project-content">
            <p class="project-kicker">Award-winning research project</p><h2 class="project-title">Zen AI</h2>
            <p class="project-description">A cross-platform personal AI assistant whose trigger-word memory retrieves only relevant notes. Zen AI won first place regionally, second place in Mathematics/Computer Science, and the University of Kassel Informatics special prize at Jugend forscht junior Hessen 2026.</p>
            <div class="project-links"><a href="https://zen.arg-server.de">Live web app</a><a href="https://joancode.dev/zen_ai/">Project & benchmark</a><a href="https://github.com/joan-code6/zen_ai_public">Public code</a></div>
          </div></article>
          <article class="project-card"><div class="project-content">
            <p class="project-kicker">Production workflow · Active</p><h2 class="project-title">OC Forms</h2>
            <p class="project-description">The application and review system for OutCraft Minecraft events, with Discord OAuth, autosave, moderator scoring, conflict resolution, audit logs, roles, analytics, and whitelist export. Built for a community of 11,000 members, OC Forms has handled more than 2,500 individual applications.</p>
            <div class="project-links"><a href="https://apply.outcraft.net">Live site</a><a href="https://github.com/joan-code6/oc-forms">Source code</a></div>
          </div></article>
          <article class="project-card"><div class="project-content">
            <p class="project-kicker">Team hackathon build · Berlin 2026</p><h2 class="project-title">Broccoli</h2>
            <p class="project-description">A competitive multiplayer virtual-pet game built with my team at Hack Club’s Horizons Europa hackathon. NFC chips feed and care for two on-screen broccoli pets through a Pico reader, Flask backend, React display, and Flutter app.</p>
            <div class="project-links"><a href="https://user-cdn.hackclub-assets.com/019f9dc0-2213-7ab4-9a04-f0c7d4e0ba9f/broccoli.mp4">Watch demo</a><a href="https://github.com/joan-code6/broccoli">Source code</a></div>
          </div></article>
          <article class="project-card"><div class="project-content">
            <p class="project-kicker">Hardware + software · Running at home</p><h2 class="project-title">Smart Garden Irrigation</h2>
            <p class="project-description">A real five-zone garden watering system using an ESP32-C3, Raspberry Pi, MQTT, FastAPI, weather-aware schedules, history, Discord commands, and Google Home.</p>
            <div class="project-links"><a href="https://garten-bewaesserung.joancode.dev">Live dashboard</a><a href="https://github.com/joan-code6/garten-bewaesserung">Source code</a></div>
          </div></article>
        </section>
        <section class="utility-project"><div class="utility-copy">
          <p class="project-kicker">Everyday utility · stable</p><h2>qssh</h2>
          <p>A Python CLI I still rely on: save an SSH session once, then connect by name with one command. It supports password and key-based authentication.</p>
          <div class="project-links"><a href="https://pypi.org/project/qssh/">Install from PyPI</a><a href="https://github.com/joan-code6/qssh">Source code</a></div>
        </div></section>
      </main>`,
  },
  '/media': {
    title: 'Press & Recognition | Bennet Joan Wegener',
    description:
      'Press coverage and official records about Bennet Joan Wegener, Zen AI, Bloom Assist, and his Jugend forscht awards in 2025 and 2026.',
    canonical: 'https://joancode.dev/media',
    content: `      <main class="media-container">
        <header class="media-header">
          <nav class="page-nav"><a href="/">← Home</a><a href="/portfolio">Projects →</a></nav>
          <p class="media-eyebrow">Press archive · 2025–2026</p>
          <h1>Press & recognition</h1>
          <p class="media-intro">Independent reporting, school coverage, and official competition records about my Jugend forscht projects and awards.</p>
        </header>
        <section class="coverage-list" aria-label="Press articles and official records">
          <article class="coverage-item"><div class="coverage-copy"><p>Frankfurter Rundschau · 13 February 2026</p><h2>Junge Forschende in Rhein-Main: Schlauer, als Trump erlaubt</h2><p>The FR reports from Jugend forscht at the Senckenberg Museum, photographs Bennet presenting Zen AI, and explains its selective memory.</p><a href="https://www.fr.de/frankfurt/junge-forschende-in-rhein-main-schlauer-als-trump-erlaubt-94169199.html">Read article</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>Adolf-Reichwein-Gymnasium · 23 February 2026</p><h2>Rekordteilnahme bei Jugend forscht</h2><p>The school describes Zen AI and Bennet’s regional first-place finish in Mathematics/Computer Science.</p><a href="https://arg-heusenstamm.de/news/entry/107-rekordteilnahme-bei-jugend-forscht/">Read article</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>University of Kassel · March 2026</p><h2>Jugend forscht junior Hessen 2026 — Zen AI</h2><p>The official state program lists Bennet Joan Wegener and publishes the Zen AI project abstract.</p><a href="https://www.uni-kassel.de/uni/files/Aktuelles/Jugend_forscht_junior/2026/Broschuere_jugend-forscht_2026-1.pdf#page=41">Open program</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>Kreis Offenbach · April 2026</p><h2>Schule – In & Out, issue 24</h2><p>The regional magazine records Zen AI’s second place at the Hessian final and the Informatics special prize.</p><a href="https://www.kreis-offenbach.de/PDF/Schule_In_Out_Ausgabe_24_April_2026_nicht_barrierefrei.PDF?Ext=PDF&amp;ObjID=2491&amp;ObjLa=1&amp;ObjSvrID=4013&amp;WTR=1">Open issue</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>Adolf-Reichwein-Gymnasium · 2 April 2025</p><h2>Landesentscheid bei Jugend forscht</h2><p>The school reports third place in Mathematics/Computer Science for Bloom Assist and two additional special prizes.</p><a href="https://arg-heusenstamm.de/news/entry/79-landesentscheid-bei-jugend-forscht/">Read article</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>Adolf-Reichwein-Gymnasium · 9 March 2025</p><h2>Erfolgreich bei „jugend forscht“</h2><p>The regional report introduces Bloom Assist and its award as the best interdisciplinary project.</p><a href="https://arg-heusenstamm.de/news/entry/78-erfolgreich-bei-jugend-forscht/">Read article</a></div></article>
          <article class="coverage-item"><div class="coverage-copy"><p>Kreis Offenbach · April 2025</p><h2>Schule – In & Out, issue 20</h2><p>Kreis Offenbach identifies Bennet Wegener and Lev Popov as the developers of Bloom Assist.</p><a href="https://www.kreis-offenbach.de/loadDocument.phtml?Ext=PDF&amp;FID=4013.879.1#page=15">Open issue</a></div></article>
        </section>
      </main>`,
  },
};

for (const [route, page] of Object.entries(pages)) {
  const html = indexHtml
    .replace(/<title>[^<]*<\/title>/, `<title>${page.title}</title>`)
    .replace(/<meta name="description"[^>]*>/, `<meta name="description" content="${page.description}" />`)
    .replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${page.canonical}" />`)
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${page.title}" />`)
    .replace(/<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${page.description}" />`)
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${page.canonical}" />`)
    .replace(/<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${page.title}" />`)
    .replace(/<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${page.description}" />`)
    .replace('<div id="root"></div>', `<div id="root">${page.content}</div>`);

  if (route === '/') {
    writeFileSync(join(dist, 'index.html'), html);
  } else {
    const dir = join(dist, route);
    mkdirSync(dir, { recursive: true });
    writeFileSync(join(dir, 'index.html'), html);
  }

  console.log(`✓ Prerendered ${route}`);
}
