import cn from 'classnames';
import { toast } from 'react-toastify';

import { getCssFileString, getJsFileString } from '~/domain';
import { useAppSelector } from '~/shared/hooks';

import { toastErrorOptions, toastSuccessOptions } from './config';
import classes from './CopySection.module.css';

export function CopySection(): JSX.Element {
  const formData = useAppSelector((state) => state.FORM_DATA);

  const handleCopyClick = (data: string) => async () => {
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
          onClick={handleCopyClick(getCssFileString(formData))}
        >
          Копировать
        </button>
      </div>
      <div className={cn(classes.buttonWrapper, classes.js)}>
        <button
          className={classes.button}
          onClick={handleCopyClick(getJsFileString(formData))}
        >
          Копировать
        </button>
      </div>
    </div>
  );
}
