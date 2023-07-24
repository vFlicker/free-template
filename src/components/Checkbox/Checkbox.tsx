import { ComponentPropsWithoutRef } from 'react';

import classes from './Checkbox.module.css';

type CheckboxProps = ComponentPropsWithoutRef<'input'>;

export function Checkbox({ children }: CheckboxProps) {
  return (
    <label className={classes.checkbox}>
      <input type="checkbox" className={classes.input} />
      <div className={classes.slider}></div>
      {children && <span className={classes.text}>{children}</span>}
    </label>
  );
}
