import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowUpRight, FileText, Newspaper, Trophy } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './Media.css';

type MediaItem = {
  date: string;
  machineDate: string;
  source: string;
  sourceKind: string;
  title: string;
  summary: string;
  url: string;
  format: 'article' | 'pdf';
  featured?: boolean;
};

const mediaItems: MediaItem[] = [
  {
    date: '13 February 2026',
    machineDate: '2026-02-13',
    source: 'Frankfurter Rundschau',
    sourceKind: 'Newspaper feature',
    title: 'Junge Forschende in Rhein-Main: Schlauer, als Trump erlaubt',
    summary:
      'The FR reports from the Jugend forscht regional competition at Frankfurt’s Senckenberg Museum, photographs Bennet presenting Zen AI, and explains how its selective memory supplies an AI with only the information that matters.',
    url: 'https://www.fr.de/frankfurt/junge-forschende-in-rhein-main-schlauer-als-trump-erlaubt-94169199.html',
    format: 'article',
    featured: true,
  },
  {
    date: '23 February 2026',
    machineDate: '2026-02-23',
    source: 'Adolf-Reichwein-Gymnasium',
    sourceKind: 'School news',
    title: 'Rekordteilnahme bei Jugend forscht',
    summary:
      'The school’s report describes Zen AI and Bennet’s first-place finish in Mathematics/Computer Science at Jugend forscht junior Rhein-Main West, which qualified him for the Hessian state competition.',
    url: 'https://arg-heusenstamm.de/news/entry/107-rekordteilnahme-bei-jugend-forscht/',
    format: 'article',
  },
  {
    date: 'April 2026',
    machineDate: '2026-04-01',
    source: 'Kreis Offenbach',
    sourceKind: 'Regional school magazine',
    title: 'Schule – In & Out, issue 24',
    summary:
      'Kreis Offenbach records Bennet’s second place at the Hessian Jugend forscht junior state final with Zen AI and the Informatics special prize from the University of Kassel.',
    url: 'https://www.kreis-offenbach.de/PDF/Schule_In_Out_Ausgabe_24_April_2026_nicht_barrierefrei.PDF?Ext=PDF&ObjID=2491&ObjLa=1&ObjSvrID=4013&WTR=1',
    format: 'pdf',
  },
  {
    date: 'March 2026',
    machineDate: '2026-03-20',
    source: 'University of Kassel',
    sourceKind: 'Official competition program',
    title: 'Jugend forscht junior Hessen 2026 — Zen AI',
    summary:
      'The official state-competition program lists Bennet Joan Wegener and publishes the Zen AI abstract: a trigger-word note database designed to solve a “needle in a haystack” context problem.',
    url: 'https://www.uni-kassel.de/uni/files/Aktuelles/Jugend_forscht_junior/2026/Broschuere_jugend-forscht_2026-1.pdf#page=41',
    format: 'pdf',
  },
  {
    date: '2 April 2025',
    machineDate: '2025-04-02',
    source: 'Adolf-Reichwein-Gymnasium',
    sourceKind: 'School news',
    title: 'Landesentscheid bei Jugend forscht',
    summary:
      'The school reports that Bennet Wegener and Lev Popov took third place in Mathematics/Computer Science at the Hessian state final with Bloom Assist and received two additional special prizes.',
    url: 'https://arg-heusenstamm.de/news/entry/79-landesentscheid-bei-jugend-forscht/',
    format: 'article',
  },
  {
    date: '9 March 2025',
    machineDate: '2025-03-09',
    source: 'Adolf-Reichwein-Gymnasium',
    sourceKind: 'School news',
    title: 'Erfolgreich bei „jugend forscht“',
    summary:
      'The regional-competition report introduces Bloom Assist, the plant-care app and moisture sensor built by Bennet Wegener and Lev Popov, and notes its award as the best interdisciplinary project.',
    url: 'https://arg-heusenstamm.de/news/entry/78-erfolgreich-bei-jugend-forscht/',
    format: 'article',
  },
  {
    date: 'April 2025',
    machineDate: '2025-04-01',
    source: 'Kreis Offenbach',
    sourceKind: 'Regional school magazine',
    title: 'Schule – In & Out, issue 20',
    summary:
      'Kreis Offenbach covers the successful ARG teams at Jugend forscht and identifies Bennet Wegener and Lev Popov as the developers of Bloom Assist.',
    url: 'https://www.kreis-offenbach.de/loadDocument.phtml?Ext=PDF&FID=4013.879.1#page=15',
    format: 'pdf',
  },
];

const featuredItem = mediaItems.find((item) => item.featured)!;
const archiveItems = mediaItems
  .filter((item) => !item.featured)
  .sort((a, b) => b.machineDate.localeCompare(a.machineDate));

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Press and recognition — Bennet Joan Wegener',
  url: 'https://joancode.dev/media',
  description:
    'Press articles, school news, and official records about Bennet Joan Wegener, Zen AI, Bloom Assist, and Jugend forscht.',
  about: {
    '@type': 'Person',
    name: 'Bennet Joan Wegener',
    alternateName: ['Bennet Wegener', 'joan-code'],
    url: 'https://joancode.dev/',
  },
  hasPart: mediaItems.map((item) => ({
    '@type': item.format === 'article' ? 'NewsArticle' : 'Report',
    headline: item.title,
    datePublished: item.machineDate,
    url: item.url,
    publisher: {
      '@type': 'Organization',
      name: item.source,
    },
    about: {
      '@type': 'Person',
      name: 'Bennet Joan Wegener',
    },
  })),
};

const Media = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Press &amp; Recognition | Bennet Joan Wegener</title>
        <meta
          name="description"
          content="Press coverage and official records about Bennet Joan Wegener, Zen AI, Bloom Assist, and his Jugend forscht awards in 2025 and 2026."
        />
        <meta
          name="keywords"
          content="Bennet Joan Wegener, Bennet Wegener, Zen AI, Jugend forscht, Adolf-Reichwein-Gymnasium, Heusenstamm, Bloom Assist, Frankfurter Rundschau"
        />
        <link rel="canonical" href="https://joancode.dev/media" />
        <meta property="og:type" content="profile" />
        <meta property="og:title" content="Press & Recognition | Bennet Joan Wegener" />
        <meta
          property="og:description"
          content="Independent coverage and official records of Zen AI, Bloom Assist, and Jugend forscht awards."
        />
        <meta property="og:url" content="https://joancode.dev/media" />
        <meta name="twitter:title" content="Press & Recognition | Bennet Joan Wegener" />
        <meta
          name="twitter:description"
          content="Press coverage and official records of Bennet Joan Wegener’s Jugend forscht projects."
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <main className="media-container">
        <div className="media-ambient media-ambient-one" aria-hidden="true" />
        <div className="media-ambient media-ambient-two" aria-hidden="true" />

        <motion.header
          className="media-header"
          initial={{ opacity: 0, y: -24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <nav className="page-nav" aria-label="Page navigation">
            <button className="back-button" onClick={() => navigate('/')}>
              ← Home
            </button>
            <button className="back-button page-nav-secondary" onClick={() => navigate('/portfolio')}>
              Projects →
            </button>
          </nav>

          <p className="media-eyebrow">Press archive · 2025–2026</p>
          <h1>Press &amp; recognition</h1>
          <p className="media-intro">
            Independent reporting, school coverage, and official competition records about my
            Jugend forscht projects and awards.
          </p>

          <div className="recognition-strip" aria-label="Selected awards">
            <div>
              <Trophy size={18} aria-hidden="true" />
              <span><strong>Zen AI</strong> · Regional winner 2026</span>
            </div>
            <div>
              <Trophy size={18} aria-hidden="true" />
              <span><strong>Zen AI</strong> · 2nd place Hessen + Informatics special prize</span>
            </div>
            <div>
              <Trophy size={18} aria-hidden="true" />
              <span><strong>Bloom Assist</strong> · 3rd place Hessen 2025</span>
            </div>
          </div>
        </motion.header>

        <motion.a
          className="featured-coverage"
          href={featuredItem.url}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.08, duration: 0.5 }}
        >
          <div className="featured-label">
            <Newspaper size={17} aria-hidden="true" />
            Featured newspaper coverage
          </div>
          <div className="featured-grid">
            <div>
              <p className="coverage-source">{featuredItem.source}</p>
              <h2>{featuredItem.title}</h2>
            </div>
            <div className="featured-summary">
              <p>{featuredItem.summary}</p>
              <span className="read-source">
                Read the original article <ArrowUpRight size={17} aria-hidden="true" />
              </span>
            </div>
          </div>
          <time dateTime={featuredItem.machineDate}>{featuredItem.date}</time>
        </motion.a>

        <section className="coverage-archive" aria-labelledby="archive-title">
          <div className="archive-heading">
            <div>
              <p className="media-eyebrow">Source archive</p>
              <h2 id="archive-title">Articles &amp; official records</h2>
            </div>
            <p>Links open the original publisher or document.</p>
          </div>

          <div className="coverage-list">
            {archiveItems.map((item, index) => {
              const Icon = item.format === 'pdf' ? FileText : Newspaper;
              return (
                <motion.a
                  key={item.url}
                  className="coverage-item"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.14 + index * 0.055, duration: 0.4 }}
                >
                  <div className="coverage-icon" aria-hidden="true">
                    <Icon size={20} />
                  </div>
                  <div className="coverage-copy">
                    <div className="coverage-meta">
                      <span>{item.source}</span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={item.machineDate}>{item.date}</time>
                    </div>
                    <h3>{item.title}</h3>
                    <p>{item.summary}</p>
                    <span className="coverage-kind">{item.sourceKind}</span>
                  </div>
                  <ArrowUpRight className="coverage-arrow" size={20} aria-hidden="true" />
                </motion.a>
              );
            })}
          </div>
        </section>

        <footer className="media-footer">
          <p>Know of another article that belongs here?</p>
          <a href="mailto:bennet-wegener@web.de">Send me the link →</a>
        </footer>
      </main>
    </>
  );
};

export default Media;
