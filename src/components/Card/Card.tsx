import cn from 'classnames';

import { useAppSelector } from '~/shared/hooks';
import { FormData } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './Card.module.css';
import { Button, Description, Image, Title } from './ui';

type CardProps = {
  config: FormData;
};

export function Card({ config }: CardProps): JSX.Element {
  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);

  const cardTypeClass = classes[config.cardType];
  const isNarrowType = config.cardType === 'narrow';

  const classNames = cn(classes.card, cardTypeClass, {
    [classes.background]: !isNarrowType && hasBackground,
  });

  return (
    <div className={classNames}>
      <Image config={config} />

      <div className={classes.wrapper}>
        <Title config={config}>Заголовок модуля в пару строк</Title>

        <Description config={config}>
          Corem ipsum dolor sit amet, consectetur adipiscing elit.
        </Description>

        <Button config={config}>Перейти</Button>
      </div>
    </div>
  );
}
