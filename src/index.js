import './style.css';
import img from './assets/logo.png';

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;