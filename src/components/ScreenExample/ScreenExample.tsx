import classes from './ScreenExample.module.css';

type ScreenExampleProps = {
  id: number;
  title: string;
  imageSrc: string;
};

export function ScreenExample({
  id,
  imageSrc,
  title,
}: ScreenExampleProps): JSX.Element {
  const handleClick = () => {
    console.log(`Card with id ${id} clicked.`);
  };

  return (
    <div className={classes.screen}>
      <img src={imageSrc} alt="" className={classes.image} />

      <div className={classes.wrapper}>
        <h2>{title}</h2>
        <button className={classes.button} onClick={handleClick}>
          Выбрать
        </button>
      </div>
    </div>
  );
}
