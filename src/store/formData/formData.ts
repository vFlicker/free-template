import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardProperty, CardType, FormData, State } from '~/shared/types';

const initialState: FormData = {
  cardType: 'rectangular',
  hasDescription: true,
  hasButton: true,
  hasText: true,
  hasIcon: true,
  hasBackground: false,
  hasImage: true,
};

const formDataSlice = createSlice({
  name: 'FORM_DATA',
  initialState,
  reducers: {
    changeCardType: (state, { payload }: PayloadAction<CardType>) => {
      state.cardType = payload;
    },
    changeCardProperty: (state, { payload }: PayloadAction<CardProperty>) => {
      state[payload] = !state[payload];
    },
  },
});

export const { changeCardType, changeCardProperty } = formDataSlice.actions;

export const selectCardType = (state: State): CardType => {
  return state.FORM_DATA.cardType;
};

export const selectHasBackground = (state: State): boolean => {
  return state.FORM_DATA.hasBackground;
};

export const selectHasImage = (state: State): boolean => {
  return state.FORM_DATA.hasImage;
};

export const selectHasDescription = (state: State): boolean => {
  return state.FORM_DATA.hasDescription;
};

export const selectHasButton = (state: State): boolean => {
  return state.FORM_DATA.hasButton;
};

export const selectHasText = (state: State): boolean => {
  return state.FORM_DATA.hasText;
};

export const selectHasIcon = (state: State): boolean => {
  return state.FORM_DATA.hasIcon;
};

export default formDataSlice;
