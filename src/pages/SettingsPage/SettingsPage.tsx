import cn from 'classnames';

import { Button } from '~/components/Button';
import { Checkbox } from '~/components/Checkbox';
import { Input } from '~/components/Input';

import { checkboxes, inputs } from './config';
import classes from './SettingsPage.module.css';

export function SettingsPage(): JSX.Element {
  const inputList = inputs.map(({ id, ...props }) => (
    <li key={id} className={classes.inputItem}>
      <Input {...props} />
    </li>
  ));

  const checkboxList = checkboxes.map(({ id, title }) => (
    <li key={id}>
      <Checkbox>{title}</Checkbox>
    </li>
  ));

  return (
    <>
      <h1 className={classes.h1}>Основные настройки</h1>

      <div className={cn(classes.from, classes.baseForm)}>
        <h2 className={classes.h2}>Базовая настройка</h2>

        <ul className={classes.inputList}>{inputList}</ul>
      </div>

      <div className={cn(classes.from, classes.optionalForm)}>
        <h2 className={classes.h2}>Дополнительно</h2>

        <ul className={classes.checkboxList}>{checkboxList}</ul>
      </div>

      <Button className={classes.button} iconName="arrow">
        Продолжить
      </Button>
    </>
  );
}
