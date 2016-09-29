import * as actionTypes from '../constants/actionTypes';

function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

export {
  login,
};
