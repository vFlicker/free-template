import { configureStore } from '@reduxjs/toolkit';

import formDataSlice from './formData/formData';

export const store = configureStore({
  reducer: {
    [formDataSlice.name]: formDataSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});
