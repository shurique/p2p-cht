import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ComposeForm from './ComposeForm';

function mapStateToProps(state) {
  return {
    author: state.chat.username,
    disabled: state.chat.uiDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMessageSubmit: bindActionCreators(actions.newMessage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeForm);
