import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as actions from '../../actions';
import App from './App';

function mapStateToProps(state) { return state; }

function mapDispatchToProps(dispatch) {
  return {
    onMount: bindActionCreators(actions.wsConnect, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
