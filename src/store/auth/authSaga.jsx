import { call, put } from 'redux-saga/effects';
import { CustomException } from '../../utils/customException';
import { loginError, loginSuccess } from './authSlice';
import { authApi } from '../../features/auth/services/auth';

export function* authSaga({ payload }) {
  try {
    const response = yield call(authApi, payload);

    if (response && response.token) {
      const userData = {
        email: payload.email,
        password: payload.password,
        token: response.token,
      };

      yield put(loginSuccess({ userData, token: response.token }));
    } else {
      throw new Error('Resposta inválida da API');
    }
  } catch (error) {
    yield put(loginError(new CustomException(error).data()));
  }
}
