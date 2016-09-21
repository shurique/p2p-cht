import * as actionTypes from '../constants/actionTypes';

function newMessage(message) {
  return {
    type: actionTypes.NEW_MESSAGE,
    message,
  };
}


export default {
  newMessage,
};
