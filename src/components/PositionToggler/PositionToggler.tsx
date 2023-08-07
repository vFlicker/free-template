import { ComponentPropsWithoutRef } from 'react';

import classes from './PositionToggler.module.css';

type PositionTogglerProps = ComponentPropsWithoutRef<'input'> & {
  leftValue: string;
  rightValue: string;
  leftText: string;
  rightText: string;
};

type RadioProps = ComponentPropsWithoutRef<'input'> & {
  element: JSX.Element;
  label: string;
};

export function PositionToggler({
  name,
  value,
  leftValue,
  rightValue,
  leftText,
  rightText,
  onChange,
}: PositionTogglerProps): JSX.Element {
  return (
    <div className={classes.wrapper}>
      <div className={classes.radios}>
        <Radio
          name={name}
          label={leftText}
          value={leftValue}
          checked={leftValue === value}
          element={<Left />}
          onChange={onChange}
        />
        <Radio
          name={name}
          label={rightText}
          value={rightValue}
          checked={rightValue === value}
          element={<Right />}
          onChange={onChange}
        />
      </div>

      <span className={classes.text}>Расположение кнопки</span>
    </div>
  );
}

function Radio({ element, label, ...props }: RadioProps): JSX.Element {
  return (
    <label className={classes.radio}>
      <input type="radio" className={classes.input} {...props} />
      {element}
      <span className="visually-hidden">{label}</span>
    </label>
  );
}

function Left(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.box}
      width="24"
      height="24"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12 8-4 4m0 0 4 4m-4-4h8m-8.2 9h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33Z"
      />
    </svg>
  );
}

function Right(): JSX.Element {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={classes.box}
      width="24"
      height="24"
      fill="none"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="m12 16 4-4m0 0-4-4m4 4H8m-.2 9h8.4c1.68 0 2.52 0 3.16-.33a3 3 0 0 0 1.31-1.3c.33-.65.33-1.49.33-3.17V7.8c0-1.68 0-2.52-.33-3.16a3 3 0 0 0-1.3-1.31C18.71 3 17.87 3 16.2 3H7.8c-1.68 0-2.52 0-3.16.33a3 3 0 0 0-1.31 1.3C3 5.29 3 6.13 3 7.8v8.4c0 1.68 0 2.52.33 3.16a3 3 0 0 0 1.3 1.31c.65.33 1.49.33 3.17.33Z"
      />
    </svg>
  );
}
