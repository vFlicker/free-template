import classes from './Cards.module.css';

export function Cards(): JSX.Element {
  return (
    <ul className={classes.list}>
      <li className={classes.item}>
        <img src=" " alt="" />
        <h3>Заголовок модуля в пару строк</h3>
        <p>Corem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <button>Перейти</button>
      </li>
    </ul>
  );
}
