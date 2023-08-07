import { store } from '~/store';

export type CardType = 'rectangular' | 'narrow' | 'square' | 'wide';

export type FormData = {
  cardType: CardType;
  hasDescription: boolean;
  hasButton: boolean;
  hasButtonText: boolean;
  hasIcon: boolean;
  hasBackground: boolean;
  hasImage: boolean;
} & RadioProperty;

export type CheckboxProperty =
  | 'hasDescription'
  | 'hasButton'
  | 'hasButtonText'
  | 'hasIcon'
  | 'hasBackground'
  | 'hasImage';

export type RadioProperty = {
  buttonSize: 'big' | 'small';
  buttonPosition: 'left' | 'right';
  iconPosition: 'left' | 'right';
};

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
