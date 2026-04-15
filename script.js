/* ==========================================================================
   CASA IZAN · BRAND BOOK · SCRIPTS
   ========================================================================== */

(() => {
  'use strict';

  /* -----------------------------------------------------------------------
     PRELOADER
     ----------------------------------------------------------------------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 1600);
  });

  /* -----------------------------------------------------------------------
     SCROLL PROGRESS BAR
     ----------------------------------------------------------------------- */
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const height = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrolled / height) * 100;
    progressBar.style.width = `${progress}%`;
  });

  /* -----------------------------------------------------------------------
     NAV HIDE ON SCROLL DOWN
     ----------------------------------------------------------------------- */
  const nav = document.getElementById('mainNav');
  let lastY = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 150 && y > lastY) nav.classList.add('hidden');
    else nav.classList.remove('hidden');
    lastY = y;
  });

  /* -----------------------------------------------------------------------
     SECTION DOTS (active state on scroll)
     ----------------------------------------------------------------------- */
  const dots = document.querySelectorAll('.section-dots a');
  const sections = Array.from(dots).map(dot =>
    document.querySelector(dot.getAttribute('href'))
  );

  const setActiveDot = () => {
    const scrollPos = window.scrollY + window.innerHeight / 3;
    let activeIdx = 0;
    sections.forEach((sec, i) => {
      if (sec && sec.offsetTop <= scrollPos) activeIdx = i;
    });
    dots.forEach((d, i) => d.classList.toggle('active', i === activeIdx));
  };
  window.addEventListener('scroll', setActiveDot);
  setActiveDot();

  /* -----------------------------------------------------------------------
     SCROLL REVEAL
     ----------------------------------------------------------------------- */
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* -----------------------------------------------------------------------
     CURSOR FOLLOWER BLOB (hero only)
     ----------------------------------------------------------------------- */
  const blob = document.getElementById('cursorBlob');
  const hero = document.getElementById('hero');
  if (blob && hero) {
    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    });

    const animateBlob = () => {
      currentX += (targetX - currentX) * 0.1;
      currentY += (targetY - currentY) * 0.1;
      blob.style.left = `${currentX}px`;
      blob.style.top = `${currentY}px`;
      requestAnimationFrame(animateBlob);
    };
    animateBlob();
  }

  /* -----------------------------------------------------------------------
     PLATFORM TABS
     ----------------------------------------------------------------------- */
  document.querySelectorAll('.platform-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.panel;
      document.querySelectorAll('.platform-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.preview-panel').forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      document.querySelector(`.preview-panel[data-panel="${target}"]`).classList.add('active');
    });
  });

  /* -----------------------------------------------------------------------
     CLICK-TO-COPY COLORS
     ----------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2000);
  };

  document.querySelectorAll('.color-card').forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.dataset.hex;
      navigator.clipboard.writeText(hex).then(() => {
        showToast(`${hex} copiado al portapapeles`);
      }).catch(() => {
        showToast('Error al copiar');
      });
    });
  });

  /* -----------------------------------------------------------------------
     CHECKLIST INTERACTIVE
     ----------------------------------------------------------------------- */
  const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
  const progressCount = document.getElementById('progressCount');
  const progressFill = document.getElementById('progressFill');

  const updateChecklist = () => {
    const checked = document.querySelectorAll('.check-item input:checked').length;
    const total = checkboxes.length;
    progressCount.textContent = checked;
    progressFill.style.width = `${(checked / total) * 100}%`;

    if (checked === total) {
      setTimeout(() => showToast('¡Listo para publicar! 🎯'), 300);
    }
  };

  checkboxes.forEach(cb => cb.addEventListener('change', updateChecklist));

  /* -----------------------------------------------------------------------
     SMOOTH ANCHOR SCROLLING
     ----------------------------------------------------------------------- */
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

})();
