export const createJsFileText = (formData: any) => {
  const templateId = 'square-cards';

  return `// seacrh all trainings on page
const trainings = document.querySelectorAll('#${templateId} .stream-table tr');

// add classes
const classes = ['button-small', 'button-right'];
const classesString = classes.join(' ');
for (let training of trainings) {
  training.className += ' ' + classesString;
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
