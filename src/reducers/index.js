import { combineReducers } from 'redux';

import message from './message';

export default combineReducers({
  history: message,
});
