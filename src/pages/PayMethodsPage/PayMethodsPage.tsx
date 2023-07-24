import { useState } from 'react';

import { Modal } from '~/components/Modal';
import { Scanner } from '~/components/Scanner';
import { Toggler } from '~/components/Toggler';

import classes from './PayMethodsPage.module.css';

export function PayMethodsPage(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <h1 className={classes.h1}>Методы оплаты</h1>

      <p className={classes.subtitle}>
        Выберите способ генерации способов оплаты
      </p>

      <Toggler className={classes.toggler} />
      <Scanner className={classes.scanner} />

      <p className={classes.notification}>
        Вставьте ссылку на страницу оплаты на GetCourse. Для успешного
        автоматического переноса способов оплаты все стили на странице должны
        быть удалены.
      </p>

      <button onClick={handleClick}>Open</button>

      <Modal isOpen={isOpen} onClose={() => setIsOpen((prev) => !prev)}>
        <div className={classes.newForm}>
          <h2>Новый метод оплаты</h2>
        </div>
      </Modal>
    </>
  );
}
