import { createSlice } from '@reduxjs/toolkit';

const initialState = {
   search: '',
   region: '',
   sort: '',
};

const controlsSlice = createSlice({
   name: '@@controls',
   initialState,
   reducers: {
      setSearch: (state, action) => {
         state.search = action.payload;
      },
      setRegion: (state, action) => {
         state.region = action.payload;
      },
      setSort: (state, action) => {
         state.sort = action.payload;
      },
      clearControls: () => initialState,
   },
});

export const { setSearch, setRegion, setSort, clearControls } =
   controlsSlice.actions;
export const controlsReducer = controlsSlice.reducer;

export const selectSearch = (state) => state.controls.search;
export const selectRegion = (state) => state.controls.region;
export const selectControls = (state) => state.controls;
