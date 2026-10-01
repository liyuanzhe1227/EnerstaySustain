(() => {
  const root = document.documentElement;
  const menuButton = document.querySelector('[data-journal-menu]');
  const navigation = document.querySelector('[data-journal-nav]');

  const setLanguage = (language) => {
    const selected = language === 'zh' ? 'zh' : 'en';
    root.lang = selected === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      element.textContent = element.dataset[selected];
    });
    document.querySelectorAll('[data-journal-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.journalLanguage === selected));
    });
    localStorage.setItem('jeaca-language', selected);
  };

  menuButton?.addEventListener('click', () => {
    const open = navigation?.dataset.open !== 'true';
    if (navigation) navigation.dataset.open = String(open);
    menuButton.setAttribute('aria-expanded', String(open));
  });

  navigation?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.dataset.open = 'false';
      menuButton?.setAttribute('aria-expanded', 'false');
    });
  });

  document.querySelectorAll('[data-journal-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.journalLanguage));
  });

  document.querySelectorAll('[data-share-article]').forEach((button) => {
    button.addEventListener('click', async () => {
      const payload = { title: document.title, url: location.href };
      try {
        if (navigator.share) await navigator.share(payload);
        else {
          await navigator.clipboard.writeText(location.href);
          button.textContent = root.lang === 'zh-CN' ? '已复制链接' : 'Link copied';
        }
      } catch (_) {
        // A cancelled native share sheet is not an error for the reader.
      }
    });
  });

  const accessSelect = document.querySelector('[data-access-article]');
  if (accessSelect) {
    const requested = new URLSearchParams(location.search).get('article');
    if (requested && [...accessSelect.options].some((option) => option.value === requested)) {
      accessSelect.value = requested;
    }
  }

  setLanguage(localStorage.getItem('jeaca-language') || 'en');
})();
