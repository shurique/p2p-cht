import { connect } from 'react-redux';

import HistoryList from './HistoryList';

function mapStateToProps(state) {
  const { messages } = state.history;

  return {
    messages,
  };
}

export default connect(mapStateToProps)(HistoryList);
