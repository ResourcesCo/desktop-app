import { createStore } from 'redux';
import createRootReducer from '../reducers';

const rootReducer = createRootReducer();

function configureStore(initialState) {
  return createStore(rootReducer, initialState);
}

export default configureStore;
