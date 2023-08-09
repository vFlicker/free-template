import { FormData } from '~/shared/types';

const cardId = {
  rectangular: 'vertical-cards',
  narrow: 'narrow-cards',
  square: 'square-cards',
  wide: 'heavy-cards',
};

const getClasses = ({
  cardType,
  hasBackground,
  hasDescription,
  hasImage,
  hasButton,
  hasButtonText,
  buttonSize,
  buttonPosition,
  hasIcon,
  iconPosition,
}: FormData): string => {
  const classes = [];

  /* Image & Background */
  if (cardType !== 'square' && hasBackground === false && hasImage === true) {
    classes.push('add-image');
  }

  if (hasBackground === true) {
    classes.push('background-image');
  }

  /* Description */
  if (hasDescription === false) {
    classes.push('no-description');
  }

  /* Button */
  if (hasButton === false) {
    classes.push('no-button');
  }

  if (cardType === 'wide' && buttonPosition === 'right') {
    classes.push('button-right');
  }

  if (hasButtonText === true && buttonSize === 'big' && hasIcon === false) {
    classes.push('button-large');
  }

  if (
    hasButtonText === true &&
    buttonSize === 'big' &&
    hasIcon === true &&
    iconPosition === 'left'
  ) {
    classes.push('button-large-left-icon');
  }

  if (
    hasButtonText === true &&
    buttonSize === 'big' &&
    hasIcon === true &&
    iconPosition === 'right'
  ) {
    classes.push('button-large-right-icon');
  }

  if (hasButtonText === true && buttonSize === 'small' && hasIcon === false) {
    classes.push('button-standart');
  }

  if (
    hasButtonText === true &&
    buttonSize === 'small' &&
    hasIcon === true &&
    iconPosition === 'left'
  ) {
    classes.push('button-standart-left-icon');
  }

  if (
    hasButtonText === true &&
    buttonSize === 'small' &&
    hasIcon === true &&
    iconPosition === 'right'
  ) {
    classes.push('button-standart-right-icon');
  }

  if (hasButtonText === false) {
    classes.push('button-small');
  }

  return classes.join(' ');
};

export const getJsFileString = (formData: FormData): string => {
  const templateId = cardId[formData.cardType];
  const classes = getClasses(formData);

  return `// search all trainings on page
const trainings = document.querySelectorAll('#${templateId} .stream-table tr');

// add classes
const classesString = ' ${classes}';
for (let training of trainings) {
  training.className += classesString;
}

// add button
for (let training of trainings) {
  training.querySelector('a').insertAdjacentHTML(
    'beforeend',
    \`
        <button>\${
          training.classList.contains('noaccess-mode-show')
            ? 'Недоступно'
            : 'Перейти'
        }</button>
    \`
  );
}`;
};
