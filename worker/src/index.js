export default {
  async fetch(request, env, ctx) {
    const accept = request.headers.get('Accept') || '';
    const wantsMarkdown = accept.includes('text/markdown');

    const response = await fetch(request);

    const url = new URL(request.url);
    const path = url.pathname;

    const linkHeaders = [
      `</.well-known/api-catalog>; rel="api-catalog"; type="application/json"`,
      `</.well-known/description>; rel="describedby"; type="application/json"`,
      `</portfolio>; rel="service-doc"`,
      `</index.md>; rel="alternate"; type="text/markdown"`,
      `</portfolio.md>; rel="alternate"; type="text/markdown"`,
    ];

    if (!wantsMarkdown || path.endsWith('.md') || path.startsWith('/.well-known') || path.startsWith('/assets')) {
      const newHeaders = new Headers(response.headers);
      linkHeaders.forEach(l => newHeaders.append('Link', l));
      return new Response(response.body, {
        status: response.status,
        statusText: response.statusText,
        headers: newHeaders,
      });
    }

    const html = await response.text();
    const markdown = htmlToMarkdown(html, url);
    const tokens = countTokens(markdown);

    const newHeaders = new Headers(response.headers);
    newHeaders.set('Content-Type', 'text/markdown; charset=utf-8');
    newHeaders.set('x-markdown-tokens', String(tokens));
    linkHeaders.forEach(l => newHeaders.append('Link', l));

    return new Response(markdown, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    });
  },
};

function htmlToMarkdown(html, url) {
  let md = html;

  md = md.replace(/<title>([^<]*)<\/title>/gi, '# $1\n\n');
  md = md.replace(/<meta[^>]*name="description"[^>]*content="([^"]*)"[^>]*>/gi, '');
  md = md.replace(/<script[\s\S]*?<\/script>/gi, '');
  md = md.replace(/<style[\s\S]*?<\/style>/gi, '');
  md = md.replace(/<link[^>]*>/gi, '');
  md = md.replace(/<[\/]?(h1|h2|h3|h4|h5|h6)(?:\s[^>]*)?>/gi, (m, tag) => {
    const level = parseInt(tag[1]);
    return '\n' + '#'.repeat(level) + ' ';
  });
  md = md.replace(/<p(?:\s[^>]*)?>/gi, '\n\n');
  md = md.replace(/<\/p>/gi, '');
  md = md.replace(/<br\s*\/?>/gi, '\n');
  md = md.replace(/<strong>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b>(.*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i>(.*?)<\/i>/gi, '*$1*');
  md = md.replace(/<code>(.*?)<\/code>/gi, '`$1`');
  md = md.replace(/<a(?:\s[^>]*)?href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');
  md = md.replace(/<img(?:\s[^>]*)?src="([^"]*)"[^>]*>/gi, '![]($1)');
  md = md.replace(/<li(?:\s[^>]*)?>/gi, '- ');
  md = md.replace(/<\/li>/gi, '\n');
  md = md.replace(/<ul[^>]*>/gi, '\n');
  md = md.replace(/<\/ul>/gi, '');
  md = md.replace(/<ol[^>]*>/gi, '\n');
  md = md.replace(/<\/ol>/gi, '');
  md = md.replace(/<div[^>]*>/gi, '');
  md = md.replace(/<\/div>/gi, '\n');
  md = md.replace(/<span[^>]*>/gi, '');
  md = md.replace(/<\/span>/gi, '');
  md = md.replace(/<[^>]+>/g, '');
  md = md.replace(/&amp;/g, '&');
  md = md.replace(/&lt;/g, '<');
  md = md.replace(/&gt;/g, '>');
  md = md.replace(/&quot;/g, '"');
  md = md.replace(/&#39;/g, "'");
  md = md.replace(/\n{3,}/g, '\n\n');
  md = md.replace(/[ \t]+$/gm, '');
  md = md.trim();

  return md || `# Bennet Joan Wegener\n\nDeveloper portfolio at ${url.origin}\n\nSee markdown versions:\n- [/index.md](${url.origin}/index.md)\n- [/portfolio.md](${url.origin}/portfolio.md)`;
}

function countTokens(text) {
  return text.split(/\s+/).filter(Boolean).length;
}
