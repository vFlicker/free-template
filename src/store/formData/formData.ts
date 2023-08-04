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

      if (state.hasBackground === true || state.cardType === 'square') {
        state.hasImage = false;
      }

      if (state.cardType === 'narrow') {
        state.hasBackground = false;
      }

      if (state.hasText === false) {
        state.hasIcon = true;
      }
    },
    changeCardProperty: (state, { payload }: PayloadAction<CardProperty>) => {
      state[payload] = !state[payload];

      if (state.hasBackground === true || state.cardType === 'square') {
        state.hasImage = false;
      }

      if (state.cardType === 'narrow') {
        state.hasBackground = false;
      }

      if (state.hasText === false) {
        state.hasIcon = true;
      }
    },
  },
});

export const { changeCardType, changeCardProperty } = formDataSlice.actions;

export const selectFromData = (state: State): FormData => {
  return state.FORM_DATA;
};

export default formDataSlice;
