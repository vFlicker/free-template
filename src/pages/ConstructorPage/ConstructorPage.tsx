import cn from 'classnames';

import classes from './ConstructorPage.module.css';

const title = 'Прямоугольные вертикальные карточки';

export function ConstructorPage(): JSX.Element {
  return (
    <main className={cn(classes.main, 'container')}>
      <button className={classes.back}>{title}</button>

      <div className={classes.wrapper}></div>
    </main>
  );
}
