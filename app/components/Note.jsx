import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Note.scss');

export default class Note extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: this.props.tagId
    };
    
    this.store = Store;
    this.changeNoteText = this.changeNoteText.bind(this);
  }

  changeNoteText() {
      Actions.select_note(this.state.note);
  }

  render() {
    let activeNote = this.props.noteActive ? .9 : .5;
    let coordinates = {
        top: this.props.top,
        left: this.props.left,
        opacity: activeNote
    };
    return (
        <div onClick={this.changeNoteText} style={coordinates} className="canvas_img__note"></div>
    );
  }
};
