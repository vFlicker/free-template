import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import { FormData } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './Title.module.css';

type TitleProps = ComponentPropsWithoutRef<'h3'> & {
  config: FormData;
};

export function Title({
  config,
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  const { cardType } = config;
  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);
  const hasText = useAppSelector(formDataSlice.selectHasText);
  const isSquareType = config.cardType === 'square';
  const isButtonSmall = hasText === false;

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
