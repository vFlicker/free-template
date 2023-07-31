import { store } from '~/store';

export type CardType = 'rectangular' | 'narrow' | 'square' | 'wide';

export type FormData = {
  cardType: CardType;
  description: {
    hasDescription: boolean;
  };
  button: {
    hasButton: boolean;
    hasText: boolean;
    hasIcon: boolean;
  };
  image: {
    hasBackground: boolean;
    hasImage: boolean;
  };
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;