(() => {
  'use strict';

  const header = document.querySelector('[data-header]');
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const nav = document.querySelector('[data-nav]');
  const copyEmailButton = document.querySelector('[data-copy-email]');
  const copyFeedback = document.querySelector('[data-copy-feedback]');
  const currentYear = document.querySelector('[data-current-year]');
  const scrollProgress = document.querySelector('[data-scroll-progress]');
  const backToTop = document.querySelector('[data-back-to-top]');
  const skillPanel = document.querySelector('[data-skill-panel]');
  const skillTabs = [...document.querySelectorAll('[data-skill-tab]')];
  const orbitalCanvas = document.querySelector('[data-orbital-canvas]');
  const orbitalContext = orbitalCanvas?.getContext('2d', { alpha: true, desynchronized: true }) || null;
  const lightbox = document.querySelector('[data-image-lightbox]');
  const lightboxImage = document.querySelector('[data-lightbox-image]');
  const lightboxCaption = document.querySelector('[data-lightbox-caption]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');

  let activeSkillCategory = 'web';
  let revealObserver;
  let anchorFrame = 0;
  let pageStateFrame = 0;
  let orbitalCanvasSize = 0;
  let orbitalTop = 0;
  let orbitalBottom = 0;
  let orbitalPalette = null;
  let lastLightboxTrigger = null;
  let lightboxInertElements = [];

  const mobileNavigationQuery = window.matchMedia('(max-width: 900px)');
  const focusableSelector = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

  const { escapeHTML } = window.PortfolioUtils;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  function cssVar(name, fallback) {
    return getComputedStyle(document.documentElement).getPropertyValue(name).trim() || fallback;
  }

  function refreshOrbitalPalette() {
    orbitalPalette = {
      blue: cssVar('--orbit-blue', '#78b7ff'),
      blueLine: cssVar('--orbit-blue-line', 'rgba(120, 183, 255, 0.29)'),
      blueArc: cssVar('--orbit-blue-arc', 'rgba(120, 183, 255, 0.8)'),
      blueSoft: cssVar('--orbit-blue-soft', 'rgba(120, 183, 255, 0.34)'),
      green: cssVar('--orbit-green', '#62d98b'),
      greenLine: cssVar('--orbit-green-line', 'rgba(98, 217, 139, 0.27)'),
      greenArc: cssVar('--orbit-green-arc', 'rgba(98, 217, 139, 0.74)'),
      greenSoft: cssVar('--orbit-green-soft', 'rgba(98, 217, 139, 0.31)'),
      amber: cssVar('--orbit-amber', '#f0c56f'),
      amberGlow: cssVar('--orbit-amber-glow', 'rgba(240, 197, 111, 0.9)'),
      purple: cssVar('--orbit-purple', '#b99cff'),
      purpleLine: cssVar('--orbit-purple-line', 'rgba(185, 156, 255, 0.27)'),
      purpleArc: cssVar('--orbit-purple-arc', 'rgba(185, 156, 255, 0.74)'),
      purpleSoft: cssVar('--orbit-purple-soft', 'rgba(207, 230, 255, 0.29)'),
      core: cssVar('--orbit-core', 'rgba(120, 183, 255, 0.42)'),
      coreStroke: cssVar('--orbit-core-stroke', 'rgba(207, 230, 255, 0.72)'),
      coreGlow: cssVar('--orbit-core-glow', 'rgba(120, 183, 255, 0.9)'),
      pale: cssVar('--orbit-pale', '#dcecff'),
      paleGlow: cssVar('--orbit-pale-glow', 'rgba(207, 230, 255, 0.95)'),
      satelliteStroke: cssVar('--orbit-satellite-stroke', 'rgba(255, 255, 255, 0.82)')
    };

    return orbitalPalette;
  }

  function updateThemeButton(theme) {
    if (!themeToggle) return;
    const nextLabelKey = theme === 'light' ? 'theme.toDark' : 'theme.toLight';
    const fallback = theme === 'light' ? 'Alternar para tema escuro' : 'Alternar para tema claro';
    const label = window.PortfolioI18n?.t(nextLabelKey, fallback) || fallback;
    themeToggle.setAttribute('aria-label', label);
    themeToggle.title = label;
  }

  function applyTheme(theme, { persist = true } = {}) {
    const normalizedTheme = theme === 'light' ? 'light' : 'dark';
    document.documentElement.dataset.theme = normalizedTheme;

    const themeColor = normalizedTheme === 'light' ? '#f5f0e8' : '#080d13';
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', themeColor);

    if (persist) {
      try { localStorage.setItem('portfolio-theme', normalizedTheme); } catch { /* Storage may be unavailable. */ }
    }

    updateThemeButton(normalizedTheme);
    refreshOrbitalPalette();
    drawOrbitalSystem(reduceMotion.matches ? 0 : window.scrollY);
  }

  function detectInitialTheme() {
    const savedTheme = document.documentElement.dataset.theme;
    return savedTheme === 'light' ? 'light' : 'dark';
  }

  function setupThemeToggle() {
    applyTheme(detectInitialTheme(), { persist: false });
    themeToggle?.addEventListener('click', () => {
      const currentTheme = document.documentElement.dataset.theme === 'light' ? 'light' : 'dark';
      applyTheme(currentTheme === 'light' ? 'dark' : 'light');
    });
  }

  function getHeaderHeight() {
    return header ? Math.round(header.getBoundingClientRect().height) : 0;
  }

  function getMaxScroll() {
    return Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  }

  function cancelAnchorScroll() {
    if (!anchorFrame) return;
    cancelAnimationFrame(anchorFrame);
    anchorFrame = 0;
  }

  function drawOrbitalSystem(scrollValue) {
    if (!orbitalCanvas || !orbitalContext || !orbitalCanvasSize) return;

    const context = orbitalContext;
    const size = orbitalCanvasSize;
    const center = size / 2;
    const baseLine = Math.max(1, size * 0.00135);
    const orbit = orbitalPalette || refreshOrbitalPalette();

    context.clearRect(0, 0, size, size);
    context.save();
    context.translate(center, center);

    const drawSatellite = (radius, angle, fill, glow, diameter) => {
      const radians = angle * Math.PI / 180;
      const x = Math.cos(radians) * radius;
      const y = Math.sin(radians) * radius;
      context.save();
      context.shadowColor = glow;
      context.shadowBlur = Math.max(7, size * 0.012);
      context.fillStyle = fill;
      context.strokeStyle = orbit.satelliteStroke;
      context.lineWidth = Math.max(0.8, size * 0.0009);
      context.beginPath();
      context.arc(x, y, diameter / 2, 0, Math.PI * 2);
      context.fill();
      context.stroke();
      context.restore();
    };

    const drawOrbit = ({ radius, rotation, line, arc, secondArc, satellites }) => {
      context.save();
      context.strokeStyle = line;
      context.lineWidth = baseLine;
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.stroke();

      context.rotate(rotation * Math.PI / 180);
      context.lineWidth = Math.max(1.35, size * 0.00175);
      context.lineCap = 'round';
      context.strokeStyle = arc;
      context.beginPath();
      context.arc(0, 0, radius, -1.28, 0.22);
      context.stroke();
      context.strokeStyle = secondArc;
      context.beginPath();
      context.arc(0, 0, radius, 1.95, 2.62);
      context.stroke();

      satellites.forEach((satellite) => {
        drawSatellite(radius, satellite.angle, satellite.fill, satellite.glow, satellite.size);
      });
      context.restore();
    };

    drawOrbit({
      radius: size * 0.472,
      rotation: scrollValue * 0.12,
      line: orbit.blueLine,
      arc: orbit.blueArc,
      secondArc: orbit.blueSoft,
      satellites: [
        { angle: -90, fill: orbit.blue, glow: orbit.blueArc, size: Math.max(8, size * 0.012) },
        { angle: 0, fill: orbit.amber, glow: orbit.amberGlow, size: Math.max(7, size * 0.0095) }
      ]
    });

    drawOrbit({
      radius: size * 0.322,
      rotation: scrollValue * -0.18,
      line: orbit.greenLine,
      arc: orbit.greenArc,
      secondArc: orbit.greenSoft,
      satellites: [
        { angle: 90, fill: orbit.green, glow: orbit.greenArc, size: Math.max(8, size * 0.011) },
        { angle: -45, fill: orbit.purple, glow: orbit.purpleArc, size: Math.max(7, size * 0.0085) }
      ]
    });

    drawOrbit({
      radius: size * 0.158,
      rotation: scrollValue * 0.26,
      line: orbit.purpleLine,
      arc: orbit.purpleArc,
      secondArc: orbit.purpleSoft,
      satellites: [
        { angle: 180, fill: orbit.pale, glow: orbit.paleGlow, size: Math.max(7, size * 0.009) }
      ]
    });

    context.save();
    context.shadowColor = orbit.coreGlow;
    context.shadowBlur = Math.max(10, size * 0.018);
    context.fillStyle = orbit.core;
    context.strokeStyle = orbit.coreStroke;
    context.lineWidth = Math.max(1, size * 0.0012);
    context.beginPath();
    context.arc(0, 0, Math.max(6, size * 0.008), 0, Math.PI * 2);
    context.fill();
    context.stroke();
    context.restore();

    context.restore();
  }

  function resizeOrbitalCanvas() {
    if (!orbitalCanvas || !orbitalContext) return;
    const rect = orbitalCanvas.getBoundingClientRect();
    const cssSize = Math.max(rect.width, rect.height);
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
    const cap = window.innerWidth <= 680 ? 520 : window.innerWidth <= 1080 ? 720 : 940;
    const renderSize = Math.max(340, Math.min(Math.round(cssSize * pixelRatio), cap));

    if (orbitalCanvasSize !== renderSize) {
      orbitalCanvasSize = renderSize;
      orbitalCanvas.width = renderSize;
      orbitalCanvas.height = renderSize;
    }

    orbitalTop = orbitalCanvas.offsetTop;
    orbitalBottom = orbitalTop + rect.height;
    drawOrbitalSystem(reduceMotion.matches ? 0 : window.scrollY);
  }

  function updatePageState() {
    pageStateFrame = 0;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const maxScroll = getMaxScroll();
    const progress = maxScroll > 0 ? clamp(scrollTop / maxScroll, 0, 1) : 0;

    header?.classList.toggle('is-scrolled', scrollTop > 14);
    backToTop?.classList.toggle('is-visible', scrollTop > 620);
    if (scrollProgress) scrollProgress.style.setProperty('--scroll-progress', progress.toFixed(4));

    const orbitVisible = scrollTop + window.innerHeight >= orbitalTop - 120 && scrollTop <= orbitalBottom + 120;
    if (orbitVisible) drawOrbitalSystem(reduceMotion.matches ? 0 : scrollTop);
  }

  function schedulePageState() {
    if (pageStateFrame) return;
    pageStateFrame = requestAnimationFrame(updatePageState);
  }

  function animateScrollTo(targetTop, { onComplete } = {}) {
    const target = clamp(Math.round(targetTop), 0, getMaxScroll());
    cancelAnchorScroll();

    if (reduceMotion.matches) {
      window.scrollTo(0, target);
      onComplete?.();
      return;
    }

    const start = window.scrollY;
    const distance = target - start;
    if (Math.abs(distance) < 2) {
      onComplete?.();
      return;
    }

    const duration = clamp(420 + Math.abs(distance) * 0.075, 500, 900);
    const startedAt = performance.now();

    const easeInOutCubic = (value) => value < 0.5
      ? 4 * value * value * value
      : 1 - Math.pow(-2 * value + 2, 3) / 2;

    const step = (now) => {
      const progress = clamp((now - startedAt) / duration, 0, 1);
      window.scrollTo(0, start + distance * easeInOutCubic(progress));

      if (progress < 1) {
        anchorFrame = requestAnimationFrame(step);
      } else {
        anchorFrame = 0;
        onComplete?.();
      }
    };

    anchorFrame = requestAnimationFrame(step);
  }

  function setupScrollCancellation() {
    const cancelFromPointer = () => cancelAnchorScroll();
    window.addEventListener('wheel', cancelFromPointer, { passive: true });
    window.addEventListener('touchstart', cancelFromPointer, { passive: true });
    window.addEventListener('keydown', (event) => {
      const navigationKeys = ['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Home', 'End', ' '];
      const isTyping = event.target instanceof HTMLElement
        && ['INPUT', 'TEXTAREA', 'SELECT'].includes(event.target.tagName);
      if (!isTyping && navigationKeys.includes(event.key)) cancelAnchorScroll();
    });
  }

  function updateMenuLabel(isOpen) {
    if (!menuToggle) return;
    const fallback = isOpen ? 'Fechar menu' : 'Abrir menu';
    const label = isOpen
      ? window.PortfolioI18n?.t('menu.close', fallback)
      : window.PortfolioI18n?.t('menu.open', fallback);
    menuToggle.setAttribute('aria-label', label || fallback);
  }

  function updateMobileNavigationState() {
    if (!nav) return;
    const isMobile = mobileNavigationQuery.matches;
    const isOpen = nav.classList.contains('is-open');
    nav.inert = isMobile && !isOpen;
    if (isMobile && !isOpen) nav.setAttribute('aria-hidden', 'true');
    else nav.removeAttribute('aria-hidden');
  }

  function closeMobileMenu({ restoreFocus = false } = {}) {
    if (!nav || !menuToggle) return;
    const wasOpen = nav.classList.contains('is-open');
    nav.classList.remove('is-open');
    document.body.classList.remove('menu-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    updateMenuLabel(false);
    updateMobileNavigationState();
    if (restoreFocus && wasOpen) menuToggle.focus();
  }

  function setupMobileMenu() {
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', (event) => {
      const isOpen = !nav.classList.contains('is-open');
      nav.classList.toggle('is-open', isOpen);
      document.body.classList.toggle('menu-open', isOpen);
      menuToggle.setAttribute('aria-expanded', String(isOpen));
      updateMenuLabel(isOpen);
      updateThemeButton(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
      updateMobileNavigationState();
      if (isOpen && event.detail === 0) nav.querySelector('a')?.focus();
    });

    document.addEventListener('click', (event) => {
      if (!nav.classList.contains('is-open')) return;
      if (nav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMobileMenu();
    });

    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') closeMobileMenu({ restoreFocus: true });
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 900) closeMobileMenu();
      else updateMobileNavigationState();
    });

    updateMobileNavigationState();
  }

  function setupAnchorNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (event) => {
        const href = link.getAttribute('href');
        if (!href || href === '#') return;
        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();
        closeMobileMenu();
        const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getHeaderHeight());
        const shouldMoveFocus = link.classList.contains('skip-link');
        animateScrollTo(top, {
          onComplete: () => {
            if (shouldMoveFocus && target instanceof HTMLElement) target.focus({ preventScroll: true });
          }
        });

        try {
          const url = new URL(window.location.href);
          url.hash = href;
          history.replaceState(null, '', `${url.pathname}${url.search}${url.hash}`);
        } catch {
          /* History updates may be restricted when the file is opened directly. */
        }
      });
    });

    backToTop?.addEventListener('click', () => animateScrollTo(0));
  }

  async function copyText(value) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(value);
      return;
    }

    const textarea = document.createElement('textarea');
    textarea.value = value;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.left = '-9999px';
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand('copy');
    textarea.remove();
    if (!copied) throw new Error('Copy command failed');
  }

  async function copyEmail() {
    if (!copyEmailButton || !copyFeedback) return;
    const email = copyEmailButton.dataset.copyEmail || '';

    try {
      await copyText(email);
      copyFeedback.textContent = window.PortfolioI18n?.t('contact.copied', 'E-mail copiado para a área de transferência.') || '';
    } catch {
      const message = window.PortfolioI18n?.t('contact.copyError', 'Não consegui copiar automaticamente. E-mail: {email}') || '';
      copyFeedback.textContent = message.replace('{email}', email);
    }

    window.setTimeout(() => { copyFeedback.textContent = ''; }, 3600);
  }

  function setupCopyEmail() {
    copyEmailButton?.addEventListener('click', copyEmail);
  }

  function setupProjectRevealUpdates() {
    window.addEventListener('portfolio:projectsrendered', (event) => {
      const root = event.detail?.root;
      observeReveals(root instanceof Element ? root : document);
    });
  }

  function observeReveals(root = document) {
    const elements = root.querySelectorAll?.('.reveal:not(.is-visible)') || [];
    if (!elements.length) return;

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'));
      return;
    }

    if (!revealObserver) {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.08, rootMargin: '0px 0px -7% 0px' }
      );
    }

    elements.forEach((element) => revealObserver.observe(element));
  }

  function setupActiveNavigation() {
    const links = [...document.querySelectorAll('[data-nav-link]')];
    const sections = links.map((link) => document.querySelector(link.getAttribute('href'))).filter(Boolean);
    if (!links.length || !sections.length || !('IntersectionObserver' in window)) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries.filter((entry) => entry.isIntersecting);
        if (!visibleEntries.length) return;
        const current = visibleEntries.sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0].target;
        links.forEach((link) => {
          const active = link.getAttribute('href') === `#${current.id}`;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      },
      { rootMargin: '-24% 0px -56% 0px', threshold: [0.05, 0.2, 0.5] }
    );

    sections.forEach((section) => sectionObserver.observe(section));
  }

  function renderSkillPanel() {
    if (!skillPanel) return;
    const i18n = window.PortfolioI18n;
    const category = i18n?.t(`skills.categories.${activeSkillCategory}`);
    if (!category || typeof category !== 'object') return;

    const learningItems = new Set(category.learningItems || []);
    const examples = Array.isArray(category.examples) ? category.examples : [];
    const examplesMarkup = examples.length
      ? `<ul class="skill-examples">${examples.map((example) => `<li>${escapeHTML(example)}</li>`).join('')}</ul>`
      : '';

    const chips = (category.items || []).map((item) => {
      const isLearning = learningItems.has(item);
      const learningLabel = i18n?.t('skills.learning', 'Em estudo') || 'Em estudo';
      return `<span class="skill-chip${isLearning ? ' is-learning' : ''}">${escapeHTML(item)}${isLearning ? `<small>· ${escapeHTML(learningLabel)}</small>` : ''}</span>`;
    }).join('');

    skillPanel.innerHTML = `
      <div class="skill-panel-copy">
        <div class="panel-label"><span>${escapeHTML(i18n?.t('skills.panelLabel', 'Uso em projetos') || 'Uso em projetos')}</span><i></i></div>
        <h3>${escapeHTML(category.title)}</h3>
        <p>${escapeHTML(category.description)}</p>
        ${examplesMarkup}
      </div>
      <div class="skill-cloud">${chips}</div>
    `;
  }

  function activateSkillTab(category, { focus = false } = {}) {
    if (!skillTabs.some((tab) => tab.dataset.skillTab === category)) return;
    activeSkillCategory = category;
    skillTabs.forEach((tab) => {
      const active = tab.dataset.skillTab === category;
      tab.setAttribute('aria-selected', String(active));
      tab.tabIndex = active ? 0 : -1;
      if (active) {
        skillPanel?.setAttribute('aria-labelledby', tab.id);
        if (focus) tab.focus();
      }
    });
    renderSkillPanel();
  }

  function setupSkillsExplorer() {
    if (!skillTabs.length) return;

    skillTabs.forEach((tab, index) => {
      tab.addEventListener('click', () => activateSkillTab(tab.dataset.skillTab));
      tab.addEventListener('keydown', (event) => {
        if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();
        let targetIndex = index;
        if (event.key === 'ArrowLeft') targetIndex = (index - 1 + skillTabs.length) % skillTabs.length;
        if (event.key === 'ArrowRight') targetIndex = (index + 1) % skillTabs.length;
        if (event.key === 'Home') targetIndex = 0;
        if (event.key === 'End') targetIndex = skillTabs.length - 1;
        activateSkillTab(skillTabs[targetIndex].dataset.skillTab, { focus: true });
      });
    });

    activateSkillTab(activeSkillCategory);
  }

  function setupTiltCard() {
    const container = document.querySelector('[data-tilt-card]');
    if (!container || reduceMotion.matches || !finePointer.matches) return;

    container.addEventListener('pointermove', (event) => {
      const rect = container.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      const glareX = ((x + 0.5) * 100).toFixed(1);
      const glareY = ((y + 0.5) * 100).toFixed(1);
      container.classList.add('is-tilting');
      container.style.setProperty('--glare-x', `${glareX}%`);
      container.style.setProperty('--glare-y', `${glareY}%`);
      container.style.transform = `rotateX(${(-y * 5.4).toFixed(2)}deg) rotateY(${(x * 6.6).toFixed(2)}deg) translateY(-5px) scale(1.012)`;
      container.style.borderColor = cssVar('--tilt-border-active', 'rgba(120, 183, 255, 0.36)');
      container.style.boxShadow = cssVar('--tilt-shadow-active', '0 32px 86px rgba(0, 0, 0, 0.34), inset 0 1px 0 rgba(255, 255, 255, 0.055)');
    });

    container.addEventListener('pointerleave', () => {
      container.classList.remove('is-tilting');
      container.style.transform = '';
      container.style.borderColor = '';
      container.style.boxShadow = '';
      container.style.removeProperty('--glare-x');
      container.style.removeProperty('--glare-y');
    });
  }

  function setPageInert(isInert) {
    if (!lightbox) return;

    if (isInert) {
      lightboxInertElements = [...document.body.children]
        .filter((element) => element !== lightbox && element.tagName !== 'SCRIPT')
        .map((element) => ({ element, wasInert: element.inert }));
      lightboxInertElements.forEach(({ element }) => { element.inert = true; });
      return;
    }

    lightboxInertElements.forEach(({ element, wasInert }) => {
      if (element.isConnected) element.inert = wasInert;
    });
    lightboxInertElements = [];
  }

  function trapLightboxFocus(event) {
    if (!lightbox || lightbox.hidden || event.key !== 'Tab') return;
    const focusableElements = [...lightbox.querySelectorAll(focusableSelector)]
      .filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
    if (!focusableElements.length) {
      event.preventDefault();
      return;
    }

    const first = focusableElements[0];
    const last = focusableElements[focusableElements.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function closeLightbox({ restoreFocus = true } = {}) {
    if (!lightbox || lightbox.hidden) return;
    lightbox.hidden = true;
    lightbox.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('lightbox-open');
    setPageInert(false);
    if (lightboxImage) {
      lightboxImage.removeAttribute('src');
      lightboxImage.alt = '';
    }
    if (lightboxCaption) lightboxCaption.textContent = '';
    if (restoreFocus && lastLightboxTrigger?.isConnected) lastLightboxTrigger.focus();
    lastLightboxTrigger = null;
  }

  function setupImageLightbox() {
    if (!lightbox || !lightboxImage) return;

    document.addEventListener('click', (event) => {
      const trigger = event.target.closest('[data-project-image]');
      if (!trigger) return;
      lastLightboxTrigger = trigger;
      const imageSource = trigger.dataset.projectImage;
      if (!imageSource) return;
      lightboxImage.src = imageSource;
      const image = trigger.querySelector('img');
      lightboxImage.alt = image?.alt || '';
      if (lightboxCaption) lightboxCaption.textContent = trigger.dataset.projectCaption || '';
      lightbox.hidden = false;
      lightbox.setAttribute('aria-hidden', 'false');
      document.body.classList.add('lightbox-open');
      setPageInert(true);
      lightbox.querySelector('.lightbox-close')?.focus();
    });

    lightbox.querySelectorAll('[data-lightbox-close]').forEach((button) => {
      button.addEventListener('click', () => closeLightbox());
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
      else trapLightboxFocus(event);
    });
  }

  function setupLanguageUpdates() {
    window.addEventListener('portfolio:languagechange', () => {
      renderSkillPanel();
      const isOpen = menuToggle?.getAttribute('aria-expanded') === 'true';
      updateMenuLabel(isOpen);
      updateThemeButton(document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
    });
  }

  function setupMotionPreferenceUpdates() {
    reduceMotion.addEventListener?.('change', () => {
      cancelAnchorScroll();
      drawOrbitalSystem(reduceMotion.matches ? 0 : window.scrollY);
    });
  }


  if (currentYear) currentYear.textContent = new Date().getFullYear();
  setupThemeToggle();
  setupMobileMenu();
  setupAnchorNavigation();
  setupScrollCancellation();
  setupCopyEmail();
  setupActiveNavigation();
  setupSkillsExplorer();
  setupTiltCard();
  setupImageLightbox();
  setupProjectRevealUpdates();
  setupLanguageUpdates();
  setupMotionPreferenceUpdates();
  observeReveals(document);
  resizeOrbitalCanvas();
  updatePageState();

  window.addEventListener('scroll', schedulePageState, { passive: true });
  window.addEventListener('resize', () => {
    resizeOrbitalCanvas();
    schedulePageState();
  }, { passive: true });
})();
