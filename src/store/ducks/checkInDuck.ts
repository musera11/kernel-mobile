import {AnyAction} from 'redux';
import {CheckInState, Feeling} from '../../types/check-in';

export const ADD_FEELING = 'empower/check-in/addFeeling';
export const REMOVE_FEELING = 'empower/check-in/removeFeeling';
export const CLEAR_FEELINGS = 'empower/check-in/clearFeelings';
export const POST_CHECK_IN_SG = 'empower/check-in/postCheckIn_sg';
export const GET_ACCOMPLISHMENTS_SG = 'empower/check-in/getAccomplishments_sg';
export const SET_ACCOMPLISHMENTS = 'empower/check-in/setAccomplishments';
export const POST_ACCOMPLISHMENTS_SG =
  'empower/check-in/postAccomplishments_sg';

const initialState: CheckInState = {
  feelings: [],
};

export const checkInReducer = (state = initialState, action: AnyAction) => {
  const [payload] = [action.payload, null];
  let i: number;

  switch (action.type) {
    case ADD_FEELING:
      i = state.feelings.findIndex(f => f.dimension === payload.dimension);
      i !== -1 ? (state.feelings[i] = payload) : state.feelings.push(payload);
      return {
        ...state,
      };
    case REMOVE_FEELING:
      return {
        ...state,
        feelings: state.feelings.filter(f => f.dimension !== payload),
      };
    case CLEAR_FEELINGS:
      state.feelings.push(payload);
      return {
        ...state,
        feelings: [],
      };
    case SET_ACCOMPLISHMENTS:
      return state;
    default:
      return state;
  }
};

export const addFeeling = (feeling: Feeling) => ({
  type: ADD_FEELING,
  payload: feeling,
});

export const removeFeeling = (dimension: string) => ({
  type: REMOVE_FEELING,
  payload: dimension,
});

export const clearFeelings = () => ({
  type: CLEAR_FEELINGS,
});

export const postCheckInActionSG = (
  feelings: any,
  successCallBack?: Function,
) => ({
  type: POST_CHECK_IN_SG,
  feelings,
  successCallBack,
});

export const getAccomplishmentsActionSG = () => ({
  type: GET_ACCOMPLISHMENTS_SG,
});

export const setAccomplishmentsAction = (data: any) => ({
  type: SET_ACCOMPLISHMENTS,
  payload: data,
});
