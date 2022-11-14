export const pageBody = document.querySelector('body');
const prizesJourneyIcon = document.querySelector('.prizes__item--journeys .prizes__icon');
const deviationInlineAnimation = prizesJourneyIcon.querySelector('#deviation');

deviationInlineAnimation.addEventListener('endEvent', () => prizesJourneyIcon.style.transform = 'translateX(0)');

export const removeBodyThemeClasess = ()=> {
  pageBody.classList.remove('theme-blue', 'theme-lightblue', 'theme-darkpurple');
}
