/* ==========================================================================
   CASA IZAN · MANUAL DE MARCA · SCRIPTS
   ========================================================================== */

(() => {
  'use strict';

  /* -----------------------------------------------------------------------
     PRELOADER
     ----------------------------------------------------------------------- */
  window.addEventListener('load', () => {
    setTimeout(() => {
      document.getElementById('preloader').classList.add('hidden');
    }, 1400);
  });

  /* -----------------------------------------------------------------------
     SCROLL PROGRESS
     ----------------------------------------------------------------------- */
  const progressBar = document.getElementById('scrollProgress');
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = `${(window.scrollY / h) * 100}%`;
  });

  /* -----------------------------------------------------------------------
     NAV HIDE ON SCROLL
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
     SECTION DOTS ACTIVE STATE
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
    { threshold: 0.12, rootMargin: '0px 0px -50px 0px' }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

  /* -----------------------------------------------------------------------
     TOAST
     ----------------------------------------------------------------------- */
  const toast = document.getElementById('toast');
  const showToast = (msg) => {
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(showToast.timer);
    showToast.timer = setTimeout(() => toast.classList.remove('show'), 2000);
  };

  /* -----------------------------------------------------------------------
     CLICK-TO-COPY COLORS
     ----------------------------------------------------------------------- */
  document.querySelectorAll('.color-card').forEach(card => {
    card.addEventListener('click', () => {
      const hex = card.dataset.hex;
      navigator.clipboard.writeText(hex).then(() => {
        showToast(`${hex} copiado al portapapeles`);
      }).catch(() => showToast('Error al copiar'));
    });
  });

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

  /* -----------------------------------------------------------------------
     PDF DOWNLOAD (via browser print)
     ----------------------------------------------------------------------- */
  const pdfBtn = document.getElementById('downloadPdfBtn');
  if (pdfBtn) {
    pdfBtn.addEventListener('click', () => {
      showToast('Abriendo diálogo de impresión · Guarda como PDF');
      setTimeout(() => window.print(), 400);
    });
  }

  /* -----------------------------------------------------------------------
     TERMÓMETRO DE MARCA
     Analiza texto contra el vocabulario del brand book.
     ----------------------------------------------------------------------- */

  // Vocabulario extraído del brand-book.md
  const BRAND_WORDS = [
    'casa','familia','familias','vivir','vive','vivida','vivido','jugar','juego','juguetón',
    'aguantar','aguanta','aguantan','elegir','elegimos','durar','dura','duradera','divertido','divertida',
    'cotidiano','cotidiana','cercano','cercana','hogar','patio','cocina','cancha','cumpleaños',
    'regalo','calidad','criterio','calidez','barrio','bolivia','boliviano','boliviana','bolivianas',
    'abuela','mamá','papá','niños','niña','niño','real','reales','pelota','olla','peluche',
    'bicicleta','pasa','merienda','domingo','arroz','tú','nuestro','honest','honesta'
  ];

  const FORBIDDEN = [
    'premium','exclusivo','exclusiva','lujo','lujoso','oasis','journey','mindset',
    'transforma','transformar','transformación','experiencia única','experiencias únicas',
    'la mejor','el mejor','elevar','eleva','elevamos','wellness','bienestar','holístico',
    'holistico','ancestral','mágico','magico','sinergia','innovador','disrupción','disrupcion',
    'paradigma','excelencia','compromiso con','pequeñitos','sin fin','óptimo','optimo',
    'solución','solucion','usted','ustedes','señor','señora'
  ];

  // Palabras que empujan cada dimensión tonal
  const CALIDO = ['casa','familia','mamá','abuela','domingo','cocina','patio','hogar','arroz','merienda','cerca','acoge','querid'];
  const VIBRANTE = ['pelota','jugar','juego','risa','color','fiesta','cumpleaños','salta','corre','ruido','baila','alegre','divertido'];
  const CERCANO = ['tú','te','tu','vos','pasa','oye','mira','contigo','te ayudo','amiga','barrio','real','sin vueltas'];

  const normalize = (s) => s.toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[.,;:!?¿¡"'()\[\]]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const countHits = (text, list) => {
    const norm = normalize(text);
    const hits = new Set();
    list.forEach(w => {
      const nw = normalize(w);
      if (!nw) return;
      // word boundary approximation
      const re = new RegExp(`(^|\\s)${nw.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(\\s|$)`);
      if (re.test(` ${norm} `)) hits.add(w);
    });
    return Array.from(hits);
  };

  const termoInput = document.getElementById('termoInput');
  const termoScore = document.getElementById('termoScore');
  const termoVerdict = document.getElementById('termoVerdict');
  const gaugeArc = document.getElementById('gaugeArc');
  const metricYes = document.getElementById('metricYes');
  const metricNo = document.getElementById('metricNo');
  const tagsYes = document.getElementById('tagsYes');
  const tagsNo = document.getElementById('tagsNo');
  const chipCalido = document.getElementById('chipCalido');
  const chipVibrante = document.getElementById('chipVibrante');
  const chipCercano = document.getElementById('chipCercano');

  const GAUGE_LEN = 326.7; // 2πr, r=52

  const analyzeText = (text) => {
    if (!text.trim()) {
      termoScore.textContent = '—';
      termoVerdict.textContent = 'Escribe algo para ver el análisis.';
      termoVerdict.className = 'termo-verdict';
      gaugeArc.style.strokeDashoffset = GAUGE_LEN;
      gaugeArc.style.stroke = 'var(--rosa)';
      metricYes.style.width = '0%';
      metricNo.style.width = '0%';
      tagsYes.innerHTML = '';
      tagsNo.innerHTML = '';
      [chipCalido, chipVibrante, chipCercano].forEach(c => c.classList.remove('active'));
      return;
    }

    const wordCount = normalize(text).split(' ').filter(Boolean).length || 1;
    const yesHits = countHits(text, BRAND_WORDS);
    const noHits = countHits(text, FORBIDDEN);

    // Base score: +12 per brand word, -20 per forbidden word, baseline 50
    let score = 50 + yesHits.length * 12 - noHits.length * 20;
    score = Math.max(0, Math.min(100, score));

    // Tone dimensions
    const calidoActive = countHits(text, CALIDO).length > 0;
    const vibranteActive = countHits(text, VIBRANTE).length > 0;
    // Cercano: "tú" language heuristic — check for tú/te/tu/vos/imperatives
    const cercanoActive = /\b(tu|tú|te|vos|pasa|mira|oye)\b/i.test(text) && !/\busted(es)?\b/i.test(text);

    // Score bonus if all three dimensions present
    const dims = [calidoActive, vibranteActive, cercanoActive].filter(Boolean).length;
    if (noHits.length === 0 && dims === 3) score = Math.min(100, score + 10);

    // Update gauge
    const offset = GAUGE_LEN - (GAUGE_LEN * score / 100);
    gaugeArc.style.strokeDashoffset = offset;
    let color = 'var(--rosa)';
    if (score >= 75) color = '#3cc77a';
    else if (score >= 50) color = 'var(--sol)';
    else if (score >= 25) color = 'var(--rosa)';
    else color = '#b91c3c';
    gaugeArc.style.stroke = color;

    termoScore.textContent = `${score}`;

    // Verdict
    let verdict = '';
    let verdictClass = '';
    if (noHits.length >= 2) {
      verdict = `Esto suena a folleto corporativo. Quita: ${noHits.slice(0,3).join(', ')}.`;
      verdictClass = 'bad';
    } else if (noHits.length === 1) {
      verdict = `Casi. La palabra "${noHits[0]}" no pasa el filtro Casa Izan.`;
      verdictClass = 'warn';
    } else if (score >= 80) {
      verdict = '¡Esto sí es Casa Izan! Cálido, concreto y sin jerga.';
      verdictClass = 'good';
    } else if (score >= 60) {
      verdict = 'Va bien. Suma más palabras concretas (pelota, olla, patio) para terminar de aterrizar.';
      verdictClass = 'ok';
    } else if (dims < 2) {
      verdict = 'Le falta sabor. Recuerda: cálido + vibrante + cercano — las tres, siempre.';
      verdictClass = 'ok';
    } else {
      verdict = 'Neutral. No está mal, pero tampoco suena a Casa Izan. Añade concreción y humor.';
      verdictClass = 'ok';
    }
    termoVerdict.textContent = verdict;
    termoVerdict.className = `termo-verdict ${verdictClass}`;

    // Metric bars (scaled to word count)
    const yesRatio = Math.min(100, (yesHits.length / Math.max(3, wordCount/4)) * 100);
    const noRatio = Math.min(100, (noHits.length / Math.max(3, wordCount/4)) * 100);
    metricYes.style.width = `${yesRatio}%`;
    metricNo.style.width = `${noRatio}%`;

    tagsYes.innerHTML = yesHits.length
      ? yesHits.map(w => `<span class="tag tag-yes">${w}</span>`).join('')
      : '<span class="tag-empty">—</span>';
    tagsNo.innerHTML = noHits.length
      ? noHits.map(w => `<span class="tag tag-no">${w}</span>`).join('')
      : '<span class="tag-empty">Ninguna · bien</span>';

    chipCalido.classList.toggle('active', calidoActive);
    chipVibrante.classList.toggle('active', vibranteActive);
    chipCercano.classList.toggle('active', cercanoActive);
  };

  if (termoInput) {
    termoInput.addEventListener('input', (e) => analyzeText(e.target.value));
    document.querySelectorAll('.termo-example').forEach(btn => {
      btn.addEventListener('click', () => {
        termoInput.value = btn.dataset.text;
        analyzeText(btn.dataset.text);
        termoInput.focus();
      });
    });
    analyzeText('');
  }

})();
