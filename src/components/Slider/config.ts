import cardNarrowSrc from '~/shared/images/cards/cards_narrow.jpg';
import cardRectangularSrc from '~/shared/images/cards/cards_rectangular.jpg';
import cardSquareSrc from '~/shared/images/cards/cards_square.jpg';
import cardWideSrc from '~/shared/images/cards/cards_wide.jpg';

export const screens = [
  {
    id: 1,
    title: 'Прямоугольные вертикальные карточки',
    imageSrc: cardRectangularSrc,
  },
  {
    id: 2,
    title: 'Квадратные карточки',
    imageSrc: cardSquareSrc,
  },
  {
    id: 3,
    title: 'Узкие горизонтальные карточки',
    imageSrc: cardNarrowSrc,
  },
  {
    id: 4,
    title: 'Широкие горизонтальные карточки',
    imageSrc: cardWideSrc,
  },
];
