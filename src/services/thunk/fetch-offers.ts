import {createAsyncThunk} from '@reduxjs/toolkit';
import type {Thunk} from '../type-service';
import {ApiRoute} from '../../const';
import type {OfferCard} from '../../types/type-store';

const fetchOffersAction = createAsyncThunk<OfferCard[], undefined, Thunk>(
  'data/fetchOffers',
  async (_arg, { extra: api}) => {
    const {data} = await api.get<OfferCard[]>(ApiRoute.Offers);

    return data;
  },
);

export{fetchOffersAction};
