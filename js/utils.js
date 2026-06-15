(() => {
  'use strict';

  function escapeHTML(value = '') {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  Object.defineProperty(window, 'PortfolioUtils', {
    value: Object.freeze({ escapeHTML }),
    configurable: false,
    writable: false
  });
})();
