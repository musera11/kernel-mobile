import {AnyAction} from 'redux';
import {
  EthosCardType,
  EthosCardWithDimension,
  EthosState,
} from '../../types/ethos';

export const GET_CARDS = 'empower/ethos/getCards_sg';
export const SET_ALL_CARDS = 'empower/ethos/setAllCards';
export const SET_SELECTED_CARDS = 'empower/ethos/setSelectedCards';
export const SET_CARDS_BY_DIMENSION = 'empower/ethos/setCardsByDimension';
export const ADD_CARD_BY_DIMENSION = 'empower/ethos/addCardByDimension';
export const REMOVE_CARD_BY_DIMENSION = 'empower/ethos/removeCardByDimension';

const initialState: EthosState = {
  cards: [],
  selectedCards: [],
  cardsByDimension: [],
};

export const ethosReducer = (state = initialState, action: AnyAction) => {
  const [payload] = [action.payload, null];
  let i: number;

  switch (action.type) {
    case SET_ALL_CARDS:
      return {
        ...state,
        cards: payload as EthosCardType[],
      };
    case SET_SELECTED_CARDS:
      return {
        ...state,
        selectedCards: payload as EthosCardType[],
      };
    case SET_CARDS_BY_DIMENSION:
      return {
        ...state,
        cardsByDimension: payload as EthosCardWithDimension[],
      };
    case ADD_CARD_BY_DIMENSION:
      i = state.cardsByDimension.findIndex(card => card._id === payload._id);
      if (i === -1) {
        state.cardsByDimension.push(payload as EthosCardWithDimension);
      } else {
        state.cardsByDimension[i] = payload as EthosCardWithDimension;
      }
      return {
        ...state,
      };
    case REMOVE_CARD_BY_DIMENSION:
      if (state.cardsByDimension.length > 0) {
        state.cardsByDimension.splice(state.cardsByDimension.length - 1, 1);
        return {
          ...state,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export const getCardsActionSG = () => ({
  type: GET_CARDS,
});

export const setAllCardsAction = (cards: EthosCardType[]) => ({
  type: SET_ALL_CARDS,
  payload: cards,
});

export const setSelectedCardsAction = (cards: EthosCardType[]) => ({
  type: SET_SELECTED_CARDS,
  payload: cards,
});

export const setCardsByDimensionAction = (cards: EthosCardType[]) => ({
  type: SET_CARDS_BY_DIMENSION,
  payload: cards,
});

export const addCardByDimensionAction = (card: EthosCardWithDimension) => ({
  type: ADD_CARD_BY_DIMENSION,
  payload: card,
});

export const removeCardByDimensionAction = () => ({
  type: REMOVE_CARD_BY_DIMENSION,
});
