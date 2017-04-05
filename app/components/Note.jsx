import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Note.scss');

export default class Note extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
    this.changeNoteText = this.changeNoteText.bind(this);
  }

  changeNoteText() {
      alert('Сделай изменениие при клике по Note');
  }

  render() {
    let coordinates = {
        top: this.props.top,
        left: this.props.left,
        opacity: .6
    };
    return (
        <div onClick={this.changeNoteText} style={coordinates} className="canvas_img__note"></div>
    );
  }
};
