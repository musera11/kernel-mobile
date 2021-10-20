import {AnyAction} from 'redux';
import {CheckInState, Feeling} from '../../types/check-in';

export const ADD_FEELING = 'empower/check-in/addFeeling';
export const REMOVE_FEELING = 'empower/check-in/removeFeeling';
export const CLEAR_FEELINGS = 'empower/check-in/clearFeelings';

const initialState: CheckInState = {
  feelings: [],
};

export const ethosReducer = (state = initialState, action: AnyAction) => {
  const [payload] = [action.payload, null];

  switch (action.type) {
    case ADD_FEELING:
      state.feelings.push(payload);
      return {
        ...state,
      };
    case ADD_FEELING:
      state.feelings.push(payload);
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
