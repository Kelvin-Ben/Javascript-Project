const renderImage = (src, cont) => {
  const picCont = document.createElement('div');
  picCont.classList.add('img-cont');

  const img = document.createElement('img');
  img.srcset = src;

  picCont.append(img);
  cont.append(picCont);
};

const renderImage2 = (src, cont) => {
  const picCont = document.createElement('div');
  picCont.classList.add('modal-image');

  const img = document.createElement('img');
  img.srcset = src;

  picCont.append(img);
  cont.append(picCont);
};

export { renderImage, renderImage2 };