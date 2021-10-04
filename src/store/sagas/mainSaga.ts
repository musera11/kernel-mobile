import AsyncStorage from '@react-native-community/async-storage';
import {put} from 'redux-saga/effects';
import axiosInstance from '../../services/interceptor.service';
import {IUserData} from '../../types/main';
// import {setMonitoringUsername} from '../../utils/monitoring';
import {setUserDataAction} from '../ducks/authDuck';
import {CHECKED_SIGNED_IN, DEFAULT} from '../ducks/mainDuck';

export function* checkSignedInSaga() {
  try {
    const userData: IUserData = yield axiosInstance.get('auth/ping', {
      removeLoader: true,
    });
    if (userData.accessToken) {
      yield AsyncStorage.setItem('token', userData.accessToken);
    }
    // setMonitoringUsername(userData.username);
    yield put(setUserDataAction(userData));
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
  } catch (error) {
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: false});
  }
}

export function* setDeviceTokenSaga(payload: any) {
  try {
    yield axiosInstance.post('auth/set_device_token_and_OS', payload.data, {
      removeLoader: true,
    });
  } catch (error) {
    console.log(error);
  } finally {
    yield put({type: DEFAULT});
  }
}
