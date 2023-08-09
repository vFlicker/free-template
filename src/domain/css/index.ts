import { FormData } from '~/shared/types';

import { getHeavyCardCssString } from './getHeavyCardCssString';
import { getNarrowCardCssString } from './getNarrowCardCssString';
import { getSquareCardCssString } from './getSquareCardCssString';
import { getVerticalCardCssString } from './getVerticalCardCssString';

const cssFunction = {
  wide: getHeavyCardCssString,
  narrow: getNarrowCardCssString,
  square: getSquareCardCssString,
  rectangular: getVerticalCardCssString,
} as const;

export const getCssFileString = (data: FormData): string => {
  return cssFunction[data.cardType](data);
};
