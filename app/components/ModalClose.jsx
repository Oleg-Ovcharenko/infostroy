import React   from 'react';
import Reflux  from 'reflux';
import Actions from '../actions/Actions.jsx';

require('./Modal.scss');

export default class ModalClose extends Reflux.Component {
  constructor(props) {
    super(props);
  }

  coloseModalWindow() {
    Actions.modal_close();
  }

  render() {
    return (
        <button onClick={this.coloseModalWindow} className="modal_window__button modal_window__cancel">Cancel</button>
    );
  }
};
