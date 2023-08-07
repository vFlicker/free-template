import { ChangeEvent } from 'react';

import { Checkbox } from '~/components/Checkbox';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import { CheckboxProperty } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './CardSettingsSection.module.css';

export function CardSettingsSection(): JSX.Element {
  const dispatch = useAppDispatch();

  const formData = useAppSelector((state) => state.FORM_DATA);

  const { cardType, hasBackground, hasButton, hasDescription, hasImage } =
    formData;

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const cardProperty = evt.target.value as CheckboxProperty;
    dispatch(formDataSlice.changeCheckboxProperty(cardProperty));
  };

  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Настройки карточки</h3>

      <div className={classes.list}>
        {cardType !== 'narrow' && (
          <Checkbox
            value="hasBackground"
            checked={hasBackground}
            onChange={handleChange}
          >
            Фоновое изображение
          </Checkbox>
        )}

        {cardType !== 'square' && (
          <Checkbox value="hasImage" checked={hasImage} onChange={handleChange}>
            Изображение в карточке
          </Checkbox>
        )}

        <Checkbox
          value="hasDescription"
          checked={hasDescription}
          onChange={handleChange}
        >
          Описание
        </Checkbox>

        <Checkbox value="hasButton" checked={hasButton} onChange={handleChange}>
          Кнопка
        </Checkbox>
      </div>
    </div>
  );
}
