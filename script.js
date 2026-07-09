// ==========================================
//  DATA
// ==========================================
const SKILLS_DATA = [
  { name: 'HTML5', pct: 90, icon: 'fab fa-html5', cat: 'frontend', tags: ['Semantic', 'Forms', 'SEO'] },
  { name: 'CSS3', pct: 88, icon: 'fab fa-css3-alt', cat: 'frontend', tags: ['Flexbox', 'Grid', 'Animations'] },
  { name: 'JavaScript', pct: 82, icon: 'fab fa-js-square', cat: 'frontend', tags: ['ES6+', 'DOM', 'Async'] },
  { name: 'React.js', pct: 78, icon: 'fab fa-react', cat: 'frontend', tags: ['Hooks', 'Components', 'State'] },
  { name: 'Responsive Design', pct: 90, icon: 'fas fa-mobile-alt', cat: 'frontend', tags: ['Mobile-First', 'Media Queries'] },
  { name: 'UI/UX Principles', pct: 72, icon: 'fas fa-paint-brush', cat: 'frontend', tags: ['Figma', 'Prototyping'] },
  { name: 'Node.js', pct: 58, icon: 'fab fa-node-js', cat: 'backend', tags: ['Runtime', 'Modules', 'NPM'] },
  { name: 'Express.js', pct: 55, icon: 'fas fa-server', cat: 'backend', tags: ['Routes', 'Middleware', 'REST'] },
  { name: 'MongoDB', pct: 52, icon: 'fas fa-database', cat: 'backend', tags: ['CRUD', 'Mongoose', 'NoSQL'] },
  { name: 'REST APIs', pct: 60, icon: 'fas fa-plug', cat: 'backend', tags: ['HTTP', 'JSON', 'Endpoints'] },
  { name: 'Git', pct: 80, icon: 'fab fa-git-alt', cat: 'tools', tags: ['Branching', 'Merge', 'Collaboration'] },
  { name: 'GitHub', pct: 82, icon: 'fab fa-github', cat: 'tools', tags: ['Repos', 'PRs', 'Actions'] },
  { name: 'VS Code', pct: 90, icon: 'fas fa-code', cat: 'tools', tags: ['Extensions', 'Shortcuts', 'Debug'] },
  { name: 'Problem Solving', pct: 85, icon: 'fas fa-brain', cat: 'soft', tags: ['Logic', 'Algorithms'] },
  { name: 'Communication', pct: 80, icon: 'fas fa-comments', cat: 'soft', tags: ['Team', 'Presentations'] },
  { name: 'Adaptability', pct: 85, icon: 'fas fa-sync-alt', cat: 'soft', tags: ['Fast Learner', 'Flexible'] }
];

const PROJECTS_DATA = [
  {
    id: 1, title: 'Image Gallery App', cat: 'frontend', featured: true,
    img: 'images/galler-logo.jpg',
    desc: 'A fully responsive image gallery with lightbox preview, category filtering, and auto-slideshow functionality.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Responsive grid layout with masonry effect',
      'Lightbox preview with navigation',
      'Category-based image filtering',
      'Auto slideshow with play/pause',
      'Smooth CSS animations & transitions',
      'Keyboard navigation support'
    ],
    challenges: 'The main challenge was implementing smooth filtering animations without layout shifts. Solved by using CSS transitions with absolute positioning during the filter transition, then switching back to flow layout.',
    live: 'https://code-alpha-image-gallery-nine-smoky.vercel.app/', github: 'https://github.com/bikilamoroda146-web/CodeAlpha_Image_Gallery.git'
  },
  {
    id: 2, title: 'Audio Music Player', cat: 'frontend', featured: false,
    img: 'images/music-logo.jpg',
    desc: 'A feature-rich audio music player with playlist management, progress control, and volume adjustment.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Web Audio API'],
    features: [
      'Play/pause with visual feedback',
      'Playlist with track switching',
      'Seekable progress bar',
      'Volume control with mute toggle',
      'Track time display & duration',
      'Repeat & shuffle modes'
    ],
    challenges: 'Handling audio events and synchronizing the progress bar with the current playback position required careful use of requestAnimationFrame and timeupdate events for smooth updates.',
    live: 'https://code-alpha-music-player1.vercel.app/', github: 'https://github.com/bikilamoroda146-web/CodeAlpha_Music-Player1.git'
  },
  {
    id: 3, title: 'Calculator App', cat: 'tool', featured: false,
    img: 'images/calc.jpg',
    desc: 'A clean and functional calculator supporting all basic arithmetic operations with keyboard input.',
    tech: ['HTML5', 'CSS3', 'JavaScript'],
    features: [
      'Basic arithmetic operations (+, -, \u00d7, \u00f7)',
      'Clean and intuitive UI design',
      'Full keyboard support',
      'Decimal number support',
      'Clear and delete functionality',
      'Error handling for invalid operations'
    ],
    challenges: 'Implementing proper order of operations and handling edge cases like division by zero, chained operations, and decimal precision required building a robust evaluation system.',
    live: 'https://bikilamoroda146-web.github.io/CodeAlpha_Calculator/', github: 'https://github.com/bikilamoroda146-web/CodeAlpha_Calculator.git'
  },
  {
    id: 4, title: 'Portfolio Website', cat: 'fullstack', featured: true,
    img: 'https://picsum.photos/seed/portfolio-proj-bm/800/500.jpg',
    desc: 'This very portfolio website \u2014 a premium, interactive personal brand site with advanced features and animations.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Canvas API'],
    features: [
      'Dark/light theme with color switcher',
      'Interactive particle background',
      'Command palette (Ctrl+K)',
      'Scroll-triggered animations',
      'Project filtering & modal details',
      'Custom cursor & loading screen'
    ],
    challenges: 'Building a complex single-file application with theme switching, particle systems, scroll animations, and a command palette \u2014 all while maintaining smooth 60fps performance.',
    live: 'https://codealpha-portfolio-plum.vercel.app/', github: 'https://github.com/bikilamoroda146-web/CodeAlpha_Portifolio.git'
  }
];

const CMD_ITEMS = [
  { label: 'Go to Home', icon: 'fas fa-home', action: function () { scrollTo('#hero'); } },
  { label: 'Go to About', icon: 'fas fa-user', action: function () { scrollTo('#about'); } },
  { label: 'Go to Skills', icon: 'fas fa-code', action: function () { scrollTo('#skills'); } },
  { label: 'Go to Projects', icon: 'fas fa-project-diagram', action: function () { scrollTo('#projects'); } },
  { label: 'Go to Services', icon: 'fas fa-briefcase', action: function () { scrollTo('#services'); } },
  { label: 'Go to Journey', icon: 'fas fa-road', action: function () { scrollTo('#timeline'); } },
  { label: 'Go to Testimonials', icon: 'fas fa-quote-right', action: function () { scrollTo('#testimonials'); } },
  { label: 'Go to Certifications', icon: 'fas fa-certificate', action: function () { scrollTo('#certifications'); } },
  { label: 'Go to Blog', icon: 'fas fa-blog', action: function () { scrollTo('#blog'); } },
  { label: 'Go to Contact', icon: 'fas fa-envelope', action: function () { scrollTo('#contact'); } },
  { label: 'Toggle Dark/Light Theme', icon: 'fas fa-adjust', action: toggleTheme },
  { label: 'Download CV', icon: 'fas fa-download', action: function () { showToast('CV download started!', 'info'); } },
  { label: 'Open GitHub', icon: 'fab fa-github', action: function () { window.open('https://github.com/bikilamoroda', '_blank'); } },
  { label: 'Open LinkedIn', icon: 'fab fa-linkedin', action: function () { window.open('https://linkedin.com/in/bikilamoroda', '_blank'); } }
];

// ==========================================
//  UTILITIES
// ==========================================
function scrollTo(sel) {
  var el = document.querySelector(sel);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

function showToast(msg, type) {
  type = type || 'info';
  var c = document.getElementById('toast-container');
  var t = document.createElement('div');
  t.className = 'toast ' + type;
  var iconName = type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle';
  t.innerHTML = '<i class="fas fa-' + iconName + '"></i> ' + msg;
  c.appendChild(t);
  setTimeout(function () {
    t.style.opacity = '0';
    t.style.transform = 'translateY(20px)';
    t.style.transition = 'all 0.3s';
    setTimeout(function () { t.remove(); }, 300);
  }, 3000);
}

// ==========================================
//  LOADER
// ==========================================
(function initLoader() {
  var fill = document.getElementById('loader-fill');
  var text = document.getElementById('loader-text');
  var msgs = ['Initializing...', 'Loading assets...', 'Building components...', 'Almost ready...', 'Welcome!'];
  var pct = 0;
  var iv = setInterval(function () {
    pct += Math.random() * 20 + 5;
    if (pct > 100) pct = 100;
    fill.style.width = pct + '%';
    text.textContent = msgs[Math.min(Math.floor(pct / 25), msgs.length - 1)];
    if (pct >= 100) {
      clearInterval(iv);
      setTimeout(function () { document.getElementById('loader').classList.add('hidden'); }, 400);
    }
  }, 300);
})();

// ==========================================
//  CUSTOM CURSOR
// ==========================================
(function initCursor() {
  var dot = document.getElementById('cursor-dot');
  var ring = document.getElementById('cursor-ring');
  var mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', function (e) {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left = mx - 3 + 'px';
    dot.style.top = my - 3 + 'px';
  });

  (function loop() {
    rx += (mx - rx) * 0.15;
    ry += (my - ry) * 0.15;
    ring.style.left = rx + 'px';
    ring.style.top = ry + 'px';
    requestAnimationFrame(loop);
  })();

  var hoverSelector = 'a, button, .card, .project-card, .service-card, input, textarea, .skill-tab, .project-filter, .accent-btn, .theme-mode-btn';

  document.addEventListener('mouseover', function (e) {
    if (e.target.closest(hoverSelector)) ring.classList.add('hover');
  });
  document.addEventListener('mouseout', function (e) {
    if (e.target.closest(hoverSelector)) ring.classList.remove('hover');
  });
})();

// ==========================================
//  SCROLL PROGRESS BAR
// ==========================================
window.addEventListener('scroll', function () {
  var h = document.documentElement.scrollHeight - window.innerHeight;
  var p = (window.scrollY / h) * 100;
  document.getElementById('scroll-progress').style.width = p + '%';
});

// ==========================================
//  NAVBAR
// ==========================================
(function initNav() {
  var nav = document.getElementById('navbar');
  var links = document.querySelectorAll('.nav-link');
  var sections = document.querySelectorAll('section[id]');
  var hamburger = document.getElementById('hamburger');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileLinks = document.querySelectorAll('.mobile-link');

  window.addEventListener('scroll', function () {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    var cur = '';
    sections.forEach(function (s) {
      if (window.scrollY >= s.offsetTop - 200) cur = s.id;
    });
    links.forEach(function (l) {
      l.classList.toggle('active', l.getAttribute('href') === '#' + cur);
    });
  });

  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(function (l) {
    l.addEventListener('click', function () {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
})();

// ==========================================
//  THEME TOGGLE & PANEL
// ==========================================
function toggleTheme() {
  var html = document.documentElement;
  var isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.querySelector('#theme-toggle i').className = isDark ? 'fas fa-moon' : 'fas fa-sun';
  document.querySelectorAll('.theme-mode-btn').forEach(function (b) {
    b.classList.toggle('active', b.dataset.themeSet === (isDark ? 'light' : 'dark'));
  });
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

(function initTheme() {
  var saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    document.querySelector('#theme-toggle i').className = saved === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    document.querySelectorAll('.theme-mode-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.themeSet === saved);
    });
  }
  var savedColor = localStorage.getItem('accent');
  if (savedColor) {
    document.documentElement.setAttribute('data-accent', savedColor);
    document.querySelectorAll('.accent-btn').forEach(function (b) {
      b.classList.toggle('active', b.dataset.color === savedColor);
    });
  }
})();

document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

document.getElementById('theme-panel-btn').addEventListener('click', function () {
  document.getElementById('theme-panel').classList.toggle('open');
});

document.getElementById('theme-panel-close').addEventListener('click', function () {
  document.getElementById('theme-panel').classList.remove('open');
});

document.querySelectorAll('.theme-mode-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-theme', btn.dataset.themeSet);
    document.querySelector('#theme-toggle i').className = btn.dataset.themeSet === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
    document.querySelectorAll('.theme-mode-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    localStorage.setItem('theme', btn.dataset.themeSet);
  });
});

document.querySelectorAll('.accent-btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    document.documentElement.setAttribute('data-accent', btn.dataset.color);
    document.querySelectorAll('.accent-btn').forEach(function (b) { b.classList.remove('active'); });
    btn.classList.add('active');
    localStorage.setItem('accent', btn.dataset.color);
    // Update favicon color dynamically
    var c = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    document.querySelector('link[rel="icon"]').href =
      'data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 100 100%27%3E' +
      '%3Crect width=%27100%27 height=%27100%27 rx=%2720%27 fill=%27' + encodeURIComponent(c) + '%27/%3E' +
      '%3Ctext x=%2750%27 y=%2768%27 font-family=%27Arial,sans-serif%27 font-size=%2752%27 font-weight=%27700%27 fill=%27white%27 text-anchor=%27middle%27%3EBM%3C/text%3E%3C/svg%3E';
  });
});

// ==========================================
//  TYPING EFFECT
// ==========================================
(function initTyping() {
  var el = document.getElementById('typed-text');
  var phrases = [
    'I build modern, responsive web applications.',
    'Aspiring Full-Stack Web Developer.',
    'React.js | Node.js | JavaScript.',
    'Turning ideas into interactive experiences.',
    'Clean code, beautiful design.'
  ];
  var pi = 0, ci = 0, deleting = false;

  function type() {
    var current = phrases[pi];
    if (deleting) {
      el.textContent = current.substring(0, ci--);
    } else {
      el.textContent = current.substring(0, ci++);
    }
    var delay = deleting ? 30 : 60;
    if (!deleting && ci > current.length) {
      delay = 2000;
      deleting = true;
    } else if (deleting && ci < 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
      ci = 0;
      delay = 500;
    }
    setTimeout(type, delay);
  }

  setTimeout(type, 1000);
})();

// ==========================================
//  PARTICLE BACKGROUND
// ==========================================
(function initParticles() {
  var canvas = document.getElementById('hero-canvas');
  var ctx = canvas.getContext('2d');
  var w, h, particles = [], mouse = { x: null, y: null };

  function resize() {
    w = canvas.width = canvas.parentElement.offsetWidth;
    h = canvas.height = canvas.parentElement.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  canvas.addEventListener('mousemove', function (e) {
    var r = canvas.getBoundingClientRect();
    mouse.x = e.clientX - r.left;
    mouse.y = e.clientY - r.top;
  });
  canvas.addEventListener('mouseleave', function () {
    mouse.x = null;
    mouse.y = null;
  });

  function getAccentRGB() {
    var s = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
    var m = s.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    return m ? parseInt(m[1], 16) + ',' + parseInt(m[2], 16) + ',' + parseInt(m[3], 16) : '239,68,68';
  }

  function Particle() {
    this.reset();
  }
  Particle.prototype.reset = function () {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.size = Math.random() * 2 + 0.5;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.1;
  };
  Particle.prototype.update = function () {
    this.x += this.speedX;
    this.y += this.speedY;
    if (mouse.x !== null) {
      var dx = this.x - mouse.x;
      var dy = this.y - mouse.y;
      var dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        this.x += dx * 0.02;
        this.y += dy * 0.02;
      }
    }
    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
  };
  Particle.prototype.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(' + getAccentRGB() + ',' + this.opacity + ')';
    ctx.fill();
  };

  for (var i = 0; i < 80; i++) particles.push(new Particle());

  function connectParticles() {
    for (var a = 0; a < particles.length; a++) {
      for (var b = a + 1; b < particles.length; b++) {
        var dx = particles[a].x - particles[b].x;
        var dy = particles[a].y - particles[b].y;
        var dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          ctx.beginPath();
          ctx.moveTo(particles[a].x, particles[a].y);
          ctx.lineTo(particles[b].x, particles[b].y);
          ctx.strokeStyle = 'rgba(' + getAccentRGB() + ',' + (0.06 * (1 - dist / 150)) + ')';
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
  }

  function animate() {
    ctx.clearRect(0, 0, w, h);
    for (var i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();
    }
    connectParticles();
    requestAnimationFrame(animate);
  }
  animate();
})();

// ==========================================
//  COUNTER ANIMATION
// ==========================================
function animateCounters() {
  document.querySelectorAll('[data-count]').forEach(function (el) {
    if (el.dataset.animated) return;
    var target = parseInt(el.dataset.count);
    var dur = 2000;
    var start = performance.now();

    function step(now) {
      var p = Math.min((now - start) / dur, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(eased * target) + '+';
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = target + '+';
        el.dataset.animated = '1';
      }
    }
    requestAnimationFrame(step);
  });
}

// ==========================================
//  SCROLL REVEAL
// ==========================================
(function initReveal() {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');

        // Trigger counters
        if (entry.target.closest('#about') || entry.target.closest('#hero')) {
          animateCounters();
        }

        // Trigger skill bars
        if (entry.target.closest('#skills')) {
          entry.target.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
            bar.style.width = bar.dataset.pct + '%';
          });
        }

        // Trigger circle charts
        entry.target.querySelectorAll('.skill-circle').forEach(function (c) {
          var pct = parseInt(c.dataset.pct);
          var circle = c.querySelector('.skill-circle-fill');
          var circumference = 2 * Math.PI * 42;
          circle.style.strokeDashoffset = circumference - (circumference * pct / 100);
        });
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
    observer.observe(el);
  });
})();

// ==========================================
//  SKILLS RENDERING
// ==========================================
(function initSkills() {
  var grid = document.getElementById('skills-grid');

  function render(cat) {
    cat = cat || 'all';
    let filtered;

if (cat === "frontend") {
    filtered = SKILLS_DATA.filter(skill => skill.cat === "frontend");
} else if (cat === "backend") {
    filtered = SKILLS_DATA.filter(skill => skill.cat === "backend");
} else if (cat === "tools") {
    filtered = SKILLS_DATA.filter(skill => skill.cat === "tools");
} else if (cat === "soft") {
    filtered = SKILLS_DATA.filter(skill => skill.cat === "soft");
} else {
    filtered = SKILLS_DATA;
}
    grid.innerHTML = filtered.map(function (s) {
      return '<div class="skill-card" data-cat="' + s.cat + '">' +
        '<div class="skill-card-header">' +
        '<div class="skill-icon"><i class="' + s.icon + '"></i></div>' +
        '<h4>' + s.name + '</h4>' +
        '<span class="pct">' + s.pct + '%</span>' +
        '</div>' +
        '<div class="skill-bar-track"><div class="skill-bar-fill" data-pct="' + s.pct + '"></div></div>' +
        '<div class="skill-card-tags">' + s.tags.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '</div>';
    }).join('');

    setTimeout(function () {
      grid.querySelectorAll('.skill-bar-fill').forEach(function (bar) {
        bar.style.width = bar.dataset.pct + '%';
      });
    }, 100);
  }

render('frontend');
  document.querySelectorAll('.skill-tab').forEach(function (tab) {
    tab.addEventListener('click', function () {
      document.querySelectorAll('.skill-tab').forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');
      render(tab.dataset.tab);
    });
  });
})();

// ==========================================
//  PROJECTS RENDERING
// ==========================================
(function initProjects() {
  var grid = document.getElementById('projects-grid');
  var currentFilter = 'all';
  var searchTerm = '';

  function render() {
    var filtered = PROJECTS_DATA;
    if (currentFilter !== 'all') {
      filtered = filtered.filter(function (p) { return p.cat === currentFilter; });
    }
    if (searchTerm) {
      var q = searchTerm;
      filtered = filtered.filter(function (p) {
        return p.title.toLowerCase().indexOf(q) !== -1 ||
          p.desc.toLowerCase().indexOf(q) !== -1 ||
          p.tech.some(function (t) { return t.toLowerCase().indexOf(q) !== -1; });
      });
    }

    grid.innerHTML = filtered.map(function (p) {
      return '<div class="project-card" data-id="' + p.id + '" style="cursor:pointer">' +
        '<div class="project-card-img" style="position:relative">' +
        (p.featured ? '<span class="project-featured-badge"><i class="fas fa-star"></i> Featured</span>' : '') +
        '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy">' +
        '<div class="project-card-overlay">' +
        '<a href="' + p.live + '" class="btn btn-primary" onclick="event.stopPropagation()"><i class="fas fa-external-link-alt"></i> Live</a>' +
        '<a href="' + p.github + '" class="btn btn-outline" onclick="event.stopPropagation()"><i class="fab fa-github"></i> Code</a>' +
        '</div></div>' +
        '<div class="project-card-body">' +
        '<h3>' + p.title + '</h3>' +
        '<p>' + p.desc + '</p>' +
        '<div class="project-tech">' + p.tech.map(function (t) { return '<span>' + t + '</span>'; }).join('') + '</div>' +
        '<ul class="project-features">' + p.features.slice(0, 3).map(function (f) { return '<li><i class="fas fa-check-circle"></i> ' + f + '</li>'; }).join('') + '</ul>' +
        '</div></div>';
    }).join('');

    grid.querySelectorAll('.project-card').forEach(function (card) {
      card.addEventListener('click', function () {
        openProjectModal(parseInt(card.dataset.id));
      });
    });
  }

  render();

  document.querySelectorAll('.project-filter').forEach(function (f) {
    f.addEventListener('click', function () {
      document.querySelectorAll('.project-filter').forEach(function (x) { x.classList.remove('active'); });
      f.classList.add('active');
      currentFilter = f.dataset.filter;
      render();
    });
  });

  document.getElementById('project-search').addEventListener('input', function (e) {
    searchTerm = e.target.value.toLowerCase().trim();
    render();
  });
})();

// ==========================================
//  PROJECT MODAL
// ==========================================
function openProjectModal(id) {
  var p = PROJECTS_DATA.find(function (x) { return x.id === id; });
  if (!p) return;

  document.getElementById('modal-img').src = p.img;
  document.getElementById('modal-img').alt = p.title;
  document.getElementById('modal-title').textContent = p.title;
  document.getElementById('modal-desc').textContent = p.desc;
  document.getElementById('modal-tech').innerHTML = p.tech.map(function (t) { return '<span>' + t + '</span>'; }).join('');
  document.getElementById('modal-features').querySelector('ul').innerHTML = p.features.map(function (f) {
    return '<li><i class="fas fa-check-circle"></i> ' + f + '</li>';
  }).join('');
  document.getElementById('modal-challenges').querySelector('p').textContent = p.challenges;
  document.getElementById('modal-actions').innerHTML =
    '<a href="' + p.live + '" class="btn btn-primary"><i class="fas fa-external-link-alt"></i> Live Demo</a>' +
    '<a href="' + p.github + '" class="btn btn-outline"><i class="fab fa-github"></i> View Code</a>';

  document.getElementById('project-modal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

document.getElementById('modal-close').addEventListener('click', closeModal);
document.getElementById('project-modal').addEventListener('click', function (e) {
  if (e.target === e.currentTarget) closeModal();
});

function closeModal() {
  document.getElementById('project-modal').classList.remove('open');
  document.body.style.overflow = '';
}

// ==========================================
//  TESTIMONIALS SLIDER
// ==========================================
(function initTestimonials() {
  var track = document.getElementById('testimonials-track');
  var cards = track.querySelectorAll('.testimonial-card');
  var dotsContainer = document.getElementById('test-dots');
  var cur = 0;

  cards.forEach(function (_, i) {
    var dot = document.createElement('span');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', function () { goTo(i); });
    dotsContainer.appendChild(dot);
  });

  function goTo(i) {
    cur = i;
    track.style.transform = 'translateX(-' + (cur * 100) + '%)';
    dotsContainer.querySelectorAll('span').forEach(function (d, idx) {
      d.classList.toggle('active', idx === cur);
    });
  }

  document.getElementById('test-prev').addEventListener('click', function () {
    goTo((cur - 1 + cards.length) % cards.length);
  });
  document.getElementById('test-next').addEventListener('click', function () {
    goTo((cur + 1) % cards.length);
  });

  // Touch swipe
  var sx = 0;
  track.addEventListener('touchstart', function (e) { sx = e.touches[0].clientX; });
  track.addEventListener('touchend', function (e) {
    var dx = e.changedTouches[0].clientX - sx;
    if (Math.abs(dx) > 50) {
      goTo(dx < 0 ? (cur + 1) % cards.length : (cur - 1 + cards.length) % cards.length);
    }
  });

  // Auto-play
  setInterval(function () { goTo((cur + 1) % cards.length); }, 6000);
})();

// ==========================================
//  3D TILT EFFECT ON CARDS
// ==========================================
(function initTilt() {
  var selector = '.card, .project-card, .service-card, .cert-card';
  document.querySelectorAll(selector).forEach(function (el) {
    el.addEventListener('mousemove', function (e) {
      var r = el.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5;
      var y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = 'perspective(800px) rotateY(' + (x * 5) + 'deg) rotateX(' + (-y * 5) + 'deg) translateY(-4px)';
    });
    el.addEventListener('mouseleave', function () {
      el.style.transform = '';
    });
  });
})();

// ==========================================
//  BACK TO TOP
// ==========================================
(function initBackToTop() {
  var btn = document.getElementById('back-to-top');
  window.addEventListener('scroll', function () {
    btn.classList.toggle('visible', window.scrollY > 500);
  });
  btn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

// ==========================================
//  COMMAND PALETTE
// ==========================================
(function initCmdPalette() {
  var palette = document.getElementById('cmd-palette');
  var input = document.getElementById('cmd-input');
  var results = document.getElementById('cmd-results');
  var activeIdx = 0;

  function open() {
    palette.classList.add('open');
    input.value = '';
    renderResults('');
    setTimeout(function () { input.focus(); }, 100);
    document.body.style.overflow = 'hidden';
  }

  function close() {
    palette.classList.remove('open');
    document.body.style.overflow = '';
  }

  function renderResults(q) {
    var filtered = CMD_ITEMS.filter(function (item) {
      return item.label.toLowerCase().indexOf(q.toLowerCase()) !== -1;
    });
    activeIdx = 0;

    if (filtered.length === 0) {
      results.innerHTML = '<div class="cmd-empty"><i class="fas fa-search" style="font-size:24px;display:block;margin-bottom:8px;opacity:0.3"></i>No results found</div>';
      return;
    }

    results.innerHTML = filtered.map(function (item, i) {
      return '<div class="cmd-result-item' + (i === 0 ? ' active' : '') + '" data-idx="' + i + '">' +
        '<i class="' + item.icon + '"></i><span>' + item.label + '</span></div>';
    }).join('');

    results.querySelectorAll('.cmd-result-item').forEach(function (el) {
      el.addEventListener('click', function () {
        var item = filtered[parseInt(el.dataset.idx)];
        item.action();
        close();
      });
      el.addEventListener('mouseenter', function () {
        results.querySelectorAll('.cmd-result-item').forEach(function (x) { x.classList.remove('active'); });
        el.classList.add('active');
        activeIdx = parseInt(el.dataset.idx);
      });
    });
  }

  input.addEventListener('input', function () { renderResults(input.value); });

  input.addEventListener('keydown', function (e) {
    var items = results.querySelectorAll('.cmd-result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      activeIdx = Math.min(activeIdx + 1, items.length - 1);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      activeIdx = Math.max(activeIdx - 1, 0);
    } else if (e.key === 'Enter' && items[activeIdx]) {
      items[activeIdx].click();
      return;
    } else if (e.key === 'Escape') {
      close();
      return;
    } else {
      return;
    }
    items.forEach(function (x, i) { x.classList.toggle('active', i === activeIdx); });
  });

  document.getElementById('cmd-btn').addEventListener('click', open);

  document.addEventListener('keydown', function (e) {
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      palette.classList.contains('open') ? close() : open();
    }
    if (e.key === 'Escape' && palette.classList.contains('open')) close();
  });

  palette.addEventListener('click', function (e) {
    if (e.target === palette) close();
  });
})();

// ==========================================
//  CONTACT FORM
// ==========================================
(function initContactForm() {

    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        let valid = true;

        form.querySelectorAll(".form-group").forEach(group => {
            group.classList.remove("error");
        });

        const name = document.getElementById("name");
        const email = document.getElementById("email");
        const subject = document.getElementById("subject");
        const message = document.getElementById("message");

        if (!name.value.trim()) {
            name.closest(".form-group").classList.add("error");
            valid = false;
        }

        if (!email.value.trim() ||
            !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {

            email.closest(".form-group").classList.add("error");
            valid = false;
        }

        if (!subject.value.trim()) {
            subject.closest(".form-group").classList.add("error");
            valid = false;
        }

        if (!message.value.trim()) {
            message.closest(".form-group").classList.add("error");
            valid = false;
        }

        if (!valid) {

            showToast("Please fill in all required fields.", "error");

            return;
        }

        const btn = form.querySelector("button");

        btn.disabled = true;
        btn.innerHTML =
        '<i class="fas fa-spinner fa-spin"></i> Sending...';

        emailjs.send(
            "service_0leb2ar",
            "template_etr96mx",
            {
                name: name.value,
                email: email.value,
                subject: subject.value,
                message: message.value
            }
        )

        .then(function () {

            showToast(
                "Message sent successfully!",
                "success"
            );

            form.reset();

        })

        .catch(function (error) {

            console.error(error);

            showToast(
                "Failed to send message.",
                "error"
            );

        })

        .finally(function () {

            btn.disabled = false;

            btn.innerHTML =
            '<i class="fas fa-paper-plane"></i> Send Message';

        });

    });

})();

// ==========================================
//  PARALLAX SHAPES
// ==========================================
(function initParallax() {
  var shapes = document.querySelectorAll('.p-shape');
  window.addEventListener('scroll', function () {
    var y = window.scrollY;
    shapes.forEach(function (s, i) {
      s.style.transform = 'translateY(' + (y * (0.02 + i * 0.015)) + 'px)';
    });
  });
})();

// ==========================================
//  KEYBOARD NAVIGATION (/ to open palette)
// ==========================================
document.addEventListener('keydown', function (e) {
  if (e.key === '/' && !e.ctrlKey && !e.metaKey &&
    document.activeElement.tagName !== 'INPUT' &&
    document.activeElement.tagName !== 'TEXTAREA') {
    e.preventDefault();
    document.getElementById('cmd-palette').classList.add('open');
    document.getElementById('cmd-input').focus();
    document.body.style.overflow = 'hidden';
  }
});

// ==========================================
//  LAZY LOADING IMAGES
// ==========================================
if ('IntersectionObserver' in window) {
  var imgObs = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.loading = 'eager';
        imgObs.unobserve(entry.target);
      }
    });
  }, { rootMargin: '200px' });

  document.querySelectorAll('img[loading="lazy"]').forEach(function (img) {
    imgObs.observe(img);
  });
}

// ==========================================
//  SMOOTH ANCHOR SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(function (a) {
  a.addEventListener('click', function (e) {
    var target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});