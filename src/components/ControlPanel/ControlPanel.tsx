import cn from 'classnames';
import { ChangeEvent } from 'react';
import { toast, ToastOptions } from 'react-toastify';

import { createJsFileText, cssFile } from '~/domain';
import { useAppDispatch, useAppSelector } from '~/shared/hooks';
import heartIconSrc from '~/shared/images/check-heart.svg';
import { CardProperty } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import { Checkbox } from '../Checkbox';
import classes from './ControlPanel.module.css';

const toastSuccessOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  className: 'toast-message',
  autoClose: 5000,
  closeButton: false,
  hideProgressBar: true,
  icon: () => <img src={heartIconSrc} alt="" />,
};

const toastErrorOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  className: 'toast-message',
  autoClose: 5000,
  hideProgressBar: true,
};

export function ControlPanel(): JSX.Element {
  const dispatch = useAppDispatch();

  const formData = useAppSelector((state) => state.FORM_DATA);

  const {
    cardType,
    hasBackground,
    hasButton,
    hasDescription,
    hasIcon,
    hasImage,
    hasText,
  } = formData;

  const handlePropertyChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const cardProperty = evt.target.value as CardProperty;
    dispatch(formDataSlice.changeCardProperty(cardProperty));
  };

  const handleCssTextCopyClick = async () => {
    const cssFileText = cssFile[cardType];

    try {
      await navigator.clipboard.writeText(cssFileText);
      toast.success('Скопировано в буфер обмена', toastSuccessOptions);
    } catch (error) {
      toast.error('Ошибка', toastErrorOptions);
    }
  };

  const handleJsTextCopyClick = async () => {
    const jsFileText = createJsFileText(formData);

    try {
      await navigator.clipboard.writeText(jsFileText);
      toast.success('Скопировано в буфер обмена', toastSuccessOptions);
    } catch (error) {
      toast.error('Ошибка', toastErrorOptions);
    }
  };

  return (
    <div className={classes.controlPanel}>
      <h3 className={classes.title}>Настройки карточки</h3>

      <div className={classes.baseWrapper}>
        {cardType !== 'narrow' && (
          <Checkbox
            value="hasBackground"
            checked={hasBackground}
            onChange={handlePropertyChange}
          >
            Фоновое изображение
          </Checkbox>
        )}

        {cardType !== 'square' && (
          <Checkbox
            value="hasImage"
            checked={hasImage}
            onChange={handlePropertyChange}
          >
            Изображение в карточке
          </Checkbox>
        )}

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

      <div className={classes.bottom}>
        <h3 className={cn(classes.title)}>Вид кнопки</h3>

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
    </div>
  );
}
