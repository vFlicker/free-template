import cn from 'classnames';

import { Card } from '~/components/Card';
import { ControlPanel } from '~/components/ControlPanel';
import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './ConstructorPage.module.css';

const title = 'Прямоугольные вертикальные карточки';

export function ConstructorPage(): JSX.Element {
  const cardType = useAppSelector(formDataSlice.selectCardType);
  const cardTypeClass = classes[cardType];
  const listClasses = cn(classes.list, cardTypeClass);

  return (
    <main className={cn(classes.main, 'container')}>
      <button className={classes.back}>{title}</button>

      <div className={classes.wrapper}>
        <ul className={listClasses}>
          <li className={classes.item}>
            <Card />
          </li>
          <li className={classes.item}>
            <Card />
          </li>
          <li className={classes.item}>
            <Card />
          </li>
          <li className={classes.item}>
            <Card />
          </li>
          <li className={classes.item}>
            <Card />
          </li>
          <li className={classes.item}>
            <Card />
          </li>
        </ul>

        <ControlPanel />
      </div>
    </main>
  );
}
