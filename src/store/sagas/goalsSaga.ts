import {put} from '@redux-saga/core/effects';
import axiosInstance from '../../services/interceptor.service';
import {Goal} from '../../types/goals';
import {
  addGoalAction,
  getGoalsActionSG,
  setGoalsAction,
} from '../ducks/goalsDuck';
import {notifyAction} from '../ducks/mainDuck';

export function* postGoalSaga({
  title,
  text,
  successCallBack,
}: {
  title: string;
  text: string;
  successCallBack?: Function;
  type: string;
}) {
  try {
    const goal: Goal = yield axiosInstance.post('personal/add_goal', {
      title,
      text,
    });
    yield put(addGoalAction(goal));
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}

export function* updateGoalSaga({
  goal,
  successCallBack,
}: {
  goal: Goal;
  successCallBack?: Function;
  type: string;
}) {
  try {
    yield axiosInstance.put(`personal/goal/${goal._id}`, {
      ...goal,
    });
    yield put(getGoalsActionSG());
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}

export function* getGoalsSaga({
  successCallBack,
}: {
  successCallBack?: Function;
  type: string;
}) {
  try {
    const goals: Goal[] = yield axiosInstance.get('personal/get_my_goals', {
      params: {type: 'all', offset: 0, limit: 1000},
    });
    yield put(setGoalsAction(goals));
    successCallBack && successCallBack();
  } catch (error) {
    yield notifyAction('error', 'Error', 'Something went wrong', true);
  }
}
