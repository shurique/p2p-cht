import React, { Component } from 'react';

import HistoryList from '../HistoryList';
import './HistoryWrap.css';

const data = [
  {
    id: 1,
    author: 'User1',
    text: 'Hello from User1'
  },
  {
    id: 2,
    author: 'User2',
    text: 'Hello from User2'
  },
  {
    id: 3,
    author: 'User3',
    text: 'Hello from User3'
  }
];

class HistoryWrap extends Component {
  render() {
    return(
      <div className="history_wrap">
        <HistoryList data={data}/>
      </div>
    )
  }
}

export default HistoryWrap;
