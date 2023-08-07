import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import imageExampleSrc from '~/shared/images/card-picture.jpg';
import { formDataSlice } from '~/store/formData';

import classes from './Image.module.css';

type ImageProps = ComponentPropsWithoutRef<'img'>;

export function Image({ className }: ImageProps): JSX.Element | null {
  const { hasBackground, hasImage } = useAppSelector(
    formDataSlice.selectFromData,
  );

  if (hasBackground || !hasImage) {
    return null;
  }

  const classNames = cn(classes.image, className);

  return (
    <img
      src={imageExampleSrc}
      className={classNames}
      alt="Пример изображения"
    />
  );
}
