import type {OfferCard} from '../../types/type-store';
import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';
import {fetchOffersAction} from '../../services/thunk/fetch-offers';
import {Sort} from '../../const';
import {sendFavoriteOffer} from '../../services/api-actions.ts';

type StateOffers = {
  offers: OfferCard[] | null;
  loadingStatus: boolean | null;
  error: null | string;
  offersFilter: OfferCard[];
  changeOffers: OfferCard[];
  statusSort: string;
}

const initialState: StateOffers = {
  offers: null,
  loadingStatus: null,
  error: null,
  offersFilter: [],
  changeOffers: [],
  statusSort: Sort.Popular
};

const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {
    addOfferList(state, action: PayloadAction<OfferCard[]>) {
      state.offers = action.payload;
    },
    addOffersFilter(state, action: PayloadAction<OfferCard[]>) {
      state.offersFilter = action.payload;
    },
    changeOffers(state, action: PayloadAction<OfferCard[]>) {
      state.changeOffers = action.payload;
    },
    addStatusSort(state, action: PayloadAction<string>) {
      state.statusSort = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.loadingStatus = false;
        state.error = null;
      })
      .addCase(fetchOffersAction.pending, (state) => {
        state.loadingStatus = true;
        state.error = null;
      })
      .addCase(fetchOffersAction.rejected, (state, action) => {
        state.error = action.error.message || 'Unknown error';
        state.loadingStatus = false;
      })
      .addCase(sendFavoriteOffer.fulfilled, (state, action) => {
        const offerId = action.payload.id;
        const offerIndex = state.offers?.findIndex(({id}) => id === offerId) ?? -1;
        if (offerIndex > -1) {
          state.offers!.splice(offerIndex, 1, action.payload);
        }
      });
  }
});

export {offersSlice};
