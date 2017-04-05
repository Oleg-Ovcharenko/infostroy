import React   from 'react';
import Reflux  from 'reflux';
//import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

export default class Tags extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
        text: props.text
    };
  }

  render() {
    return (
        <div className="tags__tag">{this.state.text}</div>
    );
  }
};

