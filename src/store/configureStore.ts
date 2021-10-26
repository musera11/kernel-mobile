import {
  AnyAction,
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {
  authReducer,
  mainReducer,
  ethosReducer,
  checkInReducer,
  goalsReducer,
} from './ducks';
import {RESET_STORE} from './ducks/mainDuck';

export const sagaMiddleware = createSagaMiddleware();

const appReducer = combineReducers({
  mainReducer,
  authReducer,
  ethosReducer,
  checkInReducer,
  goalsReducer,
});

export type RootState = ReturnType<typeof appReducer>;

const rootReducer = (state: ReturnType<typeof Object>, action: AnyAction) => {
  if (action.type === RESET_STORE) {
    state = {
      mainReducer: {
        isLoading: action.isLoading,
        isSignedIn: false,
      },
    };
    return appReducer(state, action);
  }
  return appReducer(state, action);
};

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composeEnhancers =
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const composedEnhancers = composeEnhancers(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && (module as any).hot) {
    (module as any).hot.accept('./ducks', () =>
      store.replaceReducer(rootReducer),
    );
  }

  return store;
}
