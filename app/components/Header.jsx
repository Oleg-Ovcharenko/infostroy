import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

import Search  from './Search.jsx'

export default class Header extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      icurrencies: []
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header__inputs">
          <div className="header__drop_container">
            <span className="header__drop_text">Drop or&nbsp;</span>
            <input id="drop_or_browse" type="file" />
            <label className="header__file_input" htmlFor="drop_or_browse">Browse...</label>
          </div>
          <Search />
        </div>
        <div className="header__log_in">
          <a className="header__log_in_link" href="#"></a>
        </div>
      </header>
    );
  }
};
