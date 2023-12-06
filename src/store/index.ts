import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {offersSlice} from './offer/offers';
import {filterCitySlice} from './filter-city';
import {createApi} from '../services/api';
import {authStatusSlice} from './autorization/autorization-status';
import {dataUserSlice} from './data-user';
import {offerSlice} from './offer/offer';
import {loadOffersNearSlice} from './offer/load-offer-near';
import {loadCommentsSlice} from './comment/load-comments';
import {sendCommentsSlice} from './comment/send-comment';
import {offersFavoriteSlice} from './offer/load-offers-favorite';

const reducer = combineReducers({
  [offersSlice.name]: offersSlice.reducer,
  [filterCitySlice.name]: filterCitySlice.reducer,
  [authStatusSlice.name]: authStatusSlice.reducer,
  [dataUserSlice.name]: dataUserSlice.reducer,
  [offerSlice.name]: offerSlice.reducer,
  [loadOffersNearSlice.name]: loadOffersNearSlice.reducer,
  [loadCommentsSlice.name]: loadCommentsSlice.reducer,
  [sendCommentsSlice.name]: sendCommentsSlice.reducer,
  [offersFavoriteSlice.name]: offersFavoriteSlice.reducer
});

const api = createApi();

const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export {store, reducer};
