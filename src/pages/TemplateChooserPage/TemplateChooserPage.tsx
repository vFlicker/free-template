import { Slider } from '~/components/Slider';

import classes from './TemplateChooserPage.module.css';

export function TemplateChooserPage(): JSX.Element {
  return (
    <main className={classes.main}>
      <h3 className={classes.title}>Выберите стиль карточек</h3>
      <Slider />
    </main>
  );
}
