export default class AccentTypographyBuild {
  constructor(
    elementSelector,
    classForActivate
  ) {
    this._TIME_SPACE = 100;

    this._elementSelector = elementSelector;
    this._classForActivate = classForActivate;

    this._element = document.querySelector(this._elementSelector);
    this._timeOffset = 0;

    this.prePareText();
  }

  createElement(letter) {
    const span = document.createElement(`span`);
    span.textContent = letter;
    return span;
  }

  prePareText() {
    if (!this._element) {
      return;
    }

    let regExp = /^\S+/;
    const text = this._element.textContent.trim().split(` `).filter((latter) => latter !== '');
    const elementBlockClassName = this._element.className;
    const specialClassName = 'text-word';
    const BEMClassName = elementBlockClassName.match(regExp);

    const content = text.reduce((fragmentParent, word) => {
      const wordElement = Array.from(word).reduce((fragment, latter) => {
        fragment.appendChild(this.createElement(latter));
        return fragment;
      }, document.createDocumentFragment());
      const wordContainer = document.createElement(`span`);
      wordContainer.classList.add(BEMClassName + `-word`, specialClassName);
      wordContainer.appendChild(wordElement);
      fragmentParent.appendChild(wordContainer);
      return fragmentParent;
    }, document.createDocumentFragment());

    this._element.innerHTML = ``;
    this._element.appendChild(content);
  }

  runAnimation() {
    if (!this._element) {
      return;
    }
    this._element.classList.add(this._classForActivate);
  }

  destroyAnimation() {
    this._element.classList.remove(this._classForActivate);
  }
}

const animationTextIntroTitle = new AccentTypographyBuild(`.intro__title`, `active`);
const animationTextIntroDate = new AccentTypographyBuild(`.intro__date`, `active`);
const animationTextSliderTitle = new AccentTypographyBuild(`.slider__item-title`, `active`);
const animationTextPrizesTitle = new AccentTypographyBuild(`.prizes__title`, `active`);
const animationTextRulesTitle = new AccentTypographyBuild(`.rules__title`, `active`);
const animationTextGamesTitle = new AccentTypographyBuild(`.game__title`, `active`);

setTimeout(() => {
  animationTextIntroTitle.runAnimation();
  animationTextIntroDate.runAnimation();
  animationTextSliderTitle.runAnimation();
  animationTextPrizesTitle.runAnimation();
  animationTextRulesTitle.runAnimation();
  animationTextGamesTitle.runAnimation();
}, 500);
