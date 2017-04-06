import React   from 'react';
import Reflux  from 'reflux';
import Actions from '../actions/Actions.jsx';

require('./Modal.scss');

export default class ModalSave extends Reflux.Component {
  constructor(props) {
    super(props);
    this.saveModalWindow = this.saveModalWindow.bind(this);
  }

  saveModalWindow() {
    Actions.modal_save(this.props.saveText);
  }

  render() {
    return (
        <button onClick={this.saveModalWindow} className="modal_window__button modal_window__save">Save</button>
    );
  }
};
