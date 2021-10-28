import {AnyAction} from 'redux';
import {Goal, GoalsState} from '../../types/goals';

export const GET_GOALS_SG = 'empower/goals/getGoals_sg';
export const POST_GOAL_SG = 'empower/goals/postGoal_sg';
export const UPDATE_GOAL_SG = 'empower/goals/updateGoal_sg';
export const DELETE_GOAL_SG = 'empower/goals/deleteGoal_sg';
export const SET_GOALS = 'empower/goals/setGoals';
export const ADD_GOAL = 'empower/goals/addGoal';
export const UPDATE_GOAL = 'empower/goals/updateGoal';
export const REMOVE_GOAL = 'empower/goals/removeGoal';

const initialState: GoalsState = {
  goals: [],
};

export const goalsReducer = (state = initialState, action: AnyAction) => {
  const [payload] = [action.payload, null];
  let i: number;

  switch (action.type) {
    case SET_GOALS:
      return {
        ...state,
        goals: payload as Goal[],
      };
    case ADD_GOAL:
      state.goals.unshift(payload as Goal);
      return {
        ...state,
      };
    case UPDATE_GOAL:
      i = state.goals.findIndex(g => g._id === (payload as Goal)._id);
      if (i !== -1) {
        state.goals[i] = payload as Goal;
      }
      return {
        ...state,
      };
    case REMOVE_GOAL:
      return {
        ...state,
        goals: state.goals.filter(g => g._id !== payload),
      };
    default:
      return state;
  }
};

export const getGoalsActionSG = (successCallBack?: Function) => ({
  successCallBack,
  type: GET_GOALS_SG,
});

export const postGoalActionSG = (
  title: string,
  text: string,
  successCallBack?: Function,
) => ({
  title,
  text,
  successCallBack,
  type: POST_GOAL_SG,
});

export const updateGoalActionSG = (goal: Goal, successCallBack?: Function) => ({
  goal,
  successCallBack,
  type: UPDATE_GOAL_SG,
});

export const deleteGoalActionSG = (
  goalId: string,
  successCallBack?: Function,
) => ({
  goalId,
  successCallBack,
  type: DELETE_GOAL_SG,
});

export const setGoalsAction = (goals: Goal[]) => ({
  payload: goals,
  type: SET_GOALS,
});

export const addGoalAction = (goal: Goal) => ({
  payload: goal,
  type: ADD_GOAL,
});

export const updateGoalAction = (goal: Goal) => ({
  payload: goal,
  type: UPDATE_GOAL,
});

export const removeGoalAction = (goalId: string) => ({
  payload: goalId,
  type: REMOVE_GOAL,
});
