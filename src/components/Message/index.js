import React, {Component} from 'react';
import Remarkable from 'remarkable';
import classNames from 'classnames';

import './Message.css';

class Message extends Component {
  rawMarkup() {
    let md = new Remarkable();
    return {
      __html: md.render(this.props.children.toString())
    };
  }

  rawTime() {
    const { timestamp } = this.props;
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const meridiem = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0 ${minutes}` : minutes;

    return `${hours}:${minutes} ${meridiem}`;
  }

  render() {
    const { author, owner } = this.props;
    const classname = classNames({
      message: true,
      owner: owner
    });

    return (
      <div className={classname}>
        <div className="msg_header clearfix">
          <span className="msg_author">{author}</span>
        </div>
        <div className="msg_body" dangerouslySetInnerHTML={this.rawMarkup()}/>
        <div className="msg_footer clearfix">
          <span className="msg_timestamp">{this.rawTime()}</span>
        </div>
      </div>
    );
  }
}

export default Message;
