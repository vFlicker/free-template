import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import classes from './Scanner.module.css';

type ScannerProps = ComponentPropsWithoutRef<'div'>;

export function Scanner({ className }: ScannerProps): JSX.Element {
  const success = false;

  const classNames = cn(classes.scanner, className, {
    [classes.success]: success,
  });

  const buttonText = success ? 'Просканировано' : 'Просканировать';

  return (
    <div className={classNames}>
      <label className={classes.label}>
        <input
          type="text"
          className={classes.input}
          placeholder="Ссылка на страницу оплаты GetCourse"
        />
      </label>
      <button className={classes.button}>{buttonText}</button>
    </div>
  );
}
