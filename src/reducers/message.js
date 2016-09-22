import * as actionTypes from '../constants/actionTypes';

const initialState = {
  messages: [],
};

function s4() {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
}

function fillMessage(message) {
  return Object.assign({}, message, {
    id: s4(),
    author: 'User3',
    timestamp: Date.now(),
    owner: true,
  });
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGES: {
      return Object.assign({}, state, {
        messages: action.messages,
      });
    }
    case actionTypes.NEW_MESSAGE: {
      const message = fillMessage(action.message);

      return Object.assign({}, state, {
        messages: state.messages.concat(message),
      });
    }
    default:
      return state;
  }
}
