import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Title.module.css';

type TitleProps = ComponentPropsWithoutRef<'h3'>;

export function Title({
  className,
  children,
  ...props
}: TitleProps): JSX.Element {
  const classNames = cn(classes.title, className);

  return (
    <h3 className={classNames} {...props}>
      {children}
    </h3>
  );
}
