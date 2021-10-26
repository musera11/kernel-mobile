import {put} from 'redux-saga/effects';
import axiosInstance from '../../services/interceptor.service';
import {Accomplishments, Feeling} from '../../types/check-in';
import {setAccomplishmentsAction} from '../ducks/checkInDuck';
import {notifyAction} from '../ducks/mainDuck';

export function* getAccomplishmentsSaga({
  successCallBack,
}: {
  successCallBack?: Function;
  type: string;
}) {
  try {
    const accomplishments: Accomplishments = yield axiosInstance.get(
      'personal/get_my_achievements',
    );
    yield put(setAccomplishmentsAction(accomplishments));
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}

export function* postCheckInSaga({
  feelings,
  successCallBack,
}: {
  feelings: Feeling[];
  successCallBack?: Function;
  type: string;
}) {
  try {
    yield axiosInstance.post('personal/check_in', feelings);
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}
