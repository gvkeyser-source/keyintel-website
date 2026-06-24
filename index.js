export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. SERVE THE LOGO FROM YOUR R2 BUCKET
    if (url.pathname === '/images/logo.png') {
      // Notice the 'env.' prefix before MY_BUCKET
      const object = await env.MY_BUCKET.get('images/logo.png');
      
      if (!object) {
        return new Response('Logo not found', { status: 404 });
      }

      return new Response(object.body, {
        headers: { 'content-type': 'image/png' }
      });
    }

    // 2. YOUR SITE WEB PAGE
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Key Intel | Transforming Scattered Data Into Commercial Performance</title>
  
  <style>
    /* ... (Keep all your CSS styling exactly the same here) ... */
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #e0e0e0; background: #1A1A1A; }
    section { padding: 100px 24px; }
    .container { max-width: 1120px; margin: 0 auto; }
    .hero { position: relative; background-image: linear-gradient(to bottom, #01013f, #090839, #0f0e32, #13122b, #171624, #181622, #191720, #1a171e, #1b1521, #1e1222, #210e23, #250923); color: #ffffff; min-height: 92vh; display: flex; align-items: center; justify-content: center; text-align: center; padding: 120px 24px; }
    .hero-logo { position: absolute; top: 32px; left: 40px; height: 50px; width: auto; }
    .hero-inner { max-width: 820px; }
    .hero h1 { font-size: 3.4rem; font-weight: 700; margin-bottom: 24px; line-height: 1.15; letter-spacing: -0.02em; }
    .hero p { font-size: 1.2rem; color: rgba(255, 255, 255, 0.78); margin-bottom: 44px; line-height: 1.7; max-width: 640px; margin-left: auto; margin-right: auto; }
    .btn-primary { display: inline-block; padding: 17px 44px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 1.05rem; color: #fff; background: #01013F; transition: transform 0.2s, box-shadow 0.2s; }
    .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 30px rgba(37, 9, 35, 0.45); }
    .problem { background: #1A1A1A; }
    .problem .container { max-width: 860px; text-align: center; }
    .section-label { display: inline-block; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.12em; text-transform: uppercase; color: rgba(255, 255, 255, 0.45); margin-bottom: 20px; }
    .problem h2 { font-size: 2.4rem; color: #ffffff; margin-bottom: 28px; line-height: 1.25; }
    .problem p { font-size: 1.1rem; color: rgba(255, 255, 255, 0.65); line-height: 1.8; margin-bottom: 20px; }
    .solution { background: #01013F; }
    .solution .container { max-width: 860px; text-align: center; }
    .solution h2 { font-size: 2.4rem; color: #ffffff; margin-bottom: 28px; line-height: 1.25; }
    .solution p { font-size: 1.1rem; color: rgba(255, 255, 255, 0.65); line-height: 1.8; margin-bottom: 20px; }
    .solution .highlight { color: #ffffff; font-weight: 600; }
    .capabilities { background: #1A1A1A; }
    .capabilities h2 { text-align: center; font-size: 2.4rem; color: #ffffff; margin-bottom: 64px; line-height: 1.25; }
    .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px; }
    .card { background: rgba(255, 255, 255, 0.04); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 12px; padding: 40px 32px; transition: transform 0.2s, border-color 0.2s; }
    .card:hover { transform: translateY(-4px); border-color: rgba(255, 255, 255, 0.18); }
    .card .icon { font-size: 1.6rem; margin-bottom: 20px; display: inline-block; color: #250923; }
    .card h3 { font-size: 1.2rem; color: #ffffff; margin-bottom: 14px; font-weight: 600; }
    .card p { color: rgba(255, 255, 255, 0.6); line-height: 1.7; font-size: 0.95rem; }
    .value { background: #1A1A1A; border-top: 10px solid #250923; margin: 10px; }
    .value .container { max-width: 860px; text-align: center; }
    .value h2 { font-size: 2.4rem; color: #ffffff; margin-bottom: 48px; line-height: 1.25; }
    .value-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 40px; text-align: center; }
    .value-item h3 { font-size: 1.15rem; color: #ffffff; margin-bottom: 12px; font-weight: 600; }
    .value-item p { color: rgba(255, 255, 255, 0.6); line-height: 1.7; font-size: 0.95rem; }
    .cta-section { background: #01013F; text-align: center; }
    .cta-section h2 { font-size: 2.4rem; color: #ffffff; margin-bottom: 20px; line-height: 1.25; }
    .cta-section p { color: rgba(255, 255, 255, 0.65); margin-bottom: 40px; line-height: 1.7; font-size: 1.1rem; max-width: 560px; margin-left: auto; margin-right: auto; }
    footer { background: #1A1A1A; border-top: 1px solid rgba(255, 255, 255, 0.06); text-align: center; padding: 48px 24px; }
    footer p { color: rgba(255, 255, 255, 0.35); font-size: 0.85rem; line-height: 1.7; }
    footer a { color: rgba(255, 255, 255, 0.55); text-decoration: none; }
    footer a:hover { color: rgba(255, 255, 255, 0.85); }
    @media (max-width: 600px) { .hero h1 { font-size: 2.1rem; } .hero-logo { top: 20px; left: 20px; height: 35px; } .problem h2, .solution h2, .capabilities h2, .value h2, .cta-section h2 { font-size: 1.8rem; } section { padding: 72px 20px; } .grid { grid-template-columns: 1fr; } }
  </style>
</head>
<body>

  <section class="hero">
    <img src="/images/logo.png" alt="Key Intel Logo" class="hero-logo">
    
    <div class="hero-inner">
      <h1>Do More With Your Data</h1>
      <p>Your business generates more data than ever before. Key Intel delivers the strategic intelligence you need to compete with certainty by transforming scattered data into commercial performance.</p>
      <a href="mailto:gvkeyser@gmail.com" class="btn-primary">Book a Consultation</a>
    </div>
  </section>

  <section class="problem">
    <div class="container">
      <span class="section-label">The Problem</span>
      <h2>Drowning in Data, Starving for Insight</h2>
      <p>Medium-sized businesses sit on vast reserves of operational, financial, and customer data. Yet that data remains trapped in separate systems and spreadsheets, forcing owners to make critical decisions based on gut feel rather than evidence.</p>
      <p>Hiring a full-time internal data team is too expensive. Traditional consultants only provide static reports that gather dust. The result is a persistent intelligence gap that costs you margin, momentum, and market position.</p>
    </div>
  </section>

  <section class="solution">
    <div class="container">
      <span class="section-label">Our Solution</span>
      <h2>A Fully Outsourced Business Performance Function</h2>
      <p>Key Intel provides a <span class="highlight">complete, outsourced business performance and advanced data analytics function</span> for medium-sized enterprises. We deliver corporate-level data infrastructure and strategic intelligence at a fraction of the cost of building an internal team.</p>
      <p>No recruitment overhead. No static slide decks. Just continuous, actionable intelligence that drives measurable commercial outcomes.</p>
    </div>
  </section>

  <section class="capabilities">
    <div class="container">
      <span class="section-label" style="display:block;text-align:center;">Core Capabilities</span>
      <h2>The Technical Edge That Delivers Results</h2>
      <div class="grid">
        <div class="card">
          <div class="icon">&#9881;</div>
          <h3>Automated Data Integration</h3>
          <p>We securely connect your disconnected systems, eliminating manual spreadsheet work and creating a single, reliable source of truth across your entire operation.</p>
        </div>
        <div class="card">
          <div class="icon">&#9635;</div>
          <h3>Live Performance Dashboards</h3>
          <p>Utilising advanced open-source technology such as Apache Superset, we build interactive, real-time visual reporting tools that keep you informed and in command.</p>
        </div>
        <div class="card">
          <div class="icon">&#9733;</div>
          <h3>Actionable Business Intelligence</h3>
          <p>We translate complex data into clear, commercial insights that fix operational inefficiencies and identify growth opportunities before your competitors do.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="value">
    <div class="container">
      <span class="section-label" style="display:block;text-align:center;">Why Key Intel</span>
      <h2>Enterprise Capability Without Enterprise Overhead</h2>
      <div class="value-grid">
        <div class="value-item">
          <h3>Enterprise Grade, SME Priced</h3>
          <p>Access corporate-level data infrastructure and strategic intelligence without the cost of a full-time internal team.</p>
        </div>
        <div class="value-item">
          <h3>Rapid, Secure Implementation</h3>
          <p>Cloud-native deployment means your intelligence infrastructure is operational quickly, with enterprise-grade security built in from day one.</p>
        </div>
        <div class="value-item">
          <h3>Evidence-Based Decisions</h3>
          <p>Move beyond gut feel. Make pricing, resource allocation, and risk management decisions backed by data, not assumption.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="cta-section">
    <div class="container">
      <h2>Ready to Modernise Your Decision Making?</h2>
      <p>Discover how Key Intel can transform your scattered data into a strategic commercial advantage. Book a confidential consultation today.</p>
      <a href="mailto:gvkeyser@keyintelapp.com" class="btn-primary">Book a Consultation</a>
    </div>
  </section>

  <footer>
    <p>&copy; 2026 Key Intel. All rights reserved.</p>
    <p style="margin-top:8px;"><a href="mailto:gvkeyser@keyintelapp.com">gvkeyser@keyintelapp.com</a></p>
  </footer>

</body>
</html>`;

    return new Response(html, {
      headers: { 'content-type': 'text/html;charset=UTF-8' }
    });
  }
};