type ThemeName = 'magic' | 'dark';

interface SectionMapping {
  sectionId: string;
  desktopHref: string | null;
  mobileHref: string;
  theme: ThemeName;
}

export function initNavbar(): void {
  const nav = document.getElementById('nav');
  const navPointer = nav?.querySelector<HTMLElement>('.nav-pointer');
  const navItems = nav?.querySelectorAll<HTMLAnchorElement>('.nav-item');

  const mobileNav = document.getElementById('mobile-nav');
  const mobileTabs = mobileNav?.querySelectorAll<HTMLAnchorElement>('.mobile-tab') ?? [];

  let activeDesktopTab: HTMLAnchorElement | null = null;
  let activeMobileHref = '';
  let currentTheme: ThemeName = 'magic';
  let isClickScrolling = false;

  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const isDedicatedPage = pathname !== '/';

  // Section mapping for Homepage (when pathname === '/')
  const sectionSequence: SectionMapping[] = [
    { sectionId: 'header',       desktopHref: '/',            mobileHref: '/',              theme: 'magic' },
    { sectionId: 'what-we-do',   desktopHref: '/#products',   mobileHref: '/#products',     theme: 'magic' },
    { sectionId: 'products',     desktopHref: '/#products',   mobileHref: '/#products',     theme: 'magic' },
    { sectionId: 'solutions',    desktopHref: '/layanan',     mobileHref: '/layanan',       theme: 'magic' },
    { sectionId: 'why-magis',    desktopHref: '/layanan',     mobileHref: '/layanan',       theme: 'magic' },
    { sectionId: 'works',        desktopHref: '/#works',      mobileHref: '/#works',        theme: 'magic' },
    { sectionId: 'how-we-work',  desktopHref: '/#works',      mobileHref: '/#works',        theme: 'magic' },
    { sectionId: 'about',        desktopHref: '/tentang-kami',mobileHref: '/tentang-kami',  theme: 'magic' },
    { sectionId: 'contact',      desktopHref: null,           mobileHref: '/tentang-kami',  theme: 'dark'  },
  ];

  const cleanDesktopActive = (): void => {
    navItems?.forEach((t) => t.classList.remove('active'));
  };

  const updatePointerPosition = (tab: HTMLAnchorElement): void => {
    if (!navPointer) return;
    navPointer.style.opacity = '1';
    navPointer.style.width = `${tab.offsetWidth}px`;
    navPointer.style.height = `${tab.offsetHeight}px`;
    navPointer.style.transform = `translate3d(${tab.offsetLeft}px, ${tab.offsetTop}px, 0)`;
  };

  const makeDesktopActive = (tab: HTMLAnchorElement | null): void => {
    if (!nav || !navPointer) return;

    if (!tab) {
      cleanDesktopActive();
      navPointer.style.opacity = '0';
      activeDesktopTab = null;
      return;
    }

    if (tab === activeDesktopTab && navPointer.style.opacity === '1') return;

    cleanDesktopActive();
    tab.classList.add('active');
    activeDesktopTab = tab;
    updatePointerPosition(tab);
  };

  const makeMobileActive = (targetHref: string): void => {
    if (activeMobileHref === targetHref) return;
    activeMobileHref = targetHref;

    mobileTabs.forEach((tab) => {
      const href = tab.getAttribute('href') || tab.dataset.href || '';
      tab.classList.toggle('active', href === targetHref);
    });
  };

  const setTheme = (theme: ThemeName): void => {
    if (currentTheme === theme) return;
    currentTheme = theme;

    ['magic', 'dark'].forEach((t) => {
      mobileNav?.classList.remove(`theme-${t}`);
    });

    mobileNav?.classList.add(`theme-${theme}`);
  };

  const getActiveMapping = (): SectionMapping => {
    const scrollY = window.scrollY;
    const vpHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // Check if at the bottom of the page
    if (scrollY + vpHeight >= docHeight - 80) {
      return sectionSequence[sectionSequence.length - 1];
    }

    // Dynamic focus line: 30% of viewport height below top
    const focusLine = scrollY + Math.max(140, vpHeight * 0.28);

    let active = sectionSequence[0];

    for (const item of sectionSequence) {
      const el = document.getElementById(item.sectionId);
      if (!el) continue;

      const top = el.getBoundingClientRect().top + scrollY;

      if (focusLine >= top) {
        active = item;
      } else {
        break;
      }
    }

    return active;
  };

  const handleScroll = (): void => {
    const scrollY = window.scrollY;

    // Subtle elevation styling when scrolled past hero threshold
    if (scrollY > 20) {
      nav?.classList.add('nav-scrolled');
    } else {
      nav?.classList.remove('nav-scrolled');
    }

    if (isDedicatedPage) {
      // On dedicated pages (/layanan, /tentang-kami), maintain current page tab active
      return;
    }

    if (isClickScrolling) return;

    const active = getActiveMapping();

    if (active.desktopHref && nav) {
      const targetTab = nav.querySelector<HTMLAnchorElement>(`.nav-links-container .nav-item[data-href="${active.desktopHref}"], .nav-links-container .nav-item[href="${active.desktopHref}"]`);
      makeDesktopActive(targetTab);
    } else {
      makeDesktopActive(null);
    }

    makeMobileActive(active.mobileHref);
    setTheme(active.theme);
  };

  let scrollTicking = false;
  const onScrollTick = (): void => {
    if (!scrollTicking) {
      requestAnimationFrame(() => {
        handleScroll();
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  };

  // Scroll listeners
  window.addEventListener('scroll', onScrollTick, { passive: true });

  // Connect with Lenis if initialized
  const attachLenis = () => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.on === 'function') {
      lenis.on('scroll', onScrollTick);
    }
  };

  setTimeout(attachLenis, 150);

  // Recalculate pointer position on resize or font load
  window.addEventListener('resize', () => {
    if (activeDesktopTab) {
      updatePointerPosition(activeDesktopTab);
    }
  }, { passive: true });

  // Recalculate pointer position when navbar width animation finishes
  nav?.addEventListener('transitionend', (e) => {
    if (e.propertyName === 'max-width' && activeDesktopTab) {
      updatePointerPosition(activeDesktopTab);
    }
  });

  // Initial setup on page load
  if (isDedicatedPage) {
    const matchingTab = nav?.querySelector<HTMLAnchorElement>(`.nav-links-container .nav-item[data-href="${pathname}"], .nav-links-container .nav-item[href="${pathname}"]`);
    if (matchingTab) {
      setTimeout(() => makeDesktopActive(matchingTab), 60);
    }
    makeMobileActive(pathname);
    handleScroll();
  } else {
    handleScroll();
  }

  const scrollToTarget = (targetEl: HTMLElement, onDone?: () => void): void => {
    const lenis = (window as any).lenis;
    const targetOffset = -70; // Clean breathing room below slimmer fixed navbar

    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetEl, {
        offset: targetOffset,
        duration: 1.0,
        onComplete: onDone,
      });
      setTimeout(() => {
        if (onDone) onDone();
      }, 1100);
    } else {
      const elementPosition = targetEl.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition + targetOffset,
        behavior: 'smooth',
      });
      setTimeout(() => {
        if (onDone) onDone();
      }, 700);
    }
  };

  // Helper to handle anchor clicks
  const handleAnchorClick = (e: MouseEvent, href: string | null) => {
    if (!href) return;

    if (href === '/') {
      if (pathname === '/') {
        const headerEl = document.getElementById('header');
        if (headerEl) {
          e.preventDefault();
          isClickScrolling = true;
          const berandaTab = nav?.querySelector<HTMLAnchorElement>('.nav-links-container .nav-item[data-href="/"], .nav-links-container .nav-item[href="/"]');
          if (berandaTab) {
            makeDesktopActive(berandaTab);
          }
          makeMobileActive('/');
          scrollToTarget(headerEl, () => {
            isClickScrolling = false;
            handleScroll();
          });
        }
      }
      return;
    }

    const isSamePageAnchor = href.startsWith('#') || (href.startsWith('/#') && pathname === '/');
    if (!isSamePageAnchor) return; // Allow natural page transition to other pages

    const targetId = href.replace(/^\/?#/, '');
    const targetEl = document.getElementById(targetId);
    if (!targetEl) return;

    e.preventDefault();
    isClickScrolling = true;

    const matchedTab = nav?.querySelector<HTMLAnchorElement>(`.nav-links-container .nav-item[data-href="${href}"], .nav-links-container .nav-item[href="${href}"]`);
    if (matchedTab) {
      makeDesktopActive(matchedTab);
    }

    scrollToTarget(targetEl, () => {
      isClickScrolling = false;
      handleScroll();
    });
  };

  // Desktop tab clicks
  navItems?.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href');
      handleAnchorClick(e, href);
    });
  });

  // Logo click
  const logoLink = nav?.querySelector<HTMLAnchorElement>('.brand-logo-wrap');
  logoLink?.addEventListener('click', (e) => {
    if (pathname === '/') {
      const headerEl = document.getElementById('header');
      if (headerEl) {
        e.preventDefault();
        isClickScrolling = true;
        makeDesktopActive(null);
        makeMobileActive('/');
        scrollToTarget(headerEl, () => {
          isClickScrolling = false;
          handleScroll();
        });
      }
    }
  });

  // CTA button click
  const ctaLink = nav?.querySelector<HTMLAnchorElement>('a[href="/#contact"], a[href="#contact"]');
  ctaLink?.addEventListener('click', (e) => {
    const href = ctaLink.getAttribute('href');
    handleAnchorClick(e, href);
  });

  // Mobile tab clicks
  mobileTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href') || tab.dataset.href;
      if (!href) return;
      handleAnchorClick(e, href);
      if (href) {
        makeMobileActive(href);
      }
    });
  });
}
