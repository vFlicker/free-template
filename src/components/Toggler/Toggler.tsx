import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Toggler.module.css';

type TogglerProps = ComponentPropsWithoutRef<'input'> & {
  leftValue: string;
  rightValue: string;
  leftText: string;
  rightText: string;
};

type RadioProps = ComponentPropsWithoutRef<'input'> & {
  label: string;
};

export function Toggler({
  name,
  leftValue,
  rightValue,
  value,
  leftText,
  rightText,
  className,
  onChange,
}: TogglerProps): JSX.Element {
  const classNames = cn(classes.wrapper, className);

  return (
    <div className={classNames}>
      <Radio
        name={name}
        value={leftValue}
        label={leftText}
        checked={value === leftValue}
        onChange={onChange}
      />
      <Radio
        name={name}
        value={rightValue}
        label={rightText}
        checked={value === rightValue}
        onChange={onChange}
      />
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
