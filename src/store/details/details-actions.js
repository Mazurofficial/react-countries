export const SET_LOADING = '@@details/SET_LOADING';
export const SET_ERROR = '@@details/SET_ERROR';
export const SET_COUNTRY = '@@details/SET_COUNTRY';
export const SET_NEIGHBORS = '@@details/SET_NEIGHBORS';

export const setLoading = () => ({
   type: SET_LOADING,
});

export const setError = (err) => ({
   type: SET_ERROR,
   payload: err,
});

export const setCountry = (country) => ({
   type: SET_COUNTRY,
   payload: country,
});

export const setNeighbors = (countries) => ({
   type: SET_NEIGHBORS,
   payload: countries,
});

export const loadCountryByName =
   (name) =>
   (dispatch, _, { client, api }) => {
      dispatch(setLoading());
      client
         .get(api.searchByCountry(name))
         .then(({ data }) => dispatch(setCountry(data[0])))
         .catch((err) => dispatch(setError(err.message)));
   };

export const loadNeighborsByBorder =
   (borders) =>
   (dispatch, _, { client, api }) => {
      client
         .get(api.filterByCode(borders))
         .then(({ data }) => dispatch(setNeighbors(data.map((c) => c.name))))
         .catch(console.error);
   };
