import { FormData } from '~/shared/types';

export const config: FormData = {
  cardType: 'rectangular',
  description: {
    hasDescription: true,
  },
  button: {
    hasButton: true,
    hasText: true,
    hasIcon: true,
  },
  image: {
    hasBackground: false,
    hasImage: true,
  },
};
