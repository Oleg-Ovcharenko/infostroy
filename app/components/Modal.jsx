import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

import ModalClose from './ModalClose.jsx';
import ModalSave  from './ModalSave.jsx';

require('./Modal.scss');

export default class Modal extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    this.modalText = this.modalText.bind(this);
  }

  modalText(e) {
    Actions.modal_text_input(e.target.value);
  }

  render() {
    return (
        <div className="modal_window" style={{display: this.state.modalWindow ? 'block' : 'none'}}>
            <div className="modal_window__block">
                <h3 className="modal_window__header">Tag text</h3>
                <textarea onChange={this.modalText} 
                          className="modal_window__textarea" 
                          value={this.state.modalText}></textarea><br/>
                <div className="modal_window__buttons">
                    <ModalClose />
                    <ModalSave saveText={this.state.modalText} />
                </div>
            </div>
        </div>
    );
  }
};
