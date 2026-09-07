/**
 * Gokul University Portal - Main JavaScript Controller
 * Handles themes, animations, counters, modals, filtering, lightbox, and forms.
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. THEME TOGGLING (Dark/Light Mode) ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  
  function getCurrentTheme() {
    const saved = localStorage.getItem('gokul_theme');
    if (saved) return saved;
    return prefersDarkScheme.matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('gokul_theme', theme);
    themeToggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
      }
      btn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
    });
  }

  applyTheme(getCurrentTheme());

  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = current === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      showToast(`Switched to ${nextTheme.toUpperCase()} mode`, 'info');
    });
  });

  // --- 2. SCROLL PROGRESS & NAVBAR SCROLL BEHAVIOR ---
  const navbar = document.querySelector('.navbar');
  const scrollProgress = document.querySelector('.scroll-progress');
  const backToTopBtn = document.querySelector('.back-to-top');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    if (scrollProgress) {
      scrollProgress.style.width = `${scrollPercent}%`;
    }

    if (navbar) {
      if (scrollTop > 60) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollTop > 450) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // --- 3. MOBILE HAMBURGER DRAWER ---
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const mobileDrawer = document.querySelector('.mobile-drawer');

  if (hamburgerBtn && mobileDrawer) {
    hamburgerBtn.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileDrawer.classList.add('open');
        hamburgerBtn.classList.add('active');
        hamburgerBtn.setAttribute('aria-expanded', 'true');
      }
    });

    // Close mobile drawer when clicking a link
    mobileDrawer.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileDrawer.classList.remove('open');
        hamburgerBtn.classList.remove('active');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- 4. ACTIVE NAVIGATION SCROLL-SPY ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  function updateActiveNav() {
    const scrollY = window.pageYOffset + 140;
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('scroll', updateActiveNav, { passive: true });

  // --- 5. ANIMATED STATISTICS COUNTER ---
  const statNumbers = document.querySelectorAll('.stat-counter');
  let animated = false;

  function animateCounters() {
    statNumbers.forEach(stat => {
      const target = +stat.getAttribute('data-target');
      const suffix = stat.getAttribute('data-suffix') || '';
      const duration = 2000; // ms
      const startTime = performance.now();

      function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // easeOutQuart easing
        const ease = 1 - Math.pow(1 - progress, 4);
        const currentVal = Math.floor(ease * target);
        
        stat.textContent = currentVal.toLocaleString() + suffix;

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target.toLocaleString() + suffix;
        }
      }
      requestAnimationFrame(updateCounter);
    });
  }

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animateCounters();
          animated = true;
          observer.disconnect();
        }
      });
    }, { threshold: 0.25 });
    observer.observe(statsSection);
  }

  // --- 6. VISION & MISSION TABS (About Section) ---
  const vmTabBtns = document.querySelectorAll('.vm-tab-btn');
  const vmTabPanes = document.querySelectorAll('.vm-tab-pane');

  vmTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      vmTabBtns.forEach(b => b.classList.remove('active'));
      vmTabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const activePane = document.getElementById(target);
      if (activePane) activePane.classList.add('active');
    });
  });

  // --- 7. LEADERSHIP DOSSIER MODAL ---
  const modalBackdrop = document.getElementById('leadership-modal');
  const modalAvatar = document.getElementById('modal-leader-avatar');
  const modalName = document.getElementById('modal-leader-name');
  const modalRole = document.getElementById('modal-leader-role');
  const modalOffice = document.getElementById('modal-leader-office');
  const modalCloseBtn = document.querySelector('.modal-close-btn');
  const dossierBtns = document.querySelectorAll('.leader-dossier-btn');

  // Tab buttons inside dossier modal
  const modalTabBtns = document.querySelectorAll('.modal-tab-btn');
  const modalTabPanes = document.querySelectorAll('.modal-tab-content');

  modalTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-modal-tab');
      modalTabBtns.forEach(b => b.classList.remove('active'));
      modalTabPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const pane = document.getElementById(target);
      if (pane) pane.classList.add('active');
    });
  });

  function openLeadershipModal(leaderId) {
    if (!UNIVERSITY_DATA || !UNIVERSITY_DATA.leadership) return;
    const leader = UNIVERSITY_DATA.leadership.find(l => l.id === leaderId);
    if (!leader) return;

    // Set header info
    if (modalAvatar) modalAvatar.src = leader.image;
    if (modalName) modalName.textContent = leader.name;
    if (modalRole) modalRole.textContent = leader.title;
    if (modalOffice) modalOffice.textContent = leader.office;

    // Reset to first tab
    modalTabBtns.forEach((b, i) => b.classList.toggle('active', i === 0));
    modalTabPanes.forEach((p, i) => p.classList.toggle('active', i === 0));

    // Tab 1: Overview & Education
    const overviewContainer = document.getElementById('modal-tab-overview');
    if (overviewContainer) {
      overviewContainer.innerHTML = `
        <div class="dossier-quote-box">
          <p class="dossier-quote-text">"${leader.quote}"</p>
        </div>
        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Executive Overview</h4>
        <p style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 1.5rem;">${leader.summary}</p>
        
        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Educational Background</h4>
        <div class="dossier-list" style="margin-bottom: 1.5rem;">
          ${leader.education.map(edu => `
            <div class="dossier-item">
              <i class="fas fa-graduation-cap"></i>
              <div class="dossier-item-text">${edu}</div>
            </div>
          `).join('')}
        </div>

        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Leadership & Career Milestones</h4>
        <div class="dossier-list">
          ${leader.experience.map(exp => `
            <div class="dossier-item">
              <i class="fas fa-briefcase"></i>
              <div class="dossier-item-text">${exp}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Tab 2: Achievements & Awards
    const achContainer = document.getElementById('modal-tab-achievements');
    if (achContainer) {
      achContainer.innerHTML = `
        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Professional Achievements</h4>
        <div class="dossier-list" style="margin-bottom: 1.8rem;">
          ${leader.achievements.map(ach => `
            <div class="dossier-item">
              <i class="fas fa-certificate"></i>
              <div class="dossier-item-text">${ach}</div>
            </div>
          `).join('')}
        </div>

        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Awards & Global Recognitions</h4>
        <div class="dossier-list">
          ${leader.awards.map(awd => `
            <div class="dossier-item">
              <i class="fas fa-award"></i>
              <div class="dossier-item-text">${awd}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Tab 3: Vision & Strategic Goals
    const visionContainer = document.getElementById('modal-tab-vision');
    if (visionContainer) {
      visionContainer.innerHTML = `
        <div class="dossier-quote-box" style="border-left-color: var(--color-primary-light);">
          <h4 style="font-size: 1.1rem; font-weight:700; margin-bottom: 0.5rem; color: var(--color-gold);">Visionary Mandate</h4>
          <p class="dossier-quote-text" style="font-size: 1.05rem;">"${leader.vision}"</p>
        </div>

        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Strategic Roadmaps for Academic Excellence</h4>
        <div class="dossier-list">
          ${leader.strategicGoals.map(goal => `
            <div class="dossier-item">
              <i class="fas fa-compass"></i>
              <div class="dossier-item-text">${goal}</div>
            </div>
          `).join('')}
        </div>
      `;
    }

    // Tab 4: Message to Community & Contact
    const msgContainer = document.getElementById('modal-tab-message');
    if (msgContainer) {
      msgContainer.innerHTML = `
        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Official Address to Students, Faculty & Scholars</h4>
        <p style="font-size: 1rem; color: var(--text-secondary); line-height: 1.8; margin-bottom: 2rem; background: var(--bg-subtle); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
          ${leader.message}
        </p>

        <h4 style="font-size: 1.15rem; font-weight:700; margin-bottom: 0.75rem; color: var(--text-primary);">Secretariat & Direct Office Details</h4>
        <div class="dossier-contact-grid">
          <div class="dossier-contact-card">
            <div class="label">Official Email</div>
            <div class="val"><a href="mailto:${leader.email}" style="color: var(--color-gold);">${leader.email}</a></div>
          </div>
          <div class="dossier-contact-card">
            <div class="label">Direct Telephone</div>
            <div class="val">${leader.phone}</div>
          </div>
          <div class="dossier-contact-card" style="grid-column: 1 / -1;">
            <div class="label">Chamber Location</div>
            <div class="val">${leader.office}</div>
          </div>
        </div>
      `;
    }

    modalBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLeadershipModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  dossierBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const leaderId = btn.getAttribute('data-leader');
      openLeadershipModal(leaderId);
    });
  });

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener('click', closeLeadershipModal);
  }

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) {
        closeLeadershipModal();
      }
    });
  }

  // --- 8. ACADEMICS CATEGORY FILTER ---
  const academicFilterBtns = document.querySelectorAll('.academics-filter-btn');
  const academicsPanes = document.querySelectorAll('.academics-pane');

  academicFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-category');
      academicFilterBtns.forEach(b => b.classList.remove('active'));
      academicsPanes.forEach(p => p.classList.remove('active'));

      btn.classList.add('active');
      const targetPane = document.getElementById(`pane-${category}`);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // Brochure download buttons
  document.querySelectorAll('.brochure-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const progName = btn.getAttribute('data-program') || 'Curriculum Syllabus';
      showToast(`Generating official syllabus brochure for: ${progName}...`, 'info');
      setTimeout(() => {
        showToast(`Brochure downloaded successfully for ${progName}`, 'success');
      }, 1000);
    });
  });

  // --- 9. GALLERY FILTER & FULLSCREEN LIGHTBOX ---
  const galleryFilterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox-close');
  const lightboxPrev = document.querySelector('.lightbox-prev');
  const lightboxNext = document.querySelector('.lightbox-next');

  let currentGalleryIndex = 0;
  let visibleGalleryItems = Array.from(galleryItems);

  galleryFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const filter = btn.getAttribute('data-filter');
      galleryFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      galleryItems.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        if (filter === 'all' || itemCategory === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      visibleGalleryItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
    });
  });

  function showLightbox(index) {
    if (!visibleGalleryItems.length) return;
    currentGalleryIndex = (index + visibleGalleryItems.length) % visibleGalleryItems.length;
    const currentItem = visibleGalleryItems[currentGalleryIndex];
    const imgEl = currentItem.querySelector('img');
    const titleEl = currentItem.querySelector('.gallery-item-title');

    if (lightboxImg && imgEl) {
      lightboxImg.src = imgEl.src;
    }
    if (lightboxCaption && titleEl) {
      lightboxCaption.textContent = titleEl.textContent;
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    if (lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = visibleGalleryItems.indexOf(item);
      if (idx !== -1) {
        showLightbox(idx);
      }
    });
  });

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
  if (lightboxPrev) lightboxPrev.addEventListener('click', () => showLightbox(currentGalleryIndex - 1));
  if (lightboxNext) lightboxNext.addEventListener('click', () => showLightbox(currentGalleryIndex + 1));

  if (lightbox) {
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
  }

  // --- 10. GLOBAL KEYBOARD SHORTCUTS ---
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLeadershipModal();
      closeLightbox();
      closeSearchModal();
    }
    if (lightbox && lightbox.classList.contains('active')) {
      if (e.key === 'ArrowLeft') showLightbox(currentGalleryIndex - 1);
      if (e.key === 'ArrowRight') showLightbox(currentGalleryIndex + 1);
    }
    // Ctrl+K or Cmd+K to trigger search
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
  });

  // --- 11. QUICK SEARCH MODAL ---
  const searchTriggerBtns = document.querySelectorAll('.search-trigger-btn');
  const searchModal = document.getElementById('search-modal');
  const searchInputField = document.getElementById('search-input-field');
  const searchResultsList = document.getElementById('search-results-list');

  function openSearchModal() {
    if (searchModal) {
      searchModal.classList.add('active');
      if (searchInputField) {
        searchInputField.value = '';
        searchInputField.focus();
        renderSearchResults('');
      }
      document.body.style.overflow = 'hidden';
    }
  }

  function closeSearchModal() {
    if (searchModal) {
      searchModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  searchTriggerBtns.forEach(btn => {
    btn.addEventListener('click', openSearchModal);
  });

  if (searchModal) {
    searchModal.addEventListener('click', (e) => {
      if (e.target === searchModal) closeSearchModal();
    });
  }

  function renderSearchResults(query) {
    if (!searchResultsList) return;
    const q = query.trim().toLowerCase();
    searchResultsList.innerHTML = '';

    const results = [];

    // Search Leadership
    if (UNIVERSITY_DATA && UNIVERSITY_DATA.leadership) {
      UNIVERSITY_DATA.leadership.forEach(l => {
        if (!q || l.name.toLowerCase().includes(q) || l.role.toLowerCase().includes(q) || l.summary.toLowerCase().includes(q)) {
          results.push({
            type: 'Leadership',
            icon: 'fa-user-tie',
            title: l.name,
            subtitle: l.title,
            action: () => {
              closeSearchModal();
              openLeadershipModal(l.id);
            }
          });
        }
      });
    }

    // Search Departments
    if (UNIVERSITY_DATA && UNIVERSITY_DATA.departments) {
      UNIVERSITY_DATA.departments.forEach(d => {
        if (!q || d.name.toLowerCase().includes(q) || d.description.toLowerCase().includes(q)) {
          results.push({
            type: 'Department',
            icon: 'fa-university',
            title: d.name,
            subtitle: d.facultyCount + ' • ' + d.studentCount,
            action: () => {
              closeSearchModal();
              const deptEl = document.getElementById('departments');
              if (deptEl) deptEl.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      });
    }

    // Search Academics
    if (UNIVERSITY_DATA && UNIVERSITY_DATA.academics) {
      UNIVERSITY_DATA.academics.forEach(group => {
        group.programs.forEach(prog => {
          if (!q || prog.name.toLowerCase().includes(q) || prog.highlight.toLowerCase().includes(q)) {
            results.push({
              type: group.label,
              icon: 'fa-graduation-cap',
              title: prog.name,
              subtitle: `${prog.duration} • ${prog.seats}`,
              action: () => {
                closeSearchModal();
                const acadEl = document.getElementById('academics');
                if (acadEl) acadEl.scrollIntoView({ behavior: 'smooth' });
              }
            });
          }
        });
      });
    }

    if (results.length === 0) {
      searchResultsList.innerHTML = `
        <div style="padding: 2rem; text-align: center; color: var(--text-muted);">
          <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.5rem; opacity: 0.4;"></i>
          <p>No results found matching "<strong>${query}</strong>"</p>
        </div>
      `;
      return;
    }

    results.slice(0, 8).forEach(res => {
      const item = document.createElement('div');
      item.className = 'search-result-item';
      item.innerHTML = `
        <div style="display: flex; align-items: center; gap: 0.9rem;">
          <div style="width: 36px; height: 36px; border-radius: var(--radius-md); background: var(--color-gold-glow); color: var(--color-gold); display: flex; align-items: center; justify-content: center;">
            <i class="fas ${res.icon}"></i>
          </div>
          <div>
            <div style="font-weight: 700; color: var(--text-primary); font-size: 0.95rem;">${res.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${res.subtitle}</div>
          </div>
        </div>
        <span style="font-size: 0.75rem; text-transform: uppercase; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: var(--radius-sm); background: var(--bg-subtle); color: var(--text-muted);">
          ${res.type}
        </span>
      `;
      item.addEventListener('click', res.action);
      searchResultsList.appendChild(item);
    });
  }

  if (searchInputField) {
    searchInputField.addEventListener('input', (e) => {
      renderSearchResults(e.target.value);
    });
  }

  // --- 12. CONTACT & INQUIRY FORM VALIDATION ---
  const contactForm = document.getElementById('university-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = contactForm.querySelector('[name="name"]');
      const email = contactForm.querySelector('[name="email"]');
      const phone = contactForm.querySelector('[name="phone"]');
      const subject = contactForm.querySelector('[name="subject"]');
      const message = contactForm.querySelector('[name="message"]');
      const submitBtn = contactForm.querySelector('button[type="submit"]');

      let isValid = true;

      // Simple field validations
      if (!name || name.value.trim().length < 2) {
        showToast('Please enter a valid full name', 'error');
        if (name) name.focus();
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email || !emailRegex.test(email.value.trim())) {
        showToast('Please enter a valid official email address', 'error');
        if (email) email.focus();
        return;
      }

      if (!phone || phone.value.trim().length < 8) {
        showToast('Please enter a valid contact phone number', 'error');
        if (phone) phone.focus();
        return;
      }

      if (!message || message.value.trim().length < 10) {
        showToast('Message must be at least 10 characters long', 'error');
        if (message) message.focus();
        return;
      }

      // Simulate sending
      if (submitBtn) {
        submitBtn.disabled = true;
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Transmitting Inquiry...';

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
          contactForm.reset();
          showToast('Thank you! Your official inquiry has been submitted to the Gokul University Secretariat. A response will be issued within 24 hours.', 'success');
        }, 1200);
      }
    });
  }

  // Quick leadership contact button clicks in directory
  document.querySelectorAll('.leader-contact-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const leaderId = btn.getAttribute('data-leader');
      openLeadershipModal(leaderId);
    });
  });

  // --- 13. TOAST NOTIFICATION UTILITY ---
  const toastContainer = document.getElementById('toast-container');
  window.showToast = function(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = 'toast-msg';
    
    let iconClass = 'fa-info-circle';
    if (type === 'success') iconClass = 'fa-check-circle';
    if (type === 'error') iconClass = 'fa-exclamation-circle';

    toast.innerHTML = `
      <i class="fas ${iconClass}"></i>
      <div style="flex-grow: 1; font-size: 0.9rem; line-height: 1.4;">${message}</div>
    `;

    toastContainer.appendChild(toast);
    requestAnimationFrame(() => {
      toast.classList.add('show');
    });

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 400);
    }, 4500);
  };

  // Log initialized
  console.log('Gokul University portal core initialized successfully.');
});
