import { FormData } from '~/shared/types';

import { getClasses } from './urils';

const cardId = {
  rectangular: 'vertical-cards',
  narrow: 'narrow-cards',
  square: 'square-cards',
  wide: 'heavy-cards',
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

  training.querySelector('a > div b')
    ? training.querySelector('a > div b').remove()
    : '';

  training.querySelector('a > div').innerText = training
    .querySelector('a > div')
    .innerText.replace('нет уроков', '');
}`;
};
