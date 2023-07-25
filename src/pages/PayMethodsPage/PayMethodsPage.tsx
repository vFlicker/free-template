import { Scanner } from '~/components/Scanner';
import { Toggler } from '~/components/Toggler';

import classes from './PayMethodsPage.module.css';

export function PayMethodsPage(): JSX.Element {
  return (
    <>
      <p className={classes.subtitle}>
        Выберите способ генерации способов оплаты
      </p>

      <Toggler className={classes.toggler} />
      <Scanner className={classes.scanner} />
    </>
  );
}
