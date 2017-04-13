import React    from 'react';
import Reflux   from 'reflux';
import ReactDOM from 'react-dom';
import Store    from '../stores/AppStore.jsx';
import Actions  from '../actions/Actions.jsx';

import ModalClose from './ModalClose.jsx';
import ModalSave  from './ModalSave.jsx';

require('./Modal.scss');

export default class Modal extends Reflux.Component {
  constructor(props) {
    super(props);
    this.store = Store;
    this.modalText = this.modalText.bind(this);
    this.coloseModalWindow = this.coloseModalWindow.bind(this);
    this.sendOrCloseModal = this.sendOrCloseModal.bind(this);
  }

  modalText(e) {
    Actions.modal_text_input(e.target.value);
  }

  coloseModalWindow() {
    let modalDarkBg = ReactDOM.findDOMNode(this.refs.modal_dark);
    modalDarkBg.onclick = (event) => {
      if(event.target.className === 'modal_window') {
        Actions.modal_close();
      }
    }
  }

  componentDidMount() {
    this.coloseModalWindow();
  }

  sendOrCloseModal(e) {
    if(e.keyCode === 27) {
      Actions.modal_close();
    }
    if(e.keyCode === 13) {
      Actions.modal_save(this.state.modalText);
    }
  }

  render() {
    return (
        <div ref="modal_dark" className="modal_window" style={{display: this.state.modalWindow ? 'block' : 'none'}}>
            <div className="modal_window__block">
                <h3 className="modal_window__header">Tag text</h3>
                <textarea onKeyDown={this.sendOrCloseModal}
                          onChange={this.modalText} 
                          className="modal_window__textarea" 
                          value={this.state.modalText}
                          autoFocus></textarea><br/>
                <div className="modal_window__buttons">
                    <ModalClose />
                    <ModalSave saveText={this.state.modalText} />
                </div>
            </div>
        </div>
    );
  }
};
