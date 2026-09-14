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
  let isNavVisible = false;
  let currentTheme: ThemeName = 'magic';
  let isClickScrolling = false;

  // Complete mapping of every section in DOM order (from top to bottom)
  // Ensures zero dead zones or incorrect backward jumps
  const sectionSequence: SectionMapping[] = [
    { sectionId: 'header',       desktopHref: null,         mobileHref: '#header',    theme: 'magic' },
    { sectionId: 'what-we-do',   desktopHref: '#products',  mobileHref: '#header',    theme: 'magic' },
    { sectionId: 'products',     desktopHref: '#products',  mobileHref: '#products',  theme: 'magic' },
    { sectionId: 'solutions',    desktopHref: '#solutions', mobileHref: '#solutions', theme: 'magic' },
    { sectionId: 'why-magis',    desktopHref: '#solutions', mobileHref: '#solutions', theme: 'magic' },
    { sectionId: 'works',        desktopHref: '#works',     mobileHref: '#works',     theme: 'magic' },
    { sectionId: 'how-we-work',  desktopHref: '#works',     mobileHref: '#works',     theme: 'magic' },
    { sectionId: 'about',        desktopHref: '#about',     mobileHref: '#about',     theme: 'magic' },
    { sectionId: 'contact',      desktopHref: '#about',     mobileHref: '#about',     theme: 'dark'  },
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
      const href = tab.getAttribute('href') || tab.dataset.href;
      tab.classList.toggle('active', href === targetHref);
    });
  };

  const setTheme = (theme: ThemeName): void => {
    if (currentTheme === theme) return;
    currentTheme = theme;

    ['magic', 'dark'].forEach((t) => {
      nav?.classList.remove(`theme-${t}`);
      mobileNav?.classList.remove(`theme-${t}`);
    });

    nav?.classList.add(`theme-${theme}`);
    mobileNav?.classList.add(`theme-${theme}`);
  };

  const setDesktopNavbarVisibility = (visible: boolean): void => {
    if (!nav) return;
    if (isNavVisible === visible) return;
    isNavVisible = visible;

    nav.classList.toggle('nav-visible', visible);
    nav.classList.toggle('nav-hidden', !visible);

    if (!visible) {
      makeDesktopActive(null);
    }
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

      // Use document-relative top position
      const top = el.getBoundingClientRect().top + scrollY;

      if (focusLine >= top) {
        active = item;
      } else {
        break; // Passed the current focus line, keep previous active
      }
    }

    return active;
  };

  const handleScroll = (): void => {
    const scrollY = window.scrollY;

    // Hide desktop navbar when at top of hero
    if (scrollY < 120) {
      setDesktopNavbarVisibility(false);
      makeMobileActive('#header');
      setTheme('magic');
      return;
    }

    setDesktopNavbarVisibility(true);
    if (isClickScrolling) return;

    const active = getActiveMapping();

    if (active.desktopHref && nav) {
      const targetTab = nav.querySelector<HTMLAnchorElement>(`a[href="${active.desktopHref}"]`);
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

  // Initial check
  handleScroll();

  const scrollToTarget = (targetEl: HTMLElement, onDone?: () => void): void => {
    const lenis = (window as any).lenis;
    const targetOffset = -85; // Clean breathing room below fixed navbar

    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetEl, {
        offset: targetOffset,
        duration: 1.0,
        onComplete: onDone,
      });
      // Safety fallback in case onComplete isn't called
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

  // Desktop tab clicks
  navItems?.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();

      const targetEl = document.querySelector<HTMLElement>(href);
      if (!targetEl) return;

      isClickScrolling = true;
      makeDesktopActive(tab);

      // Match theme & mobile tab
      const matched = sectionSequence.find((s) => s.desktopHref === href || `#${s.sectionId}` === href);
      if (matched) {
        setTheme(matched.theme);
        makeMobileActive(matched.mobileHref);
      }

      scrollToTarget(targetEl, () => {
        isClickScrolling = false;
        handleScroll();
      });
    });
  });

  // Mobile tab clicks
  mobileTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href') || tab.dataset.href;
      if (!href?.startsWith('#')) return;
      e.preventDefault();

      const targetEl = document.querySelector<HTMLElement>(href);
      if (!targetEl) return;

      isClickScrolling = true;
      makeMobileActive(href);

      const matched = sectionSequence.find((s) => s.mobileHref === href || `#${s.sectionId}` === href);
      if (matched) {
        setTheme(matched.theme);
        if (matched.desktopHref && nav) {
          makeDesktopActive(nav.querySelector<HTMLAnchorElement>(`a[href="${matched.desktopHref}"]`));
        }
      }

      scrollToTarget(targetEl, () => {
        isClickScrolling = false;
        handleScroll();
      });
    });
  });
}
