import cn from 'classnames';

import classes from './DownloadPage.module.css';

export function DownloadPage(): JSX.Element {
  const classNames = cn(classes.button, {
    [classes.downloaded]: true,
  });

  return (
    <>
      <h1 className={classes.h1}>Ваш код готов</h1>

      <p className={classes.subtitle}>
        Скачайте архив с кодом и следуйте инструкциям из урока
      </p>

      <div className={classes.image}></div>

      <button className={classNames}>Скачать</button>
    </>
  );
}
