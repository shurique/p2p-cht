import uniqBy from 'lodash.uniqby';

import * as actionTypes from '../constants/actionTypes';

const initialState = {
  messages: [],
};

function mergeMessages(state, newMessages) {
  return {
    ...state,
    messages: uniqBy(state.messages.concat(newMessages), 'id'),
  };
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGES: {
      return mergeMessages(state, action.messages);
    }
    case actionTypes.SET_MESSAGE: {
      return Object.assign({}, state, {
        messages: state.messages.concat(action.message),
      });
    }
    default:
      return state;
  }
}
