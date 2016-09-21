import * as actionTypes from '../constants/actionTypes';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.NEW_MESSAGE: {
      const { message } = action;
      return [...state, ...message];
    }
    default:
      return state;
  }
}
