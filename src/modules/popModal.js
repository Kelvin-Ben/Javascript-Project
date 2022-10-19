import { renderImage2 } from './createImg.js'
const displayModal = document.querySelector('.modal-content');
const modalTemplate = (element) => {
  displayModal = '';
  displayModal = 
    `<div class="modal-items" >
      <span class="span-close">&times;</span>
      <div class="modal-image" >${renderImage2(element.image.medium)}</div>
      <h3>Movie 1</h3>
      <div class="modal-description" >
        <div>modal-description 1</div>
        <div>modal-description 2</div>
      </div>
      <h3 class="modal-header2" >Comments(2)</h3>
      <div class="modal-comments" >
        <p>Coment 1</p>
        <p>Coment 2</p>
        <p>Coment 3</p>
        <p>Coment 4</p>
        <p>Coment 5</p>
        <p>Coment 4</p>
        <p>Coment 4</p>
      </div>
      <h3>Add a comment</h3>
      <div>
        <form action="#" class="comment-form">
          <input type="text" placeholder="Your Name" ><br><br>
          <textarea rows="8" cols="40" placeholder="Your Insight">            
          </textarea><br><br>
          <input type="button" value="Comment">
        </form>
      </div>
    </div>
  `;

  const spanClose = document.querySelector('.span-close');

  spanClose.addEventListener('click', (e) => {
    e.preventDefault();
    displayModal.style.display = 'none';
    gridContainer.style.display = 'grid';
    header.style.display = 'flex';
    footer.style.display = 'block';
  });

};

export default modalTemplate