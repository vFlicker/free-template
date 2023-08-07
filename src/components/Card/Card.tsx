import cn from 'classnames';

import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './Card.module.css';
import { Button, Description, Image, Title } from './ui';

export function Card(): JSX.Element {
  const { cardType, hasBackground, buttonPosition } = useAppSelector(
    formDataSlice.selectFromData,
  );

  const cardTypeClass = classes[cardType];

  const classNames = cn(classes.card, cardTypeClass, {
    [classes.background]: cardType !== 'narrow' && hasBackground,
    [classes.buttonLeft]: buttonPosition === 'left',
    [classes.buttonRight]: buttonPosition === 'right',
  });

  return (
    <article className={classNames}>
      <Image className={classes.image} />

      <div className={classes.wrapper}>
        <Title className={classes.title}>Заголовок модуля в пару строк</Title>

        <Description className={classes.description}>
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>

        <Button className={classes.button}>Перейти</Button>
      </div>
    </article>
  );
}
