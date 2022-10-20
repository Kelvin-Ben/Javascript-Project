import { renderImage2 } from './createImg.js';

const displayModal = document.querySelector('.modal-content');
const grid = document.querySelector('.grid-container');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');

const popModal = (element) => {
  displayModal.innerHTML = '';
  const ItemsCont = document.createElement('div');
  ItemsCont.classList.add('modal-items');

  const closeSpan = document.createElement('span');
  closeSpan.classList.add('span-close');
  closeSpan.innerHTML = '&times;';
  closeSpan.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal.style.display = 'none';
    grid.style.display = 'grid';
    header.style.display = 'flex';
    footer.style.display = 'block';
  });
  const showTitle = document.createElement('h3');
  showTitle.innerHTML = element.name;

  const elementItems = document.createElement('div');
  elementItems.classList.add('modal-description');

  const showLang = document.createElement('div');
  showLang.classList.add('list-item');
  showLang.innerHTML = `main Language: ${element.language}`;

  const showTime = document.createElement('div');
  showTime.classList.add('list-item');
  showTime.innerHTML = `runtime: ${element.runtime}`;

  const showPremiere = document.createElement('div');
  showPremiere.classList.add('list-item');
  showPremiere.innerHTML = `premiered on: ${element.premiered}`;

  const showGenre = document.createElement('div');
  showGenre.classList.add('list-item');
  showGenre.innerHTML = `Genre: ${element.genres[0]}`;

  const showDesc = document.createElement('p');
  showDesc.classList.add('show-description');
  const string = element.summary.slice(0, 200);
  showDesc.innerHTML = `${string}...`;

  const modalCommentHeader = document.createElement('h3');
  modalCommentHeader.classList.add('modal-header2');
  modalCommentHeader.innerHTML = 'Comments';

  const modalCommentContainer = document.createElement('div');
  modalCommentContainer.classList.add('modal-comments');

  const modalFormHeader = document.createElement('h3');
  modalFormHeader.innerHTML = 'Add a comment';

  const modalForm = document.createElement('form');
  modalForm.classList.add('comment-form');

  const formInput = document.createElement('input');
  formInput.setAttribute('type', 'text');
  formInput.setAttribute('placeholder', 'Your Name');
  modalForm.appendChild(formInput);

  const textArea = document.createElement('textarea');
  textArea.setAttribute('rows', '6');
  textArea.setAttribute('column', '40');
  textArea.setAttribute('placeholder', 'Your Insight');
  modalForm.appendChild(textArea);

  const formSubmit = document.createElement('input');
  formSubmit.setAttribute('type', 'button');
  formSubmit.setAttribute('value', 'Submit');
  formSubmit.classList.add('form-btn');
  modalForm.appendChild(formSubmit);

  ItemsCont.append(closeSpan);
  renderImage2(element.image.medium, ItemsCont);
  ItemsCont.append(showTitle, elementItems, modalCommentHeader);
  ItemsCont.append(modalCommentContainer, modalFormHeader, modalForm);
  displayModal.append(ItemsCont);
  elementItems.append(showLang, showPremiere, showGenre, showTime, showDesc);

  const btn = document.querySelector('.form-btn');
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (textArea.value && formInput.value) {
      const now = new Date();
      const options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
      };
      const locale = navigator.us;
      const html = `<p>${new Intl.DateTimeFormat(locale, options).format(now)}  ${formInput.value}: ${textArea.value}</p>`;
      modalCommentContainer.insertAdjacentHTML('beforeend', html);
      textArea.value = '';
      formInput.value = '';
    }
  });
};

/* Get the id, url, image: testSample.image.medium, name, language,
runtime,premiered on:,  genre: testSample.genres[0], and summary  */

export default popModal;