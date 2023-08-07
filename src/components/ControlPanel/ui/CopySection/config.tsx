import { toast, ToastOptions } from 'react-toastify';

import heartIconSrc from '~/shared/images/check-heart.svg';

export const toastSuccessOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  className: 'toast-message',
  autoClose: 5000,
  closeButton: false,
  hideProgressBar: true,
  icon: () => <img src={heartIconSrc} alt="" />,
};

export const toastErrorOptions: ToastOptions = {
  position: toast.POSITION.BOTTOM_RIGHT,
  className: 'toast-message',
  autoClose: 5000,
  hideProgressBar: true,
};
