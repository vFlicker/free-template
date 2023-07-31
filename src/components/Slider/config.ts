import cardNarrowSrc from '~/shared/images/cards/cards_narrow.jpg';
import cardRectangularSrc from '~/shared/images/cards/cards_rectangular.jpg';
import cardSquareSrc from '~/shared/images/cards/cards_square.jpg';
import cardWideSrc from '~/shared/images/cards/cards_wide.jpg';

export const screens = [
  {
    type: 'rectangular',
    title: 'Прямоугольные вертикальные карточки',
    imageSrc: cardRectangularSrc,
  },
  {
    type: 'square',
    title: 'Квадратные карточки',
    imageSrc: cardSquareSrc,
  },
  {
    type: 'narrow',
    title: 'Узкие горизонтальные карточки',
    imageSrc: cardNarrowSrc,
  },
  {
    type: 'wide',
    title: 'Широкие горизонтальные карточки',
    imageSrc: cardWideSrc,
  },
] as const;
