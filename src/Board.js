import React ,{Component} from 'react';
import Note from './Note';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = {

      notes: [
        {
        id: 0,
        note: "Call Ana"
        },
        {
          id:1,
          note: "Call Florist"
        },
       {
        id:2,
        note: "Prepare Dinner"
       } 
      ]
    }
    this.eachNote = this.eachNote.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
    this.nextId =this.nextId.bind(this);
  }

  add(text) {
   this.setState(prevState => ({
     notes: [...prevState.notes,{
       id: this.nextId(),
       note: text
     }]
   }))
  }
  update(newText, i) {
		console.log('updating item at index', i, newText)
		this.setState(prevState => ({
			notes: prevState.notes.map(
				note => (note.id !== i) ? note : {...note, note: newText}
			)
		}))
  }

  nextId() {
    this.uniqueId = this.uniqueId || 0
    this.uniqueId++;
  }

  eachNote(note, i) {
    return (
      <Note key={i}
            index={i} 
            onChange={this.update}
            onRemove={this.remove}>
            {note.note}
      </Note>
    )
  }

  remove(id) {
    this.setState(prevState => ({ notes: prevState.notes.filter(note=>note.id !== id)
    }))
  }

  render() {
    return (
      <div>
        <div className="add-btn-block">
          <button className="add-btn" title="add note" 
                  onClick={this.add.bind("null","New Note")}>
            Add Note
          </button>
        </div>
        <div className="board">
            {this.state.notes.map(this.eachNote)}
        </div>
      </div>
    )
  }
}

export default Board;
