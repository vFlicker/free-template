import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Toggler.module.css';

type TogglerProps = ComponentPropsWithoutRef<'div'>;

type RadioProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export function Toggler({ className }: TogglerProps): JSX.Element {
  const classNames = cn(classes.wrapper, className);

  return (
    <div className={classNames}>
      <Radio name="method" label="Автоматически" />
      <Radio name="method" label="Вручную" checked />
    </div>
  );
}

function Radio({ label, ...props }: RadioProps): JSX.Element {
  return (
    <label className={classes.radio}>
      <input type="radio" className={classes.input} {...props} />
      <span className={classes.box}></span>
      <span className={classes.text}>{label}</span>
    </label>
  );
}
