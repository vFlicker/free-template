import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './Description.module.css';

type DescriptionProps = ComponentPropsWithoutRef<'p'>;

export function Description({
  className,
  children,
  ...props
}: DescriptionProps): JSX.Element | null {
  const { cardType, hasDescription, hasBackground } = useAppSelector(
    formDataSlice.selectFromData,
  );

  if (!hasDescription) {
    return null;
  }

  const cardTypeClass = classes[cardType];

  const classNames = cn(classes.description, cardTypeClass, className, {
    [classes.background]: hasBackground,
  });

  return (
    <p className={classNames} {...props}>
      {children}
    </p>
  );
}
