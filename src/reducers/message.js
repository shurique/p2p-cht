import * as actionTypes from '../constants/actionTypes';

const initialState = {
  messages: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SET_MESSAGES: {
      return Object.assign({}, state, {
        messages: action.messages,
      });
    }
    default:
      return state;
  }
}
