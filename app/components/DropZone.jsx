import React    from 'react';
import Reflux   from 'reflux';
import Dropzone from 'react-dropzone';
import Store    from '../stores/AppStore.jsx';
import Actions  from '../actions/Actions.jsx';

//import Note     from './Note.jsx';

require('./DropZone.scss');

export default class DropzoneImg extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;

    this.onDrop = this.onDrop.bind(this);
    this.onOpenClick = this.onOpenClick.bind(this);
  }

  onDrop(files) {
    Actions.drop(files);
  }

  onOpenClick() {
    this.refs.dropzone.open();
  }

  render() {
    return (
          <div className="header__drop_container">
            <Dropzone ref="dropzone" onDrop={this.onDrop} className="drop_zone">
                <span className="header__drop_text">Drop or&nbsp;</span>
                <span className="header__file_input" >Browse...</span>
            </Dropzone>
          </div>
    );
  }
};
