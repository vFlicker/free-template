import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import {
  CardType,
  CheckboxProperty,
  FormData,
  RadioProperty,
  State,
} from '~/shared/types';

const initialState: FormData = {
  cardType: 'rectangular',
  hasDescription: true,
  hasButton: true,
  hasButtonText: true,
  buttonSize: 'small',
  buttonPosition: 'left',
  hasIcon: true,
  iconPosition: 'left',
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

      if (state.hasButtonText === false) {
        state.hasIcon = true;
      }
    },
    changeCheckboxProperty: (
      state,
      { payload }: PayloadAction<CheckboxProperty>,
    ) => {
      state[payload] = !state[payload];

      if (state.hasBackground === true || state.cardType === 'square') {
        state.hasImage = false;
      }

      if (state.cardType === 'narrow') {
        state.hasBackground = false;
      }

      if (state.hasButtonText === false) {
        state.hasIcon = true;
      }
    },
    changeRadioProperty: (state, { payload }: PayloadAction<RadioProperty>) => {
      return { ...state, ...payload };
    },
  },
});

export const { changeCardType, changeCheckboxProperty, changeRadioProperty } =
  formDataSlice.actions;

export const selectFromData = (state: State): FormData => {
  return state.FORM_DATA;
};

export default formDataSlice;
