import './style.css';
import img from './assets/logo.png';

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;

const modal = document.querySelectorAll('.grid-item');
const displayModal = document.querySelector('.modal-content');
const gridContainer = document.querySelector('.grid-container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

modal.forEach((mode) => {
  mode.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal.style.display = 'block';
    gridContainer.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
  });
});

const spanClose = document.querySelector('.close');

spanClose.addEventListener('click', (e) => {
  e.preventDefault();
  displayModal.style.display = 'none';
  gridContainer.style.display = 'grid';
  header.style.display = 'flex';
  footer.style.display = 'block';
});
