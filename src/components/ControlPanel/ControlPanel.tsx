import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { formDataSlice } from '~/store/formData';

import { Checkbox } from '../Checkbox';
import classes from './ControlPanel.module.css';

export function ControlPanel(): JSX.Element {
  const dispatch = useAppDispatch();

  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);
  const hasImage = useAppSelector(formDataSlice.selectHasImage);
  const hasDescription = useAppSelector(formDataSlice.selectHasDescription);
  const hasButton = useAppSelector(formDataSlice.selectHasButton);
  const hasText = useAppSelector(formDataSlice.selectHasText);
  const hasIcon = useAppSelector(formDataSlice.selectHasIcon);

  return (
    <div>
      <h3>Настройки карточки</h3>

      <div className={classes.baseWrapper}>
        <Checkbox
          value="background"
          checked={hasBackground}
          onChange={() => dispatch(formDataSlice.changeHasBackground())}
        >
          Фоновое изображение
        </Checkbox>

        <Checkbox
          value="image"
          checked={hasImage}
          onChange={() => dispatch(formDataSlice.changeHasImage())}
        >
          Изображение в карточке
        </Checkbox>

        <Checkbox
          value="description"
          checked={hasDescription}
          onChange={() => dispatch(formDataSlice.changeHasDescription())}
        >
          Описание
        </Checkbox>

        <Checkbox
          value="button"
          checked={hasButton}
          onChange={() => dispatch(formDataSlice.changeHasButton())}
        >
          Кнопка
        </Checkbox>
      </div>

      <h3>Настройки карточки</h3>

      <div className={classes.additionalWrapper}>
        <Checkbox
          value="text"
          checked={hasText}
          onChange={() => dispatch(formDataSlice.changeHasText())}
        >
          Text
        </Checkbox>

        <Checkbox
          value="text"
          checked={hasIcon}
          onChange={() => dispatch(formDataSlice.changeHasIcon())}
        >
          Иконка
        </Checkbox>
      </div>

      <div className={classes.buttonWrapper}></div>
    </div>
  );
}
