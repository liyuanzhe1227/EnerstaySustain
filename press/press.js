(() => {
  const root = document.documentElement;
  const setLanguage = (language) => {
    const selected = language === 'zh' ? 'zh' : 'en';
    document.querySelectorAll('[data-en][data-zh]').forEach((element) => {
      element.textContent = element.dataset[selected];
    });
  };

  const syncLanguage = () => setLanguage(root.lang.toLowerCase().startsWith('zh') ? 'zh' : 'en');
  syncLanguage();
  new MutationObserver(syncLanguage).observe(root, { attributes: true, attributeFilter: ['lang'] });

  const bookSelect = document.querySelector('[data-order-book]');
  if (bookSelect) {
    const requested = new URLSearchParams(location.search).get('book');
    if (requested && [...bookSelect.options].some((option) => option.value === requested)) {
      bookSelect.value = requested;
    }
  }
})();
