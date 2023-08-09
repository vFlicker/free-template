import cn from 'classnames';
import { toast } from 'react-toastify';

import { cssFile, getJsFileString } from '~/domain';
import { useAppSelector } from '~/shared/hooks';

import { toastErrorOptions, toastSuccessOptions } from './config';
import classes from './CopySection.module.css';

export function CopySection(): JSX.Element {
  const formData = useAppSelector((state) => state.FORM_DATA);

  const handleCssCopyClick = (textFileSrc: string) => async () => {
    const response = await fetch(textFileSrc);
    const text = await response.text();

    try {
      await navigator.clipboard.writeText(text);
      toast.success('Скопировано в буфер обмена', toastSuccessOptions);
    } catch (error) {
      toast.error('Ошибка', toastErrorOptions);
      console.log('Ошибка', error);
    }
  };

  const handleJsCopyClick = (data: string) => async () => {
    try {
      await navigator.clipboard.writeText(data);
      toast.success('Скопировано в буфер обмена', toastSuccessOptions);
    } catch (error) {
      toast.error('Ошибка', toastErrorOptions);
      console.log('Ошибка', error);
    }
  };

  return (
    <div className={classes.wrapper}>
      <div className={cn(classes.buttonWrapper, classes.css)}>
        <button
          className={classes.button}
          onClick={handleCssCopyClick(cssFile[formData.cardType])}
        >
          Копировать
        </button>
      </div>
      <div className={cn(classes.buttonWrapper, classes.js)}>
        <button
          className={classes.button}
          onClick={handleJsCopyClick(getJsFileString(formData))}
        >
          Копировать
        </button>
      </div>
    </div>
  );
}
