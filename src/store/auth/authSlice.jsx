import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userData: {},
  isLoading: false,
  token: null,
  error: null,
  isLogged: false,
};

export const authSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    loginStart: (state) => {
      return { ...state, isLoading: true };
    },

    loginSuccess: (state, { payload }) => {
      state.userData = payload.userData;
      state.token = payload.token;
      state.isLoading = false;
    },
    loginError: (state, { payload }) => {
      return {
        ...state,
        userData: {},
        error: payload,
        token: null,
        isLoading: false,
      };
    },
    logout: (state) => {
      return {
        ...state,
        token: null,
        userData: {},
        isLogged: false,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginError, logout } = authSlice.actions;
export default authSlice.reducer;
