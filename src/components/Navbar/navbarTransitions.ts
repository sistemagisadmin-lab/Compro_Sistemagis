type ThemeName = 'magic' | 'dark';

interface SectionConfig {
  id: string;
  theme: ThemeName;
  navHref: string;
  mobileHref: string;
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
  let clickTimeout: ReturnType<typeof setTimeout>;

  const targets: SectionConfig[] = [
    { id: 'contact',   theme: 'dark',  navHref: '#contact',   mobileHref: '#contact' },
    { id: 'about',     theme: 'magic', navHref: '#about',     mobileHref: '#about' },
    { id: 'works',     theme: 'magic', navHref: '#works',     mobileHref: '#works' },
    { id: 'solutions', theme: 'magic', navHref: '#solutions', mobileHref: '#solutions' },
    { id: 'products',  theme: 'magic', navHref: '#products',  mobileHref: '#products' },
    { id: 'header',    theme: 'magic', navHref: '#products',  mobileHref: '#header' },
  ];

  const cleanDesktopActive = (): void => {
    navItems?.forEach((t) => t.classList.remove('active'));
  };

  const makeDesktopActive = (tab: HTMLAnchorElement | null): void => {
    if (!nav || !navPointer) return;

    if (!tab) {
      cleanDesktopActive();
      navPointer.style.opacity = '0';
      activeDesktopTab = null;
      return;
    }

    if (tab === activeDesktopTab) return;

    cleanDesktopActive();
    tab.classList.add('active');
    activeDesktopTab = tab;

    navPointer.style.opacity = '1';
    navPointer.style.width = `${tab.offsetWidth}px`;
    navPointer.style.height = `${tab.offsetHeight}px`;
    navPointer.style.transform = `translate3d(${tab.offsetLeft}px, ${tab.offsetTop}px, 0)`;
  };

  const makeMobileActive = (targetHref: string): void => {
    if (activeMobileHref === targetHref) return;
    activeMobileHref = targetHref;

    mobileTabs.forEach((tab) => {
      const href = tab.getAttribute('href') || tab.dataset.href;
      if (href === targetHref) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
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

    if (!visible) makeDesktopActive(null);
  };

  const handleScroll = (): void => {
    const scrollY = window.scrollY;
    const vpHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    if (scrollY < 180) {
      setDesktopNavbarVisibility(false);
      makeMobileActive('#header');
      setTheme('magic');
      return;
    }

    setDesktopNavbarVisibility(true);
    if (isClickScrolling) return;

    if (scrollY + vpHeight >= docHeight - 80) {
      if (nav) makeDesktopActive(nav.querySelector<HTMLAnchorElement>('a[href="#contact"]'));
      makeMobileActive('#contact');
      setTheme('dark');
      return;
    }

    const focusLine = vpHeight * 0.35;
    let activeTarget = targets[targets.length - 1];

    for (const target of targets) {
      const el = document.getElementById(target.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      if (rect.top <= focusLine && rect.bottom > 0) {
        activeTarget = target;
        break;
      }
    }

    if (nav) {
      makeDesktopActive(nav.querySelector<HTMLAnchorElement>(`a[href="${activeTarget.navHref}"]`));
    }
    makeMobileActive(activeTarget.mobileHref);
    setTheme(activeTarget.theme);
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

  window.addEventListener('scroll', onScrollTick, { passive: true });

  setTimeout(() => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.on === 'function') {
      lenis.on('scroll', onScrollTick);
    }
  }, 150);

  handleScroll();

  const scrollToTarget = (targetEl: HTMLElement): void => {
    const lenis = (window as any).lenis;
    if (lenis && typeof lenis.scrollTo === 'function') {
      lenis.scrollTo(targetEl, { offset: -20, duration: 1.2 });
    } else {
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  navItems?.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href');
      if (!href?.startsWith('#')) return;
      e.preventDefault();

      const targetEl = document.querySelector<HTMLElement>(href);
      if (!targetEl) return;

      isClickScrolling = true;
      clearTimeout(clickTimeout);

      makeDesktopActive(tab);

      const matched = [...targets].reverse().find((t) => `#${t.id}` === href || t.navHref === href);
      if (matched) {
        setTheme(matched.theme);
        makeMobileActive(matched.mobileHref);
      }

      scrollToTarget(targetEl);

      clickTimeout = setTimeout(() => {
        isClickScrolling = false;
        handleScroll();
      }, 1300);
    });
  });

  mobileTabs.forEach((tab) => {
    tab.addEventListener('click', (e) => {
      const href = tab.getAttribute('href') || tab.dataset.href;
      if (!href?.startsWith('#')) return;
      e.preventDefault();

      const targetEl = document.querySelector<HTMLElement>(href);
      if (!targetEl) return;

      isClickScrolling = true;
      clearTimeout(clickTimeout);

      makeMobileActive(href);

      const matched = [...targets].reverse().find((t) => `#${t.id}` === href || t.mobileHref === href || t.navHref === href);
      if (matched) {
        setTheme(matched.theme);
        if (nav) makeDesktopActive(nav.querySelector<HTMLAnchorElement>(`a[href="${matched.navHref}"]`));
      }

      scrollToTarget(targetEl);

      clickTimeout = setTimeout(() => {
        isClickScrolling = false;
        handleScroll();
      }, 1300);
    });
  });
}
