import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from 'types/entities.type';
import { PersistedAppState } from 'types/store.type';

const initialState: PersistedAppState = {
  accessToken: null,
  profile: {
    cards: [
      {
        id: '1',
        imageUrl: '/static/images/bannerGame/5_card_poker.png',
        love: true,
      },
      {
        id: '2',
        imageUrl: '/static/images/bannerGame/7up_7down.png',
        love: true,
      },
      {
        id: '3',
        imageUrl: '/static/images/bannerGame/32_card.png',
        love: false,
      },
      {
        id: '4',
        imageUrl: '/static/images/bannerGame/andar_bahar.png',
        love: false,
      },
      {
        id: '5',
        imageUrl: '/static/images/bannerGame/baccarat.png',
        love: false,
      },
      {
        id: '6',
        imageUrl: '/static/images/bannerGame/baibuu.png',
        love: false,
      },
      {
        id: '7',
        imageUrl: '/static/images/bannerGame/baicao.png',
        love: false,
      },
      {
        id: '8',
        imageUrl: '/static/images/bannerGame/belangkai.png',
        love: false,
      },
      {
        id: '9',
        imageUrl: '/static/images/bannerGame/belangkai.png',
        love: false,
      },
    ],
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    updateToken: (state, action: PayloadAction<{ accessToken: string }>) => {
      state.accessToken = action.payload.accessToken;
    },
    logout: state => {
      state.accessToken = null;
      state.profile = {};
    },
    updateProfile: (state, action: PayloadAction<User>) => {
      state.profile = action.payload;
    },
  },
});

export const appActions = appSlice.actions;

export const appReducer = appSlice.reducer;
