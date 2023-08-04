import cn from 'classnames';
import { ChangeEvent } from 'react';

import { createJsFileText, cssFile } from '~/domain';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { CardProperty } from '~/shared/types';
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
  const formData = useAppSelector((state) => state.FORM_DATA);

  const handlePropertyChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const cardProperty = evt.target.value as CardProperty;
    dispatch(formDataSlice.changeCardProperty(cardProperty));
  };

  const handleCssTextCopyClick = async () => {
    const type: 'rectangular' | 'narrow' | 'square' | 'wide' = 'wide';
    const cssFileText = cssFile[type];

    try {
      await navigator.clipboard.writeText(cssFileText);
      alert('Текст успішно скопійовано!');
    } catch (error) {
      alert('Error');
    }
  };

  const handleJsTextCopyClick = async () => {
    const jsFileText = createJsFileText(formData);

    try {
      await navigator.clipboard.writeText(jsFileText);
      alert('Текст успішно скопійовано!');
    } catch (error) {
      alert('Error');
    }
  };

  return (
    <div className={classes.controlPanel}>
      <h3 className={classes.title}>Настройки карточки</h3>

      <div className={classes.baseWrapper}>
        <Checkbox
          value="hasBackground"
          checked={hasBackground}
          onChange={handlePropertyChange}
        >
          Фоновое изображение
        </Checkbox>

        <Checkbox
          value="hasImage"
          checked={hasImage}
          onChange={handlePropertyChange}
        >
          Изображение в карточке
        </Checkbox>

        <Checkbox
          value="hasDescription"
          checked={hasDescription}
          onChange={handlePropertyChange}
        >
          Описание
        </Checkbox>

        <Checkbox
          value="hasButton"
          checked={hasButton}
          onChange={handlePropertyChange}
        >
          Кнопка
        </Checkbox>
      </div>

      <h3 className={classes.title}>Вид кнопки</h3>

      <div className={classes.additionalWrapper}>
        <Checkbox
          value="hasText"
          checked={hasText}
          onChange={handlePropertyChange}
        >
          Текст
        </Checkbox>

        <Checkbox
          value="hasIcon"
          checked={hasIcon}
          onChange={handlePropertyChange}
        >
          Иконка
        </Checkbox>
      </div>

      <div className={classes.buttonsWrapper}>
        <div className={cn(classes.buttonWrapper, classes.css)}>
          <button className={classes.button} onClick={handleCssTextCopyClick}>
            Копировать
          </button>
        </div>
        <div className={cn(classes.buttonWrapper, classes.js)}>
          <button className={classes.button} onClick={handleJsTextCopyClick}>
            Копировать
          </button>
        </div>
      </div>
    </div>
  );
}
