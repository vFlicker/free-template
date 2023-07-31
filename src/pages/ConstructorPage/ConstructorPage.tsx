import cn from 'classnames';

import { Card } from '~/components/Card';
import { ControlPanel } from '~/components/ControlPanel';

import { config } from './config';
import classes from './ConstructorPage.module.css';

const title = 'Прямоугольные вертикальные карточки';

export function ConstructorPage(): JSX.Element {
  const cardTypeClass = classes[config.cardType];
  const listClasses = cn(classes.list, cardTypeClass);

  return (
    <main className={cn(classes.main, 'container')}>
      <button className={classes.back}>{title}</button>

      <div className={classes.wrapper}>
        <ul className={listClasses}>
          <li className={classes.item}>
            <Card config={config} />
          </li>
          <li className={classes.item}>
            <Card config={config} />
          </li>
          <li className={classes.item}>
            <Card config={config} />
          </li>
          <li className={classes.item}>
            <Card config={config} />
          </li>
          <li className={classes.item}>
            <Card config={config} />
          </li>
          <li className={classes.item}>
            <Card config={config} />
          </li>
        </ul>

        <ControlPanel />
      </div>
    </main>
  );
}
