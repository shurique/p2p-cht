import * as actionTypes from '../constants/actionTypes';

const initialState = {
  username: '',
  uiDisabled: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.LOGIN: {
      return Object.assign({}, state, {
        username: action.data.username,
      });
    }
    case actionTypes.ENABLE_UI: {
      return { ...state, uiDisabled: false };
    }
    case actionTypes.DISABLE_UI: {
      return { ...state, uiDisabled: true };
    }
    case actionTypes.RECEIVE_WS_MESSAGE: {
      return state;
    }
    default:
      return state;
  }
}
