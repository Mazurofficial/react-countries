import { createStore, compose, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';

import { rootReducer } from './root-reducer';
import * as api from '../config';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
   rootReducer,
   composeEnhancers(
      applyMiddleware(
         thunk.withExtraArgument({
            client: axios,
            api,
         })
      )
   )
);
