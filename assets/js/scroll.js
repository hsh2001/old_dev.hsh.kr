window.addEventListener('DOMContentLoaded', function () {
  const firstPage = $('#main-page');
  const firstPageBg = $('#main-page-bg');
  const skillSections = $$('#my-skill-page section');

  function updateFirstPage() {
    const scale = Math.max(0, (scrollY / innerHeight - 0.333) * 2);
    const blur = scale * 50;
    if (scale > 2) return;
    firstPageBg.style.background = `rgba(255,255,255,${scale})`;
    firstPage.style.filter = `blur(${blur}px)`;
  }

  function updateFadeInOnView() {
    const bodyRect = document.body.getBoundingClientRect();
    Array.from($$('.fade-in-on-view')).forEach(elem => {
      const rect = elem.getBoundingClientRect();
      const top = rect.top - bodyRect.top;
      const isOnView = top < scrollY + innerHeight / 2;
      const animated = elem.getAttribute('animated');

      if (!animated) elem.style.opacity = 0;
      if (!isOnView || elem.getAttribute('animated')) return;

      elem.setAttribute('animated', 1);

      for (let i = 1; i <= 100; i++) {
        setTimeout(function () {
          const scale = (i / 100) ** 0.75;
          elem.style.opacity = scale + 0.1;
          elem.style.transform = `translate(0, ${50 - scale * 50}px)`;
        }, i * 5);
      }
    });
  }

  window.addEventListener('scroll', function () {
    updateFirstPage();
    updateFadeInOnView();
  });
});
