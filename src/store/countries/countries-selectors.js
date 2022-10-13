const sortObjectsArray = require('sort-objects-array');

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
         //  const sortedCountries = filteredCountries.sort(
         //     (countryA, countryB) => {
         //        if (countryA.population < countryB.population) {
         //           return -1;
         //        }
         //        if (countryA.population > countryB.population) {
         //           return 1;
         //        }
         //        return 0;
         //     }
         //  );
         //  return sortedCountries;
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
