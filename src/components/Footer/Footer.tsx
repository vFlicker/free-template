import classes from './Footer.module.css';

export function Footer(): JSX.Element {
  return (
    <footer className={classes.footer}>
      <p>
        Этот бесплатный шаблон создан для легкого базового оформления тренингов
        на GetCourse.
      </p>

      <p>
        Еще больше интересного дизайна GetCourse <br />
        <a href="/" className={classes.link}>
          у нас на воркшопах
        </a>
      </p>
    </footer>
  );
}
