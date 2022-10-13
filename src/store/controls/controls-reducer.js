import { SET_REGION, SET_SEARCH, SET_SORT } from './controls-actions';

const initialState = {
   search: '',
   region: '',
   sort: '',
};

export const controlsReducer = (state = initialState, { type, payload }) => {
   switch (type) {
      case SET_SEARCH: {
         return {
            ...state,
            search: payload,
         };
      }
      case SET_REGION: {
         return {
            ...state,
            region: payload,
         };
      }
      case SET_SORT: {
         return {
            ...state,
            sort: payload,
         };
      }
      default: {
         return state;
      }
   }
};
