import React,{Component} from 'react';

class Note extends Component {
  render() {
    return (
      <div className="note">
        <p>Today is good Day</p>
        <span className="note-btn-group">
          <button>Edit</button>
          <button>Remove</button>
        </span>
      </div>
    )
  }
}

export default Note;
