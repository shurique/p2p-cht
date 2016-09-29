import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import ComposeForm from './ComposeForm';

function mapStateToProps(state) {
  return {
    author: state.chat.username,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onMessageSubmit: bindActionCreators(actions.saveMessage, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ComposeForm);
