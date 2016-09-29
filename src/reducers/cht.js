import * as actionTypes from '../constants/actionTypes';

const initialState = {
  username: '',
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return Object.assign({}, state, {
        username: action.data.username,
      });
    }
    case actionTypes.RECEIVE_WS_MESSAGE: {
      debugger;
      return state;
    }
    default:
      return state;
  }
}
