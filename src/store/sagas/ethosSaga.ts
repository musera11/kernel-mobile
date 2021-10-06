import {put} from 'redux-saga/effects';
import axiosInstance from '../../services/interceptor.service';
import {notifyAction} from '../ducks/mainDuck';
import {EthosCardType} from '../../types/ethos';
import {setAllCardsAction} from '../ducks/ethosDuck';

export function* getCardsSaga() {
  try {
    const cards: EthosCardType[] = yield axiosInstance.get(
      'ethos_card/get_ethos_cards',
    );
    yield put(setAllCardsAction(cards));
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}
