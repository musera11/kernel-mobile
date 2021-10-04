import {Store} from 'redux';

let reduxStore: Store;
export default {
  register: (store: Store) => {
    console.log(store.getState());
    reduxStore = store;
  },
  getStore: () => reduxStore,
};
