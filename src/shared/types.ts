import { store } from '~/store';

export type CardType = 'rectangular' | 'narrow' | 'square' | 'wide';

export type FormData = {
  cardType: CardType;
  hasDescription: boolean;
  hasButton: boolean;
  hasText: boolean;
  hasIcon: boolean;
  hasBackground: boolean;
  hasImage: boolean;
};

export type CardProperty = Exclude<keyof FormData, 'cardType'>;

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
