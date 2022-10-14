import styled from 'styled-components';

import { Search } from './Search';
import { CustomSelect } from './CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import { selectControls } from '../store/controls/controls-selectors';
import { setRegion, setSort } from '../store/controls/controls-actions';

const optionsMap = {
   Africa: { value: 'Africa', label: 'Africa' },
   America: { value: 'America', label: 'America' },
   Asia: { value: 'Asia', label: 'Asia' },
   Europe: { value: 'Europe', label: 'Europe' },
   Oceania: { value: 'Oceania', label: 'Oceania' },
};
const options = Object.values(optionsMap);

const optionsSort = {
   name: { value: 'name', label: 'Name A - Z' },
   nameInverse: { value: 'nameInverse', label: 'Name Z - A' },
   population: { value: 'population', label: 'Smaller Populatin' },
   populationInverse: {
      value: 'populationInverse',
      label: 'Larger populaion',
   },
};
const sortingOptions = Object.values(optionsSort);

const Wrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;

   @media (min-width: 767px) {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
   }
`;

export const Controls = () => {
   const dispatch = useDispatch();
   const { region, sort } = useSelector(selectControls);

   const handleFilterSelect = (reg) => {
      dispatch(setRegion(reg?.value || ''));
   };

   const handleSortSelect = (reg) => {
      dispatch(setSort(reg?.value || ''));
   };

   return (
      <Wrapper>
         <Search />
         <CustomSelect
            options={options}
            placeholder="Filter by Region"
            isClearable
            isSearchable={false}
            value={optionsMap[region]}
            onChange={handleFilterSelect}
         />
         <CustomSelect
            options={sortingOptions}
            placeholder="Sort by"
            isClearable
            isSearchable={false}
            value={optionsSort[sort]}
            onChange={handleSortSelect}
         />
      </Wrapper>
   );
};
