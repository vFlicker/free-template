import cn from 'classnames';
import { toast } from 'react-toastify';

import { createJsFileText, cssFile } from '~/domain';
import { useAppSelector } from '~/shared/hooks';

import { toastErrorOptions, toastSuccessOptions } from './config';
import classes from './CopySection.module.css';

export function CopySection(): JSX.Element {
  const formData = useAppSelector((state) => state.FORM_DATA);

  const handleCopyClick = (textFile: string) => async () => {
    try {
      await navigator.clipboard.writeText(textFile);
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
          onClick={handleCopyClick(cssFile[formData.cardType])}
        >
          Копировать
        </button>
      </div>
      <div className={cn(classes.buttonWrapper, classes.js)}>
        <button
          className={classes.button}
          onClick={handleCopyClick(createJsFileText(formData))}
        >
          Копировать
        </button>
      </div>
    </div>
  );
}
