window.addEventListener('DOMContentLoaded', function () {
  const firstPage = $('#main-page');
  const firstPageBg = $('#main-page-bg');
  const skillSections = $$('#my-skill-page section');

  function updateFirstPage() {
    const scale = Math.max(0, (scrollY / innerHeight - 0.1) * 2);
    const blur = scale * 50;
    if (scale > 2) return;
    firstPageBg.style.background = `rgba(255,255,255,${scale})`;
    // firstPage.style.filter = `blur(${blur}px)`;
  }

  function updateFadeInOnView() {
    const bodyRect = document.body.getBoundingClientRect();
    const targetClass = 'fade-in-on-view';
    Array.from($$(`.${targetClass}`)).forEach(elem => {
      const rect = elem.getBoundingClientRect();
      const top = rect.top - bodyRect.top;
      const isOnView = top < scrollY + innerHeight / 2;
      const animated = elem.getAttribute('animated');

      if (!isOnView) return;

      elem.setAttribute('animated', 1);
    });
  }

  window.addEventListener('scroll', function () {
    updateFirstPage();
    updateFadeInOnView();
  });
});
