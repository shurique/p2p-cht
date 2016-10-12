import React from 'react';

import './JoinForm.css';

function JoinForm() {
  return (
    <div className="jf_wrap">
      <form>
        <div className="form-group">
          <label htmlFor="roomID">Room ID:</label>
          <input type="text" className="form-control" id="roomID" readOnly="readonly" />
        </div>

        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input type="text" className="form-control" id="username" />
        </div>

        <button type="submit" className="btn btn-default">Connect</button>
      </form>
    </div>
  );
}

export default JoinForm;
