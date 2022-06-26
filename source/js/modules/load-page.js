export default ()=> {

  const pageBody = document.querySelector(body);
  const pageLoadClass = 'js-page-load';

  window.addEventListener('load', ()=> {
    pageBody.classList.add(pageLoadClass);
  });
};
