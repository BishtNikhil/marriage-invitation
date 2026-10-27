/**
 * SHUBH VIVAH LUXURY MODERN PASTEL MARRIAGE CARD
 * Core Application Engine: 120Hz 3D Gate, Canvas Scratch Reveal,
 * Apple-style Scroll Reveals, Dynamic Calendar (.ics / Google), Ambient Petals
 */

/* ==========================================================================
   PŪRṆAM STUDIO LUXURY SECURITY & ANTI-TAMPER INTEGRITY GUARDIAN
   Military-grade Client Protection:
   1. Blocks Right-Click Context Menu & Inspect Element
   2. Blocks F12, Ctrl+Shift+I/J/C, Ctrl+U (View Source), Ctrl+S
   3. Real-time DevTools detection & anti-debugging trap
   4. MutationObserver Integrity Guard: Instantly reverts unauthorized DOM/Text edits
   5. Anti-Drag & Image Shielding
   ========================================================================== */
(function setupRoyalSecurityGuardian() {
  'use strict';

  // 1. Show elegant security notification badge
  function showSecurityToast(message) {
    if (!document.body) return;
    let existingToast = document.getElementById('purnamSecurityToast');
    if (!existingToast) {
      existingToast = document.createElement('div');
      existingToast.id = 'purnamSecurityToast';
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
    existingToast.innerHTML = `<span>🔒</span> <strong>Pūrṇam Studio Guard:</strong> ${message}`;
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

  // 5. Anti-Debugging & Console Guard
  try {
    const bannerStyle = 'color: #D4AF37; font-size: 16px; font-weight: bold; background: #1F0D03; padding: 8px 16px; border: 2px solid #D4AF37; border-radius: 6px;';
    console.log('%c🔒 SHUBH VIVAH • DIGITAL INTEGRITY GUARD ACTIVE', bannerStyle);
    console.log('%cPresented by Pūrṇam Studio • All rights reserved 2026', 'color: #F8E6A8; font-size: 11px;');
    const noop = () => {};
    window.console.clear = noop;
  } catch (err) {}

  // 6. Active DevTools Debugger Trap (pauses debugger if DevTools is opened)
  let devtoolsOpen = false;
  const threshold = 160;
  setInterval(() => {
    const widthDiff = window.outerWidth - window.innerWidth > threshold;
    const heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        showSecurityToast('Inspection environment detected. Page secured.');
      }
      (function() { return false; }['constructor']('debugger')());
    } else {
      devtoolsOpen = false;
    }
  }, 1000);

  // 7. REAL-TIME DOM TAMPERING MONITOR (MutationObserver Auto-Revert)
  document.addEventListener('DOMContentLoaded', () => {
    const protectedSelectors = [
      '#heroSection',
      '#scratchSection',
      '#itinerarySection',
      '#venueSection',
      '#topNavBar'
    ];

    const officialSnapshots = new Map();
    protectedSelectors.forEach(sel => {
      const el = document.querySelector(sel);
      if (el) {
        officialSnapshots.set(sel, el.cloneNode(true));
      }
    });

    let isRestoring = false;

    const integrityObserver = new MutationObserver((mutations) => {
      if (isRestoring) return;

      for (const mutation of mutations) {
        for (const [sel, cleanNode] of officialSnapshots.entries()) {
          const currentEl = document.querySelector(sel);
          if (!currentEl) {
            isRestoring = true;
            integrityObserver.disconnect();
            showSecurityToast('Unauthorized modification detected. Restoring original content...');
            const mainExp = document.getElementById('mainExperience') || document.body;
            mainExp.appendChild(cleanNode.cloneNode(true));
            setTimeout(() => {
              isRestoring = false;
              integrityObserver.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });
            }, 100);
            return;
          }

          if (currentEl.contains(mutation.target)) {
            if (mutation.type === 'characterData' || mutation.type === 'childList') {
              const cleanText = cleanNode.textContent.replace(/\s+/g, ' ').trim();
              const currentText = currentEl.textContent.replace(/\s+/g, ' ').trim();
              if (cleanText !== currentText) {
                isRestoring = true;
                integrityObserver.disconnect();
                showSecurityToast('Unauthorized text edit blocked. Restoring official details.');
                currentEl.replaceWith(cleanNode.cloneNode(true));
                setTimeout(() => {
                  isRestoring = false;
                  integrityObserver.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true });
                }, 100);
                return;
              }
            }
          }
        }
      }
    });

    integrityObserver.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
      attributes: true
    });
  });

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

  function toggleAudio() {
    if (!audio) return;
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
  let gateOpened = false;

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

    // 5. Reveal main wedding experience gracefully from behind the doors
    setTimeout(() => {
      if (mainExperience) {
        mainExperience.classList.add('revealing');
      }
      initScratchCard();
    }, 1100);

    // 6. Complete transition: unlock body scroll at absolute top
    setTimeout(() => {
      document.body.classList.remove('gate-locked');
      if (gateStage) {
        gateStage.style.display = 'none';
      }

      // Enforce absolute top so the invitation starts from the very beginning
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;

      initScratchCard();
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
     5. HIGH-DPI INTERACTIVE SCRATCH-TO-REVEAL ENGINE
     -------------------------------------------------------------------------- */
  const scratchCanvas = document.getElementById('scratchCanvas');
  const scratchHint = document.getElementById('scratchHint');
  let scratchCtx = null;
  let isScratching = false;
  let totalFoilPixels = 0;
  let scratched = false;
  let userStartedScratching = false;

  function initScratchCard() {
    if (!scratchCanvas || scratched || userStartedScratching) return;
    const parent = scratchCanvas.parentElement;
    if (!parent) return;

    // Set actual canvas size matching container client rect with device pixel ratio
    const rect = parent.getBoundingClientRect();
    if (rect.width <= 0 || rect.height <= 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const width = Math.round(rect.width);
    const height = Math.round(rect.height);

    scratchCanvas.width = width * dpr;
    scratchCanvas.height = height * dpr;
    scratchCanvas.style.width = width + 'px';
    scratchCanvas.style.height = height + 'px';

    scratchCtx = scratchCanvas.getContext('2d', { willReadFrequently: true });
    scratchCtx.setTransform(1, 0, 0, 1, 0, 0);
    scratchCtx.scale(dpr, dpr);

    // Reset cleared state and display hint
    scratchCanvas.classList.remove('cleared');
    if (scratchHint) {
      scratchHint.style.opacity = '1';
      scratchHint.style.display = 'flex';
      scratchHint.style.pointerEvents = 'none';
    }

    // Draw luxury metallic gold foil texture
    const goldGrad = scratchCtx.createLinearGradient(0, 0, width, height);
    goldGrad.addColorStop(0.0, '#E5C158');
    goldGrad.addColorStop(0.18, '#FFE599');
    goldGrad.addColorStop(0.40, '#D4AF37');
    goldGrad.addColorStop(0.68, '#C59A27');
    goldGrad.addColorStop(0.85, '#FFEAA7');
    goldGrad.addColorStop(1.0, '#996515');

    scratchCtx.fillStyle = goldGrad;
    scratchCtx.fillRect(0, 0, width, height);

    // Subtle decorative jaali pattern overlay
    scratchCtx.save();
    scratchCtx.strokeStyle = 'rgba(255, 255, 255, 0.22)';
    scratchCtx.lineWidth = 1;
    const step = 28;
    for (let x = 0; x < width + step; x += step) {
      scratchCtx.beginPath();
      scratchCtx.moveTo(x, 0);
      scratchCtx.lineTo(x - step, height);
      scratchCtx.stroke();
    }
    for (let x = -step; x < width + step; x += step) {
      scratchCtx.beginPath();
      scratchCtx.moveTo(x, 0);
      scratchCtx.lineTo(x + step, height);
      scratchCtx.stroke();
    }
    scratchCtx.restore();

    // Central Royal Foil Stamp Artwork
    scratchCtx.save();
    scratchCtx.textAlign = 'center';
    scratchCtx.textBaseline = 'middle';

    // Outer border
    scratchCtx.strokeStyle = '#FFE8A3';
    scratchCtx.lineWidth = 2.5;
    scratchCtx.strokeRect(18, 18, width - 36, height - 36);

    // Inner dashed border
    scratchCtx.setLineDash([6, 6]);
    scratchCtx.strokeStyle = '#8B5A10';
    scratchCtx.strokeRect(26, 26, width - 52, height - 52);
    scratchCtx.setLineDash([]);

    const centerY = height / 2;

    // Auspicious Kalash / Diya Icon
    scratchCtx.font = '28px "Outfit", sans-serif';
    scratchCtx.fillStyle = '#4A2808';
    scratchCtx.fillText('✨ 🪔 ✨', width / 2, centerY - 60);

    // Main Gold Foil Heading
    scratchCtx.font = 'bold 22px "Cinzel Decorative", "Playfair Display", serif';
    scratchCtx.fillStyle = '#3A1E05';
    scratchCtx.shadowColor = 'rgba(255, 240, 180, 0.8)';
    scratchCtx.shadowBlur = 4;
    scratchCtx.fillText('SECRET WEDDING DATE', width / 2, centerY - 18);

    scratchCtx.font = '600 13px "Outfit", sans-serif';
    scratchCtx.fillStyle = '#4A2808';
    scratchCtx.shadowBlur = 0;
    scratchCtx.fillText('✦ SHUBH MUHURAT UNVEIL ✦', width / 2, centerY + 16);

    scratchCtx.font = 'italic 12px "Outfit", sans-serif';
    scratchCtx.fillStyle = '#63390B';
    scratchCtx.fillText('Rub or drag here with finger / mouse to reveal', width / 2, centerY + 46);

    scratchCtx.restore();

    totalFoilPixels = width * height;
  }

  // Brush scratch calculation
  function scratchAt(clientX, clientY) {
    if (!scratchCanvas || !scratchCtx || scratched) return;
    const rect = scratchCanvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    scratchCtx.save();
    scratchCtx.globalCompositeOperation = 'destination-out';
    scratchCtx.beginPath();
    scratchCtx.arc(x, y, 28, 0, Math.PI * 2, false);
    scratchCtx.fill();
    scratchCtx.restore();

    // Hide instruction hint on first scratch
    if (scratchHint && scratchHint.style.opacity !== '0') {
      scratchHint.style.opacity = '0';
      scratchHint.style.pointerEvents = 'none';
    }

    // Small sparkle dust emission at scratch point
    if (Math.random() < 0.3) {
      spawnScratchSparkle(clientX, clientY);
    }

    checkScratchProgress();
  }

  // Check how much has been revealed (> 38% triggers auto-clear)
  let checkThrottle = null;
  function checkScratchProgress() {
    if (checkThrottle || scratched) return;
    checkThrottle = setTimeout(() => {
      checkThrottle = null;
      if (!scratchCanvas || !scratchCtx || scratched) return;

      const w = scratchCanvas.width;
      const h = scratchCanvas.height;
      if (w <= 0 || h <= 0) return;

      const imgData = scratchCtx.getImageData(0, 0, w, h);
      const data = imgData.data;

      let transparentPixels = 0;
      let totalSampled = 0;
      const step = 24;

      for (let i = 3; i < data.length; i += 4 * step) {
        totalSampled++;
        if (data[i] < 128) {
          transparentPixels++;
        }
      }

      if (totalSampled < 50) return;

      const percent = (transparentPixels / totalSampled) * 100;
      if (percent > 38) {
        completeScratch();
      }
    }, 180);
  }

  function completeScratch() {
    if (scratched) return;
    scratched = true;

    scratchCanvas.classList.add('cleared');
    if (scratchHint) scratchHint.style.display = 'none';

    // Trigger grand celebratory confetti shower
    const rect = scratchCanvas.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    fireConfetti(centerX, centerY, 90);
  }

  // Mouse Listeners
  if (scratchCanvas) {
    scratchCanvas.addEventListener('mousedown', (e) => {
      isScratching = true;
      userStartedScratching = true;
      scratchAt(e.clientX, e.clientY);
    });

    window.addEventListener('mousemove', (e) => {
      if (!isScratching) return;
      scratchAt(e.clientX, e.clientY);
    });

    window.addEventListener('mouseup', () => {
      isScratching = false;
    });

    // Mobile Touch Listeners (Prevent scroll while scratching on canvas)
    scratchCanvas.addEventListener('touchstart', (e) => {
      isScratching = true;
      userStartedScratching = true;
      if (e.touches && e.touches[0]) {
        scratchAt(e.touches[0].clientX, e.touches[0].clientY);
      }
      e.preventDefault();
    }, { passive: false });

    scratchCanvas.addEventListener('touchmove', (e) => {
      if (!isScratching) return;
      if (e.touches && e.touches[0]) {
        scratchAt(e.touches[0].clientX, e.touches[0].clientY);
      }
      e.preventDefault();
    }, { passive: false });

    scratchCanvas.addEventListener('touchend', () => {
      isScratching = false;
    });
  }

  // Auto-init and ResizeObserver for scratch card
  setTimeout(initScratchCard, 100);
  setTimeout(initScratchCard, 600);

  if (window.ResizeObserver && scratchCanvas && scratchCanvas.parentElement) {
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0 && entry.contentRect.height > 0 && !scratched && !userStartedScratching) {
          initScratchCard();
        }
      }
    });
    ro.observe(scratchCanvas.parentElement);
  }

  window.addEventListener('resize', () => {
    if (!scratched && !userStartedScratching) initScratchCard();
  });

  /* --------------------------------------------------------------------------
     6. LIVE COUNTDOWN TIMER TO AUSPICIOUS WEDDING DATE
     -------------------------------------------------------------------------- */
  // Auspicious date: November 28, 2026 19:15:00 IST
  const targetWeddingDate = new Date('2026-11-25T10:00:00+05:30').getTime();

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
     7. ADD TO CALENDAR SUITE (Google Calendar & Apple Calendar .ics)
     -------------------------------------------------------------------------- */
  const googleCalendarBtn = document.getElementById('googleCalendarBtn');
  const appleCalendarBtn = document.getElementById('appleCalendarBtn');

  // Event Details
  const eventDetails = {
    title: 'Shubh Vivah | Saurav Singh Bisht & Saumya Latwal Wedding Celebrations',
    start: '20261125T043000Z', // 10:00 AM IST on 25 Nov
    end: '20261128T183000Z',   // Midnight on 28 Nov
    location: 'Royal Restaurant & Sweets (Lodhiya), Qwarab (Uttarakhand) & Shri Radha Krishan Vatika (New Delhi)',
    description: 'Joyfully celebrating the wedding ceremonies of Saurav Singh Bisht (Son of Smt. Anita Bisht & Shri Rajinder Singh Bisht) and Saumya Latwal. Presented by Purnam Studio. 25 Nov: Ganesh Puja (10 AM), Haldi (11 AM), Sangeet (2 PM) & Mehendi (6 PM) (Royal Restaurant & Sweets, Lodhiya) | 26 Nov: Departure of Baarat (10:30 AM), Varmala (1:00 PM), Saat Pheras (2:30 PM) (Qwarab) | 28 Nov: Reception (7:30 PM) & Dinner (8:00 PM) (Shri Radha Krishan Vatika, Najafgarh, New Delhi).'
  };

  // Google Calendar URL
  if (googleCalendarBtn) {
    const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.start}/${eventDetails.end}&details=${encodeURIComponent(eventDetails.description)}&location=${encodeURIComponent(eventDetails.location)}`;
    googleCalendarBtn.href = googleUrl;
  }

  // Apple Calendar (.ics generator)
  if (appleCalendarBtn) {
    appleCalendarBtn.addEventListener('click', () => {
      const icsContent = [
        'BEGIN:VCALENDAR',
        'VERSION:2.0',
        'PRODID:-//Saurav & Saumya Wedding//EN',
        'CALSCALE:GREGORIAN',
        'METHOD:PUBLISH',
        'BEGIN:VEVENT',
        `SUMMARY:${eventDetails.title}`,
        `DESCRIPTION:${eventDetails.description.replace(/\n/g, '\\n')}`,
        `LOCATION:${eventDetails.location}`,
        `DTSTART:${eventDetails.start}`,
        `DTEND:${eventDetails.end}`,
        'STATUS:CONFIRMED',
        'SEQUENCE:0',
        'BEGIN:VALARM',
        'TRIGGER:-PT24H',
        'ACTION:DISPLAY',
        'DESCRIPTION:Reminder: Saurav & Saumya Wedding Tomorrow!',
        'END:VALARM',
        'END:VEVENT',
        'END:VCALENDAR'
      ].join('\r\n');

      const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.setAttribute('download', 'Saurav_Saumya_Royal_Wedding.ics');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      fireConfetti(window.innerWidth / 2, window.innerHeight / 2, 40);
    });
  }

  /* --------------------------------------------------------------------------
     8. WHATSAPP RSVP & VIRTUAL FLOWER BLESSING
     -------------------------------------------------------------------------- */
  const whatsappRsvpBtn = document.getElementById('whatsappRsvpBtn');
  if (whatsappRsvpBtn) {
    const groomPhone = '919654219271';
    const waText = encodeURIComponent('Namaste Saurav! 🌸✨\n\nHeartiest Congratulations to you and Saumya on your wedding! We are thrilled to celebrate with you. Sending our warmest blessings, love, and best wishes for a wonderful married life! 💐🎊');
    whatsappRsvpBtn.href = `https://api.whatsapp.com/send?phone=${groomPhone}&text=${waText}`;
  }

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

  // Sparkle generator for scratch action
  function spawnScratchSparkle(x, y) {
    if (!confettiCtx) return;
    for (let i = 0; i < 4; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1;
      confettiParticles.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 4 + 2,
        color: '#FFDF78',
        rotation: 0,
        rotSpeed: 0,
        shape: 'petal',
        opacity: 0.9,
        life: 0,
        maxLife: 20
      });
    }
  }

});
