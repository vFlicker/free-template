import cn from 'classnames';
import { ComponentPropsWithoutRef } from 'react';

import { useAppSelector } from '~/shared/hooks';
import imageExampleSrc from '~/shared/images/card-picture.jpg';
import { FormData } from '~/shared/types';
import { formDataSlice } from '~/store/formData';

import classes from './Image.module.css';

type ImageProps = ComponentPropsWithoutRef<'img'> & {
  config: FormData;
};

export function Image({ config, className }: ImageProps): JSX.Element | null {
  const { cardType } = config;
  const hasImage = useAppSelector(formDataSlice.selectHasImage);
  const hasBackground = useAppSelector(formDataSlice.selectHasBackground);

  if (hasBackground || !hasImage || cardType === 'square') {
    return null;
  }

  const cardTypeClass = classes[cardType];
  const classNames = cn(classes.image, cardTypeClass, className);

  return (
    <img
      src={imageExampleSrc}
      className={classNames}
      alt="Пример изображения"
    />
  );
}
