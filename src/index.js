import './style.css';
import img from './assets/logo.png';
import renderCards from './modules/renderContent.js';
import { artCounter } from './modules/helperMethods.js';

const image = document.querySelector('.logo');
image.innerHTML = `<img class="img-logo" src="${img}" alt="my logo">`;
const articlesDisplay = document.querySelector('.article-counter');

const counterFunc = async () => {
  const counter = await artCounter();
  articlesDisplay.innerHTML = `Shows: ${counter}`;
};

counterFunc();

renderCards();