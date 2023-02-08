import { useDispatch, useSelector } from 'react-redux';
import { selectControls, setRegion, setSort } from './controls-slice';

export const useControls = () => {
   const dispatch = useDispatch();
   const { region, sort } = useSelector(selectControls);

   const handleFilterSelect = (reg) => {
      dispatch(setRegion(reg?.value || ''));
   };

   const handleSortSelect = (reg) => {
      dispatch(setSort(reg?.value || ''));
   };

   return [region, sort, handleFilterSelect, handleSortSelect];
};
