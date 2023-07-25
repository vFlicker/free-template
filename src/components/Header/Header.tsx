import logoSrc from '~/shared/images/logo.svg';

import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <img
        className={classes.logo}
        src={logoSrc}
        alt="humans"
        width="149"
        height="33"
      />
      <h1 className={classes.h1}>Шаблон оформления тренингов</h1>
    </header>
  );
}
