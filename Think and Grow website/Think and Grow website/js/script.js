document.addEventListener('DOMContentLoaded', () => {

  const heroCarouselElement =
    document.querySelector('#heroCarousel');

  if (heroCarouselElement) {

    const heroCarousel =
      new bootstrap.Carousel(heroCarouselElement, {
        interval: 4000,
        wrap: true,
        touch: true
      });

    // Click anywhere on carousel to go to next image
    heroCarouselElement.addEventListener(
      'click',
      (e) => {
        // Don't trigger next if clicking carousel controls
        if (!e.target.closest('.carousel-control-prev, .carousel-control-next')) {
          heroCarousel.next();
        }
      }
    );

    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        heroCarousel.prev();
      } else if (e.key === 'ArrowRight') {
        heroCarousel.next();
      }
    });
  }

  const form = document.querySelector('#pledgeForm');

  if (!form) return;

  form.addEventListener('submit', (event) => {

    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const name =
      document.querySelector('#name').value.trim();

    const action =
      document.querySelector('#action').value;

    const message =
      document.querySelector('#formMessage');

    message.textContent =
      `Thank you, ${name}. Your action to "${action}" has been recorded on this page.`;

    message.classList.remove('d-none');

    form.reset();

  });

});
