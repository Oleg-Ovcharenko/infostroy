import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Tags.scss');

export default class Tags extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: props.text, 
        tagId: props.tagId,
    };
    this.store = Store;
    this.selectTag = this.selectTag.bind(this);
  }

  selectTag(e) {
    Actions.select_tag(this.state.tagId);
  }

  render() {
    return (
        <div onClick={this.selectTag} className={this.props.active ? "tags__tag tags__tag--active" : "tags__tag"}>{this.state.text}</div>
    );
  }
};

