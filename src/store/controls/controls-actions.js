export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const SET_SORT = '@@controls/SET_SORT';

export const setSearch = (search) => ({
   type: SET_SEARCH,
   payload: search,
});

export const setRegion = (region) => ({
   type: SET_REGION,
   payload: region,
});

export const setSort = (sort) => ({
   type: SET_SORT,
   payload: sort,
});
