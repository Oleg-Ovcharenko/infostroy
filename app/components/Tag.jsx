import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Tag.scss');

export default class Tags extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: props.text, 
        tagId: props.tagId,
    };
    this.store = Store;
    this.selectTag = this.selectTag.bind(this);
    this.deleteTag = this.deleteTag.bind(this);
    this.editTag = this.editTag.bind(this);
  }

  selectTag() {
    Actions.select_tag(this.state.tagId);
  }

  deleteTag() {
    Actions.delete_tag(this.state.tagId, this.state.text);
  }

  editTag() {
    Actions.edit_tag(this.state.tagId, this.state.text);
  }

  render() {
    return (
        <div onDoubleClick={this.editTag} onClick={this.selectTag} className={this.props.active ? "tags__tag tags__tag--active" : "tags__tag"}>
          <span onClick={this.deleteTag} className="tags__tag_close">×</span>
          {this.props.text}
        </div>
    );
  }
};

