import {put} from 'redux-saga/effects';
import axiosInstance from '../../services/interceptor.service';
import {notifyAction} from '../ducks/mainDuck';
import {EthosCardType} from '../../types/ethos';
import {
  setAllCardsAction,
  setLastTimeSelectedCardsAction,
} from '../ducks/ethosDuck';

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

//user have this cards if he completed ethos elevation flow at least once!!!
//otherwise empty array return and user can't check in
export function* getLastTimeSelectedCards() {
  try {
    const cards: {type: string; _id: string; title: string}[] =
      yield axiosInstance.get('personal/get_my_ethos_cards');
    yield put(
      setLastTimeSelectedCardsAction(
        cards.map(c => {
          return {
            dimension: c.type !== 'DEFAULT' ? c.type : undefined,
            title: c.title,
            _id: c._id,
          };
        }),
      ),
    );
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}

export function* postCardsSaga({
  cards,
  successCallBack,
}: {
  cards: any;
  successCallBack?: Function;
  type: string;
}) {
  try {
    yield axiosInstance.post('registration/choose_ethos_cards', {
      ethosCardIds: cards,
    });
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}

export function* postCardsByDimensionSaga({
  cards,
  successCallBack,
}: {
  cards: any;
  successCallBack?: Function;
  type: string;
}) {
  try {
    yield axiosInstance.post('registration/choose_dimension_of_life', {
      ethosCards: cards,
    });
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}
