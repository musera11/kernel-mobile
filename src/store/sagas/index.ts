import {all, takeLatest} from 'redux-saga/effects';
import {SET_DEVICE_TOKEN} from '../ducks/mainDuck';
import {checkSignedInSaga, setDeviceTokenSaga} from './mainSaga';
import {logoutSaga, signInSaga, signUpSaga} from './authSaga';
import {
  CHECK_SIGNED_IN,
  LOGOUT,
  REQUEST_SIGN_IN_SG,
  REQUEST_SIGN_UP_SG,
} from '../ducks/authDuck';
import {
  GET_CARDS_SG,
  POST_CARDS_SG,
  POST_CARDS_BY_DIMENSION_SG,
} from '../ducks/ethosDuck';
import {
  getCardsSaga,
  postCardsByDimensionSaga,
  postCardsSaga,
} from './ethosSaga';
import {GET_ACCOMPLISHMENTS_SG, POST_CHECK_IN_SG} from '../ducks/checkInDuck';
import {getAccomplishmentsSaga, postCheckInSaga} from './checkInSaga';

function* actionWatcher() {
  yield takeLatest(CHECK_SIGNED_IN, checkSignedInSaga);
  yield takeLatest(SET_DEVICE_TOKEN, setDeviceTokenSaga);
  yield takeLatest(REQUEST_SIGN_IN_SG, signInSaga);
  yield takeLatest(REQUEST_SIGN_UP_SG, signUpSaga);
  yield takeLatest(LOGOUT, logoutSaga);
  yield takeLatest(GET_CARDS_SG, getCardsSaga);
  yield takeLatest(POST_CARDS_SG, postCardsSaga);
  yield takeLatest(POST_CARDS_BY_DIMENSION_SG, postCardsByDimensionSaga);
  yield takeLatest(GET_ACCOMPLISHMENTS_SG, getAccomplishmentsSaga);
  yield takeLatest(POST_CHECK_IN_SG, postCheckInSaga);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
