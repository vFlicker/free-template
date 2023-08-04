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
  hasButton,
  hasDescription,
  hasIcon,
  hasImage,
  hasText,
}: FormData): string => {
  const classes = [];

  if (hasButton === false) {
    classes.push('no-button');
  }

  if (hasDescription === false) {
    classes.push('no-description');
  }

  if (hasBackground === true) {
    classes.push('background-image');
  }

  if (cardType !== 'square' && hasImage === true && hasBackground === false) {
    classes.push('add-image');
  }

  if (hasButton === true && hasText === true && hasIcon === false) {
    classes.push('button-large');
  }

  if (hasButton === true && hasText === true && hasIcon === true) {
    classes.push('button-large-right-icon');
  }

  if (hasButton === true && hasText === false) {
    classes.push('button-small');
  }

  return classes.join(' ');
};

export const createJsFileText = (formData: FormData): string => {
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
