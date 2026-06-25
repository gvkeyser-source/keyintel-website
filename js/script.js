/**
 * KeyIntel — Core Scripts
 * Canvas particle system · Nav effects · Scroll reveals
 */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollReveal();
  initSmoothScroll();
  initFooterYear();

  if (document.getElementById('hero-canvas')) {
    initHeroCanvas();
  }
});

/* ── Navigation ────────────────────────────────────────────────────────────── */
function initNav() {
  const inner = document.querySelector('.nav-inner');
  if (!inner) return;

  // Scroll class
  window.addEventListener('scroll', () => {
    inner.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Active link
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

/* ── Hero Canvas — flowing data stream particle system ─────────────────────── */
function initHeroCanvas() {
  const canvas = document.getElementById('hero-canvas');
  const ctx = canvas.getContext('2d');

  let W, H, particles = [], connections = [], frame = 0;

  const PARTICLE_COUNT = 90;
  const MAX_DIST = 140;
  const ACCENT = [59, 130, 246];
  const PLUM   = [150, 60, 180];
  const NAVY   = [80, 100, 220];

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(true); }

    reset(initial = false) {
      this.x   = Math.random() * W;
      this.y   = initial ? Math.random() * H : (Math.random() < 0.5 ? -10 : H + 10);
      this.vx  = (Math.random() - 0.5) * 0.45;
      this.vy  = (Math.random() - 0.5) * 0.45;
      this.r   = Math.random() * 1.8 + 0.6;
      this.life = 1;
      // Each particle picks a colour family
      const t  = Math.random();
      if (t < 0.5)       this.col = ACCENT;
      else if (t < 0.75) this.col = PLUM;
      else               this.col = NAVY;
      this.alpha = Math.random() * 0.6 + 0.3;
      // Subtle pulse
      this.pulseSpeed = Math.random() * 0.02 + 0.005;
      this.pulseOffset = Math.random() * Math.PI * 2;
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      // Wrap
      if (this.x < -20) this.x = W + 20;
      if (this.x > W+20) this.x = -20;
      if (this.y < -20) this.y = H + 20;
      if (this.y > H+20) this.y = -20;
    }

    draw(t) {
      const pulse = Math.sin(t * this.pulseSpeed + this.pulseOffset) * 0.25 + 0.75;
      const [r,g,b] = this.col;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.r * pulse, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${r},${g},${b},${this.alpha * pulse})`;
      ctx.fill();
    }
  }

  function init() {
    particles = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push(new Particle());
    }
  }

  function drawConnections(t) {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const d  = Math.sqrt(dx*dx + dy*dy);
        if (d < MAX_DIST) {
          const str = 1 - d / MAX_DIST;
          // Blend colour between the two particles
          const [r1,g1,b1] = particles[i].col;
          const [r2,g2,b2] = particles[j].col;
          const r = Math.round((r1+r2)/2);
          const g = Math.round((g1+g2)/2);
          const b = Math.round((b1+b2)/2);
          // Animate a travelling highlight along the line
          const flow = (Math.sin(t * 0.012 + i * 0.3 + j * 0.2) + 1) / 2;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${str * 0.28})`;
          ctx.lineWidth = str * 1.2;
          ctx.stroke();

          // Travelling dot on the line
          if (str > 0.55 && Math.random() < 0.003) {
            const mx = particles[i].x + (particles[j].x - particles[i].x) * flow;
            const my = particles[i].y + (particles[j].y - particles[i].y) * flow;
            ctx.beginPath();
            ctx.arc(mx, my, 2, 0, Math.PI*2);
            ctx.fillStyle = `rgba(${r},${g},${b},0.85)`;
            ctx.fill();
          }
        }
      }
    }
  }

  // Deterministic travelling pulses along random node pairs
  const PULSES = Array.from({length: 8}, (_, i) => ({
    i: 0, j: 0, t: i / 8, speed: 0.004 + Math.random() * 0.003
  }));

  function drawPulses() {
    PULSES.forEach(p => {
      p.t += p.speed;
      if (p.t >= 1) {
        p.t = 0;
        p.i = Math.floor(Math.random() * particles.length);
        p.j = Math.floor(Math.random() * particles.length);
      }
      const a = particles[p.i], b = particles[p.j];
      const dx = b.x - a.x, dy = b.y - a.y;
      const d  = Math.sqrt(dx*dx + dy*dy);
      if (d > MAX_DIST) return;
      const px = a.x + dx * p.t;
      const py = a.y + dy * p.t;
      // Glow
      const grd = ctx.createRadialGradient(px, py, 0, px, py, 6);
      grd.addColorStop(0, 'rgba(59,130,246,0.9)');
      grd.addColorStop(1, 'rgba(59,130,246,0)');
      ctx.beginPath();
      ctx.arc(px, py, 6, 0, Math.PI*2);
      ctx.fillStyle = grd;
      ctx.fill();
    });
  }

  function tick() {
    frame++;
    ctx.clearRect(0, 0, W, H);

    drawConnections(frame);
    particles.forEach(p => { p.update(); p.draw(frame); });
    drawPulses();

    requestAnimationFrame(tick);
  }

  const ro = new ResizeObserver(() => { resize(); init(); });
  ro.observe(canvas);
  resize();
  init();
  tick();
}

/* ── Scroll Reveal ─────────────────────────────────────────────────────────── */
function initScrollReveal() {
  const els = document.querySelectorAll('.reveal');
  if (!els.length) return;

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        obs.unobserve(e.target);
      }
    });
  }, { rootMargin: '0px 0px -60px 0px', threshold: 0.06 });

  els.forEach(el => obs.observe(el));
}

/* ── Smooth Scroll ─────────────────────────────────────────────────────────── */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

/* ── Footer year ─────────────────────────────────────────────────────────── */
function initFooterYear() {
  const el = document.querySelector('.footer-year');
  if (el) el.textContent = new Date().getFullYear();
}
