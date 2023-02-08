import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const sortObjectsArray = require('sort-objects-array');

export const loadCountries = createAsyncThunk(
   '@@countries/load-countries',
   async (_, { extra: { client, api } }) => {
      return client.get(api.ALL_COUNTRIES);
   }
);

const initialState = {
   status: 'idle',
   error: null,
   list: [],
};

const countrySlice = createSlice({
   name: '@@countries',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(loadCountries.pending, (state) => {
            state.status = 'loading';
            state.error = null;
         })
         .addCase(loadCountries.rejected, (state, action) => {
            state.status = 'rejected';
            state.error = action.payload || action.meta.error;
         })
         .addCase(loadCountries.fulfilled, (state, action) => {
            state.status = 'received';
            state.list = action.payload.data;
         });
   },
});

export const countryReducer = countrySlice.reducer;

// selectors
export const selectCountriesInfo = (state) => ({
   status: state.countries.status,
   error: state.countries.error,
   qty: state.countries.list.length,
});

export const selectAllCountries = (state) => state.countries.list;
export const selectVisibleCountries = (
   state,
   { search = '', region = '', sort = '' }
) => {
   const filteredCountries = state.countries.list.filter(
      (country) =>
         country.name.toLowerCase().includes(search.toLowerCase()) &&
         country.region.includes(region)
   );

   switch (sort) {
      case 'name': {
         return filteredCountries;
      }
      case 'nameInverse': {
         return filteredCountries.reverse();
      }
      case 'population': {
         return sortObjectsArray(filteredCountries, 'population');
      }
      case 'populationInverse': {
         return sortObjectsArray(filteredCountries, 'population', 'reverse');
      }
      default: {
         return filteredCountries;
      }
   }
};
