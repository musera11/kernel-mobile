import AsyncStorage from '@react-native-community/async-storage';
import {Platform} from 'react-native';
import {put} from 'redux-saga/effects';
import axiosInstance from '../../services/interceptor.service';
// import {pushNotificationData} from '../../services/pushNotificationService';
import {IUserData} from '../../types/main';
// import {setMonitoringUsername} from '../../utils/monitoring';
import {setUserDataAction} from '../ducks/authDuck';
import {
  CHECKED_SIGNED_IN,
  DEFAULT,
  notifyAction,
  resetStoreAction,
} from '../ducks/mainDuck';

export function* signInSaga(payload: any) {
  try {
    const res: IUserData = yield axiosInstance.post('auth/sign_in', {
      data: payload.data,
      OS: Platform.OS,
      // deviceToken: pushNotificationData.token,
    });
    // setMonitoringUsername(res.username);
    yield AsyncStorage.setItem('token', res.accessToken);
    yield put(setUserDataAction(res));
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
  } catch (error: any) {
    yield put(
      notifyAction('error', 'Error', error.response?.data.message, true),
    );
  }
}

export function* signUpSaga() {
  try {
    const res: IUserData = yield axiosInstance.put(
      'registration/complete_registration',
      {
        OS: Platform.OS,
        // deviceToken: pushNotificationData.token,
      },
    );
    yield notifyAction(
      'success',
      'Success',
      'You have registered Successfully',
    );
    // setMonitoringUsername(res.username);
    yield AsyncStorage.setItem('token', res.accessToken);
    yield put(setUserDataAction(res));
    yield put({type: CHECKED_SIGNED_IN, isSignedIn: true});
  } catch (error: any) {
    yield put(
      notifyAction('error', 'Error', error.response?.data.message, true),
    );
  } finally {
    yield put({type: DEFAULT});
  }
}

export function* logoutSaga() {
  try {
    yield axiosInstance.delete('auth/sign_out');
    yield AsyncStorage.removeItem('token');
    yield put(resetStoreAction());
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}
