document.addEventListener('DOMContentLoaded', () => {

  const heroCarouselElement =
    document.querySelector('#heroCarousel');

  if (heroCarouselElement) {

    const heroCarousel =
      new bootstrap.Carousel(heroCarouselElement, {
        interval: 5000,
        wrap: true
      });

    heroCarouselElement.addEventListener(
      'click',
      () => heroCarousel.next()
    );
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