import { Helmet } from 'react-helmet-async';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, Newspaper } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './ContentPage.css';
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
    date: 'March 2026',
    machineDate: '2026-03-20',
    source: 'University of Kassel',
    sourceKind: 'Official competition program',
    title: 'Zen AI in the Jugend forscht junior Hessen 2026 program',
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
    date: '20 August 2024',
    machineDate: '2024-08-20',
    source: 'Offenbach-Post',
    sourceKind: 'Local newspaper',
    title: 'Kinder- und Jugendparlament wird in Heusenstamm gegründet',
    summary:
      'The Offenbach-Post explains how Heusenstamm’s first elected youth parliament was created, how its members are chosen, and which rights they have in local politics.',
    url: 'https://www.op-online.de/region/heusenstamm/kinder-und-jugendparlament-wird-in-heusenstamm-gegruendet-93250702.html',
    format: 'article',
  },
  {
    date: 'October 2024',
    machineDate: '2024-10-09',
    source: 'City of Heusenstamm',
    sourceKind: 'Municipal magazine',
    title: 'Heusenstamms Jüngste engagieren sich für ihre Stadt',
    summary:
      'The city’s municipal magazine documents the first KiJuPa’s formation and the role of its elected members in shaping local decisions.',
    url: 'https://www.heusenstamm.de/Portals/0/Resources/6490/Downloads/Bg-Magazin-10-2024-final-web.pdf#page=5',
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
  name: 'Press and recognition for Bennet Joan Wegener',
  url: 'https://joancode.dev/media',
  description:
    'Press articles, official records, and civic engagement connected to Bennet Joan Wegener, Zen AI, Bloom Assist, Jugend forscht, and KiJuPa Heusenstamm.',
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
  const reduceMotion = useReducedMotion();

  return (
    <>
      <Helmet>
        <title>Press &amp; Recognition | Bennet Joan Wegener</title>
        <meta
          name="description"
          content="Press coverage, official records, and civic engagement connected to Bennet Joan Wegener, Zen AI, Jugend forscht, and KiJuPa Heusenstamm."
        />
        <meta
          name="keywords"
          content="Bennet Joan Wegener, Bennet Wegener, Zen AI, Jugend forscht, KiJuPa Heusenstamm, Kinder- und Jugendparlament, Adolf-Reichwein-Gymnasium, Bloom Assist, Frankfurter Rundschau"
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

      <main className="content-page">
        <div className="content-page-bg" aria-hidden="true" />
        <div className="content-shell">
          <motion.header
            className="content-header media-header"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <h1 className="content-title">Press &amp; recognition</h1>
            <div className="content-lead">
              <p className="content-intro">
                Independent reporting, school coverage, and official competition records about my
                Jugend forscht projects and awards.
              </p>
              <nav className="content-nav" aria-label="Page navigation">
                <button className="content-back-link" type="button" onClick={() => navigate('/')}>
                  Back home
                </button>
              </nav>
            </div>

            <div className="recognition-lines" aria-label="Selected awards">
              <p>
                <span className="recognition-year">2026</span>
                <strong>Zen AI</strong>
                <span className="recognition-detail">Regional winner · 2nd place Hessen · Informatics special prize</span>
              </p>
              <p>
                <span className="recognition-year">2025</span>
                <strong>Bloom Assist</strong>
                <span className="recognition-detail">3rd place Hessen · two special prizes</span>
              </p>
              <p>
                <span className="recognition-year">2024–26</span>
                <strong>KiJuPa</strong>
                <span className="recognition-detail">
                  Elected to Heusenstamm’s first Kinder- und Jugendparlament
                </span>
              </p>
            </div>
          </motion.header>

          <motion.a
            className="media-featured"
            href={featuredItem.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: reduceMotion ? 0 : 0.06, duration: 0.4 }}
            whileHover={reduceMotion ? undefined : { y: -3 }}
          >
            <div className="media-featured-heading">
              <span className="media-featured-label">
                <Newspaper size={15} aria-hidden="true" /> Featured coverage
              </span>
              <p className="media-meta">
                <span>{featuredItem.source}</span>
                <time dateTime={featuredItem.machineDate}>{featuredItem.date}</time>
              </p>
              <h2>{featuredItem.title}</h2>
            </div>
            <div className="media-featured-copy">
              <p>{featuredItem.summary}</p>
              <span>Read original article <ArrowUpRight size={16} aria-hidden="true" /></span>
            </div>
          </motion.a>

          <section className="media-archive" aria-labelledby="archive-title">
            <div className="media-section-heading">
              <h2 id="archive-title">Articles &amp; official records</h2>
            </div>

            <div className="media-grid">
              {archiveItems.map((item, index) => (
                <motion.a
                  key={item.url}
                  className="media-card"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: reduceMotion ? 0 : 0.1 + index * 0.04, duration: 0.35 }}
                  whileHover={reduceMotion ? undefined : { y: -3 }}
                >
                  <p className="media-meta">
                    <span>{item.source}</span>
                    <time dateTime={item.machineDate}>{item.date}</time>
                  </p>
                  <h3>{item.title}</h3>
                  <p className="media-card-summary">{item.summary}</p>
                  <div className="media-card-footer">
                    <span>{item.sourceKind}</span>
                    <strong>{item.format === 'pdf' ? 'Open document' : 'Read article'} <ArrowUpRight size={15} aria-hidden="true" /></strong>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default Media;
