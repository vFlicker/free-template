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
  const { cardType } = useAppSelector(formDataSlice.selectFromData);
  const cardTypeClass = classes[cardType];
  const cardListClasses = cn(classes.list, cardTypeClass);

  return (
    <main className={cn(classes.main, 'container')}>
      <Link to={AppRoute.ROOT} className={classes.back}>
        {title[cardType]}
      </Link>

      <div className={classes.wrapper}>
        <div className={cardListClasses}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>

        <ControlPanel />
      </div>
    </main>
  );
}
