import { SET_THEME } from './theme-actions';

export const themeReducer = (state = 'light', { type, payload }) => {
   if (type === SET_THEME) {
      return payload;
   } else {
      return state;
   }
};
