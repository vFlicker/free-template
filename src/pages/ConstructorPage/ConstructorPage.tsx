import cn from 'classnames';
import { Link } from 'react-router-dom';

import { Card } from '~/components/Card';
import { ControlPanel } from '~/components/ControlPanel';
import { AppRoute } from '~/shared/constants';
import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import { title } from './config';
import classes from './ConstructorPage.module.css';

export function ConstructorPage(): JSX.Element {
  const cardType = useAppSelector(formDataSlice.selectCardType);
  const cardTypeClass = classes[cardType];
  const listClasses = cn(classes.list, cardTypeClass);

  return (
    <main className={cn(classes.main, 'container')}>
      <Link to={AppRoute.ROOT} className={classes.back}>
        {title[cardType]}
      </Link>

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
