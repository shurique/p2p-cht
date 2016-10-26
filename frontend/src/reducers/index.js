import { combineReducers } from 'redux';

import message from './message';
import cht from './cht';

export default combineReducers({
  history: message,
  chat: cht,
});
