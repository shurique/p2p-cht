import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import JoinForm from './JoinForm';

function mapStateToProps(state) {
  return {
    disabled: state.chat.uiDisabled,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSubmit: bindActionCreators(actions.login, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(JoinForm);
