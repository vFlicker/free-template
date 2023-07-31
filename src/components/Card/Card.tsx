import cn from 'classnames';

import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './Card.module.css';
import { Button, Description, Image, Title } from './ui';

export function Card(): JSX.Element {
  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);
  const cardType = useAppSelector(formDataSlice.selectCardType);

  const cardTypeClass = classes[cardType];
  const isNarrowType = cardType === 'narrow';

  const classNames = cn(classes.card, cardTypeClass, {
    [classes.background]: !isNarrowType && hasBackground,
  });

  return (
    <div className={classNames}>
      <Image />

      <div className={classes.wrapper}>
        <Title>Заголовок модуля в пару строк</Title>

        <Description>
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>

        <Button>Перейти</Button>
      </div>
    </div>
  );
}