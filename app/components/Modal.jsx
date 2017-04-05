import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Modal.scss');

export default class Canvas extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
  }

  render() {
    return (
        <div className="modal_window">
            <div className="modal_window__block">
                <h3 className="modal_window__header">Change tag text</h3>
                <textarea className="modal_window__textarea"></textarea><br/>
                <div className="modal_window__buttons">
                    <button className="modal_window__button modal_window__cancel">Cancel</button>
                    <button className="modal_window__button modal_window__save">Save</button>
                </div>
            </div>
        </div>
    );
  }
};
