import React, { Component, PropTypes } from 'react';
import Remarkable from 'remarkable';
import classNames from 'classnames';

import './Message.css';

const propTypes = {
  author: PropTypes.string.isRequired,
  timestamp: PropTypes.number.isRequired,
  children: PropTypes.string,
  owner: PropTypes.bool.isRequired,
};

class Message extends Component {
  constructor(props) {
    super(props);

    this.scrollLast = this.scrollLast.bind(this);
    this.el = null;
  }


  componentDidMount() {
    this.scrollLast();
  }

  componentDidUpdate() {
    this.scrollLast();
  }

  scrollLast() {
    this.el.scrollIntoView({ block: 'end', behavior: 'smooth' });
  }

  rawMarkup() {
    const md = new Remarkable();
    return {
      __html: md.render(this.props.children.toString()),
    };
  }

  rawTime() {
    const { timestamp } = this.props;
    const date = new Date(timestamp);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const meridiem = hours >= 12 ? 'pm' : 'am';
    hours %= 12;
    hours = hours || 12;
    minutes = minutes < 10 ? `0 ${minutes}` : minutes;

    return `${hours}:${minutes} ${meridiem}`;
  }

  render() {
    const { author, owner } = this.props;
    const classname = classNames({
      message: true,
      owner,
    });

    return (
      <div
        className={classname}
        ref={(el) => { this.el = el; }}
      >
        <div className="msg_header clearfix">
          <span className="msg_author">{author}</span>
        </div>
        <div className="msg_body" dangerouslySetInnerHTML={this.rawMarkup()} />
        <div className="msg_footer clearfix">
          <span className="msg_timestamp">{this.rawTime()}</span>
        </div>
      </div>
    );
  }
}

Message.propTypes = propTypes;

export default Message;
