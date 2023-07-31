import { useAppDispatch } from '~/shared/hooks';
import { CardType } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './ScreenExample.module.css';

type ScreenExampleProps = {
  type: CardType;
  title: string;
  imageSrc: string;
};

export function ScreenExample({
  type,
  imageSrc,
  title,
}: ScreenExampleProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={classes.screen}>
      <img src={imageSrc} alt="" className={classes.image} />

      <div className={classes.wrapper}>
        <h2>{title}</h2>
        <button
          className={classes.button}
          onClick={() => dispatch(formDataSlice.changeCartType(type))}
        >
          Выбрать
        </button>
      </div>
    </div>
  );
}
