// Blake landing — toggle de idioma (PT/EN) e tema (dark/light)

(function () {
  const root = document.documentElement;
  const body = document.body;
  const langBtn = document.getElementById('lang-toggle');
  const themeBtn = document.getElementById('theme-toggle');
  const themeLabel = document.getElementById('theme-label');

  // ── Idioma ──
  let lang = localStorage.getItem('blake-lang') || 'pt';

  function applyLang() {
    root.lang = lang === 'pt' ? 'pt-BR' : 'en';
    document.querySelectorAll('[data-pt]').forEach((el) => {
      const value = el.getAttribute(lang === 'pt' ? 'data-pt' : 'data-en');
      if (value !== null) el.textContent = value;
    });
    langBtn.textContent = lang === 'pt' ? 'EN' : 'PT';
    langBtn.title = lang === 'pt' ? 'Switch to English' : 'Mudar para português';
  }

  langBtn.addEventListener('click', () => {
    lang = lang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('blake-lang', lang);
    applyLang();
  });

  // ── Tema ──
  let theme = localStorage.getItem('blake-theme') || 'dark';

  function applyTheme() {
    body.classList.toggle('light', theme === 'light');
    themeLabel.textContent = theme.toUpperCase();
  }

  themeBtn.addEventListener('click', () => {
    theme = theme === 'dark' ? 'light' : 'dark';
    localStorage.setItem('blake-theme', theme);
    applyTheme();
  });

  applyLang();
  applyTheme();
})();
