import {pageBody} from "./utils";

export default ()=> {

  const pageLoadClass = 'js-page-load';

  window.addEventListener('load', ()=> {
    pageBody.classList.add(pageLoadClass);

    if (document.URL.indexOf('prizes') !== -1) {
      document.querySelector('#appearance').beginElement();
    }
  });
};
