import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './Title.module.css';

type TitleProps = ComponentPropsWithoutRef<'h3'>;

export function Title({
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  const { cardType, hasBackground, hasButtonText } = useAppSelector(
    formDataSlice.selectFromData,
  );

  const isSquareType = cardType === 'square';
  const isButtonSmall = hasButtonText === false;

  const cardTypeClass = classes[cardType];

  const classNames = cn(classes.title, cardTypeClass, className, {
    [classes.background]: hasBackground,
    [classes.marginTopAuto]: isSquareType && isButtonSmall,
  });

  return (
    <h3 className={classNames} {...props}>
      {children}
    </h3>
  );
}
