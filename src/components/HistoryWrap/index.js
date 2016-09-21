import React, { Component } from 'react';

import HistoryList from '../HistoryList';
import './HistoryWrap.css';

const data = [
  {
    id: 1,
    author: 'User1',
    text: 'Hello from User1',
    timestamp: 1474399514615,
    owner: false
  },
  {
    id: 2,
    author: 'User2',
    text: 'Hello from User2 kasdjlksdj f;lajsd fkljasd fadf kldjasf kljasdklfj adklsjf kljasdfkl jadklsfj dfkldjas fkljasdfkl jasdklfj dasf kljasdlfk jasfkl jadf kldjsf lahsgw[eit pwrjt90u 40gjkefgj -=21rg fjgkljdf;lg dsfkjg lsjdflg jd;flsg] Hello from User2 kasdjlksdj f;lajsd fkljasd fadf kldjasf kljasdklfj adklsjf kljasdfkl jadklsfj dfkldjas fkljasdfkl jasdklfj dasf kljasdlfk jasfkl jadf kldjsf lahsgw[eit pwrjt90u 40gjkefgj -=21rg fjgkljdf;lg dsfkjg lsjdflg jd;flsg]',
    timestamp: 1474399514715,
    owner: false
  },
  {
    id: 3,
    author: 'User3',
    text: 'Hello from User3',
    timestamp: 1474399514815,
    owner: true
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
