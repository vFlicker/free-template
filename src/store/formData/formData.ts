import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CardType, FormData, State } from '~/shared/types';

const initialState: FormData = {
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

const formDataSlice = createSlice({
  name: 'FORM_DATA',
  initialState,
  reducers: {
    changeCartType: (state, { payload }: PayloadAction<CardType>) => {
      state.cardType = payload;
    },
    changeHasBackground: (state) => {
      state.image.hasBackground = !state.image.hasBackground;
    },
    changeHasImage: (state) => {
      state.image.hasImage = !state.image.hasImage;
    },
    changeHasDescription: (state) => {
      state.description.hasDescription = !state.description.hasDescription;
    },
    changeHasButton: (state) => {
      state.button.hasButton = !state.button.hasButton;
    },
    changeHasText: (state) => {
      state.button.hasText = !state.button.hasText;
    },
    changeHasIcon: (state) => {
      state.button.hasIcon = !state.button.hasIcon;
    },
  },
});

export const {
  changeCartType,
  changeHasBackground,
  changeHasImage,
  changeHasDescription,
  changeHasButton,
  changeHasText,
  changeHasIcon,
} = formDataSlice.actions;

export const selectCardType = (state: State): CardType => {
  return state.FORM_DATA.cardType;
};

export const selectHasBackground = (state: State): boolean => {
  return state.FORM_DATA.image.hasBackground;
};

export const selectHasImage = (state: State): boolean => {
  return state.FORM_DATA.image.hasImage;
};

export const selectHasDescription = (state: State): boolean => {
  return state.FORM_DATA.description.hasDescription;
};

export const selectHasButton = (state: State): boolean => {
  return state.FORM_DATA.button.hasButton;
};

export const selectHasText = (state: State): boolean => {
  return state.FORM_DATA.button.hasText;
};

export const selectHasIcon = (state: State): boolean => {
  return state.FORM_DATA.button.hasIcon;
};

export default formDataSlice;
