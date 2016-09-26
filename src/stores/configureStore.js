import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';
import createWS from '../utils/socket';

const logger = createLogger();
const ws = createWS();

const createStoreWithMiddleware = applyMiddleware(thunk.withExtraArgument(ws), logger)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleware(rootReducer, initialState);
}
