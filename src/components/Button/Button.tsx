import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Button.module.css';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  iconName?: 'plus' | 'arrow';
};

export function Button({
  iconName,
  className,
  children,
  ...props
}: ButtonProps) {
  const hasIconName = iconName !== undefined;
  const iconClass = hasIconName ? classes[iconName] : '';

  const classNames = cn(classes.button, className, {
    [iconClass]: hasIconName,
  });

  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}
