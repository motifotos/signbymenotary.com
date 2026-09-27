// Change only this value to switch the entire site's visual direction:
// 0 = Atlantic Trust (blue) · 1 = Heritage Signature (teal + gold)
const themeVariant = 1;

document.documentElement.dataset.theme = String(themeVariant === 0 ? 0 : 1);

const header = document.querySelector('[data-header]');
const navToggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');

const setHeaderState = () => {
  header?.classList.toggle('is-scrolled', window.scrollY > 16);
};

setHeaderState();
window.addEventListener('scroll', setHeaderState, { passive: true });

navToggle?.addEventListener('click', () => {
  const isOpen = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!isOpen));
  nav?.classList.toggle('is-open', !isOpen);
  document.body.classList.toggle('nav-open', !isOpen);
});

nav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navToggle?.setAttribute('aria-expanded', 'false');
    nav.classList.remove('is-open');
    document.body.classList.remove('nav-open');
  });
});

document.querySelectorAll('[data-accordion] .faq-item button').forEach((button) => {
  button.addEventListener('click', () => {
    const item = button.closest('.faq-item');
    const answer = item?.querySelector('.faq-answer');
    const icon = button.querySelector('b');
    const willOpen = button.getAttribute('aria-expanded') !== 'true';

    document.querySelectorAll('[data-accordion] .faq-item').forEach((otherItem) => {
      const otherButton = otherItem.querySelector('button');
      const otherAnswer = otherItem.querySelector('.faq-answer');
      const otherIcon = otherButton?.querySelector('b');
      otherItem.classList.remove('is-open');
      otherButton?.setAttribute('aria-expanded', 'false');
      if (otherAnswer) otherAnswer.hidden = true;
      if (otherIcon) otherIcon.textContent = '+';
    });

    if (willOpen && item && answer) {
      item.classList.add('is-open');
      button.setAttribute('aria-expanded', 'true');
      answer.hidden = false;
      if (icon) icon.textContent = '−';
    }
  });
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

document.querySelector('[data-dismiss-notice]')?.addEventListener('click', (event) => {
  event.currentTarget.closest('.preview-notice')?.remove();
});

document.querySelectorAll('[data-year]').forEach((item) => {
  item.textContent = new Date().getFullYear();
});
