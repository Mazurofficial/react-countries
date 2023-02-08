import axios from 'axios';
import { configureStore } from '@reduxjs/toolkit';

import * as api from './config';
import { themeReducer } from './features/ThemeSwitcher/theme-slice';
import { controlsReducer } from './features/Controls/controls-slice';
import { countryReducer } from './features/Countries/countries-slice';
import { detailsReducer } from './features/Details/details-slice';

export const store = configureStore({
   reducer: {
      theme: themeReducer,
      controls: controlsReducer,
      countries: countryReducer,
      details: detailsReducer,
   },
   devTools: true,
   middleware: (getDefaultMiddlware) =>
      getDefaultMiddlware({
         thunk: {
            extraArgument: {
               client: axios,
               api,
            },
         },
         serializableCheck: false,
      }),
});
