import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from './theme-slice';

export const useTheme = () => {
   const dispatch = useDispatch();
   const theme = useSelector((state) => state.theme);

   const toggleThemeSwitcher = () => {
      dispatch(setTheme(theme === 'light' ? 'dark' : 'light'));
   };

   useEffect(() => {
      document.body.setAttribute('data-theme', theme);
   }, [theme]);

   return [theme, toggleThemeSwitcher];
};
