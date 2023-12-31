import { ComponentPropsWithoutRef } from 'react';

import { CheckboxProperty } from '~/shared/types';

import classes from './Checkbox.module.css';

type CheckboxProps = ComponentPropsWithoutRef<'input'> & {
  value: CheckboxProperty;
};

export function Checkbox({ children, ...props }: CheckboxProps) {
  return (
    <label className={classes.checkbox}>
      <input type="checkbox" className={classes.input} {...props} />
      <div className={classes.slider}></div>
      {children && <span className={classes.text}>{children}</span>}
    </label>
  );
}
