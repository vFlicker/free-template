import logoSrc from '~/shared/images/logo.svg';

import classes from './Header.module.css';

export function Header(): JSX.Element {
  return (
    <header className={classes.header}>
      <img src={logoSrc} alt="humans" />
    </header>
  );
}
