import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'>;

export function Button({
  className,
  children,
  ...props
}: ButtonProps): JSX.Element | null {
  const { hasButton, hasButtonText, buttonSize, hasIcon, iconPosition } =
    useAppSelector(formDataSlice.selectFromData);

  if (!hasButton) {
    return null;
  }

  const classNames = cn(
    classes.button,
    {
      [classes.small]: !hasButtonText,
      [classes.default]: hasButtonText && buttonSize === 'small',
      [classes.large]: hasButtonText && buttonSize === 'big',
      [classes.icon]: hasIcon || !hasButtonText,
      [classes.iconLeft]: hasIcon && iconPosition === 'left',
      [classes.iconRight]: hasIcon && iconPosition === 'right',
    },
    className,
  );

  return (
    <button className={classNames} {...props}>
      {hasButtonText && children}
    </button>
  );
}
