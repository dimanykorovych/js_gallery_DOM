'use strict';

const largeImg = document.querySelector('#largeImg');
const galeryLinks = document.querySelectorAll('.list-item__link');

galeryLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    const galeryThumb = link.querySelector('.gallery__thumb');

    largeImg.setAttribute('src', galeryThumb.getAttribute('src'));
  });
});
