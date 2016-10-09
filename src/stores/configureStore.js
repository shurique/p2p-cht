import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import socket from '../middleware/socket';
import rootReducer from '../reducers/index';

const logger = createLogger();

const createStoreWithMiddleware = applyMiddleware(thunk, socket, logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
