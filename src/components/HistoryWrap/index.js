import React, { Component } from 'react';

import HistoryList from '../HistoryList';
import './HistoryWrap.css';

class HistoryWrap extends Component {
  render() {
    return(
      <div className="history_wrap">
        <HistoryList />
      </div>
    )
  }
}

export default HistoryWrap;
