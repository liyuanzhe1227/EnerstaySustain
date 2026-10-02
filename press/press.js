(() => {
  const root = document.documentElement;
  const setLanguage = (language) => {
    const selected = language === 'zh' ? 'zh' : 'en';
    root.lang = selected === 'zh' ? 'zh-CN' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      element.textContent = element.dataset[selected];
    });
    document.querySelectorAll('[data-press-language]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.pressLanguage === selected));
    });
    localStorage.setItem('enerstay-press-language', selected);
  };

  document.querySelectorAll('[data-press-language]').forEach((button) => {
    button.addEventListener('click', () => setLanguage(button.dataset.pressLanguage));
  });
  setLanguage(localStorage.getItem('enerstay-press-language') || 'en');

  const menu = document.querySelector('[data-press-menu]');
  const nav = document.querySelector('[data-press-nav]');
  if (menu && nav) {
    menu.addEventListener('click', () => {
      const open = menu.getAttribute('aria-expanded') !== 'true';
      menu.setAttribute('aria-expanded', String(open));
      nav.toggleAttribute('data-open', open);
    });
    nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
      menu.setAttribute('aria-expanded', 'false');
      nav.removeAttribute('data-open');
    }));
  }

  const bookSelect = document.querySelector('[data-order-book]');
  if (bookSelect) {
    const requested = new URLSearchParams(location.search).get('book');
    if (requested && [...bookSelect.options].some((option) => option.value === requested)) {
      bookSelect.value = requested;
    }
  }
})();
