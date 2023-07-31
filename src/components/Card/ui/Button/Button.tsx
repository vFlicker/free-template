import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import { FormData } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  config: FormData;
};

export function Button({
  config,
  className,
  children,
  ...props
}: ButtonProps): JSX.Element | null {
  const { cardType } = config;
  const hasIcon = useAppSelector(formDataSlice.selectHasIcon);
  const hasText = useAppSelector(formDataSlice.selectHasText);
  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);
  const hasButton = useAppSelector(formDataSlice.selectHasButton);

  if (!hasButton) {
    return null;
  }

  const cardTypeClass = classes[cardType];

  const classNames = cn(classes.button, cardTypeClass, className, {
    [classes.large]: hasText,
    [classes.icon]: hasIcon || !hasText,
    [classes.background]: hasBackground,
  });

  return (
    <button className={classNames} {...props}>
      {hasText && children}
    </button>
  );
}
