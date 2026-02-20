// ═══════════════════════════════════════════════════
// dr.water — Main Script (Revised)
// ═══════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', () => {

  // ─── AOS Animation ───
  AOS.init({
    duration: 700,
    once: true,
    easing: 'ease-out-quart',
    offset: 60
  });

  // ─── WhatsApp Config ───
  const PHONE = '6281234567890'; // Ganti dengan nomor WhatsApp aktual
  const openWhatsApp = (text) => {
    const url = `https://wa.me/${PHONE}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  };

  // ─── Hero CTA: Isi Ulang Air ───
  const heroRefill = document.getElementById('hero-cta-refill');
  if (heroRefill) {
    heroRefill.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Halo dr.water, saya ingin isi ulang air minum.');
    });
  }

  // ─── Hero CTA: Jadi Mitra ───
  const heroMitra = document.getElementById('hero-cta-mitra');
  if (heroMitra) {
    heroMitra.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('partnership');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    });
  }

  // ─── Tumbler Buy Buttons ───
  document.querySelectorAll('.btn-buy-tumbler').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || 'tumbler dr.water';
      openWhatsApp(`Halo dr.water, saya ingin membeli ${product}.`);
    });
  });

  // ─── Partnership CTA ───
  const ctaPartnership = document.getElementById('cta-partnership');
  if (ctaPartnership) {
    ctaPartnership.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Halo dr.water, saya tertarik dengan kemitraan usaha air isi ulang dr.water. Mohon info lebih lanjut.');
    });
  }

  // ─── Final CTA: Isi Ulang ───
  const ctaRefillBottom = document.getElementById('cta-refill-bottom');
  if (ctaRefillBottom) {
    ctaRefillBottom.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Halo dr.water, saya ingin isi ulang air minum.');
    });
  }

  // ─── Final CTA: Gabung Kemitraan ───
  const ctaMitraBottom = document.getElementById('cta-mitra-bottom');
  if (ctaMitraBottom) {
    ctaMitraBottom.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Halo dr.water, saya ingin bergabung menjadi mitra usaha dr.water.');
    });
  }

  // ─── Footer WhatsApp ───
  const footerWa = document.getElementById('footer-wa');
  if (footerWa) {
    footerWa.addEventListener('click', (e) => {
      e.preventDefault();
      openWhatsApp('Halo dr.water, saya ingin bertanya.');
    });
  }

  // ─── Footer Email (mailto) ───
  const footerEmail = document.getElementById('footer-email');
  if (footerEmail) {
    footerEmail.addEventListener('click', (e) => {
      e.preventDefault();
      window.location.href = 'mailto:info@drwater.id';
    });
  }

  // ─── WhatsApp Floating Button ───
  const whatsappFab = document.getElementById('whatsapp-fab');
  if (whatsappFab) {
    whatsappFab.addEventListener('click', () => {
      openWhatsApp('Halo dr.water, saya ingin bertanya.');
    });
    whatsappFab.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openWhatsApp('Halo dr.water, saya ingin bertanya.');
      }
    });
  }

  // ─── Scroll to Top Button ───
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    });
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ─── Active Nav on Scroll ───
  const sections = ['home', 'why', 'products', 'quality', 'tumbler', 'partnership', 'outlet', 'about', 'cta-final'];
  const navLinks = Array.from(document.querySelectorAll('.navbar .nav-link:not(.nav-cta)'));
  const setActiveNav = () => {
    let current = 'home';
    const scrollPos = window.scrollY + 120;
    sections.forEach(id => {
      const sec = document.getElementById(id);
      if (sec && sec.offsetTop <= scrollPos) current = id;
    });
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        link.classList.toggle('active', href === '#' + current);
      }
    });
  };
  window.addEventListener('scroll', setActiveNav);
  setActiveNav();

  // ─── Navbar background change on scroll ───
  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        mainNav.style.boxShadow = '0 4px 20px rgba(13,27,62,0.1)';
        mainNav.style.background = 'rgba(255,255,255,0.97)';
      } else {
        mainNav.style.boxShadow = 'none';
        mainNav.style.background = 'rgba(255,255,255,0.92)';
      }
    });
  }

  // ─── Close navbar on mobile link click ───
  const navbarCollapse = document.getElementById('navbarNav');
  if (navbarCollapse) {
    document.querySelectorAll('#navbarNav .nav-link').forEach(link => {
      link.addEventListener('click', () => {
        const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
        if (bsCollapse) bsCollapse.hide();
      });
    });
  }

  // ─── Image Lightbox ───
  const lightbox = document.getElementById('imgLightbox');
  const lightboxImg = lightbox ? lightbox.querySelector('img') : null;
  const lightboxClose = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.clickable-img').forEach(img => {
      img.addEventListener('click', () => {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    };

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target === lightboxClose) {
        closeLightbox();
      }
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', closeLightbox);
    }

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  // ─── Smooth scroll for all anchor links ───
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const offset = 80; // navbar height
        const targetPos = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    });
  });

  // ─── Touch hover for cards (mobile) ───
  const enableTouchHover = () => {
    const addActive = (el) => { if (el) el.style.transform = 'translateY(-4px)'; };
    const removeActive = (el) => { if (el) el.style.transform = ''; };
    const findCard = (target) => target.closest('.product-card') || target.closest('.trust-card') || target.closest('.partnership-card');

    document.body.addEventListener('touchstart', (e) => {
      addActive(findCard(e.target));
    }, { passive: true });

    ['touchend', 'touchcancel'].forEach(evt => {
      document.body.addEventListener(evt, (e) => {
        setTimeout(() => removeActive(findCard(e.target)), 150);
      }, { passive: true });
    });
  };
  enableTouchHover();

  // ─── Animate numbers on scroll (if needed) ───
  const animateNumbers = () => {
    const counters = document.querySelectorAll('[data-count]');
    if (counters.length === 0) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const target = parseInt(entry.target.getAttribute('data-count'));
          let current = 0;
          const increment = Math.ceil(target / 60);
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              current = target;
              clearInterval(timer);
            }
            entry.target.textContent = current.toLocaleString('id-ID');
          }, 25);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  };
  animateNumbers();

});