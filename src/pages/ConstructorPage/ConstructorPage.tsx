import { ChangeEvent } from 'react';

import { Button } from '~/components/Button';
import { Markup } from '~/components/Markup';

import { markups } from './config';
import classes from './ConstructorPage.module.css';

export function ConstructorPage(): JSX.Element {
  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
  };

  const markupName = 'markup-3';

  const markupList = markups.map(({ id, title, value, ...props }) => {
    const selected = value === markupName;

    return (
      <li key={id} className={classes.item}>
        <Markup
          onChange={handleChange}
          value={value}
          {...props}
          selected={selected}
        >
          {title}
        </Markup>
      </li>
    );
  });

  return (
    <>
      <h1 className={classes.h1}>Конструктор страницы оплаты</h1>

      <ul className={classes.list}>{markupList}</ul>

      <Button className={classes.button} iconName="arrow">
        Продолжить
      </Button>
    </>
  );
}
