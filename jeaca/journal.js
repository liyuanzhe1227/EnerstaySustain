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

})();
