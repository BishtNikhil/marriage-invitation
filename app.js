/**
 * SHUBH VIVAH LUXURY MODERN PASTEL MARRIAGE CARD
 * Core Application Engine: 120Hz 3D Gate,
 * Apple-style Scroll Reveals, Ambient Petals
 */

/* ==========================================================================
   SECURITY & CONTENT PROTECTION GUARDIAN
   1. Blocks Right-Click Context Menu & Inspect Element
   2. Blocks F12, Ctrl+Shift+I/J/C, Ctrl+U (View Source), Ctrl+S
   3. Anti-Drag & Image Shielding
   4. Console Protection
   ========================================================================== */
(function setupRoyalSecurityGuardian() {
  'use strict';

  // 1. Elegant Security Notification Badge
  function showSecurityToast(message) {
    if (!document.body) return;
    let existingToast = document.getElementById('securityToast');
    if (!existingToast) {
      existingToast = document.createElement('div');
      existingToast.id = 'securityToast';
      existingToast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 50%;
        transform: translateX(-50%) translateY(20px);
        background: linear-gradient(135deg, rgba(30, 8, 15, 0.95), rgba(45, 12, 22, 0.95));
        color: #F8E6A8;
        padding: 12px 24px;
        border-radius: 999px;
        border: 1.5px solid #D4AF37;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5), 0 0 15px rgba(212,175,55,0.4);
        font-family: 'Outfit', sans-serif;
        font-size: 0.82rem;
        letter-spacing: 0.5px;
        z-index: 99999999;
        display: flex;
        align-items: center;
        gap: 8px;
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.3s ease, transform 0.3s ease;
      `;
      document.body.appendChild(existingToast);
    }
    existingToast.innerHTML = `<span>🔒</span> <strong>Shubh Vivah:</strong> ${message}`;
    existingToast.style.opacity = '1';
    existingToast.style.transform = 'translateX(-50%) translateY(0)';
    clearTimeout(existingToast._timer);
    existingToast._timer = setTimeout(() => {
      existingToast.style.opacity = '0';
      existingToast.style.transform = 'translateX(-50%) translateY(20px)';
    }, 2800);
  }

  // 2. Disable Right-Click Context Menu
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    showSecurityToast('Sacred Wedding Content is Digitally Protected');
    return false;
  }, { capture: true });

  // 3. Disable Developer Tools & Source Inspection Shortcuts
  window.addEventListener('keydown', (e) => {
    // F12 key
    if (e.keyCode === 123 || e.key === 'F12') {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('Inspection shortcut is locked');
      return false;
    }
    // Ctrl+Shift+I / Cmd+Option+I (Inspect)
    // Ctrl+Shift+J / Cmd+Option+J (Console)
    // Ctrl+Shift+C / Cmd+Option+C (Elements)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'I' || e.key === 'i' || e.key === 'J' || e.key === 'j' || e.key === 'C' || e.key === 'c')) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('Developer tools are locked');
      return false;
    }
    // Ctrl+U / Cmd+Option+U (View Source)
    if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      showSecurityToast('Source viewing is locked');
      return false;
    }
    // Ctrl+S / Cmd+S (Save Page)
    if ((e.ctrlKey || e.metaKey) && (e.key === 's' || e.key === 'S')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 4. Disable Drag and Drop on Images & Text
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 5. Console Protection
  try {
    const bannerStyle = 'color: #D4AF37; font-size: 16px; font-weight: bold; background: #1F0D03; padding: 8px 16px; border: 2px solid #D4AF37; border-radius: 6px;';
    console.log('%c🔒 SHUBH VIVAH • DIGITAL INTEGRITY GUARD ACTIVE', bannerStyle);
    const noop = () => {};
    window.console.clear = noop;
  } catch (err) {}

})();

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
     1. THEME PALETTE SWITCHER
     -------------------------------------------------------------------------- */
  const paletteDots = document.querySelectorAll('.palette-dot');
  paletteDots.forEach(dot => {
    dot.addEventListener('click', () => {
      paletteDots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
      const theme = dot.getAttribute('data-theme');
      document.body.className = theme;
    });
  });

  /* --------------------------------------------------------------------------
     2. AUDIO CONTROLLER WITH EQUALIZER & SMOOTH FADE
     -------------------------------------------------------------------------- */
  const audio = document.getElementById('weddingAudio');
  const audioToggleBtn = document.getElementById('audioToggleBtn');
  const audioStatusText = document.getElementById('audioStatusText');
  let isPlaying = false;
  let wasPlayingBeforeHide = false;
  let gateOpened = false;

  function toggleAudio() {
    if (!audio) return;
    if (!gateOpened) return; // Disallow toggling music before the royal doors are open
    if (isPlaying) {
      audio.pause();
      isPlaying = false;
      wasPlayingBeforeHide = false;
      audioToggleBtn.classList.remove('playing');
      audioStatusText.textContent = 'Music: OFF';
    } else {
      audio.volume = 0.55;
      audio.play().then(() => {
        isPlaying = true;
        wasPlayingBeforeHide = false;
        audioToggleBtn.classList.add('playing');
        audioStatusText.textContent = 'Music: ON';
      }).catch(err => {
        console.warn('Audio auto-play blocked by browser policy:', err);
      });
    }
  }

  if (audioToggleBtn) {
    audioToggleBtn.addEventListener('click', toggleAudio);
  }

  // Handle phone screen lock, tab switch, app minimize - immediately stop music
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (isPlaying && audio) {
        wasPlayingBeforeHide = true;
        audio.pause();
        isPlaying = false;
        if (audioToggleBtn) audioToggleBtn.classList.remove('playing');
        if (audioStatusText) audioStatusText.textContent = 'Music: OFF';
      }
    } else {
      // When screen is unlocked or tab is foregrounded, resume smoothly if it was active
      if (wasPlayingBeforeHide && audio && gateOpened) {
        audio.volume = 0.55;
        audio.play().then(() => {
          isPlaying = true;
          wasPlayingBeforeHide = false;
          if (audioToggleBtn) audioToggleBtn.classList.add('playing');
          if (audioStatusText) audioStatusText.textContent = 'Music: ON';
        }).catch(() => {});
      }
    }
  });

  // Handle browser window / tab closing and page unload
  window.addEventListener('pagehide', () => {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  });

  window.addEventListener('beforeunload', () => {
    if (audio) {
      audio.pause();
      isPlaying = false;
    }
  });

  /* --------------------------------------------------------------------------
     SCROLL HANDLER FOR AUTO-MINIFYING MUSIC BUTTON & HIDING HEADER
     -------------------------------------------------------------------------- */
  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          document.body.classList.add('scrolled-nav');
        } else {
          document.body.classList.remove('scrolled-nav');
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });

  /* --------------------------------------------------------------------------
     3. STAGE 1: 3D ROYAL WELCOME GATE (Apple 120Hz Transition)
     -------------------------------------------------------------------------- */
  const openDoorsBtn = document.getElementById('openDoorsBtn');
  const doorsChamber = document.getElementById('doorsChamber');
  const gateStage = document.getElementById('gateStage');
  const mainExperience = document.getElementById('mainExperience');

  function triggerDoorOpen() {
    if (gateOpened) return;
    gateOpened = true;

    // Enforce absolute top immediately
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // 1. Play soft wedding theme if not already playing
    if (!isPlaying && audio) {
      audio.volume = 0.55;
      audio.play().then(() => {
        isPlaying = true;
        if (audioToggleBtn) audioToggleBtn.classList.add('playing');
        if (audioStatusText) audioStatusText.textContent = 'Music: ON';
      }).catch(() => {});
    }

    // 2. Open 3D Doors with majestic swing
    if (doorsChamber) {
      doorsChamber.classList.add('open');
    }

    // 3. Fire celebratory rose & gold confetti burst from gate center
    setTimeout(() => {
      fireConfetti(window.innerWidth / 2, window.innerHeight / 2, 85);
    }, 450);

    // 4. Camera Walk-Through zoom effect into the inner palace gates
    const gateWrap = document.querySelector('.gate-perspective-wrap');
    if (gateWrap) {
      setTimeout(() => {
        gateWrap.classList.add('walking-inside');
      }, 500);
    }

    // 5. Reveal main wedding experience & top bar gracefully from behind the doors
    setTimeout(() => {
      document.body.classList.remove('gate-locked');
      if (mainExperience) {
        mainExperience.classList.add('revealing');
      }
    }, 1100);

    // 6. Complete transition: unlock body scroll at absolute top
    setTimeout(() => {
      if (gateStage) {
        gateStage.style.display = 'none';
      }

      // Enforce absolute top so the invitation starts from the very beginning
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      initLuxuryReveals();
    }, 2100);
  }

  if (openDoorsBtn) {
    openDoorsBtn.addEventListener('click', triggerDoorOpen);
  }

  const doorLeft = document.getElementById('doorLeft');
  const doorRight = document.getElementById('doorRight');
  if (doorLeft) doorLeft.addEventListener('click', triggerDoorOpen);
  if (doorRight) doorRight.addEventListener('click', triggerDoorOpen);

  const doorWaxSealBtn = document.getElementById('doorWaxSealBtn');
  if (doorWaxSealBtn) {
    doorWaxSealBtn.addEventListener('click', (e) => {
      const rect = doorWaxSealBtn.getBoundingClientRect();
      fireConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2, 45);
      triggerDoorOpen();
    });
  }

  /* --------------------------------------------------------------------------
     4. APPLE-STYLE SCROLL REVEAL OBSERVER
     -------------------------------------------------------------------------- */
  function initLuxuryReveals() {
    const revealElements = document.querySelectorAll('.luxury-reveal-item, .apple-reveal, .apple-reveal-card');

    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const delay = entry.target.getAttribute('data-delay') || 0;
            setTimeout(() => {
              entry.target.classList.add('in-view');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      }, {
        root: null,
        threshold: 0.10,
        rootMargin: '0px 0px -30px 0px'
      });

      revealElements.forEach(el => revealObserver.observe(el));
    } else {
      revealElements.forEach(el => el.classList.add('in-view'));
    }
  }

  initLuxuryReveals();

  /* --------------------------------------------------------------------------
     6. LIVE COUNTDOWN TIMER TO AUSPICIOUS WEDDING DATE
     -------------------------------------------------------------------------- */
  // Wedding day: Ghudchadhi, 1 December 2026 4:00 PM IST
  const targetWeddingDate = new Date('2026-12-01T16:00:00+05:30').getTime();

  const cdDays = document.getElementById('cdDays');
  const cdHours = document.getElementById('cdHours');
  const cdMins = document.getElementById('cdMins');
  const cdSecs = document.getElementById('cdSecs');

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetWeddingDate - now;

    if (distance <= 0) {
      if (cdDays) cdDays.textContent = '00';
      if (cdHours) cdHours.textContent = '00';
      if (cdMins) cdMins.textContent = '00';
      if (cdSecs) cdSecs.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (cdDays) cdDays.textContent = String(days).padStart(2, '0');
    if (cdHours) cdHours.textContent = String(hours).padStart(2, '0');
    if (cdMins) cdMins.textContent = String(minutes).padStart(2, '0');
    if (cdSecs) cdSecs.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);

  /* --------------------------------------------------------------------------
     7. VIRTUAL FLOWER BLESSING
     -------------------------------------------------------------------------- */
  const quickWishBtn = document.getElementById('quickWishBtn');
  const confettiReplayBtn = document.getElementById('confettiReplayBtn');

  function triggerBlessingCelebration(e) {
    const x = e ? e.clientX : window.innerWidth / 2;
    const y = e ? e.clientY : window.innerHeight / 2;
    fireConfetti(x, y, 80);
  }

  if (quickWishBtn) quickWishBtn.addEventListener('click', triggerBlessingCelebration);
  if (confettiReplayBtn) confettiReplayBtn.addEventListener('click', triggerBlessingCelebration);

  /* --------------------------------------------------------------------------
     9. 120 FPS HIGH PERFORMANCE CONFETTI & FLOWER SHOWER ENGINE
     -------------------------------------------------------------------------- */
  const confettiCanvas = document.getElementById('confettiCanvas');
  let confettiCtx = confettiCanvas ? confettiCanvas.getContext('2d') : null;
  let confettiParticles = [];

  function resizeConfetti() {
    if (!confettiCanvas) return;
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;
  }
  resizeConfetti();
  window.addEventListener('resize', resizeConfetti);

  const confettiColors = ['#D4AF37', '#FFDF78', '#F8D8DC', '#C27685', '#FFF0BD', '#9CAF88', '#FFFFFF'];

  function fireConfetti(originX, originY, count = 60) {
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 10 + 4;
      confettiParticles.push({
        x: originX || window.innerWidth / 2,
        y: originY || window.innerHeight / 2,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 4,
        size: Math.random() * 8 + 4,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        shape: Math.random() > 0.4 ? 'petal' : 'rect',
        opacity: 1,
        life: 0,
        maxLife: Math.random() * 80 + 90
      });
    }
  }

  function renderConfetti() {
    if (!confettiCtx) return;
    confettiCtx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

    for (let i = confettiParticles.length - 1; i >= 0; i--) {
      const p = confettiParticles[i];
      p.life++;
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.vx *= 0.98; // drag
      p.rotation += p.rotSpeed;
      p.opacity = Math.max(0, 1 - (p.life / p.maxLife));

      confettiCtx.save();
      confettiCtx.translate(p.x, p.y);
      confettiCtx.rotate((p.rotation * Math.PI) / 180);
      confettiCtx.fillStyle = p.color;
      confettiCtx.globalAlpha = p.opacity;

      if (p.shape === 'petal') {
        // Soft rounded rose petal
        confettiCtx.beginPath();
        confettiCtx.ellipse(0, 0, p.size, p.size * 0.6, 0, 0, Math.PI * 2);
        confettiCtx.fill();
      } else {
        // Foil rectangle
        confettiCtx.fillRect(-p.size / 2, -p.size / 3, p.size, p.size * 0.6);
      }
      confettiCtx.restore();

      if (p.life >= p.maxLife || p.y > window.innerHeight + 50) {
        confettiParticles.splice(i, 1);
      }
    }

    requestAnimationFrame(renderConfetti);
  }
  requestAnimationFrame(renderConfetti);

  /* --------------------------------------------------------------------------
     10. AMBIENT DRIFTING ROSE PETALS (120 FPS Continuous Canvas)
     -------------------------------------------------------------------------- */
  const ambientCanvas = document.getElementById('ambientPetalCanvas');
  let ambientCtx = ambientCanvas ? ambientCanvas.getContext('2d') : null;
  let ambientPetals = [];

  function resizeAmbient() {
    if (!ambientCanvas) return;
    ambientCanvas.width = window.innerWidth;
    ambientCanvas.height = window.innerHeight;
  }
  resizeAmbient();
  window.addEventListener('resize', resizeAmbient);

  function initAmbientPetals() {
    ambientPetals = [];
    const count = window.innerWidth < 768 ? 38 : 72;
    const flowerPalettes = [
      { r: 216, g: 46, b: 78, a: 0.90 },     // Deep vibrant pink/red rose
      { r: 236, g: 72, b: 104, a: 0.88 },    // Radiant coral blossom
      { r: 255, g: 140, b: 0, a: 0.92 },     // Rich sacred saffron marigold
      { r: 245, g: 185, b: 24, a: 0.92 },    // Vibrant golden marigold
      { r: 188, g: 35, b: 65, a: 0.88 }      // Velvet crimson petal
    ];

    for (let i = 0; i < count; i++) {
      const col = flowerPalettes[Math.floor(Math.random() * flowerPalettes.length)];
      ambientPetals.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 10 + 7,
        vy: Math.random() * 1.1 + 0.7,
        vx: (Math.random() - 0.5) * 0.8,
        swaySpeed: Math.random() * 0.02 + 0.015,
        swayRange: Math.random() * 24 + 12,
        swayOffset: Math.random() * Math.PI * 2,
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 2.0,
        color: `rgba(${col.r}, ${col.g}, ${col.b}, ${col.a})`,
        highlight: `rgba(${Math.min(255, col.r + 50)}, ${Math.min(255, col.g + 50)}, ${Math.min(255, col.b + 50)}, 0.95)`
      });
    }
  }
  initAmbientPetals();

  let tick = 0;
  function renderAmbientPetals() {
    if (!ambientCtx) return;
    ambientCtx.clearRect(0, 0, ambientCanvas.width, ambientCanvas.height);
    tick += 0.025;

    for (let i = 0; i < ambientPetals.length; i++) {
      const p = ambientPetals[i];
      p.y += p.vy;
      p.x += Math.sin(tick + p.swayOffset) * 0.7 + p.vx;
      p.rotation += p.rotSpeed;

      if (p.y > window.innerHeight + 35) {
        p.y = -25;
        p.x = Math.random() * window.innerWidth;
      }
      if (p.x < -30) p.x = window.innerWidth + 20;
      if (p.x > window.innerWidth + 30) p.x = -20;

      ambientCtx.save();
      ambientCtx.translate(p.x, p.y);
      ambientCtx.rotate((p.rotation * Math.PI) / 180);

      // Organic floral drop shadow for depth against light background
      ambientCtx.shadowColor = 'rgba(160, 40, 60, 0.28)';
      ambientCtx.shadowBlur = 4;
      ambientCtx.shadowOffsetY = 2;

      // Realistic 3D petal shading with radial gradient
      const grad = ambientCtx.createRadialGradient(0, -p.size * 0.2, p.size * 0.1, 0, 0, p.size);
      grad.addColorStop(0, p.highlight);
      grad.addColorStop(0.85, p.color);
      grad.addColorStop(1, 'rgba(140, 20, 45, 0.85)');

      ambientCtx.fillStyle = grad;
      ambientCtx.beginPath();
      // True rose/marigold curved petal shape
      ambientCtx.moveTo(0, -p.size);
      ambientCtx.bezierCurveTo(p.size * 0.9, -p.size * 0.8, p.size * 1.1, p.size * 0.6, 0, p.size);
      ambientCtx.bezierCurveTo(-p.size * 1.1, p.size * 0.6, -p.size * 0.9, -p.size * 0.8, 0, -p.size);
      ambientCtx.fill();

      // Subtle translucent petal vein
      ambientCtx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
      ambientCtx.lineWidth = 0.8;
      ambientCtx.beginPath();
      ambientCtx.moveTo(0, -p.size * 0.7);
      ambientCtx.lineTo(0, p.size * 0.7);
      ambientCtx.stroke();

      ambientCtx.restore();
    }

    requestAnimationFrame(renderAmbientPetals);
  }
  requestAnimationFrame(renderAmbientPetals);



});
